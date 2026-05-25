import MegaNav from '@/components/layout/MegaNav'
import { Shield, Lock, Eye, Server, RefreshCw, CheckCircle } from 'lucide-react'

const items = [
  { icon: Shield, title: 'SOC 2 Type II', desc: 'Annually audited. Security, availability, and confidentiality trust service criteria verified.', color: '#635BFF' },
  { icon: Lock, title: 'Data Encryption', desc: 'All data encrypted at rest (AES-256) and in transit (TLS 1.3). Keys managed with HSM.', color: '#00D4B1' },
  { icon: Eye, title: 'Zero Trust Access', desc: 'Every request authenticated and authorized. No implicit trust inside or outside the network.', color: '#FF5996' },
  { icon: Server, title: 'Infrastructure Security', desc: 'Hosted on AWS with VPC isolation, private subnets, and WAF protection.', color: '#F8BC42' },
  { icon: RefreshCw, title: 'Disaster Recovery', desc: 'Automated backups every 6 hours. RPO under 1 hour, RTO under 4 hours.', color: '#7A73FF' },
  { icon: CheckCircle, title: 'Vulnerability Management', desc: 'Continuous scanning, quarterly pentests, and a public responsible disclosure program.', color: '#FFB17A' },
]

export default function SecurityPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />

      <section style={{ paddingTop: '120px', padding: '120px 24px 60px', textAlign: 'center', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,177,0.07) 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', backgroundColor: '#00D4B115', border: '1px solid #00D4B130', fontSize: '13px', fontWeight: '500', color: '#00A896', marginBottom: '20px' }}>
          <Shield size={13} /> Security first
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '16px', letterSpacing: '-1px' }}>
          Your data is safe with us
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-body)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
          OneAtlas is built with security at every layer. From infrastructure to application, we protect your data.
        </p>
      </section>

      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {items.map((item) => (
            <div key={item.title} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '20px', padding: '28px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <item.icon size={20} color={item.color} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '32px' }}>
            Certifications & Compliance
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {['SOC 2 Type II', 'GDPR', 'CCPA', 'HIPAA Ready', 'ISO 27001', 'PCI DSS'].map((cert) => (
              <div key={cert} style={{ padding: '12px 24px', borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card-bg)', fontSize: '14px', fontWeight: '600', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={15} color="#00D4B1" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}