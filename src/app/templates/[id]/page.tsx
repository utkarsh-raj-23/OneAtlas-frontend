import Link from 'next/link'
import { notFound } from 'next/navigation'
import MegaNav from '@/components/layout/MegaNav'
import { templates } from '@/data/templates'
import { ArrowLeft, CheckCircle, ExternalLink, Zap } from 'lucide-react'

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }))
}

export default async function TemplatePreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const template = templates.find((item) => item.id === id)

  if (!template) notFound()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />
      <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '112px 24px 80px' }}>
        <Link href="/templates" className="inline-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-body)', textDecoration: 'none', fontSize: '14px', marginBottom: '28px' }}>
          <ArrowLeft size={16} />
          Back to templates
        </Link>

        <section className="preview-layout" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '32px', alignItems: 'start' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'var(--card-bg)', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <div style={{ height: '48px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 16px', backgroundColor: 'var(--bg-card)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28C840' }} />
              <span style={{ marginLeft: '8px', fontSize: '12px', color: 'var(--text-body)' }}>preview.oneatlas.io/{template.id}</span>
            </div>
            <div style={{ minHeight: '360px', padding: '24px', background: '#F5F5EE' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '18px', minHeight: '310px' }} className="template-preview-canvas">
                <aside style={{ border: '1px solid var(--border)', borderRadius: '14px', backgroundColor: 'var(--card-bg)', padding: '14px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '18px' }}>{template.icon}</div>
                  {['Dashboard', template.category, 'Reports', 'Settings'].map((item, index) => (
                    <div key={item} style={{ padding: '9px 10px', borderRadius: '8px', marginBottom: '6px', fontSize: '13px', color: index === 0 ? '#FF6600' : 'var(--text-body)', backgroundColor: index === 0 ? '#FF660014' : 'transparent' }}>
                      {item}
                    </div>
                  ))}
                </aside>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="template-preview-stats">
                    {['Records', 'Automations', 'Tasks'].map((label, index) => (
                      <div key={label} style={{ border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card-bg)', padding: '14px' }}>
                        <p style={{ fontSize: '12px', color: 'var(--text-body)', marginBottom: '8px' }}>{label}</p>
                        <strong style={{ fontSize: '22px', color: [template.color, '#00D4B1', '#F8BC42'][index] }}>{['2.4K', '18', '94%'][index]}</strong>
                      </div>
                    ))}
                  </div>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--card-bg)', padding: '16px', flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '14px' }}>Operational workflow</p>
                    {template.tags.map((tag) => (
                      <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderTop: '1px solid var(--border)', color: 'var(--text-body)', fontSize: '13px' }}>
                        <CheckCircle size={15} color="#00D4B1" />
                        {tag} module configured
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span style={{ display: 'inline-flex', padding: '5px 10px', borderRadius: '999px', backgroundColor: '#FF660014', color: '#FF6600', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>{template.category}</span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', color: 'var(--text-heading)', lineHeight: 1.05, marginBottom: '16px' }}>{template.name}</h1>
            <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>{template.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              <span style={{ padding: '7px 10px', borderRadius: '8px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-heading)', fontSize: '13px', fontWeight: 600 }}>{template.complexity}</span>
              {template.tags.map((tag) => (
                <span key={tag} style={{ padding: '7px 10px', borderRadius: '8px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-body)', fontSize: '13px' }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href={`/builder?template=${template.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 22px', borderRadius: '12px', background: '#FF6600', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
                <Zap size={16} />
                Use Template
              </Link>
              <Link href="/templates" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 22px', borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card-bg)', color: 'var(--text-heading)', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
                Browse more
                <ExternalLink size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
