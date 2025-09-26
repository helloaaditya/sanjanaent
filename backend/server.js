// Express.js backend server for MongoDB operations
import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import helmet from 'helmet'
import fs from 'fs'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const BASE_URL = process.env.BASE_URL || process.env.RENDER_EXTERNAL_URL || ''
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'

// Create Gmail transporter (try SSL 465 first, then STARTTLS 587)
async function createGmailTransporter() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD
  if (!user || !pass) return null

  // Attempt SSL (465)
  try {
    const t = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 15000,
      tls: { rejectUnauthorized: false }
    })
    return t
  } catch {}

  // Fallback to STARTTLS (587)
  try {
    const t = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 15000,
      tls: { ciphers: 'SSLv3', rejectUnauthorized: false }
    })
    return t
  } catch {}

  return null
}

// Gmail mailer function with timeout handling (per-send transporter)
async function sendLeadEmailGmail(leadDetails) {
  const transporter = await createGmailTransporter()
  if (!transporter) {
    console.warn('Gmail not configured - missing GMAIL_USER or GMAIL_APP_PASSWORD')
    return false
  }

  const toEmail = process.env.NOTIFY_TO || process.env.GMAIL_USER
  if (!toEmail) {
    console.warn('No notification email configured (NOTIFY_TO)')
    return false
  }

  try {
    // Format lead details
    const lines = []
    if (leadDetails?.name) lines.push(`Name: ${leadDetails.name}`)
    if (leadDetails?.email) lines.push(`Email: ${leadDetails.email}`)
    if (leadDetails?.phone) lines.push(`Phone: ${leadDetails.phone}`)
    if (leadDetails?.subject) lines.push(`Subject: ${leadDetails.subject}`)
    if (leadDetails?.projectType) lines.push(`Project Type: ${leadDetails.projectType}`)
    if (leadDetails?.message) lines.push(`Message: ${leadDetails.message}`)
    if (leadDetails?.type) lines.push(`Lead Type: ${leadDetails.type}`)

    const leadType = leadDetails?.type || (leadDetails?.projectType ? 'Quote Request' : 'Contact Message')
    const subject = `New ${leadType} - Sanjana Enterprises`

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject: subject,
      text: `A new lead was submitted on the website.\n\n${lines.join('\n')}\n\nSubmitted at: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New ${leadType}</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Lead Details:</h3>
            ${lines.map(line => `<p>${line}</p>`).join('')}
          </div>
          <p style="color: #666; font-size: 12px;">
            Submitted: ${new Date().toLocaleString()}<br>
            Source: Sanjana Enterprises Website
          </p>
        </div>
      `
    }

    // Send email with timeout wrapper
    const result = await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 30000) // 30 second timeout
      )
    ])

    console.log('Email sent successfully via Gmail:', result.messageId)
    return true

  } catch (error) {
    console.error('Gmail email failed:', error.message)
    
    // Log specific error types for debugging
    if (error.code === 'EAUTH') {
      console.error('Gmail authentication failed - check GMAIL_USER and GMAIL_APP_PASSWORD')
    } else if (error.code === 'ETIMEDOUT') {
      console.error('Gmail connection timeout - network issue')
    } else if (error.message === 'Email timeout') {
      console.error('Email sending timeout - took too long to send')
    }
    
    // Don't throw error to prevent blocking the API response
    return false
  }
}

// File upload configuration
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)
    if (mimetype && extname) {
      cb(null, true)
    } else {
      cb(new Error('Only image files are allowed!'))
    }
  }
})

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

let client
let db

async function connectToDatabase() {
  if (client && db) return { client, db }
  try {
    client = new MongoClient(MONGODB_URI)
    await client.connect()
    db = client.db(MONGODB_DB)
    console.log('✅ Connected to MongoDB successfully')
    return { client, db }
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error)
    throw error
  }
}

