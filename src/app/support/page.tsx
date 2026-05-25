import MegaNav from '@/components/layout/MegaNav'
import { MessageCircle, BookOpen, Zap, Mail } from 'lucide-react'

const options = [
  { icon: MessageCircle, title: 'Live Chat', desc: 'Chat with our support team in real time. Available Mon–Fri, 9am–6pm EST.', action: 'Start chat', color: '#635BFF' },
  { icon: BookOpen, title: 'Documentation', desc: 'Browse our full documentation including guides, API reference, and tutorials.', action: 'View docs', href: '/docs', color: '#00D4B1' },
  { icon: Zap, title: 'Status Page', desc: 'Check current system status and subscribe to incident notifications.', action: 'View status', color: '#F8BC42' },
  { icon: Mail, title: 'Email Support', desc: 'Send us an email and we will respond within 24 hours on business days.', action: 'Send email', color: '#FF5996' },
]

const faqs = [
  { q: 'How do I reset my password?', a: 'Click "Forgot password" on the login page. You will receive an email within 2 minutes.' },
  { q: 'How do I cancel my subscription?', a: 'Go to Settings → Billing → Cancel Plan. Your access continues until the end of the billing period.' },
  { q: 'Can I transfer apps between workspaces?', a: 'Yes. From the app settings, use Export App and import it into the new workspace.' },
  { q: 'Why is my deployment failing?', a: 'Check the deployment logs in the builder. Common issues are missing environment variables or build errors.' },
]

export default function SupportPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />

      <section style={{ paddingTop: '120px', padding: '120px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '14px', letterSpacing: '-0.5px' }}>
          How can we help?
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-body)', maxWidth: '440px', margin: '0 auto 32px' }}>
          Our support team is here to help you build and ship faster.
        </p>
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <input placeholder="Search for help..." style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '14px', color: 'var(--text-heading)', outline: 'none', backgroundColor: 'var(--card-bg)' }} />
        </div>
      </section>

      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 24px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {options.map((opt) => (
            <div key={opt.title} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '20px', padding: '28px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: `${opt.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <opt.icon size={22} color={opt.color} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '8px' }}>{opt.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '20px' }}>{opt.desc}</p>
              <button style={{ padding: '9px 20px', borderRadius: '9px', border: `1px solid ${opt.color}40`, backgroundColor: `${opt.color}12`, color: opt.color, fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                {opt.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '32px', textAlign: 'center' }}>
          Common questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((item) => (
            <div key={item.q} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '14px', padding: '20px 24px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-heading)', marginBottom: '8px' }}>{item.q}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.7' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}