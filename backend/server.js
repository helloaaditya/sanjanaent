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

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const BASE_URL = process.env.BASE_URL || process.env.RENDER_EXTERNAL_URL || ''
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'

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
  corsMiddleware = cors()
} else {
  const allowedOrigins = CORS_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean)
  corsMiddleware = cors({
    origin: allowedOrigins,
    credentials: true,
  })
}
app.use(corsMiddleware)
app.options(/.*/, corsMiddleware)
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
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
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
    const services = await db.collection('services').find(query).sort({ createdAt: -1 }).toArray()
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
      message: lead.message || null,
      source: lead.source || 'website',
      meta: lead.meta || {},
      status: 'new',
      createdAt: now,
      updatedAt: now,
    }

    const result = await db.collection('leads').insertOne(doc)
    res.json({ _id: result.insertedId, ...doc })
  } catch (error) {
    console.error('Create lead error:', error)
    res.status(500).json({ error: 'Failed to submit lead' })
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
      if (from) query.createdAt.$gte = new Date(from)
      if (to) query.createdAt.$lte = new Date(to)
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
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down server...')
  if (client) await client.close()
  process.exit(0)
})