// Middleware
let corsMiddleware
if (CORS_ORIGIN === '*') {
  corsMiddleware = cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
} else {
  const allowedOrigins = CORS_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean)
  corsMiddleware = cors({
    origin: (origin, callback) => {
      // Allow no origin (mobile apps, curl) and exact matches from whitelist
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }
      return callback(new Error('CORS not allowed for origin: ' + origin))
    },
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204
  })
}
// Apply CORS and ensure preflight is handled
app.use((req, res, next) => {
  // Let the cors middleware set headers
  corsMiddleware(req, res, () => {
    // Explicitly handle OPTIONS quickly
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204)
    }
    next()
  })
})
// Extra explicit preflight routes for critical endpoints
app.options('/api/leads', corsMiddleware)
app.options('/api/leads/notify', corsMiddleware)
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Serve built frontend only if present (for deployments where frontend is bundled with backend)
const frontendDistDir = path.join(__dirname, '../frontend/dist')
const frontendIndexHtml = path.join(frontendDistDir, 'index.html')
const shouldServeFrontend = fs.existsSync(frontendDistDir) && fs.existsSync(frontendIndexHtml)
if (shouldServeFrontend) {
  app.use(express.static(frontendDistDir))
}

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Access token required' })

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' })
    req.user = user
    next()
  })
}

// ---------- AUTH ROUTES ----------
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const { db } = await connectToDatabase()

    const admin = await db.collection('admins').findOne({ username })
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' })

    const isValidPassword = await bcrypt.compare(password, admin.password)
    if (!isValidPassword) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, { expiresIn: '24h' })
    res.json({ token, username: admin.username })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Login failed' })
  }
})

app.get('/api/admin/check', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const existingAdmin = await db.collection('admins').findOne({})
    if (existingAdmin) res.json({ exists: true, username: existingAdmin.username })
    else res.status(404).json({ exists: false })
  } catch (error) {
    console.error('Check admin error:', error)
    res.status(500).json({ error: 'Failed to check admin' })
  }
})

app.post('/api/admin/setup', async (req, res) => {
  try {
    const { username, password } = req.body
    const { db } = await connectToDatabase()
    const existingAdmin = await db.collection('admins').findOne({})
    if (existingAdmin) return res.status(400).json({ error: 'Admin already exists' })

    const hashedPassword = await bcrypt.hash(password, 10)
    await db.collection('admins').insertOne({ username, password: hashedPassword, createdAt: new Date() })
    res.json({ message: 'Admin created successfully' })
  } catch (error) {
    console.error('Setup error:', error)
    res.status(500).json({ error: 'Setup failed' })
  }
})

// ---------- UPLOAD ----------
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image file provided' })
    const imageUrl = BASE_URL
      ? `${BASE_URL}/uploads/${req.file.filename}`
      : `/uploads/${req.file.filename}`
    res.json({ success: true, imageUrl, filename: req.file.filename })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Upload failed' })
  }
})

// ---------- HEALTH CHECK ----------
  app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
      emailConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
  })
})

// ---------- PROJECTS ----------
app.get('/api/projects', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { category } = req.query
    const query = {}
    if (category) query.category = category
    const projects = await db.collection('projects').find(query).sort({ createdAt: -1 }).toArray()
    res.json(projects)
  } catch (error) {
    console.error('Get projects error:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

// Admin create project
app.post('/api/admin/projects', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const now = new Date()
    const doc = {
      title: payload.title || 'Untitled Project',
      category: payload.category || null,
      image: payload.image || null,
      description: payload.description || '',
      location: payload.location || null,
      completedDate: payload.completedDate ? new Date(payload.completedDate) : null,
      client: payload.client || null,
      area: payload.area || null,
      duration: payload.duration || null,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection('projects').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Create project error:', error)
    res.status(500).json({ error: 'Failed to create project' })
  }
})

// Admin update project
app.put('/api/admin/projects/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try {
      _id = new ObjectId(req.params.id)
    } catch {
      return res.status(400).json({ error: 'Invalid project id' })
    }
    const update = { ...req.body, updatedAt: new Date() }
    if (update.completedDate) {
      try { update.completedDate = new Date(update.completedDate) } catch { /* ignore */ }
    }
    const result = await db
      .collection('projects')
      .updateOne({ _id }, { $set: update })
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Project not found' })
    }
    const updated = await db.collection('projects').findOne({ _id })
    res.json(updated)
  } catch (error) {
    console.error('Update project error:', error)
    res.status(500).json({ error: 'Failed to update project' })
  }
})

