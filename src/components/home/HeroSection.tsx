'use client'
import { useState } from 'react'
import { Plus, SlidersHorizontal, Mic, ArrowUp, Layout } from 'lucide-react'

export default function HeroSection() {
  const [prompt, setPrompt] = useState('')
  const [planEnabled, setPlanEnabled] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px 24px',
      }}
    >
      {/* Offer banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'linear-gradient(to right, #f97316, #fb923c)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '999px',
          marginBottom: '24px',
          fontSize: '13px',
          fontWeight: '500',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <span>Limited time welcome offer</span>
        <button
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          Get 30% off select yearly plans ↗
        </button>
        <span style={{ fontFamily: 'monospace', fontWeight: 'bold', letterSpacing: '2px' }}>
          47 : 58 : 57
        </span>
      </div>

      {/* Superagent button */}
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'white',
          border: '1px solid #E3E8EE',
          color: '#425466',
          padding: '8px 16px',
          borderRadius: '999px',
          fontSize: '13px',
          marginBottom: '24px',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '12px', color: '#635BFF' }}>⚡</span>
        Go to your Superagent →
      </button>

      {/* Heading */}
      <h1
        style={{
          fontSize: '44px',
          fontWeight: '700',
          color: '#0A2540',
          textAlign: 'center',
          marginBottom: '32px',
          lineHeight: '1.2',
        }}
      >
        What will you build next?
      </h1>

      {/* Prompt box */}
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '1px solid #E3E8EE',
          padding: '16px',
          boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the app you want to create..."
          style={{
            width: '100%',
            resize: 'none',
            outline: 'none',
            fontSize: '14px',
            color: '#425466',
            backgroundColor: 'transparent',
            border: 'none',
            minHeight: '80px',
            fontFamily: 'inherit',
          }}
          rows={3}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[Plus, Layout, SlidersHorizontal].map((Icon, i) => (
              <button
                key={i}
                style={{
                  padding: '6px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: '#425466',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#425466' }}>
              <span>Plan</span>
              <button
                onClick={() => setPlanEnabled(!planEnabled)}
                style={{
                  position: 'relative',
                  width: '36px',
                  height: '20px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: planEnabled ? '#635BFF' : '#E3E8EE',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: planEnabled ? '18px' : '2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    transition: 'left 0.2s',
                  }}
                />
              </button>
            </div>

            <button
              style={{
                padding: '6px',
                borderRadius: '8px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: '#425466',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Mic size={18} />
            </button>

            <button
              disabled={!prompt.trim()}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: prompt.trim() ? '#635BFF' : '#E3E8EE',
                color: 'white',
                cursor: prompt.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}