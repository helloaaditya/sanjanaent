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

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

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
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)
    
    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error('Only image files are allowed!'))
    }
  }
})

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://histree4all_db_user:sanjanadb2025@sanjanacluster0.ngksk9n.mongodb.net/?retryWrites=true&w=majority&appName=SanjanaCluster0'
const MONGODB_DB = 'sanjana_waterproofing'

let client
let db

async function connectToDatabase() {
  if (client && db) {
    return { client, db }
  }

  try {
    client = new MongoClient(MONGODB_URI)
    await client.connect()
    db = client.db(MONGODB_DB)
    
    console.log('Connected to MongoDB successfully')
    return { client, db }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw error
  }
}

// Middleware
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' })
    }
    req.user = user
    next()
  })
}

// Admin authentication routes
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const { db } = await connectToDatabase()
    
    const admin = await db.collection('admins').findOne({ username })
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const isValidPassword = await bcrypt.compare(password, admin.password)
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, { expiresIn: '24h' })
    res.json({ token, username: admin.username })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Login failed' })
  }
})

// Check if admin exists
app.get('/api/admin/check', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const existingAdmin = await db.collection('admins').findOne({})
    
    if (existingAdmin) {
      res.json({ exists: true, username: existingAdmin.username })
    } else {
      res.status(404).json({ exists: false })
    }
  } catch (error) {
    console.error('Check admin error:', error)
    res.status(500).json({ error: 'Failed to check admin' })
  }
})

app.post('/api/admin/setup', async (req, res) => {
  try {
    const { username, password } = req.body
    const { db } = await connectToDatabase()
    
    // Check if ANY admin already exists (only allow one admin)
    const existingAdmin = await db.collection('admins').findOne({})
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin account already exists. Only one admin account is allowed.' })
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Create admin
    const admin = {
      username,
      password: hashedPassword,
      createdAt: new Date()
    }
    
    await db.collection('admins').insertOne(admin)
    res.json({ message: 'Admin created successfully' })
  } catch (error) {
    console.error('Setup error:', error)
    res.status(500).json({ error: 'Setup failed' })
  }
})

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { category } = req.query
    const query = category && category !== 'All' ? { category } : {}
    const projects = await db.collection('projects').find(query).toArray()
    res.json(projects)
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