// Admin delete single project
app.delete('/api/admin/projects/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try {
      _id = new ObjectId(req.params.id)
    } catch {
      return res.status(400).json({ error: 'Invalid project id' })
    }
    const result = await db.collection('projects').deleteOne({ _id })
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Project not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete project error:', error)
    res.status(500).json({ error: 'Failed to delete project' })
  }
})

// Admin delete all projects (dangerous)
app.delete('/api/admin/projects/clear', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    await db.collection('projects').deleteMany({})
    res.json({ success: true })
  } catch (error) {
    console.error('Clear projects error:', error)
    res.status(500).json({ error: 'Failed to clear projects' })
  }
})

app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { db } = await connectToDatabase()
    let _id
    try {
      _id = new ObjectId(id)
    } catch {
      return res.status(400).json({ error: 'Invalid project id' })
    }
    const project = await db.collection('projects').findOne({ _id })
    if (!project) return res.status(404).json({ error: 'Project not found' })
    res.json(project)
  } catch (error) {
    console.error('Get project by id error:', error)
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// ---------- CATEGORIES ----------
app.get('/api/categories', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const categories = await db.collection('projects').distinct('category')
    res.json(categories.filter(Boolean))
  } catch (error) {
    console.error('Get categories error:', error)
    res.status(500).json({ error: 'Failed to fetch categories' })
  }
})

// ---------- DEBUG (TEMP) ----------
app.get('/api/debug/db', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const adminCollections = await db.listCollections().toArray()
    const collections = []
    for (const c of adminCollections) {
      const name = c.name
      let count = 0
      try {
        count = await db.collection(name).countDocuments()
      } catch {}
      collections.push({ name, count })
    }
    const projectsSample = await db
      .collection('projects')
      .find({})
      .project({ title: 1, category: 1 })
      .limit(3)
      .toArray()
    res.json({
      dbName: db.databaseName,
      collections,
      projectsSample,
      env: {
        mongodbUriPresent: Boolean(process.env.MONGODB_URI),
        mongodbDb: process.env.MONGODB_DB || null,
      },
    })
  } catch (error) {
    console.error('Debug db error:', error)
    res.status(500).json({ error: 'Debug failed', message: error?.message })
  }
})

// ---------- SERVICES ----------
// Public list with optional filters: category, active, search
app.get('/api/services', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { category, active, q } = req.query
    const query = {}
    if (category) query.category = category
    if (typeof active !== 'undefined') query.active = String(active) === 'true'
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ]
    }
    const services = await db
      .collection('services')
      .find(query)
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(services)
  } catch (error) {
    console.error('Get services error:', error)
    res.status(500).json({ error: 'Failed to fetch services' })
  }
})

// Public single service by id
app.get('/api/services/:id', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try {
      _id = new ObjectId(req.params.id)
    } catch {
      return res.status(400).json({ error: 'Invalid service id' })
    }
    const service = await db.collection('services').findOne({ _id })
    if (!service) return res.status(404).json({ error: 'Service not found' })
    res.json(service)
  } catch (error) {
    console.error('Get service error:', error)
    res.status(500).json({ error: 'Failed to fetch service' })
  }
})

// Admin CRUD for services
app.post('/api/admin/services', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const now = new Date()
    const doc = {
      title: payload.title || payload.name || 'Untitled Service',
      description: payload.description || '',
      category: payload.category || null,
      image: payload.image || null,
      price: payload.price || null,
      order: Number.isFinite(Number(payload.order)) ? Number(payload.order) : 0,
      features: Array.isArray(payload.features) ? payload.features : [],
      active: typeof payload.active === 'boolean' ? payload.active : true,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection('services').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Create service error:', error)
    res.status(500).json({ error: 'Failed to create service' })
  }
})

