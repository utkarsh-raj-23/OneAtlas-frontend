import { PricingPlan } from '@/types'

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For individuals exploring AI app building',
    features: [
      '3 apps per month',
      '10 AI generations',
      'Community templates',
      'Basic deployment',
      'Email support',
    ],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For builders and small teams shipping fast',
    features: [
      'Unlimited apps',
      '500 AI generations',
      'All templates',
      'Custom domain',
      'Priority support',
      'GitHub sync',
      'Advanced analytics',
    ],
    highlighted: true,
    cta: 'Start building',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations needing scale and control',
    features: [
      'Unlimited everything',
      'SSO and SAML',
      'Dedicated support',
      'SLA guarantee',
      'Audit logs',
      'Custom integrations',
      'On-premise option',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
]