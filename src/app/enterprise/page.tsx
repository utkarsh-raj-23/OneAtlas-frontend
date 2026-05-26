import MegaNav from '@/components/layout/MegaNav'
import Link from 'next/link'
import { Shield, Zap, Users, Globe, Lock, BarChart } from 'lucide-react'

const features = [
  { icon: Shield, title: 'SSO & SAML', desc: 'Single sign-on with your existing identity provider. Support for Okta, Azure AD, Google Workspace.', color: '#FF6600' },
  { icon: Lock, title: 'Audit Logs', desc: 'Full audit trail of every action taken in your workspace. Export to your SIEM.', color: '#9CA3AF' },
  { icon: Users, title: 'Advanced Permissions', desc: 'Role-based access control with granular permissions at app, page, and data level.', color: '#00D4B1' },
  { icon: Globe, title: 'Custom Domains', desc: 'Deploy apps to your own domain with SSL certificates managed automatically.', color: '#F8BC42' },
  { icon: BarChart, title: 'Usage Analytics', desc: 'Detailed usage metrics, cost allocation by team, and executive dashboards.', color: '#E65C00' },
  { icon: Zap, title: 'Priority Support', desc: 'Dedicated success manager, SLA guarantee, and 24/7 emergency support.', color: '#FFB17A' },
]

export default function EnterprisePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />

      {/* Hero */}
      <section style={{ paddingTop: '120px', padding: '120px 24px 80px', background: '#F5F5EE', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', backgroundColor: '#FF660014', border: '1px solid #FF660030', fontSize: '13px', fontWeight: '500', color: '#FF6600', marginBottom: '20px' }}>
          Enterprise
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '16px', letterSpacing: '-1px', maxWidth: '800px', margin: '0 auto 16px' }}>
          OneAtlas for the enterprise
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-body)', maxWidth: '520px', margin: '0 auto 36px', lineHeight: '1.7' }}>
          Security, compliance, and governance controls built for teams that operate at scale.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', height: '48px', padding: '0 22px', background: '#FF6600', color: 'white', borderRadius: '12px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', boxShadow: 'none' }}>
            Talk to sales
          </Link>
          <Link href="/docs" style={{ display: 'inline-flex', alignItems: 'center', height: '48px', padding: '0 22px', border: '1px solid var(--border)', color: 'var(--text-heading)', borderRadius: '12px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', backgroundColor: 'var(--card-bg)' }}>
            Read docs
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--text-heading)', textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.5px' }}>
          Built for enterprise teams
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {features.map((f) => (
            <div key={f.title} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '20px', padding: '28px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: `${f.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <f.icon size={20} color={f.color} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '8px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.7' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '60px 40px', textAlign: 'center', border: '1px solid var(--border)', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '650', color: 'var(--text-heading)', marginBottom: '12px' }}>
            Ready to deploy at scale?
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', marginBottom: '32px' }}>
            Join 200+ enterprise teams already building on OneAtlas
          </p>
          <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '48px', padding: '0 22px', background: '#FF6600', color: 'white', borderRadius: '12px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', boxShadow: 'none' }}>
            Contact sales
          </Link>
        </div>
      </section>
    </div>
  )
}
