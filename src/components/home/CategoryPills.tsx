'use client'
import { useState } from 'react'

const categories = [
  'Tasks & Workflows',
  'CRM & Sales',
  'Content & Sites',
  'Finance',
  'Booking',
  'HR & People',
  'Analytics',
  'More',
]

export default function CategoryPills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-2 pb-6 px-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(active === cat ? null : cat)}
          className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
          style={{
            backgroundColor: active === cat ? '#FF6600' : 'white',
            color: active === cat ? 'white' : '#6B7280',
            borderColor: active === cat ? '#FF6600' : '#E5E7EB',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}