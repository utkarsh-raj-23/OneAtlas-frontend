import MegaNav from '@/components/layout/MegaNav'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { pricingPlans } from '@/data/pricing'

const faqs = [
  { q: 'Can I change plans at any time?', a: 'Yes. Upgrade or downgrade anytime. Changes take effect immediately.' },
  { q: 'What counts as one AI generation?', a: 'Each time you generate or significantly regenerate an app using a prompt counts as one generation.' },
  { q: 'Do you offer refunds?', a: 'Yes, we offer a 14-day money-back guarantee on all paid plans, no questions asked.' },
  { q: 'Can I export my code?', a: 'Yes on all plans. Your code is yours. Export, self-host, or push to GitHub anytime.' },
  { q: 'Is there a free trial for Pro?', a: 'Yes — new users get a 14-day Pro trial automatically when they sign up.' },
]

export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <MegaNav />

      {/* Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', padding: '120px 24px 60px', background: '#F5F5EE' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', backgroundColor: '#FF660014', border: '1px solid #FF660030', fontSize: '13px', fontWeight: '500', color: '#FF6600', marginBottom: '20px' }}>
          <Zap size={13} fill="#FF6600" /> Simple pricing
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '14px', letterSpacing: '-0.5px' }}>
          Start free, scale as you grow
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto' }}>
          No hidden fees. No surprise charges. Cancel anytime.
        </p>
      </section>

      {/* Plans */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'start' }}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '24px',
                padding: '32px',
                border: plan.highlighted ? '1.5px solid #FF6600' : '1px solid var(--border)',
                position: 'relative',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              }}
            >
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', background: '#FF6600', borderRadius: '999px', fontSize: '12px', fontWeight: '700', color: 'white', whiteSpace: 'nowrap' }}>
                  Most popular
                </div>
              )}
              <h3 style={{ fontSize: '22px', fontWeight: '600', color: 'var(--text-heading)', marginBottom: '6px' }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', marginBottom: '20px' }}>
                {plan.description}
              </p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: '700', color: 'var(--text-heading)' }}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span style={{ fontSize: '14px', color: 'var(--text-body)' }}>
                    /month
                  </span>
                )}
              </div>
              <div style={{ marginBottom: '28px' }}>
                {plan.features.map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Check size={15} color="#FF6600" strokeWidth={2.5} />
                    <span style={{ fontSize: '14px', color: 'var(--text-body)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/dashboard" style={{ display: 'block', height: '48px', lineHeight: '48px', textAlign: 'center', borderRadius: '12px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', background: plan.highlighted ? '#FF6600' : 'white', border: plan.highlighted ? 'none' : '1px solid var(--border)', color: plan.highlighted ? 'white' : 'var(--text-heading)', boxShadow: 'none' }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '40px', textAlign: 'center', letterSpacing: '-0.5px' }}>
          Frequently asked questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((item) => (
            <div key={item.q} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '14px', padding: '20px 24px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-heading)', marginBottom: '8px' }}>
                {item.q}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.7' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
