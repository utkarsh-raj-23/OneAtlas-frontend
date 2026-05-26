import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import CommandPalette from '@/components/ui/CommandPalette'

export const metadata: Metadata = {
  title: 'OneAtlas — Build real apps, not prototypes',
  description: 'AI-native app builder. Describe any app and deploy in under 90 seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  )
}
