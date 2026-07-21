import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, Tag, ArrowLeft, Phone, ArrowRight } from 'lucide-react'
import apiService from '../services/api'
import { SEED_BLOG_POSTS } from '../data/seedBlogPosts'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl, blogPostingSchema, breadcrumbSchema } from '../utils/seo'
import { reportCallConversion } from '../gtag'

const fallbackPosts = SEED_BLOG_POSTS.map((post, index) => {
  const d = new Date()
  d.setDate(d.getDate() - index * 7)
  return { ...post, _id: post.slug, publishedAt: d.toISOString(), updatedAt: d.toISOString() }
})

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      setNotFound(false)
      try {
        const data = await apiService.getBlogPost(slug)
        setPost(data)
      } catch {
        const fallback = fallbackPosts.find((p) => p.slug === slug)
        if (fallback) setPost(fallback)
        else setNotFound(true)
      }
      try {
        const list = await apiService.getBlogPosts({ limit: 20 })
        const all = list?.posts?.length ? list.posts : fallbackPosts
        setRelated(all.filter((p) => p.slug !== slug).slice(0, 3))
      } catch {
        setRelated(fallbackPosts.filter((p) => p.slug !== slug).slice(0, 3))
      }
      setLoading(false)
    }
    load()
  }, [slug])

  const handlePhoneClick = () => {
    reportCallConversion()
    window.location.href = 'tel:+919916290799'
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading article...</div>
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    )
  }

  const pageTitle = post.metaTitle || `${post.title} | Sanjana Enterprises`
  const pageDesc = post.metaDescription || post.excerpt
  const canonical = absoluteUrl(`/blog/${post.slug}`)

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={(post.tags || []).join(', ')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={post.featuredImage || DEFAULT_OG_IMAGE} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt || post.publishedAt} />
        <meta property="article:section" content={post.category} />
        {(post.tags || []).map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={post.featuredImage || DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema(post))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]))}</script>
      </Helmet>

      <main>
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12 sm:py-16">
          <div className="container-max px-4 sm:px-6 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-sm text-blue-200 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
              </span>
              {post.category && (
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                  <Tag size={14} /> {post.category}
                </span>
              )}
              <span>By {post.author || SITE_NAME}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">{post.title}</h1>
            {post.excerpt && <p className="mt-4 text-lg text-gray-300">{post.excerpt}</p>}
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container-max px-4 sm:px-6 max-w-4xl">
            {post.featuredImage && (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full rounded-2xl shadow-lg mb-10 max-h-96 object-cover"
              />
            )}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {(post.tags || []).length > 0 && (
              <div className="mt-10 pt-8 border-t flex flex-wrap gap-2">
                {(post.tags || []).map((tag) => (
                  <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {(post.relatedServices || []).length > 0 && (
              <div className="mt-10 bg-blue-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {post.relatedServices.map((path) => (
                    <Link
                      key={path}
                      to={path}
                      className="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                    >
                      {path.replace(/\//g, '').replace(/-/g, ' ') || 'Contact Us'}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Get Expert Help in Bangalore</h2>
              <p className="text-blue-100 mb-6">Free site inspection and quote from ISO 9001:2015 certified Sanjana Enterprises.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                  Request Free Quote
                </Link>
                <button onClick={handlePhoneClick} className="border-2 border-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Phone size={18} /> 9916290799
                </button>
              </div>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container-max px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {related.map((item) => (
                  <Link key={item.slug} to={`/blog/${item.slug}`} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition-shadow group">
                    <p className="text-xs text-blue-600 font-medium mb-2">{item.category}</p>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{item.title}</h3>
                    <span className="inline-flex items-center text-sm text-blue-600 mt-3 font-semibold">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

export default BlogPost
