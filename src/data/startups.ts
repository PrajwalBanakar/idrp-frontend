export type StartupCategory = 'incubated' | 'funded' | 'graduated'
export type TabKey = 'all' | StartupCategory

export type Tab = {
  key: TabKey
  label: string
}

export type StartupStat = {
  value: string
  label: string
}

export type Founder = {
  name: string
  role: string
  linkedin: string
  email: string
  phone: string
}

export type Startup = {
  id: string
  name: string
  sector: string
  category: StartupCategory
  logo: string
  website: string
  onePager: string
  brief: string
  contactEmail: string
  contactPhone: string
  founders: Founder[]
}

export const startupStats: StartupStat[] = [
  { value: '400+', label: 'Startups graduated' },
  { value: '26+', label: 'Startups funded' },
  { value: '150+', label: 'Active community' },
]

export const startupTabs: Tab[] = [
  { key: 'all', label: 'All Startups' },
  { key: 'incubated', label: 'Incubated' },
  { key: 'funded', label: 'Funded' },
  { key: 'graduated', label: 'Graduated' },
]

export const categoryLabels: Record<StartupCategory, string> = {
  incubated: 'Incubated',
  funded: 'Funded',
  graduated: 'Graduated',
}

export const startups: Startup[] = [
  {
    id: 'neurosense-ai',
    name: 'NeuroSense AI',
    sector: 'AI / HealthTech',
    category: 'funded',
    logo: '/logos/neurosense.png',
    website: 'https://example.com/neurosense',
    onePager: '/one-pagers/neurosense-ai.pdf',
    brief:
      'NeuroSense AI develops AI-powered health intelligence tools focused on screening, predictive insights, and clinical workflow support.',
    contactEmail: 'hello@neurosense.ai',
    contactPhone: '+91 98765 43210',
    founders: [
      {
        name: 'Aarav Sharma',
        role: 'Co-Founder & CEO',
        linkedin: 'https://linkedin.com/in/aaravsharma',
        email: 'aarav@neurosense.ai',
        phone: '+91 98765 43210',
      },
      {
        name: 'Ishita Rao',
        role: 'Co-Founder & CTO',
        linkedin: 'https://linkedin.com/in/ishitarao',
        email: 'ishita@neurosense.ai',
        phone: '+91 98765 43211',
      },
    ],
  },
  {
    id: 'agrivision-labs',
    name: 'AgriVision Labs',
    sector: 'AgriTech',
    category: 'incubated',
    logo: '/logos/agrivision.png',
    website: 'https://example.com/agrivision',
    onePager: '/one-pagers/agrivision-labs.pdf',
    brief:
      'AgriVision Labs builds precision agriculture solutions using computer vision and IoT to improve crop monitoring and farm productivity.',
    contactEmail: 'contact@agrivisionlabs.com',
    contactPhone: '+91 98765 41001',
    founders: [
      {
        name: 'Rohit Kulkarni',
        role: 'Founder',
        linkedin: 'https://linkedin.com/in/rohitkulkarni',
        email: 'rohit@agrivisionlabs.com',
        phone: '+91 98765 41001',
      },
    ],
  },
  {
    id: 'securechain-systems',
    name: 'SecureChain Systems',
    sector: 'Blockchain',
    category: 'graduated',
    logo: '/logos/securechain.png',
    website: 'https://example.com/securechain',
    onePager: '/one-pagers/securechain-systems.pdf',
    brief:
      'SecureChain Systems offers blockchain-backed trust infrastructure for supply chains, document validation, and enterprise workflows.',
    contactEmail: 'info@securechain.io',
    contactPhone: '+91 98765 42002',
    founders: [
      {
        name: 'Mehul Patil',
        role: 'Co-Founder',
        linkedin: 'https://linkedin.com/in/mehulpatil',
        email: 'mehul@securechain.io',
        phone: '+91 98765 42002',
      },
      {
        name: 'Sana Khan',
        role: 'Co-Founder',
        linkedin: 'https://linkedin.com/in/sanakhan',
        email: 'sana@securechain.io',
        phone: '+91 98765 42003',
      },
    ],
  },
]