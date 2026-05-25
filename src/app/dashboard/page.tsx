import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/MegaNav'
import HeroSection from '@/components/home/HeroSection'
import CategoryPills from '@/components/home/CategoryPills'
import TemplateCard from '@/components/ui/TemplateCard'
import { Template } from '@/types'

const templates: Template[] = [
  { id: 'crm-dashboard', name: 'CRM Dashboard', description: 'Manage contacts, deals and sales pipeline with AI assistance', category: 'CRM & Sales', color: '#635BFF', complexity: 'Moderate', icon: '📇', tags: ['crm', 'sales'] },
  { id: 'task-manager', name: 'Task Manager', description: 'Track tasks, deadlines and team workflows automatically', category: 'Tasks', color: '#00D4B1', complexity: 'Simple', icon: '✅', tags: ['tasks', 'productivity'] },
  { id: 'invoice-generator', name: 'Invoice Generator', description: 'Create and send professional invoices with one click', category: 'Finance', color: '#FF5996', complexity: 'Simple', icon: '🧾', tags: ['finance', 'invoices'] },
  { id: 'booking-system', name: 'Booking System', description: 'Let customers book appointments and manage schedules', category: 'Booking', color: '#F59E0B', complexity: 'Moderate', icon: '📅', tags: ['booking', 'scheduling'] },
  { id: 'blog-platform', name: 'Blog Platform', description: 'Create and publish blog posts with AI writing assistance', category: 'Content', color: '#8B5CF6', complexity: 'Simple', icon: '✍️', tags: ['blog', 'content'] },
  { id: 'hr-portal', name: 'HR Portal', description: 'Manage employees, leaves and attendance tracking easily', category: 'HR & People', color: '#10B981', complexity: 'Moderate', icon: '🧑‍💼', tags: ['hr', 'people'] },
  { id: 'analytics-board', name: 'Analytics Board', description: 'Visualize your business data with beautiful charts', category: 'Analytics', color: '#0EA5E9', complexity: 'Advanced', icon: '📊', tags: ['analytics', 'charts'] },
  { id: 'inventory-app', name: 'Inventory App', description: 'Track stock levels, orders and suppliers in one place', category: 'Operations', color: '#F43F5E', complexity: 'Moderate', icon: '📦', tags: ['inventory', 'ops'] },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#FAFBFF' }}>
      <Sidebar />

      {/* Main content pushed right of sidebar */}
      <div style={{ marginLeft: '224px', flex: 1, minWidth: 0 }}>

        {/* Top navbar */}
        <Navbar />

        {/* Page content below navbar */}
        <main style={{ paddingTop: '56px' }}>

          {/* Hero gradient section */}
          <div style={{ background: 'linear-gradient(to bottom, #fff7ed, #fef3e2, #FAFBFF)' }}>
            <HeroSection />
            <CategoryPills />
          </div>

          {/* Templates */}
          <div style={{ padding: '32px 24px' }}>

            {/* Trending strip */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#0A2540' }}>
                  Trending templates
                </h2>
                <button style={{ fontSize: '14px', color: '#635BFF', background: 'none', border: 'none', cursor: 'pointer' }}>
                  See all →
                </button>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '16px',
              }}>
                {templates.slice(0, 4).map((t) => (
                  <TemplateCard key={t.name} template={t} />
                ))}
              </div>
            </div>

            {/* Featured */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#0A2540' }}>
                  Featured for you
                </h2>
                <button style={{ fontSize: '14px', color: '#635BFF', background: 'none', border: 'none', cursor: 'pointer' }}>
                  See all →
                </button>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '16px',
              }}>
                {templates.slice(4).map((t) => (
                  <TemplateCard key={t.name + 'f'} template={t} />
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}