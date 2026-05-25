'use client'
import { useState } from 'react'
import { useBuilderStore, mockComponentTree } from '@/store/builderStore'
import {
  ChevronRight,
  ChevronDown,
  Share2,
  Rocket,
  PanelLeft,
  PanelRight,
  Send,
  Wifi,
  Clock,
  Code2,
  Eye,
  Settings,
  Layers,
} from 'lucide-react'
import { BuilderComponent } from '@/types'

type BuilderTab = 'preview' | 'code'

function ComponentTreeItem({ item, depth = 0 }: { item: BuilderComponent; depth?: number }) {
  const [open, setOpen] = useState(depth < 2)
  const { selectedComponent, setSelectedComponent } = useBuilderStore()
  const isSelected = selectedComponent === item.id

  return (
    <div>
      <div
        onClick={() => {
          setSelectedComponent(item.id)
          if (item.children) setOpen(!open)
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '5px 8px',
          paddingLeft: `${8 + depth * 14}px`,
          borderRadius: '7px',
          cursor: 'pointer',
          backgroundColor: isSelected ? '#635BFF15' : 'transparent',
          color: isSelected ? '#635BFF' : '#425466',
          fontSize: '13px',
          marginBottom: '1px',
        }}
      >
        {item.children ? (
          open ? <ChevronDown size={12} /> : <ChevronRight size={12} />
        ) : (
          <div style={{ width: '12px' }} />
        )}
        <Layers size={12} style={{ flexShrink: 0 }} />
        <span style={{ marginLeft: '4px' }}>{item.label}</span>
        <span
          style={{
            marginLeft: 'auto',
            fontSize: '10px',
            color: '#E3E8EE',
            backgroundColor: '#F6F9FC',
            padding: '1px 5px',
            borderRadius: '4px',
          }}
        >
          {item.type}
        </span>
      </div>
      {open && item.children?.map((child) => (
        <ComponentTreeItem key={child.id} item={child} depth={depth + 1} />
      ))}
    </div>
  )
}

