import MegaNav from '@/components/layout/MegaNav'
import { BookOpen, Zap, Code2, Puzzle, ArrowRight } from 'lucide-react'

const sections = [
  {
    icon: Zap,
    title: 'Getting Started',
    color: '#635BFF',
    items: ['Quick start guide', 'Create your first app', 'Understanding prompts', 'Deploy your app'],
  },
  {
    icon: Code2,
    title: 'Builder Reference',
    color: '#FF5996',
    items: ['Component tree', 'Canvas interactions', 'Property panel', 'Keyboard shortcuts'],
  },
  {
    icon: Puzzle,
    title: 'Integrations',
    color: '#00D4B1',
    items: ['Connecting APIs', 'Database setup', 'Authentication flows', 'Webhook configuration'],
  },
  {
    icon: BookOpen,
    title: 'Templates Guide',
    color: '#F8BC42',
    items: ['Using templates', 'Customizing templates', 'Creating custom templates', 'Template sharing'],
  },
]

export default function DocsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />

      <section style={{ paddingTop: '120px', padding: '120px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '14px', letterSpacing: '-0.5px' }}>
          Documentation
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto 32px' }}>
          Everything you need to build, deploy, and scale with OneAtlas.
        </p>
        <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
          <input
            placeholder="Search docs..."
            style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '14px', color: 'var(--text-heading)', outline: 'none', backgroundColor: 'var(--card-bg)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          />
        </div>
      </section>

      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {sections.map((section) => (
            <div key={section.title} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '20px', padding: '24px', border: '1px solid var(--border)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: `${section.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <section.icon size={18} color={section.color} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '14px' }}>
                {section.title}
              </h3>
              {section.items.map((item) => (
                <a key={item} href={`/docs#${item.toLowerCase().replaceAll(' ', '-')}`} className="inline-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', fontSize: '14px', color: 'var(--text-body)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                  {item}
                  <ArrowRight size={13} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
