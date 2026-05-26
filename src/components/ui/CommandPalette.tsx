'use client'

import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  LifeBuoy,
  LogIn,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
  X,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { ComponentType, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { templates } from '@/data/templates'

type CommandGroup = 'Pages' | 'Templates' | 'Actions'

type CommandItem = {
  id: string
  title: string
  description: string
  group: CommandGroup
  href?: string
  keywords: string[]
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
  action?: () => void
}

const pageCommands: CommandItem[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'OneAtlas overview and product story',
    group: 'Pages',
    href: '/',
    keywords: ['landing', 'overview', 'yc'],
    icon: Home,
  },
  {
    id: 'builder',
    title: 'App Builder',
    description: 'Open the AI workspace',
    group: 'Pages',
    href: '/builder',
    keywords: ['build', 'workspace', 'prompt', 'ai'],
    icon: Sparkles,
  },
  {
    id: 'templates',
    title: 'Templates',
    description: 'Browse production-ready app templates',
    group: 'Pages',
    href: '/templates',
    keywords: ['apps', 'examples', 'starter'],
    icon: Workflow,
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Manage apps and projects',
    group: 'Pages',
    href: '/dashboard',
    keywords: ['projects', 'apps', 'account'],
    icon: LayoutDashboard,
  },
  {
    id: 'pricing',
    title: 'Pricing',
    description: 'Plans, credits, and billing',
    group: 'Pages',
    href: '/pricing',
    keywords: ['plans', 'billing', 'subscription'],
    icon: CreditCard,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Security, SSO, and team controls',
    group: 'Pages',
    href: '/enterprise',
    keywords: ['sso', 'company', 'teams'],
    icon: BriefcaseBusiness,
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Compliance and platform trust',
    group: 'Pages',
    href: '/security',
    keywords: ['compliance', 'trust', 'soc2'],
    icon: ShieldCheck,
  },
  {
    id: 'docs',
    title: 'Docs',
    description: 'Guides and developer references',
    group: 'Pages',
    href: '/docs',
    keywords: ['documentation', 'guides', 'api'],
    icon: BookOpen,
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Product updates and engineering notes',
    group: 'Pages',
    href: '/blog',
    keywords: ['updates', 'articles', 'news'],
    icon: FileText,
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Get help from the OneAtlas team',
    group: 'Pages',
    href: '/support',
    keywords: ['help', 'contact', 'chat'],
    icon: LifeBuoy,
  },
  {
    id: 'login',
    title: 'Login',
    description: 'Sign in to your workspace',
    group: 'Pages',
    href: '/login',
    keywords: ['sign in', 'account', 'auth'],
    icon: LogIn,
  },
]

function scoreCommand(item: CommandItem, query: string) {
  if (!query) return 1

  const haystack = [
    item.title,
    item.description,
    item.group,
    ...item.keywords,
  ].join(' ').toLowerCase()
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)

  if (terms.every((term) => haystack.includes(term))) {
    const title = item.title.toLowerCase()
    return terms.some((term) => title.startsWith(term)) ? 3 : 2
  }

  return 0
}

export default function CommandPalette() {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands = useMemo<CommandItem[]>(() => {
    const templateCommands = templates.map((template) => ({
      id: `template-${template.id}`,
      title: template.name,
      description: `${template.category} template - ${template.description}`,
      group: 'Templates' as const,
      href: `/templates/${template.id}`,
      keywords: [template.category, template.complexity, ...template.tags],
      icon: Workflow,
    }))

    const actionCommands: CommandItem[] = [
      {
        id: 'action-new-app',
        title: 'Start a new app',
        description: 'Jump into the builder with a blank project',
        group: 'Actions',
        href: '/builder',
        keywords: ['create', 'new', 'generate'],
        icon: Sparkles,
      },
      {
        id: 'action-browse-operations',
        title: 'Browse operations templates',
        description: 'Filter templates for internal tools and workflows',
        group: 'Actions',
        href: '/templates?category=Operations',
        keywords: ['operations', 'internal tools', 'workflow'],
        icon: Workflow,
      },
      {
        id: 'action-theme',
        title: `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`,
        description: 'Toggle the interface theme',
        group: 'Actions',
        keywords: ['theme', 'dark', 'light', 'appearance'],
        icon: resolvedTheme === 'dark' ? Sun : Moon,
        action: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      },
    ]

    return [...pageCommands, ...templateCommands, ...actionCommands]
  }, [resolvedTheme, setTheme])

  const filteredCommands = useMemo(() => {
    return commands
      .map((command) => ({ command, score: scoreCommand(command, query.trim()) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.command.title.localeCompare(b.command.title))
      .map(({ command }) => command)
      .slice(0, 9)
  }, [commands, query])

  const setPaletteOpen = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (nextOpen) {
      setQuery('')
      setSelectedIndex(0)
    }
  }

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (open) {
          setOpen(false)
        } else {
          setPaletteOpen(true)
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 30)
    return () => window.clearTimeout(focusTimer)
  }, [open])

  const runCommand = (command: CommandItem | undefined) => {
    if (!command) return

    setPaletteOpen(false)
    if (command.action) command.action()
    if (command.href) router.push(command.href)
  }

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex((current) => Math.min(current + 1, filteredCommands.length - 1))
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex((current) => Math.max(current - 1, 0))
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      runCommand(filteredCommands[selectedIndex])
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setPaletteOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="command-overlay" />
        <Dialog.Content className="command-dialog" aria-describedby={undefined}>
          <div className="command-search-row">
            <Search size={18} strokeWidth={2} />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setSelectedIndex(0)
              }}
              onKeyDown={onInputKeyDown}
              placeholder="Search pages, templates, or actions..."
              className="command-input"
            />
            <Dialog.Close className="command-close" aria-label="Close command palette">
              <X size={16} strokeWidth={2} />
            </Dialog.Close>
          </div>

          <div className="command-results" role="listbox" aria-label="Command results">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((command, index) => {
                const Icon = command.icon
                const selected = selectedIndex === index

                return (
                  <button
                    key={command.id}
                    type="button"
                    className={`command-item${selected ? ' command-item-active' : ''}`}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => runCommand(command)}
                    role="option"
                    aria-selected={selected}
                  >
                    <span className="command-icon">
                      <Icon size={17} strokeWidth={2} />
                    </span>
                    <span className="command-copy">
                      <span className="command-title">{command.title}</span>
                      <span className="command-description">{command.description}</span>
                    </span>
                    <span className="command-group">{command.group}</span>
                    <ArrowRight className="command-arrow" size={15} strokeWidth={2} />
                  </button>
                )
              })
            ) : (
              <div className="command-empty">
                <span>No results found</span>
                <small>Try a page name, template category, or action.</small>
              </div>
            )}
          </div>

          <div className="command-footer">
            <span>Cmd K to open anywhere</span>
            <span>Enter to select</span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