app.get('/api/projects/:id', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const project = await db.collection('projects').findOne({ _id: new ObjectId(req.params.id) })
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json(project)
  } catch (error) {
    console.error('Failed to fetch project:', error)
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// Image upload route
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' })
    }
    
    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`
    res.json({ 
      success: true, 
      imageUrl: imageUrl,
      filename: req.file.filename 
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Upload failed' })
  }
})

// Lead/Contact management routes
app.post('/api/leads', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const lead = {
      ...req.body,
      createdAt: new Date(),
      status: 'new',
      type: req.body.type || 'contact' // 'contact' or 'quote'
    }
    
    await db.collection('leads').insertOne(lead)
    res.json({ success: true, message: 'Lead submitted successfully' })
  } catch (error) {
    console.error('Failed to save lead:', error)
    res.status(500).json({ error: 'Failed to save lead' })
  }
})

app.get('/api/leads', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { type, status } = req.query
    
    let query = {}
    if (type) query.type = type
    if (status) query.status = status
    
    const leads = await db.collection('leads').find(query).sort({ createdAt: -1 }).toArray()
    res.json(leads)
  } catch (error) {
    console.error('Failed to fetch leads:', error)
    res.status(500).json({ error: 'Failed to fetch leads' })
  }
})

app.put('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    console.log('Update lead request:', req.params.id, req.body)
    const { db } = await connectToDatabase()
    const { id } = req.params
    const updateData = {
      ...req.body,
      updatedAt: new Date()
    }
    
    console.log('Update data:', updateData)
    
    const result = await db.collection('leads').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    )
    
    console.log('Update result:', result)
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Lead not found' })
    }
    
    res.json({ success: true, message: 'Lead updated successfully' })
  } catch (error) {
    console.error('Failed to update lead:', error)
    res.status(500).json({ error: 'Failed to update lead' })
  }
})

app.delete('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { id } = req.params
    
    const result = await db.collection('leads').deleteOne({ _id: new ObjectId(id) })
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Lead not found' })
    }
    
    res.json({ success: true, message: 'Lead deleted successfully' })
  } catch (error) {
    console.error('Failed to delete lead:', error)
    res.status(500).json({ error: 'Failed to delete lead' })
  }
})

// Services routes
// Public: list services
app.get('/api/services', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { category } = req.query
    const query = category ? { category } : {}
    const services = await db.collection('services').find(query).sort({ createdAt: -1 }).toArray()
    res.json(services)
  } catch (error) {
    console.error('Failed to fetch services:', error)
    res.status(500).json({ error: 'Failed to fetch services' })
  }
})

// Public: get single service
app.get('/api/services/:id', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const service = await db.collection('services').findOne({ _id: new ObjectId(req.params.id) })
    if (!service) return res.status(404).json({ error: 'Service not found' })
    res.json(service)
  } catch (error) {
    console.error('Failed to fetch service:', error)
    res.status(500).json({ error: 'Failed to fetch service' })
  }
})

// Admin: create service
app.post('/api/admin/services', authenticateToken, async (req, res) => {
  try {
    console.log('Create service request body:', req.body)
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: 'Invalid JSON body' })
    }
    const { title, description, category, features, iconName, color, bgColor, image } = req.body || {}
    if (!title || !description) {
      return res.status(400).json({ error: 'Missing required fields: title, description' })
    }

    const { db } = await connectToDatabase()
    const now = new Date()
    const service = {
      title,
      description: description || '',
      category: category || 'Waterproofing',
      features: Array.isArray(features) ? features : [],
      iconName: iconName || 'Shield',
      color: color || 'from-blue-600 to-purple-600',
      bgColor: bgColor || 'bg-blue-50',
      image: image || '',
      createdAt: now,
      updatedAt: now
    }
    const result = await db.collection('services').insertOne(service)
    res.json({ id: result.insertedId, message: 'Service created successfully' })
  } catch (error) {
    console.error('Failed to create service:', error && error.stack ? error.stack : error)
    res.status(500).json({ error: 'Failed to create service', message: error && error.message ? error.message : String(error) })
  }
})

// Admin: update service
app.put('/api/admin/services/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const updates = {
      ...req.body,
      updatedAt: new Date()
    }
    const result = await db.collection('services').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updates }
    )
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Service not found' })
    }
    res.json({ message: 'Service updated successfully' })
  } catch (error) {
    console.error('Failed to update service:', error)
    res.status(500).json({ error: 'Failed to update service' })
  }
})

// Admin: delete service
app.delete('/api/admin/services/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const result = await db.collection('services').deleteOne({ _id: new ObjectId(req.params.id) })
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Service not found' })
    }
    res.json({ message: 'Service deleted successfully' })
  } catch (error) {
    console.error('Failed to delete service:', error)
    res.status(500).json({ error: 'Failed to delete service' })
  }
})

// Admin project management routes
app.post('/api/admin/projects', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const project = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const result = await db.collection('projects').insertOne(project)
    res.json({ id: result.insertedId, message: 'Project created successfully' })
  } catch (error) {
    console.error('Failed to create project:', error)
    res.status(500).json({ error: 'Failed to create project' })
  }
})

app.put('/api/admin/projects/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const updates = {
      ...req.body,
      updatedAt: new Date()
    }
    
    const result = await db.collection('projects').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updates }
    )
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json({ message: 'Project updated successfully' })
  } catch (error) {
    console.error('Failed to update project:', error)
    res.status(500).json({ error: 'Failed to update project' })
  }
})

app.delete('/api/admin/projects/:id', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const result = await db.collection('projects').deleteOne({ _id: new ObjectId(req.params.id) })
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Failed to delete project:', error)
    res.status(500).json({ error: 'Failed to delete project' })
  }
})


app.get('/api/categories', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const categories = await db.collection('categories').find({}).toArray()
    res.json(categories.map(cat => cat.name))
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    res.status(500).json({ error: 'Failed to fetch categories' })
  }
})

// Initialize categories only (no sample projects)
app.post('/api/initialize', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    
    // Only initialize categories if they don't exist
    const categoryCount = await db.collection('categories').countDocuments()
    if (categoryCount === 0) {
      console.log('Initializing categories...')
      
      const categories = [
        { name: 'Residential', description: 'Home and apartment waterproofing projects' },
        { name: 'Commercial', description: 'Office and commercial building projects' },
        { name: 'Industrial', description: 'Factory and industrial facility projects' }
      ]
      
      await db.collection('categories').insertMany(categories)
      console.log('Categories initialized')
    }
    
    res.json({ message: 'Database initialized successfully' })
  } catch (error) {
    console.error('Failed to initialize database:', error)
    res.status(500).json({ error: 'Failed to initialize database' })
  }
})

// Clear all projects (admin only)
app.delete('/api/admin/projects/clear', authenticateToken, async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const result = await db.collection('projects').deleteMany({})
    res.json({ message: `Cleared ${result.deletedCount} projects` })
  } catch (error) {
    console.error('Failed to clear projects:', error)
    res.status(500).json({ error: 'Failed to clear projects' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`API endpoints available at http://localhost:${PORT}/api`)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...')
  if (client) {
    await client.close()
  }
  process.exit(0)
})
