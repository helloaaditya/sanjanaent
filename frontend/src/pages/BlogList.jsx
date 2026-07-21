import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, Tag, ArrowRight, BookOpen, Phone } from 'lucide-react'
import apiService from '../services/api'
import { SEED_BLOG_POSTS } from '../data/seedBlogPosts'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, blogListSchema, breadcrumbSchema } from '../utils/seo'
import { reportCallConversion } from '../gtag'

const CATEGORIES = ['All', 'Waterproofing', 'Industrial Flooring', 'General']

const fallbackPosts = SEED_BLOG_POSTS.map((post, index) => {
  const d = new Date()
  d.setDate(d.getDate() - index * 7)
  return { ...post, _id: post.slug, publishedAt: d.toISOString() }
})

const BlogList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('All')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiService.getBlogPosts({ limit: 50 })
        setPosts(data?.posts?.length ? data.posts : fallbackPosts)
      } catch {
        setPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = category === 'All'
    ? posts
    : posts.filter((p) => p.category === category)

  const handlePhoneClick = () => {
    reportCallConversion()
    window.location.href = 'tel:+919916290799'
  }

  return (
    <>
      <Helmet>
        <title>Waterproofing & Flooring Blog Bangalore | Expert Guides | Sanjana Enterprises</title>
        <meta name="description" content="Expert blog on waterproofing, terrace leak repair, epoxy flooring, PU flooring & industrial flooring in Bangalore. Tips, costs & guides from Sanjana Enterprises — 30+ years experience." />
        <meta name="keywords" content="waterproofing blog bangalore, terrace waterproofing guide, epoxy flooring blog, industrial flooring tips, basement waterproofing guide, sanjana enterprises blog" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Waterproofing & Flooring Blog | Sanjana Enterprises Bangalore" />
        <meta property="og:description" content="Expert guides on waterproofing and industrial flooring in Bangalore from ISO certified Sanjana Enterprises." />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Waterproofing & Flooring Blog | Sanjana Enterprises" />
        <meta name="twitter:description" content="Expert waterproofing and flooring guides for Bangalore property owners and industries." />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(blogListSchema(filtered))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]))}</script>
      </Helmet>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <BookOpen size={16} />
              <span>Expert Guides & Tips</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black mb-4">
              Waterproofing & Flooring <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Practical guides on terrace waterproofing, basement protection, epoxy flooring, PU flooring, and industrial floor solutions in Bangalore — from Karnataka&apos;s trusted experts with 30+ years of experience.
            </p>
          </div>
        </section>

        <section className="py-10 bg-white border-b">
          <div className="container-max px-4 sm:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    category === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-max px-4 sm:px-6">
            {loading ? (
              <div className="text-center py-20 text-gray-500">Loading articles...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-500">No articles in this category yet.</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((post) => (
                  <article key={post._id || post.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                    <Link to={`/blog/${post.slug}`} className="block">
                      <img
                        src={post.featuredImage || DEFAULT_OG_IMAGE}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recent'}
                        </span>
                        {post.category && (
                          <span className="flex items-center gap-1 text-blue-600 font-medium">
                            <Tag size={12} />
                            {post.category}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-blue-600 text-white">
          <div className="container-max px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Expert Waterproofing or Flooring Advice?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get a free site inspection and quote from Sanjana Enterprises — ISO 9001:2015 certified, serving Bangalore and Karnataka for 30+ years.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                Get Free Quote
              </Link>
              <button onClick={handlePhoneClick} className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Phone size={18} /> Call 9916290799
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BlogList
