'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutGrid,
  Home,
  Zap,
  FileText,
  Puzzle,
  Users,
  Search,
  Star,
  ChevronDown,
  Rocket,
} from 'lucide-react'

const navItems = [
  { icon: LayoutGrid, label: 'Apps', href: '/dashboard' },
  { icon: Zap, label: 'Superagents', href: '/dashboard' },
]

const mainItems = [
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: LayoutGrid, label: 'All apps', href: '/dashboard' },
  { icon: FileText, label: 'Templates', href: '/templates' },
  { icon: Puzzle, label: 'Integrations', href: '/dashboard' },
  { icon: Users, label: 'Community', href: '/dashboard' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '224px',
        backgroundColor: 'white',
        borderRight: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            backgroundColor: '#FF6600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '13px' }}>O</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
          <span
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#111111',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            My Workspace
          </span>
          <ChevronDown size={14} color="#6B7280" style={{ flexShrink: 0 }} />
        </div>
      </div>

      {/* Top items */}
      <div style={{ padding: '8px 12px', borderBottom: '1px solid #E5E7EB' }}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#6B7280',
              textDecoration: 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <item.icon size={16} />
            {item.label}
          </Link>
        ))}
      </div>

      {/* Main nav */}
      <nav style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
        {mainItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                borderRadius: '8px',
                fontSize: '14px',
                color: active ? '#FF6600' : '#6B7280',
                backgroundColor: active ? '#FF660014' : 'transparent',
                fontWeight: active ? '500' : '400',
                textDecoration: 'none',
                marginBottom: '2px',
                transition: 'background 0.15s',
              }}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          )
        })}

        {/* Favorites */}
        <div style={{ marginTop: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              marginBottom: '4px',
            }}
          >
            <Star size={13} color="#6B7280" />
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#6B7280' }}>
              Favorites
            </span>
            <ChevronDown size={12} color="#6B7280" style={{ marginLeft: 'auto' }} />
          </div>
          <p style={{ fontSize: '12px', color: '#6B7280', padding: '2px 8px', opacity: 0.6 }}>
            No favorites yet
          </p>
          <p style={{ fontSize: '12px', color: '#6B7280', padding: '0 8px', opacity: 0.6 }}>
            Add your apps for quick access
          </p>
        </div>
      </nav>

      {/* Upgrade */}
      <div style={{ padding: '12px', borderTop: '1px solid #E5E7EB' }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <Rocket size={16} color="#FF6600" />
          <div>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#111111' }}>
              Upgrade your plan
            </p>
            <p style={{ fontSize: '11px', color: '#6B7280', opacity: 0.7 }}>
              Get more out of your apps
            </p>
          </div>
        </button>
      </div>
    </aside>
  )
}