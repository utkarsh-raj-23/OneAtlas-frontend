'use client'
import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import MegaNav from '@/components/layout/MegaNav'
import TemplateCard from '@/components/ui/TemplateCard'
import { templates, categories } from '@/data/templates'
import { Search } from 'lucide-react'

function TemplatesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'All'
  )
  const [search, setSearch] = useState('')
  const [activeComplexity, setActiveComplexity] = useState('All')

  useEffect(() => {
    const params = new URLSearchParams()
    if (activeCategory !== 'All') params.set('category', activeCategory)
    if (activeComplexity !== 'All') params.set('complexity', activeComplexity)
    router.replace(`/templates?${params.toString()}`, { scroll: false })
  }, [activeCategory, activeComplexity, router])

  const filtered = templates.filter((t) => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory
    const matchComp = activeComplexity === 'All' || t.complexity === activeComplexity
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchComp && matchSearch
  })

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <MegaNav />

      {/* Header */}
      <div
        className="templates-filter-shell"
        style={{
          paddingTop: '100px',
          paddingBottom: '48px',
          padding: '100px 24px 48px',
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,91,255,0.06) 0%, transparent 70%)',
          textAlign: 'center',
        }}
      >
        <div
          className="templates-filter-inner"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            backgroundColor: '#635BFF15',
            border: '1px solid #635BFF30',
            fontSize: '13px',
            fontWeight: '500',
            color: '#635BFF',
            marginBottom: '20px',
          }}
        >
          50+ templates
        </div>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            color: 'var(--text-heading)',
            marginBottom: '14px',
            letterSpacing: '-0.5px',
          }}
        >
          Production-ready app templates
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: 'var(--text-body)',
            maxWidth: '520px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}
        >
          Real operational apps, not marketing pages. Pick a template,
          customize with AI, and deploy in minutes.
        </p>

        {/* Search */}
        <div
          style={{
            maxWidth: '480px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <Search
            size={17}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#425466',
            }}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search templates..."
            style={{
              width: '100%',
              padding: '13px 16px 13px 44px',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontSize: '14px',
              color: 'var(--text-heading)',
              outline: 'none',
              backgroundColor: 'var(--card-bg)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          />
        </div>
      </div>

      {/* Filters */}
      <div
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '0 24px',
          position: 'sticky',
          top: '64px',
          backgroundColor: 'var(--card-bg)',
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            overflowX: 'auto',
            paddingBottom: '1px',
          }}
        >
          {/* Categories */}
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '14px 14px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: activeCategory === cat ? '#635BFF' : '#425466',
                  borderBottom: activeCategory === cat ? '2px solid #635BFF' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Complexity */}
          <div className="templates-complexity-filter" style={{ display: 'flex', gap: '6px', marginLeft: 'auto', flexShrink: 0, padding: '10px 0' }}>
            {['All', 'Simple', 'Moderate', 'Advanced'].map((c) => (
              <button
                key={c}
                onClick={() => setActiveComplexity(c)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '7px',
                  fontSize: '12px',
                  fontWeight: '500',
                  border: `1px solid ${activeComplexity === c ? '#635BFF' : '#E3E8EE'}`,
                  backgroundColor: activeComplexity === c ? '#635BFF15' : 'transparent',
                  color: activeComplexity === c ? '#635BFF' : '#425466',
                  cursor: 'pointer',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="templates-results" style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#425466' }}>
            <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>No templates found</p>
            <p style={{ fontSize: '14px' }}>Try adjusting your filters</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '14px', color: '#425466', marginBottom: '24px' }}>
              {filtered.length} templates
            </p>
            <div
              className="templates-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {filtered.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }} />}>
      <TemplatesContent />
    </Suspense>
  )
}
