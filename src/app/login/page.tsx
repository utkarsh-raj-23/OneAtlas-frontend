'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F5F5EE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          border: '1px solid #E5E7EB',
          padding: '40px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 4px 24px rgba(0,0,0,0.03)',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: '#FF6600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>O</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#111111' }}>
              OneAtlas
            </span>
          </Link>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111111', marginBottom: '6px' }}>
            {isRegister ? 'Create your account' : 'Welcome back'}
          </h1>
          <p style={{ fontSize: '14px', color: '#6B7280' }}>
            {isRegister ? 'Start building with AI today' : 'Sign in to continue building'}
          </p>
        </div>

        {/* Google */}
        <button
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '11px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#111111',
            backgroundColor: 'white',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" />
            <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" />
            <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" />
            <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.31z" />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
          <span style={{ fontSize: '12px', color: '#6B7280' }}>or</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
        </div>

        {/* Fields */}
        {isRegister && (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
            style={{
              width: '100%',
              padding: '11px 16px',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#111111',
              marginBottom: '12px',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        )}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          style={{
            width: '100%',
            padding: '11px 16px',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            fontSize: '14px',
            color: '#111111',
            marginBottom: '12px',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '11px 16px',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            fontSize: '14px',
            color: '#111111',
            marginBottom: '20px',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />

        <button
          onClick={() => router.push('/dashboard')}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#FF6600',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          {isRegister ? 'Create Account' : 'Sign in'}
          <ArrowRight size={16} />
        </button>

        <p style={{ textAlign: 'center', fontSize: '14px', color: '#6B7280' }}>
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{
              color: '#FF6600',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {isRegister ? 'Sign in' : 'Sign up free'}
          </button>
        </p>
      </div>
    </div>
  )
}