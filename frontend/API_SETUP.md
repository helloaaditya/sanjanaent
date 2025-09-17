# API Setup Guide

## Database Integration

The gallery page is now set up to fetch projects from a database. Here's how to configure it:

### Development Mode (Current)
- The app uses mock data by default in development
- No additional setup required
- Mock data includes 8 sample projects with different categories

### Production Mode
To connect to a real database, set the environment variable:

```bash
VITE_API_URL=https://your-api-domain.com/api
```

### Required API Endpoints

Your backend should provide these endpoints:

#### 1. Get All Projects
```
GET /api/projects
Response: Array of project objects
```

#### 2. Get Projects by Category
```
GET /api/projects?category=Residential
Response: Array of project objects filtered by category
```

#### 3. Get Single Project
```
GET /api/projects/:id
Response: Single project object
```

#### 4. Get Categories
```
GET /api/categories
Response: Array of category strings
```

### Project Object Structure

```javascript
{
  id: number,
  title: string,
  category: string,
  image: string,
  description: string,
  location?: string,
  completedDate?: string,
  client?: string,
  area?: string,
  duration?: string
}
```

### Features Implemented

- ✅ Dynamic project loading from database
- ✅ Category filtering
- ✅ Loading states
- ✅ Error handling with retry functionality
- ✅ Empty state handling
- ✅ Responsive design
- ✅ Image lazy loading
- ✅ Project details modal
- ✅ Mock data for development

### Testing

The gallery page will work immediately with mock data. To test with real data:

1. Set up your backend API
2. Set the `VITE_API_URL` environment variable
3. Ensure your API follows the required structure
4. The app will automatically switch to real data
