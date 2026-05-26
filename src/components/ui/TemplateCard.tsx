'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Template } from '@/types'
import { ArrowUpRight, Zap } from 'lucide-react'

const complexityColors = {
  Simple: { bg: '#00D4B115', text: '#00A896' },
  Moderate: { bg: '#F8BC4220', text: '#B8860B' },
  Advanced: { bg: '#F3F4F6', text: '#6B7280' },
}

interface Props {
  template: Template
}

export default function TemplateCard({ template }: Props) {
  const [hovered, setHovered] = useState(false)
  const complexity = complexityColors[template.complexity]

  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview */}
      <div
        style={{
          height: '140px',
          background: '#F5F5EE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            backgroundColor: 'var(--card-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          }}
        >
          {template.icon}
        </div>

        {hovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(17,17,17,0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Link
              href={`/builder?template=${template.id}`}
              style={{
                padding: '8px 16px',
                background: '#FF6600',
                color: 'white',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Zap size={13} />
              Use Template
            </Link>
            <Link
              href={`/templates/${template.id}`}
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-heading)',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
              }}
            >
              <ArrowUpRight size={13} />
              Preview
            </Link>
          </div>
        )}

        {/* Complexity badge */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '3px 8px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '600',
            backgroundColor: complexity.bg,
            color: complexity.text,
          }}
        >
          {template.complexity}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-heading)' }}>
            {template.name}
          </h3>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5', marginBottom: '12px' }}>
          {template.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <span
            style={{
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '500',
              backgroundColor: '#FF660014',
              color: '#FF6600',
            }}
          >
            {template.category}
          </span>
          {template.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '500',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-body)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
