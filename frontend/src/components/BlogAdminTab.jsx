import React, { useEffect, useState } from 'react'
import { BookOpen, Plus, Edit, Trash2, Search, RefreshCw } from 'lucide-react'
import apiService from '../services/api'
import { slugify } from '../data/seedBlogPosts'

const emptyForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'Waterproofing',
  tags: '',
  author: 'Sanjana Enterprises',
  metaTitle: '',
  metaDescription: '',
  featuredImage: 'https://www.sanjanawaterproofing.com/sanjana-enterprises.png',
  relatedServices: '',
  status: 'draft',
}

const BlogAdminTab = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const token = localStorage.getItem('adminToken')

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const data = await apiService.adminGetBlogPosts(token, {})
      setPosts(data || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPosts() }, [])

  const openCreate = () => {
    setEditingId(null)
    setForm(emptyForm)
    setShowForm(true)
  }

  const openEdit = (post) => {
    setEditingId(post._id)
    setForm({
      title: post.title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      category: post.category || 'Waterproofing',
      tags: (post.tags || []).join(', '),
      author: post.author || 'Sanjana Enterprises',
      metaTitle: post.metaTitle || '',
      metaDescription: post.metaDescription || '',
      featuredImage: post.featuredImage || emptyForm.featuredImage,
      relatedServices: (post.relatedServices || []).join(', '),
      status: post.status || 'draft',
    })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const payload = {
        ...form,
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        relatedServices: form.relatedServices.split(',').map((s) => s.trim()).filter(Boolean),
        slug: form.slug || slugify(form.title),
        metaTitle: form.metaTitle || form.title,
        metaDescription: form.metaDescription || form.excerpt,
      }
      if (editingId) {
        await apiService.adminUpdateBlogPost(editingId, payload, token)
      } else {
        await apiService.adminCreateBlogPost(payload, token)
      }
      setShowForm(false)
      fetchPosts()
    } catch (err) {
      alert(err.message || 'Failed to save blog post')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this blog post?')) return
    try {
      await apiService.adminDeleteBlogPost(id, token)
      fetchPosts()
    } catch (err) {
      alert(err.message || 'Failed to delete')
    }
  }

  const filtered = posts.filter((p) => {
    if (statusFilter !== 'all' && p.status !== statusFilter) return false
    if (!search) return true
    const q = search.toLowerCase()
    return (p.title || '').toLowerCase().includes(q) || (p.slug || '').toLowerCase().includes(q)
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" /> Blog Posts
          </h2>
          <p className="text-sm text-gray-500">Manage SEO blog articles — published posts appear at /blog</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchPosts} className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-50 text-sm">
            <RefreshCw size={16} /> Refresh
          </button>
          <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm font-semibold">
            <Plus size={16} /> New Post
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl text-sm"
          />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border rounded-xl px-4 py-2 text-sm">
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">{editingId ? 'Edit Post' : 'Create New Post'}</h3>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                <input value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="auto-generated-from-title" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Excerpt</label>
              <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} className="w-full border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content (HTML)</label>
              <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={10} className="w-full border rounded-lg px-3 py-2 text-sm font-mono" placeholder="<p>Article content...</p>" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option>Waterproofing</option>
                  <option>Industrial Flooring</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Author</label>
                <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="waterproofing, bangalore, terrace" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">SEO Title</label>
                <input value={form.metaTitle} onChange={(e) => setForm({ ...form, metaTitle: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Featured Image URL</label>
                <input value={form.featuredImage} onChange={(e) => setForm({ ...form, featuredImage: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">SEO Description</label>
              <textarea value={form.metaDescription} onChange={(e) => setForm({ ...form, metaDescription: e.target.value })} rows={2} className="w-full border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Related Service Paths (comma separated)</label>
              <input value={form.relatedServices} onChange={(e) => setForm({ ...form, relatedServices: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="/terrace-waterproofing, /contact" />
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50">
                {saving ? 'Saving...' : editingId ? 'Update Post' : 'Create Post'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border rounded-xl hover:bg-gray-50">Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl border overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading blog posts...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No blog posts found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold">Title</th>
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Published</th>
                  <th className="text-right p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((post) => (
                  <tr key={post._id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{post.title}</div>
                      <div className="text-xs text-gray-500">/blog/{post.slug}</div>
                    </td>
                    <td className="p-4 text-gray-600">{post.category}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500 text-xs">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '—'}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEdit(post)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Edit">
                          <Edit size={16} />
                        </button>
                        <button onClick={() => handleDelete(post._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogAdminTab
