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

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const BASE_URL = process.env.BASE_URL || process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`
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
if (CORS_ORIGIN === '*') {
  app.use(cors())
} else {
  const allowedOrigins = CORS_ORIGIN.split(',').map((o) => o.trim())
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  )
}
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

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
    const imageUrl = `${BASE_URL}/uploads/${req.file.filename}`
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

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${BASE_URL}`)
  console.log(`📡 API endpoints at ${BASE_URL}/api`)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down server...')
  if (client) await client.close()
  process.exit(0)
})