function MockCanvas() {
  return (
    <div className="mock-canvas" style={{ display: 'flex', height: '100%', backgroundColor: '#FAFBFF' }}>
      {/* Mock sidebar */}
      <div
        className="mock-preview-sidebar"
        style={{
          width: '180px',
          borderRight: '1px solid #E3E8EE',
          backgroundColor: 'white',
          padding: '16px 12px',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', padding: '6px 8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '5px', backgroundColor: '#635BFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>C</span>
          </div>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#0A2540' }}>CRM App</span>
        </div>
        {['Dashboard', 'Contacts', 'Deals', 'Activities', 'Reports', 'Settings'].map((item, i) => (
          <div
            key={item}
            style={{
              padding: '7px 10px',
              borderRadius: '7px',
              fontSize: '12px',
              color: i === 0 ? '#635BFF' : '#425466',
              backgroundColor: i === 0 ? '#635BFF12' : 'transparent',
              marginBottom: '2px',
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Mock main */}
      <div className="mock-preview-main" style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        <div className="mock-preview-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0A2540' }}>Dashboard</h2>
          <button style={{ padding: '7px 14px', background: '#635BFF', color: 'white', border: 'none', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
            + Add Contact
          </button>
        </div>

        {/* Stats */}
        <div className="mock-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {[
            { label: 'Total Contacts', value: '2,847', change: '+12%', color: '#635BFF' },
            { label: 'Active Deals', value: '$142K', change: '+8%', color: '#00D4B1' },
            { label: 'Won This Month', value: '38', change: '+23%', color: '#F8BC42' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #E3E8EE',
              }}
            >
              <p style={{ fontSize: '11px', color: '#425466', marginBottom: '6px' }}>{stat.label}</p>
              <p style={{ fontSize: '22px', fontWeight: '800', color: stat.color, marginBottom: '4px' }}>{stat.value}</p>
              <p style={{ fontSize: '11px', color: '#00A896' }}>{stat.change} this month</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E3E8EE', overflow: 'hidden' }}>
          <div className="mock-table-header" style={{ padding: '14px 16px', borderBottom: '1px solid #E3E8EE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '13px', fontWeight: '600', color: '#0A2540' }}>Recent Contacts</p>
            <input
              placeholder="Search..."
              style={{ padding: '5px 10px', border: '1px solid #E3E8EE', borderRadius: '7px', fontSize: '12px', outline: 'none', width: '140px' }}
            />
          </div>
          {['Sarah Johnson', 'Michael Chen', 'Emily Davis', 'James Wilson'].map((name, i) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderBottom: i < 3 ? '1px solid #F6F9FC' : 'none',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: ['#635BFF', '#00D4B1', '#FF5996', '#F8BC42'][i],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: '600',
                  flexShrink: 0,
                }}
              >
                {name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: '500', color: '#0A2540' }}>{name}</p>
                <p style={{ fontSize: '11px', color: '#425466' }}>Enterprise · Added {i + 1}d ago</p>
              </div>
              <span style={{ padding: '3px 8px', borderRadius: '5px', fontSize: '11px', backgroundColor: '#00D4B115', color: '#00A896', fontWeight: '500' }}>
                Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BuilderPage() {
  const {
    appName, setAppName,
    leftPanelOpen, rightPanelOpen,
    toggleLeftPanel, toggleRightPanel,
    selectedComponent, schemaVersion, connectionStatus,
  } = useBuilderStore()

  const [editingName, setEditingName] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [activeTab, setActiveTab] = useState<BuilderTab>('preview')
  const tabs: { id: BuilderTab; icon: typeof Eye; label: string }[] = [
    { id: 'preview', icon: Eye, label: 'Preview' },
    { id: 'code', icon: Code2, label: 'Code' },
  ]

  return (
    <div className="builder-shell" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAFBFF', overflow: 'hidden' }}>

      {/* Top bar */}
      <div
        className="builder-topbar"
        style={{
          height: '52px',
          backgroundColor: 'white',
          borderBottom: '1px solid #E3E8EE',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '12px',
          flexShrink: 0,
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: 'linear-gradient(135deg, #635BFF, #7A73FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: '800', fontSize: '11px' }}>O</span>
          </div>
        </div>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#E3E8EE' }} />

        {/* Panel toggles */}
        <button
          onClick={toggleLeftPanel}
          title="Toggle left panel"
          style={{
            padding: '6px',
            borderRadius: '7px',
            border: 'none',
            backgroundColor: leftPanelOpen ? '#635BFF15' : 'transparent',
            color: leftPanelOpen ? '#635BFF' : '#425466',
            cursor: 'pointer',
            display: 'flex',
          }}
        >
          <PanelLeft size={16} />
        </button>
        <button
          onClick={toggleRightPanel}
          title="Toggle right panel"
          style={{
            padding: '6px',
            borderRadius: '7px',
            border: 'none',
            backgroundColor: rightPanelOpen ? '#635BFF15' : 'transparent',
            color: rightPanelOpen ? '#635BFF' : '#425466',
            cursor: 'pointer',
            display: 'flex',
          }}
        >
          <PanelRight size={16} />
        </button>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#E3E8EE' }} />

        {/* App name */}
        {editingName ? (
          <input
            autoFocus
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            onBlur={() => setEditingName(false)}
            onKeyDown={(e) => e.key === 'Enter' && setEditingName(false)}
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#0A2540',
              border: '1px solid #635BFF',
              borderRadius: '7px',
              padding: '4px 10px',
              outline: 'none',
              minWidth: '160px',
            }}
          />
        ) : (
          <button
            onClick={() => setEditingName(true)}
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#0A2540',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: '7px',
            }}
            title="Click to rename"
          >
            {appName}
          </button>
        )}

        {/* Schema version */}
        <span
          style={{
            fontSize: '11px',
            color: '#425466',
            backgroundColor: '#F6F9FC',
            padding: '3px 8px',
            borderRadius: '6px',
            fontFamily: 'monospace',
          }}
        >
          {schemaVersion}
        </span>

        {/* Tabs */}
        <div
          className="builder-tabs"
          style={{
            display: 'flex',
            gap: '2px',
            backgroundColor: '#F6F9FC',
            borderRadius: '9px',
            padding: '3px',
            marginLeft: 'auto',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 12px',
                borderRadius: '7px',
                border: 'none',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? '#0A2540' : '#425466',
                boxShadow: activeTab === tab.id ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <tab.icon size={13} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="builder-actions" style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              border: '1px solid #E3E8EE',
              borderRadius: '9px',
              backgroundColor: 'white',
              fontSize: '13px',
              fontWeight: '500',
              color: '#425466',
              cursor: 'pointer',
            }}
          >
            <Share2 size={14} />
            <span>Share</span>
          </button>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              border: 'none',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #635BFF, #7A73FF)',
              fontSize: '13px',
              fontWeight: '600',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(99,91,255,0.3)',
            }}
          >
            <Rocket size={14} />
            <span>Deploy</span>
          </button>
        </div>
      </div>

      {/* Main 3-panel area */}
      <div className="builder-panels" style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* Left Panel — Component Tree */}
        {leftPanelOpen && (
          <div
            className="builder-left-panel"
            style={{
              width: '240px',
              borderRight: '1px solid #E3E8EE',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid #E3E8EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#0A2540' }}>
                Component Tree
              </span>
              <Layers size={14} color="#425466" />
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
              {mockComponentTree.map((item) => (
                <ComponentTreeItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Center — Canvas */}
        <div className="builder-canvas-wrap" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
          <div className="builder-canvas-scroll" style={{ flex: 1, overflow: 'hidden' }}>
            {activeTab === 'preview' ? (
              <MockCanvas />
            ) : (
              <div style={{ padding: '24px', height: '100%', overflow: 'auto', backgroundColor: '#1A1F36' }}>
                <pre style={{ color: '#7A73FF', fontSize: '13px', lineHeight: '1.8', fontFamily: 'monospace' }}>
{`// Generated by OneAtlas
import { useState } from 'react'

export default function CRMDashboard() {
  const [contacts] = useState([
    { id: 1, name: 'Sarah Johnson', status: 'Active' },
    { id: 2, name: 'Michael Chen', status: 'Active' },
  ])

  return (
    <div className="crm-layout">
      <Sidebar />
      <main>
        <StatsGrid />
        <ContactsTable data={contacts} />
      </main>
    </div>
  )
}`}
                </pre>
              </div>
            )}
          </div>

          {/* Prompt strip */}
          <div
            className="builder-prompt"
            style={{
              borderTop: '1px solid #E3E8EE',
              padding: '12px 16px',
              backgroundColor: 'white',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe a change... (e.g. 'Add a revenue chart below the stats')"
              style={{
                flex: 1,
                padding: '10px 14px',
                border: '1px solid #E3E8EE',
                borderRadius: '10px',
                fontSize: '13px',
                color: '#0A2540',
                outline: 'none',
                backgroundColor: '#FAFBFF',
              }}
            />
            <button
              disabled={!prompt.trim()}
              style={{
                padding: '10px 16px',
                borderRadius: '10px',
                border: 'none',
                background: prompt.trim() ? 'linear-gradient(135deg, #635BFF, #7A73FF)' : '#E3E8EE',
                color: prompt.trim() ? 'white' : '#425466',
                cursor: prompt.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              <Send size={14} />
              Send
            </button>
          </div>
        </div>

        {/* Right Panel — Properties */}
        {rightPanelOpen && (
          <div
            className="builder-right-panel"
            style={{
              width: '240px',
              borderLeft: '1px solid #E3E8EE',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid #E3E8EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#0A2540' }}>
                Properties
              </span>
              <Settings size={14} color="#425466" />
            </div>
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              {selectedComponent ? (
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#0A2540', marginBottom: '14px' }}>
                    Selected: <span style={{ color: '#635BFF' }}>{selectedComponent}</span>
                  </p>
                  {[
                    { label: 'Width', value: '100%' },
                    { label: 'Background', value: '#ffffff' },
                    { label: 'Border Radius', value: '12px' },
                    { label: 'Padding', value: '16px' },
                  ].map((prop) => (
                    <div key={prop.label} style={{ marginBottom: '12px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '500', color: '#425466', display: 'block', marginBottom: '4px' }}>
                        {prop.label}
                      </label>
                      <input
                        defaultValue={prop.value}
                        style={{
                          width: '100%',
                          padding: '7px 10px',
                          border: '1px solid #E3E8EE',
                          borderRadius: '8px',
                          fontSize: '12px',
                          color: '#0A2540',
                          outline: 'none',
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', paddingTop: '40px', color: '#425466' }}>
                  <Layers size={28} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
                  <p style={{ fontSize: '13px' }}>Select a component to edit its properties</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div
        className="builder-status"
        style={{
          height: '30px',
          backgroundColor: '#0A2540',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '20px',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: connectionStatus === 'connected' ? '#00D4B1' : '#FF5996',
            }}
          />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'capitalize' }}>
            {connectionStatus}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Clock size={11} color="rgba(255,255,255,0.4)" />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
            Last saved 2 min ago
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Code2 size={11} color="rgba(255,255,255,0.4)" />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
            {schemaVersion}
          </span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Wifi size={11} color="rgba(255,255,255,0.4)" />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Auto-save on</span>
        </div>
      </div>
    </div>
  )
}
