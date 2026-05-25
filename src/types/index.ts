export interface Template {
  id: string
  name: string
  category: string
  complexity: 'Simple' | 'Moderate' | 'Advanced'
  description: string
  color: string
  icon: string
  tags: string[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface BuilderComponent {
  id: string
  type: string
  label: string
  children?: BuilderComponent[]
}