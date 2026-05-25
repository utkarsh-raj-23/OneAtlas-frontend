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
      <section style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', padding: '120px 24px 60px', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,91,255,0.07) 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', backgroundColor: '#635BFF15', border: '1px solid #635BFF30', fontSize: '13px', fontWeight: '500', color: '#635BFF', marginBottom: '20px' }}>
          <Zap size={13} fill="#635BFF" /> Simple pricing
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
                backgroundColor: plan.highlighted ? '#0A2540' : 'var(--card-bg)',
                borderRadius: '20px',
                padding: '32px',
                border: plan.highlighted ? 'none' : '1px solid var(--border)',
                position: 'relative',
                boxShadow: plan.highlighted ? '0 8px 40px rgba(99,91,255,0.25)' : 'none',
              }}
            >
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', background: 'linear-gradient(135deg, #635BFF, #FF5996)', borderRadius: '999px', fontSize: '12px', fontWeight: '700', color: 'white', whiteSpace: 'nowrap' }}>
                  Most popular
                </div>
              )}
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: plan.highlighted ? 'white' : 'var(--text-heading)', marginBottom: '6px' }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: '13px', color: plan.highlighted ? 'rgba(255,255,255,0.6)' : 'var(--text-body)', marginBottom: '20px' }}>
                {plan.description}
              </p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: '800', color: plan.highlighted ? 'white' : 'var(--text-heading)' }}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span style={{ fontSize: '14px', color: plan.highlighted ? 'rgba(255,255,255,0.5)' : 'var(--text-body)' }}>
                    /month
                  </span>
                )}
              </div>
              <div style={{ marginBottom: '28px' }}>
                {plan.features.map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Check size={15} color={plan.highlighted ? '#00D4B1' : '#635BFF'} strokeWidth={2.5} />
                    <span style={{ fontSize: '14px', color: plan.highlighted ? 'rgba(255,255,255,0.8)' : 'var(--text-body)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/dashboard" style={{ display: 'block', padding: '13px', textAlign: 'center', borderRadius: '12px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', background: plan.highlighted ? 'linear-gradient(135deg, #635BFF, #7A73FF)' : 'transparent', border: plan.highlighted ? 'none' : '1px solid var(--border)', color: plan.highlighted ? 'white' : 'var(--text-heading)', boxShadow: plan.highlighted ? '0 4px 16px rgba(99,91,255,0.35)' : 'none' }}>
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