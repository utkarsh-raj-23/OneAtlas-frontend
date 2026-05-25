import { create } from 'zustand'
import { BuilderComponent } from '@/types'

interface BuilderState {
  appName: string
  selectedComponent: string | null
  leftPanelOpen: boolean
  rightPanelOpen: boolean
  schemaVersion: string
  connectionStatus: 'connected' | 'disconnected' | 'syncing'
  setAppName: (name: string) => void
  setSelectedComponent: (id: string | null) => void
  toggleLeftPanel: () => void
  toggleRightPanel: () => void
}

export const useBuilderStore = create<BuilderState>((set) => ({
  appName: 'My CRM App',
  selectedComponent: null,
  leftPanelOpen: true,
  rightPanelOpen: true,
  schemaVersion: 'v1.2.0',
  connectionStatus: 'connected',
  setAppName: (name) => set({ appName: name }),
  setSelectedComponent: (id) => set({ selectedComponent: id }),
  toggleLeftPanel: () => set((s) => ({ leftPanelOpen: !s.leftPanelOpen })),
  toggleRightPanel: () => set((s) => ({ rightPanelOpen: !s.rightPanelOpen })),
}))

export const mockComponentTree: BuilderComponent[] = [
  {
    id: 'layout',
    type: 'Layout',
    label: 'App Layout',
    children: [
      {
        id: 'sidebar',
        type: 'Sidebar',
        label: 'Navigation Sidebar',
        children: [
          { id: 'logo', type: 'Logo', label: 'Logo' },
          { id: 'nav', type: 'NavMenu', label: 'Nav Menu' },
        ],
      },
      {
        id: 'main',
        type: 'MainContent',
        label: 'Main Content',
        children: [
          { id: 'header', type: 'Header', label: 'Page Header' },
          { id: 'stats', type: 'StatsGrid', label: 'Stats Grid' },
          { id: 'table', type: 'DataTable', label: 'Data Table' },
        ],
      },
    ],
  },
]