app.put('/api/admin/services/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const idParam = req.params.id
    let _id
    try { _id = new ObjectId(idParam) } catch { _id = null }
    const update = { ...req.body, updatedAt: new Date() }
    if (update.order !== undefined) {
      const n = Number(update.order)
      update.order = Number.isFinite(n) ? n : 0
    }
    const query = _id ? { $or: [{ _id }, { _id: idParam }] } : { _id: idParam }
    const result = await db.collection('services').updateOne(query, { $set: update })
    if (result.matchedCount === 0) return res.status(404).json({ error: 'Service not found' })
    const updated = await db.collection('services').findOne(query)
    res.json(updated)
  } catch (error) {
    console.error('Update service error:', error)
    res.status(500).json({ error: 'Failed to update service' })
  }
})

app.delete('/api/admin/services/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const idParam = req.params.id
    let _id
    try { _id = new ObjectId(idParam) } catch { _id = null }
    const query = _id ? { $or: [{ _id }, { _id: idParam }] } : { _id: idParam }
    const result = await db.collection('services').deleteOne(query)
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Service not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete service error:', error)
    res.status(500).json({ error: 'Failed to delete service' })
  }
})

// ---------- LEADS (Contact / Quote Requests) ----------
// Public submit lead
app.post('/api/leads', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const lead = req.body || {}

    if (!lead.name || !(lead.email || lead.phone)) {
      return res.status(400).json({ error: 'Name and (email or phone) are required' })
    }

    const now = new Date()
    const doc = {
      name: lead.name,
      email: lead.email || null,
      phone: lead.phone || null,
      subject: lead.subject || null,
      message: lead.message || null,
      projectType: lead.projectType || null,
      type: lead.type || null,
      source: lead.source || 'website',
      meta: lead.meta || {},
      status: 'new',
      createdAt: now,
      updatedAt: now,
    }

    const result = await db.collection('leads').insertOne(doc)
    const savedLead = { _id: result.insertedId, ...doc }

    // Send email notification asynchronously using Gmail (per-send transporter)
    // Don't await - send in background to avoid blocking response
    sendLeadEmailGmail(savedLead).catch(err => {
      console.error('Lead email notification failed:', err.message)
    })

    res.json(savedLead)
  } catch (error) {
    console.error('Create lead error:', error)
    res.status(500).json({ error: 'Failed to submit lead' })
  }
})

// Simplified notify route - NO EMAIL SENDING (prevents duplicates)
app.post('/api/leads/notify', async (req, res) => {
  try {
    // Just return success - email is already sent in /api/leads route above
    res.status(200).json({ 
      ok: true, 
      message: 'Notification handled automatically when lead was created'
    })
  } catch (err) {
    console.error('Notification route error:', err)
    res.status(500).json({ error: 'Failed to process notification' })
  }
})

// Admin list leads with optional filters
app.get('/api/leads', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { status, from, to, q } = req.query
    const query = {}
    if (status) query.status = status
    if (from || to) {
      query.createdAt = {}
      if (from) {
        const fromDate = new Date(from)
        if (!isNaN(fromDate.getTime())) {
          // start of day
          fromDate.setHours(0, 0, 0, 0)
          query.createdAt.$gte = fromDate
        }
      }
      if (to) {
        const toDate = new Date(to)
        if (!isNaN(toDate.getTime())) {
          // end of day
          toDate.setHours(23, 59, 59, 999)
          query.createdAt.$lte = toDate
        }
      }
    }
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { email: { $regex: q, $options: 'i' } },
        { phone: { $regex: q, $options: 'i' } },
      ]
    }
    const leads = await db.collection('leads').find(query).sort({ createdAt: -1 }).toArray()
    res.json(leads)
  } catch (error) {
    console.error('Get leads error:', error)
    res.status(500).json({ error: 'Failed to fetch leads' })
  }
})

