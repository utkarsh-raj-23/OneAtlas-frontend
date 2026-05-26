import MegaNav from '@/components/layout/MegaNav'
import { ArrowRight } from 'lucide-react'

const posts = [
  { title: 'How OneAtlas generates production-ready backends in 45 seconds', category: 'Engineering', date: 'May 20, 2025', readTime: '5 min', color: '#FF6600' },
  { title: 'Building a CRM for your startup without writing a single line of code', category: 'Tutorial', date: 'May 15, 2025', readTime: '8 min', color: '#00D4B1' },
  { title: 'Why AI app builders are replacing traditional no-code tools', category: 'Product', date: 'May 10, 2025', readTime: '4 min', color: '#9CA3AF' },
  { title: 'Announcing OneAtlas Enterprise: SSO, audit logs, and dedicated support', category: 'Announcement', date: 'May 5, 2025', readTime: '3 min', color: '#F8BC42' },
  { title: 'Template deep dive: How the HR Dashboard was built', category: 'Tutorial', date: 'April 28, 2025', readTime: '10 min', color: '#E65C00' },
  { title: 'Integrating Stripe payments into your OneAtlas app', category: 'Tutorial', date: 'April 20, 2025', readTime: '7 min', color: '#FFB17A' },
]

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />

      <section style={{ paddingTop: '120px', padding: '120px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '14px', letterSpacing: '-0.5px' }}>
          Blog
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto' }}>
          Product updates, engineering deep dives, and tutorials from the OneAtlas team.
        </p>
      </section>

      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* Featured post */}
        <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '24px', padding: '40px', border: '1px solid var(--border)', marginBottom: '32px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', backgroundColor: '#FF660014', color: '#FF6600', marginBottom: '14px' }}>
              Featured
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '12px', lineHeight: '1.3', letterSpacing: '-0.3px' }}>
              {posts[0].title}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-body)', marginBottom: '20px', lineHeight: '1.7' }}>
              We break down exactly how our AI pipeline converts a natural language prompt into a fully functional Node.js backend with database schema, REST endpoints, and auth — in under a minute.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-body)' }}>{posts[0].date}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-body)' }}>·</span>
              <span style={{ fontSize: '13px', color: 'var(--text-body)' }}>{posts[0].readTime} read</span>
              <a href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '600', color: '#FF6600', textDecoration: 'none', marginLeft: 'auto' }}>
                Read more <ArrowRight size={13} />
              </a>
            </div>
          </div>
          <div style={{ width: '200px', height: '140px', borderRadius: '14px', background: '#F5F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '48px' }}>⚡</span>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {posts.slice(1).map((post) => (
            <div key={post.title} className="card-hover" style={{ backgroundColor: 'var(--card-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: `${post.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '18px' }}>📝</span>
              </div>
              <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: '5px', fontSize: '11px', fontWeight: '600', backgroundColor: `${post.color}15`, color: post.color, marginBottom: '10px' }}>
                {post.category}
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '12px', lineHeight: '1.4' }}>
                {post.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-body)' }}>{post.date}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-body)' }}>·</span>
                <span style={{ fontSize: '12px', color: 'var(--text-body)' }}>{post.readTime} read</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
