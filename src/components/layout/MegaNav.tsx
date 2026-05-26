'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const productLinks = [
  { label: 'App Builder', desc: 'Generate full stack apps from prompts', href: '/builder' },
  { label: 'Templates', desc: 'Ready-to-deploy operational templates', href: '/templates' },
  { label: 'Superagents', desc: 'Autonomous AI agents inside your apps', href: '/builder' },
  { label: 'Integrations', desc: 'Connect to 50+ external services', href: '/builder' },
]

const useCaseLinks = [
  { label: 'For Startups', href: '/templates' },
  { label: 'For Enterprises', href: '/enterprise' },
  { label: 'For Developers', href: '/docs' },
  { label: 'For Operations', href: '/templates?category=Operations' },
]

const resourceLinks = [
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Support', href: '/support' },
  { label: 'Updates', href: '/blog' },
]

const communityLinks = [
  { label: 'Discord', href: '#', icon: '💬' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'Twitter', href: '#', icon: '🐦' },
  { label: 'Reddit', href: '#', icon: '🔴' },
  { label: 'GitHub', href: '#', icon: '💻' },
  { label: 'Instagram', href: '#', icon: '📸' },
]

export default function MegaNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggle = (menu: string) =>
    setOpenMenu(openMenu === menu ? null : menu)

  const dropdownStyle = {
    position: 'absolute' as const,
    top: '48px',
    backgroundColor: 'var(--card-bg)',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 4px 24px rgba(0,0,0,0.03)',
    padding: '8px',
    zIndex: 200,
  }

  return (
    <nav className="glass-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FF6600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: '800', fontSize: '14px' }}>O</span>
          </div>
          <span style={{ fontWeight: '700', fontSize: '17px', color: 'var(--text-heading)' }}>OneAtlas</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden-mobile" style={{ alignItems: 'center', gap: '32px' }}>

          {/* Product dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => toggle('product')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0', borderRadius: '8px', border: 'none', background: 'none', fontSize: '15px', fontWeight: '500', color: openMenu === 'product' ? '#111111' : '#4B5563', cursor: 'pointer' }}>
              Product <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: openMenu === 'product' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {openMenu === 'product' && (
              <div style={{ ...dropdownStyle, left: '-10px', width: '300px' }}>
                {productLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setOpenMenu(null)}
                    style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px', borderRadius: '10px', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-heading)' }}>{item.label}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-body)', marginTop: '2px' }}>{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Use Cases dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => toggle('usecases')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0', borderRadius: '8px', border: 'none', background: 'none', fontSize: '15px', fontWeight: '500', color: openMenu === 'usecases' ? '#111111' : '#4B5563', cursor: 'pointer' }}>
              Use Cases <ChevronDown size={14} />
            </button>
            {openMenu === 'usecases' && (
              <div style={{ ...dropdownStyle, left: '-10px', width: '200px' }}>
                {useCaseLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setOpenMenu(null)}
                    style={{ display: 'block', padding: '10px 12px', borderRadius: '10px', fontSize: '14px', fontWeight: '500', color: 'var(--text-heading)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Static links */}
          {[
            { label: 'Templates', href: '/templates' },
            { label: 'Enterprise', href: '/enterprise' },
            { label: 'Security', href: '/security' },
            { label: 'Pricing', href: '/pricing' },
          ].map((item) => (
            <Link key={item.label} href={item.href}
              style={{ padding: '8px 0', borderRadius: '8px', fontSize: '15px', fontWeight: '500', color: '#4B5563', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-heading)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
            >
              {item.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => toggle('resources')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0', borderRadius: '8px', border: 'none', background: 'none', fontSize: '15px', fontWeight: '500', color: openMenu === 'resources' ? '#111111' : '#4B5563', cursor: 'pointer' }}>
              Resources <ChevronDown size={14} />
            </button>
            {openMenu === 'resources' && (
              <div style={{ ...dropdownStyle, right: 0, width: '180px' }}>
                {resourceLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setOpenMenu(null)}
                    style={{ display: 'block', padding: '10px 12px', borderRadius: '10px', fontSize: '14px', fontWeight: '500', color: 'var(--text-heading)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Community dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => toggle('community')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0', borderRadius: '8px', border: 'none', background: 'none', fontSize: '15px', fontWeight: '500', color: openMenu === 'community' ? '#111111' : '#4B5563', cursor: 'pointer' }}>
              Community <ChevronDown size={14} />
            </button>
            {openMenu === 'community' && (
              <div style={{ ...dropdownStyle, right: 0, width: '180px' }}>
                {communityLinks.map((item) => (
                  <a key={item.label} href={item.href}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '10px', fontSize: '14px', fontWeight: '500', color: 'var(--text-heading)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ThemeToggle />
          <Link href="/login" className="hidden-mobile" style={{ padding: '8px 14px', fontSize: '14px', fontWeight: '500', color: 'var(--text-body)', textDecoration: 'none', borderRadius: '8px' }}>
            Login
          </Link>
          <Link href="/dashboard" className="hidden-mobile" style={{ display: 'inline-flex', alignItems: 'center', height: '48px', padding: '0 22px', fontSize: '15px', fontWeight: '600', color: 'white', textDecoration: 'none', borderRadius: '12px', background: '#FF6600', boxShadow: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}>
            Start Building
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="show-mobile" style={{ padding: '8px', border: 'none', background: 'none', cursor: 'pointer', borderRadius: '8px', color: 'var(--text-heading)' }}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border)', padding: '16px 24px' }}>
          {[
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Enterprise', href: '/enterprise' },
            { label: 'Security', href: '/security' },
            { label: 'Docs', href: '/docs' },
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ].map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: '16px', fontWeight: '500', color: 'var(--text-heading)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/login" style={{ display: 'block', padding: '12px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '14px', fontWeight: '500', color: 'var(--text-body)', textDecoration: 'none' }}>
              Login
            </Link>
            <Link href="/dashboard" style={{ display: 'block', padding: '12px', textAlign: 'center', background: '#FF6600', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: 'white', textDecoration: 'none' }}>
              Start Building Free
            </Link>
          </div>
        </div>
      )}

      {openMenu && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setOpenMenu(null)} />
      )}
    </nav>
  )
}