// Admin update lead
app.put('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try {
      _id = new ObjectId(req.params.id)
    } catch {
      return res.status(400).json({ error: 'Invalid lead id' })
    }
    const update = { ...req.body, updatedAt: new Date() }
    const result = await db.collection('leads').updateOne({ _id }, { $set: update })
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Lead not found' })
    }
    const updated = await db.collection('leads').findOne({ _id })
    res.json(updated)
  } catch (error) {
    console.error('Update lead error:', error)
    res.status(500).json({ error: 'Failed to update lead' })
  }
})

// Admin delete lead
app.delete('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try {
      _id = new ObjectId(req.params.id)
    } catch {
      return res.status(400).json({ error: 'Invalid lead id' })
    }
    const result = await db.collection('leads').deleteOne({ _id })
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Lead not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete lead error:', error)
    res.status(500).json({ error: 'Failed to delete lead' })
  }
})

// ---------- TESTIMONIALS ----------
// Public: list approved testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const testimonials = await db
      .collection('testimonials')
      .find({ status: 'approved' })
      .sort({ createdAt: -1 })
      .toArray()
    res.json(testimonials)
  } catch (error) {
    console.error('Get testimonials error:', error)
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
})

// ---------- SPECIAL SERVICES (Leakage Detection etc.) ----------
// Public: list active special services (ordered)
app.get('/api/special-services', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const items = await db
      .collection('special_services')
      .find({ active: { $ne: false } })
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(items)
  } catch (error) {
    console.error('Get special services error:', error)
    res.status(500).json({ error: 'Failed to fetch special services' })
  }
})

// Admin: list all
app.get('/api/admin/special-services', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const items = await db
      .collection('special_services')
      .find({})
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(items)
  } catch (error) {
    console.error('Admin get special services error:', error)
    res.status(500).json({ error: 'Failed to fetch special services' })
  }
})

// Admin: create
app.post('/api/admin/special-services', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const now = new Date()
    const doc = {
      title: (payload.title || 'Untitled').trim(),
      description: (payload.description || '').trim(),
      features: (payload.features || '').trim(),
      image: payload.image || null,
      order: Number.isFinite(Number(payload.order)) ? Number(payload.order) : 0,
      active: typeof payload.active === 'boolean' ? payload.active : true,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection('special_services').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Create special service error:', error)
    res.status(500).json({ error: 'Failed to create special service' })
  }
})

// Admin: update
app.put('/api/admin/special-services/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid id' }) }
    const update = { ...req.body, updatedAt: new Date() }
    if (update.order !== undefined) {
      const n = Number(update.order)
      update.order = Number.isFinite(n) ? n : 0
    }
    const result = await db.collection('special_services').updateOne({ _id }, { $set: update })
    if (result.matchedCount === 0) return res.status(404).json({ error: 'Item not found' })
    const updated = await db.collection('special_services').findOne({ _id })
    res.json(updated)
  } catch (error) {
    console.error('Update special service error:', error)
    res.status(500).json({ error: 'Failed to update special service' })
  }
})

// Admin: delete
app.delete('/api/admin/special-services/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid id' }) }
    const result = await db.collection('special_services').deleteOne({ _id })
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Item not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete special service error:', error)
    res.status(500).json({ error: 'Failed to delete special service' })
  }
})

// ---------- BROCHURES ----------
// Public: list active brochures (ordered)
app.get('/api/brochures', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const brochures = await db
      .collection('brochures')
      .find({ active: { $ne: false } })
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(brochures)
  } catch (error) {
    console.error('Get brochures error:', error)
    res.status(500).json({ error: 'Failed to fetch brochures' })
  }
})

// ---------- TEAM MEMBERS ----------
// Public: list active team members (ordered)
app.get('/api/team', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const team = await db
      .collection('team')
      .find({ active: { $ne: false } })
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(team)
  } catch (error) {
    console.error('Get team error:', error)
    res.status(500).json({ error: 'Failed to fetch team' })
  }
})

