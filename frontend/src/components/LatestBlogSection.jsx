import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, Calendar } from 'lucide-react'
import apiService from '../services/api'
import { SEED_BLOG_POSTS } from '../data/seedBlogPosts'
import ScrollAnimation from './ScrollAnimation'

const fallbackPosts = SEED_BLOG_POSTS.slice(0, 3).map((post, index) => {
  const d = new Date()
  d.setDate(d.getDate() - index * 7)
  return { ...post, publishedAt: d.toISOString() }
})

const LatestBlogSection = () => {
  const [posts, setPosts] = useState(fallbackPosts)

  useEffect(() => {
    apiService.getBlogPosts({ limit: 3 })
      .then((data) => {
        if (data?.posts?.length) setPosts(data.posts.slice(0, 3))
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max px-4 sm:px-6">
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen size={16} />
              Expert Guides
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Waterproofing & Flooring <span className="text-blue-600">Blog</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical tips and guides on waterproofing, epoxy flooring, and industrial floor solutions in Bangalore.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, index) => (
            <ScrollAnimation key={post.slug} animation="fade-in-up" delay={index * 100}>
              <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.featuredImage || '/sanjana-enterprises.png'}
                    alt={post.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar size={12} />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                    {post.category && <span className="text-blue-600 font-medium">· {post.category}</span>}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 flex-1">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 text-sm font-semibold mt-4">
                    Read Article <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            View All Articles <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestBlogSection
