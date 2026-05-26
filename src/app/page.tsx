import MegaNav from '@/components/layout/MegaNav'
import Link from 'next/link'
import { ArrowRight, Zap, Star, Check } from 'lucide-react'
import { templates } from '@/data/templates'
import { pricingPlans } from '@/data/pricing'
import TemplateCard from '@/components/ui/TemplateCard'

export default function LandingPage() {
    return (
        <div className="oneatlas-page" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <MegaNav />

            {/* Hero */}
            <section
                className="home-hero"
                style={{
                    paddingTop: '120px',
                    paddingBottom: '80px',
                    textAlign: 'center',
                    padding: '140px 24px 80px',
                    background: '#F5F5EE',
                }}
            >
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Badge */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 14px',
                            borderRadius: '999px',
                            background: '#FFF4EC',
                            border: '1px solid #FF660030',
                            fontSize: '13px',
                            fontWeight: '500',
                            color: '#FF6600',
                            marginBottom: '24px',
                        }}
                    >
                        <Zap size={13} fill="#FF6600" />
                        Powered by latest AI models — GPT-4o, Claude 3.5, Gemini
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            fontSize: 'clamp(36px, 6vw, 72px)',
                            fontWeight: '800',
                            color: '#111111',
                            lineHeight: '1.1',
                            marginBottom: '24px',
                            letterSpacing: '-1px',
                        }}
                    >
                        Build real apps
                        <br />
                        <span className="gradient-text">not prototypes</span>
                    </h1>

                    <p
                        style={{
                            fontSize: '18px',
                            color: '#6B7280',
                            lineHeight: '1.7',
                            marginBottom: '40px',
                            maxWidth: '560px',
                            margin: '0 auto 40px',
                        }}
                    >
                        Describe any operational app in plain English. OneAtlas generates
                        the full stack — UI, backend, database, auth, and deployment — in under 90 seconds.
                    </p>

                    {/* CTAs */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '12px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '48px',
                        }}
                    >
                        <Link
                            href="/dashboard"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '14px 28px',
                                background: '#FF6600',
                                color: 'white',
                                borderRadius: '12px',
                                fontSize: '15px',
                                fontWeight: '700',
                                textDecoration: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            Start Building Free
                            <ArrowRight size={17} />
                        </Link>
                        <Link
                            href="/templates"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '14px 28px',
                                backgroundColor: 'white',
                                color: '#111111',
                                borderRadius: '12px',
                                fontSize: '15px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                border: '1px solid #E5E7EB',
                                boxShadow: 'none',
                            }}
                        >
                            Browse Templates
                        </Link>
                    </div>

                    {/* Social proof */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={14} fill="#F8BC42" color="#F8BC42" />
                            ))}
                            <span style={{ fontSize: '13px', color: '#6B7280', marginLeft: '6px' }}>
                                4.9/5 from 2,000+ builders
                            </span>
                        </div>
                        <div
                            style={{
                                width: '1px',
                                height: '16px',
                                backgroundColor: '#E5E7EB',
                            }}
                        />
                        <span style={{ fontSize: '13px', color: '#6B7280' }}>
                            10,000+ apps built this month
                        </span>
                    </div>
                </div>

                {/* Hero visual */}
                <div
                    className="hero-visual"
                    style={{
                        maxWidth: '900px',
                        margin: '64px auto 0',
                        borderRadius: '20px',
                        border: '1px solid #E5E7EB',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                        overflow: 'hidden',
                        background: '#FFFFFF',
                    }}
                >
                    {/* Mock browser bar */}
                    <div
                        style={{
                            padding: '14px 20px',
                            borderBottom: '1px solid #E5E7EB',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'white',
                        }}
                    >
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                        <div
                            className="hero-browser-address"
                            style={{
                                flex: 1,
                                height: '28px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '8px',
                                marginLeft: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: '12px',
                            }}
                        >
                            <span style={{ fontSize: '12px', color: '#6B7280' }}>app.oneatlas.io/builder</span>
                        </div>
                    </div>

                    {/* Mock app preview */}
                    <div className="hero-app-preview" style={{ display: 'flex', height: '360px' }}>
                        {/* Sidebar */}
                        <div
                            className="hero-preview-sidebar"
                            style={{
                                width: '200px',
                                borderRight: '1px solid #E5E7EB',
                                padding: '16px 12px',
                                backgroundColor: 'white',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '8px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#FF6600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: 'white', fontSize: '11px', fontWeight: 'bold' }}>C</span>
                                </div>
                                <span style={{ fontSize: '13px', fontWeight: '600', color: '#111111' }}>CRM App</span>
                            </div>
                            {['Dashboard', 'Contacts', 'Deals', 'Activities', 'Reports'].map((item, i) => (
                                <div
                                    key={item}
                                    style={{
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        fontSize: '13px',
                                        color: i === 0 ? '#FF6600' : '#6B7280',
                                        backgroundColor: i === 0 ? '#FF660012' : 'transparent',
                                        marginBottom: '2px',
                                        fontWeight: i === 0 ? '500' : '400',
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Main content */}
                        <div className="hero-preview-main" style={{ flex: 1, padding: '20px', backgroundColor: '#F5F5EE' }}>
                            <div className="hero-stats-row" style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                                {[
                                    { label: 'Total Contacts', value: '2,847', color: '#FF6600' },
                                    { label: 'Active Deals', value: '$142K', color: '#00D4B1' },
                                    { label: 'Won This Month', value: '38', color: '#F8BC42' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        style={{
                                            flex: 1,
                                            backgroundColor: 'white',
                                            borderRadius: '12px',
                                            padding: '14px',
                                            border: '1px solid #E5E7EB',
                                        }}
                                    >
                                        <p style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px' }}>{stat.label}</p>
                                        <p style={{ fontSize: '20px', fontWeight: '700', color: stat.color }}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    border: '1px solid #E5E7EB',
                                    padding: '16px',
                                }}
                            >
                                <p style={{ fontSize: '13px', fontWeight: '600', color: '#111111', marginBottom: '12px' }}>Recent Contacts</p>
                                {['Sarah Johnson', 'Michael Chen', 'Emily Davis'].map((name, i) => (
                                    <div
                                        key={name}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '8px 0',
                                            borderBottom: i < 2 ? '1px solid #FFFFFF' : 'none',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '50%',
                                                backgroundColor: ['#FF6600', '#00D4B1', '#9CA3AF'][i],
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '11px',
                                                fontWeight: '600',
                                            }}
                                        >
                                            {name[0]}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '13px', fontWeight: '500', color: '#111111' }}>{name}</p>
                                            <p style={{ fontSize: '11px', color: '#6B7280' }}>Added 2 days ago</p>
                                        </div>
                                        <span
                                            style={{
                                                marginLeft: 'auto',
                                                padding: '2px 8px',
                                                borderRadius: '5px',
                                                fontSize: '11px',
                                                backgroundColor: '#00D4B115',
                                                color: '#00A896',
                                                fontWeight: '500',
                                            }}
                                        >
                                            Active
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section
                style={{
                    padding: '80px 24px',
                    backgroundColor: '#F5F5EE',
                }}
            >
                <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#111111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                            How OneAtlas works
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6B7280', maxWidth: '480px', margin: '0 auto' }}>
                            From idea to deployed app in three steps
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {[
                            {
                                step: '01',
                                icon: '💬',
                                title: 'Describe your app',
                                desc: 'Write what you want in plain English. Be as specific or broad as you like — our AI understands intent.',
                                color: '#FF6600',
                            },
                            {
                                step: '02',
                                icon: '⚡',
                                title: 'AI generates everything',
                                desc: 'OneAtlas builds the frontend, backend, database schema, authentication, and API endpoints — all in one go.',
                                color: '#9CA3AF',
                            },
                            {
                                step: '03',
                                icon: '🚀',
                                title: 'Deploy instantly',
                                desc: 'One click to a live URL. Add a custom domain, invite collaborators, and iterate with follow-up prompts.',
                                color: '#00D4B1',
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    border: '1px solid #E5E7EB',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        fontSize: '48px',
                                        fontWeight: '800',
                                        color: `${item.color}12`,
                                        lineHeight: 1,
                                        fontFamily: 'system-ui',
                                    }}
                                >
                                    {item.step}
                                </div>
                                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111111', marginBottom: '10px' }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Showcase */}
            <section style={{ padding: '80px 24px' }}>
                <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            marginBottom: '40px',
                            flexWrap: 'wrap',
                            gap: '16px',
                        }}
                    >
                        <div>
                            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#111111', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                                Production-ready templates
                            </h2>
                            <p style={{ fontSize: '17px', color: '#6B7280' }}>
                                Not marketing pages. Real operational apps, ready to deploy.
                            </p>
                        </div>
                        <Link
                            href="/templates"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '10px 20px',
                                border: '1px solid #E5E7EB',
                                borderRadius: '10px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#FF6600',
                                textDecoration: 'none',
                            }}
                        >
                            View all templates <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '20px',
                        }}
                    >
                        {templates.slice(0, 6).map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Models */}
            <section style={{ padding: '120px 24px', backgroundColor: '#F5F5EE' }}>
                <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: '650', color: '#111111', marginBottom: '12px', letterSpacing: '-0.03em', lineHeight: 1 }}>
                        Built with the latest AI models
                    </h2>
                    <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '48px', lineHeight: 1.7 }}>
                        Choose the model that fits your use case
                    </p>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '16px',
                        }}
                    >
                        {[
                            { name: 'GPT-4o', provider: 'OpenAI', color: '#00D4B1', desc: 'Best for complex logic' },
                            { name: 'Claude 3.5', provider: 'Anthropic', color: '#9CA3AF', desc: 'Best for clean code' },
                            { name: 'Gemini Pro', provider: 'Google', color: '#F8BC42', desc: 'Best for speed' },
                            { name: 'Llama 3', provider: 'Meta', color: '#E65C00', desc: 'Best for privacy' },
                        ].map((model) => (
                            <div
                                key={model.name}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '24px',
                                    padding: '28px',
                                    border: '1px solid #E5E7EB',
                                    textAlign: 'left',
                                }}
                            >
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        backgroundColor: `${model.color}20`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '14px',
                                    }}
                                >
                                    <Zap size={18} color={model.color} />
                                </div>
                                <p style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '4px' }}>
                                    {model.name}
                                </p>
                                <p style={{ fontSize: '12px', color: model.color, marginBottom: '8px' }}>
                                    by {model.provider}
                                </p>
                                <p style={{ fontSize: '13px', color: '#6B7280' }}>
                                    {model.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Preview */}
            <section style={{ padding: '80px 24px' }}>
                <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#111111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                            Simple, transparent pricing
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6B7280' }}>
                            Start free. Upgrade when you need more.
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                            alignItems: 'start',
                        }}
                    >
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '24px',
                                    padding: '32px',
                                    border: plan.highlighted ? '1.5px solid #FF6600' : '1px solid #E5E7EB',
                                    position: 'relative',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                                }}
                            >
                                {plan.highlighted && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            padding: '4px 14px',
                                            background: '#FF6600',
                                            borderRadius: '999px',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            color: 'white',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        Most popular
                                    </div>
                                )}
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        color: '#111111',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '13px',
                                        color: '#6B7280',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {plan.description}
                                </p>
                                <div style={{ marginBottom: '24px' }}>
                                    <span
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: '700',
                                            color: '#111111',
                                        }}
                                    >
                                        {plan.price}
                                    </span>
                                    {plan.price !== 'Custom' && (
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: '#6B7280',
                                            }}
                                        >
                                            /month
                                        </span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '28px' }}>
                                    {plan.features.map((feature) => (
                                        <div
                                            key={feature}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '10px',
                                            }}
                                        >
                                            <Check
                                                size={15}
                                                color="#FF6600"
                                                strokeWidth={2.5}
                                            />
                                            <span
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#6B7280',
                                                }}
                                            >
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/dashboard"
                                    style={{
                                        display: 'block',
                                        height: '48px',
                                        lineHeight: '48px',
                                        textAlign: 'center',
                                        borderRadius: '12px',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        background: plan.highlighted
                                            ? '#FF6600'
                                            : 'white',
                                        border: plan.highlighted ? 'none' : '1px solid #E5E7EB',
                                        color: plan.highlighted ? 'white' : '#111111',
                                        boxShadow: 'none',
                                    }}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '80px 24px', backgroundColor: '#F5F5EE' }}>
                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <h2
                        style={{
                            fontSize: '40px',
                            fontWeight: '800',
                            color: '#111111',
                            marginBottom: '48px',
                            textAlign: 'center',
                            letterSpacing: '-0.5px',
                        }}
                    >
                        Frequently asked questions
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { q: 'Can I export the generated code?', a: 'Yes. Every app generated by OneAtlas is fully exportable. You own the code and can self-host it anywhere.' },
                            { q: 'What kind of apps can I build?', a: 'Any operational web app — CRMs, dashboards, admin panels, booking systems, inventory managers, support tools, and more.' },
                            { q: 'Do I need to know how to code?', a: 'No. OneAtlas is designed for both technical and non-technical builders. Describe your app and we handle the rest.' },
                            { q: 'How is OneAtlas different from Bubble or Webflow?', a: 'OneAtlas generates production-ready full-stack code (not visual blocks), supports real databases, and deploys to actual infrastructure — not a locked platform.' },
                        ].map((item) => (
                            <div
                                key={item.q}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    padding: '20px 24px',
                                    border: '1px solid #E5E7EB',
                                }}
                            >
                                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#111111', marginBottom: '8px' }}>
                                    {item.q}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7' }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: '#FFFFFF',
                    padding: '60px 24px 32px',
                    color: '#9CA3AF',
                    borderTop: '1px solid #E5E7EB',
                }}
            >
                <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: '32px',
                            marginBottom: '48px',
                        }}
                    >
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <div
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '7px',
                                        background: '#FF6600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <span style={{ color: 'white', fontWeight: '800', fontSize: '12px' }}>O</span>
                                </div>
                                <span style={{ color: '#111111', fontWeight: '700', fontSize: '15px' }}>OneAtlas</span>
                            </div>
                            <p style={{ fontSize: '13px', lineHeight: '1.6' }}>
                                Build real apps, not prototypes. Powered by AI.
                            </p>
                        </div>
                        {[
                            {
                                title: 'Product',
                                links: [
                                    { label: 'Templates', href: '/templates' },
                                    { label: 'Pricing', href: '/pricing' },
                                    { label: 'Enterprise', href: '/enterprise' },
                                    { label: 'Security', href: '/security' },
                                    { label: 'Updates', href: '/blog' },
                                ],
                            },
                            {
                                title: 'Resources',
                                links: [
                                    { label: 'Docs', href: '/docs' },
                                    { label: 'Blog', href: '/blog' },
                                    { label: 'Support', href: '/support' },
                                    { label: 'Status', href: '/support' },
                                    { label: 'API Reference', href: '/docs' },
                                ],
                            },
                            {
                                title: 'Company',
                                links: [
                                    { label: 'About', href: '/enterprise' },
                                    { label: 'Careers', href: '/support' },
                                    { label: 'Press', href: '/blog' },
                                    { label: 'Contact', href: '/support' },
                                    { label: 'Privacy', href: '/security' },
                                ],
                            },
                        ].map((col) => (
                            <div key={col.title}>
                                <h4 style={{ color: '#111111', fontWeight: '600', fontSize: '13px', marginBottom: '14px' }}>
                                    {col.title}
                                </h4>
                                {col.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        style={{
                                            display: 'block',
                                            fontSize: '13px',
                                            color: '#6B7280',
                                            textDecoration: 'none',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid #E5E7EB',
                            paddingTop: '24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '12px',
                        }}
                    >
                        <p style={{ fontSize: '13px' }}>© 2025 OneAtlas. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            {[
                                { label: 'Privacy', href: '/security' },
                                { label: 'Terms', href: '/docs' },
                                { label: 'Cookies', href: '/security' },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    style={{
                                        fontSize: '13px',
                                        color: '#6B7280',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