// Admin: list all team members
app.get('/api/admin/team', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const team = await db
      .collection('team')
      .find({})
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(team)
  } catch (error) {
    console.error('Admin get team error:', error)
    res.status(500).json({ error: 'Failed to fetch team' })
  }
})

// Admin: create team member
app.post('/api/admin/team', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const now = new Date()
    const doc = {
      name: (payload.name || 'Unnamed').trim(),
      role: (payload.role || '').trim(),
      image: payload.image || null,
      order: Number.isFinite(Number(payload.order)) ? Number(payload.order) : 0,
      active: typeof payload.active === 'boolean' ? payload.active : true,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection('team').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Create team error:', error)
    res.status(500).json({ error: 'Failed to create team member' })
  }
})

// Admin: update team member
app.put('/api/admin/team/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid id' }) }
    const update = { ...req.body, updatedAt: new Date() }
    if (update.order !== undefined) {
      const n = Number(update.order)
      update.order = Number.isFinite(n) ? n : 0
    }
    const result = await db.collection('team').updateOne({ _id }, { $set: update })
    if (result.matchedCount === 0) return res.status(404).json({ error: 'Member not found' })
    const updated = await db.collection('team').findOne({ _id })
    res.json(updated)
  } catch (error) {
    console.error('Update team error:', error)
    res.status(500).json({ error: 'Failed to update team member' })
  }
})

// Admin: delete team member
app.delete('/api/admin/team/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid id' }) }
    const result = await db.collection('team').deleteOne({ _id })
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Member not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete team error:', error)
    res.status(500).json({ error: 'Failed to delete team member' })
  }
})

// Admin: list all brochures
app.get('/api/admin/brochures', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const brochures = await db
      .collection('brochures')
      .find({})
      .sort({ order: 1, createdAt: -1 })
      .toArray()
    res.json(brochures)
  } catch (error) {
    console.error('Admin get brochures error:', error)
    res.status(500).json({ error: 'Failed to fetch brochures' })
  }
})

// Admin: create brochure
app.post('/api/admin/brochures', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const now = new Date()
    const doc = {
      title: (payload.title || 'Untitled Brochure').trim(),
      url: (payload.url || '').trim(),
      order: Number.isFinite(Number(payload.order)) ? Number(payload.order) : 0,
      active: typeof payload.active === 'boolean' ? payload.active : true,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection('brochures').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Create brochure error:', error)
    res.status(500).json({ error: 'Failed to create brochure' })
  }
})

// Admin: update brochure
app.put('/api/admin/brochures/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid id' }) }
    const update = { ...req.body, updatedAt: new Date() }
    if (update.order !== undefined) {
      const n = Number(update.order)
      update.order = Number.isFinite(n) ? n : 0
    }
    const result = await db.collection('brochures').updateOne({ _id }, { $set: update })
    if (result.matchedCount === 0) return res.status(404).json({ error: 'Brochure not found' })
    const updated = await db.collection('brochures').findOne({ _id })
    res.json(updated)
  } catch (error) {
    console.error('Update brochure error:', error)
    res.status(500).json({ error: 'Failed to update brochure' })
  }
})

// Admin: delete brochure
app.delete('/api/admin/brochures/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid id' }) }
    const result = await db.collection('brochures').deleteOne({ _id })
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Brochure not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete brochure error:', error)
    res.status(500).json({ error: 'Failed to delete brochure' })
  }
})

// ---------- SITE SETTINGS (legacy support) ----------
// Public: get settings needed by frontend (limited fields)
app.get('/api/settings/public', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const settings = await db.collection('settings').findOne({ _id: 'site_settings' })
    res.json({ brochureUrl: settings?.brochureUrl || null })
  } catch (error) {
    console.error('Get public settings error:', error)
    res.status(500).json({ error: 'Failed to fetch settings' })
  }
})

// Admin: get full settings
app.get('/api/admin/settings', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const settings = await db.collection('settings').findOne({ _id: 'site_settings' })
    res.json(settings || { _id: 'site_settings' })
  } catch (error) {
    console.error('Get admin settings error:', error)
    res.status(500).json({ error: 'Failed to fetch settings' })
  }
})

// Admin: update settings (e.g., set brochureUrl)
app.put('/api/admin/settings', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const update = {
      brochureUrl: typeof payload.brochureUrl === 'string' ? payload.brochureUrl.trim() : null,
      updatedAt: new Date(),
    }
    await db.collection('settings').updateOne(
      { _id: 'site_settings' },
      { $set: update, $setOnInsert: { _id: 'site_settings', createdAt: new Date() } },
      { upsert: true }
    )
    const saved = await db.collection('settings').findOne({ _id: 'site_settings' })
    res.json(saved)
  } catch (error) {
    console.error('Update admin settings error:', error)
    res.status(500).json({ error: 'Failed to update settings' })
  }
})

// Public: submit testimonial (goes to pending)
app.post('/api/testimonials', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const payload = req.body || {}
    const name = (payload.name || '').trim()
    const message = (payload.message || '').trim()
    let rating = Number(payload.rating || 0)
    if (!name || !message) return res.status(400).json({ error: 'Name and message are required' })
    if (!Number.isFinite(rating) || rating < 1) rating = 1
    if (rating > 5) rating = 5

    const now = new Date()
    const doc = {
      name,
      message,
      rating,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection('testimonials').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Submit testimonial error:', error)
    res.status(500).json({ error: 'Failed to submit testimonial' })
  }
})

// Admin: list all testimonials with optional status filter
app.get('/api/admin/testimonials', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { status, q } = req.query
    const query = {}
    if (status) query.status = status
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { message: { $regex: q, $options: 'i' } },
      ]
    }
    const testimonials = await db.collection('testimonials').find(query).sort({ createdAt: -1 }).toArray()
    res.json(testimonials)
  } catch (error) {
    console.error('Admin get testimonials error:', error)
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
})

// Admin: update testimonial (approve/reject/edit)
app.put('/api/admin/testimonials/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid testimonial id' }) }
    const update = { ...req.body, updatedAt: new Date() }
    if (update.rating !== undefined) {
      let r = Number(update.rating)
      if (!Number.isFinite(r) || r < 1) r = 1
      if (r > 5) r = 5
      update.rating = r
    }
    const result = await db.collection('testimonials').updateOne({ _id }, { $set: update })
    if (result.matchedCount === 0) return res.status(404).json({ error: 'Testimonial not found' })
    const updated = await db.collection('testimonials').findOne({ _id })
    res.json(updated)
  } catch (error) {
    console.error('Update testimonial error:', error)
    res.status(500).json({ error: 'Failed to update testimonial' })
  }
})

// Admin: delete testimonial
app.delete('/api/admin/testimonials/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    let _id
    try { _id = new ObjectId(req.params.id) } catch { return res.status(400).json({ error: 'Invalid testimonial id' }) }
    const result = await db.collection('testimonials').deleteOne({ _id })
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Testimonial not found' })
    res.json({ success: true })
  } catch (error) {
    console.error('Delete testimonial error:', error)
    res.status(500).json({ error: 'Failed to delete testimonial' })
  }
})

// Catch-all handler for client-side routing only if frontend build exists
if (shouldServeFrontend) {
  app.get(/.*/, (req, res) => {
    res.sendFile(frontendIndexHtml)
  })
}

// ---------- START SERVER ----------
app.listen(PORT, () => {
  if (BASE_URL) {
    console.log(`🚀 Server running on ${BASE_URL}`)
    console.log(`📡 API endpoints at ${BASE_URL}/api`)
  } else {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`📡 API endpoints at /api`)
  }
  const emailConfigured = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
  console.log(`📧 Email configured: ${emailConfigured}`)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down server...')
  if (client) await client.close()
  process.exit(0)
})