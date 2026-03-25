import type { PartnerCategory } from '@/types/partners'

export const partnerTypeOptions: string[] = [
  'Academic Partner',
  'Technology Partner',
  'Ecosystem Partner',
  'Investor Network',
  'Corporate Partner',
  'Government / Policy Partner',
  'Media Partner',
  'Other',
]

export const partnerCategories: PartnerCategory[] = [
  {
    key: 'academic',
    title: 'Academic & Training Partners',
    subtitle: 'Building skills and deep-tech capability.',
    description:
      'We collaborate with academic institutions and training providers to build strong technical foundations, enable research translation, and prepare talent for industry and innovation ecosystems.',
    icon: '🎓',
    iconBgClass: 'bg-teal-600',
    textClass: 'text-teal-600',
    hoverBorderClass: 'hover:border-teal-200',
    partners: [
      { name: 'Sandeepani (SESD)', abbr: 'SES', color: 'linear-gradient(135deg,#7c3aed,#a78bfa)' },
      { name: 'FAS Silicon Academy', abbr: 'FAS', color: 'linear-gradient(135deg,#059669,#34d399)' },
      { name: 'Maven Silicon', abbr: 'MS', color: 'linear-gradient(135deg,#16a34a,#86efac)' },
      { name: 'Fuel', abbr: 'FUEL', color: 'linear-gradient(135deg,#f59e0b,#fde68a)' },
      { name: 'Xcel Corp', abbr: 'XC', color: 'linear-gradient(135deg,#6b7280,#9ca3af)' },
      { name: 'RV-VLSI Design Center', abbr: 'RV', color: 'linear-gradient(135deg,#0f766e,#99f6e4)' },
    ],
  },
  {
    key: 'technology',
    title: 'Technology & Industry Partners',
    subtitle: 'Driving applied engineering and deep-tech innovation.',
    description:
      'Our technology partners enable product development, semiconductor innovation, AI solutions, and industry-aligned engineering through tools, expertise, and collaborative execution.',
    icon: '💻',
    iconBgClass: 'bg-blue-600',
    textClass: 'text-blue-600',
    hoverBorderClass: 'hover:border-blue-200',
    partners: [
      { name: 'Infosys', abbr: 'INF', color: 'linear-gradient(135deg,#2563eb,#60a5fa)' },
      { name: 'iMerit', abbr: 'IM', color: 'linear-gradient(135deg,#dc2626,#f87171)' },
      { name: 'Nanopix', abbr: 'NP', color: 'linear-gradient(135deg,#0ea5e9,#67e8f9)' },
      { name: 'Sankalp Semiconductor', abbr: 'SS', color: 'linear-gradient(135deg,#2563eb,#93c5fd)' },
      { name: 'Tessolve', abbr: 'TES', color: 'linear-gradient(135deg,#ea580c,#fb923c)' },
      { name: 'FutureWiz', abbr: 'FW', color: 'linear-gradient(135deg,#f97316,#fdba74)' },
    ],
  },
  {
    key: 'ecosystem',
    title: 'Ecosystem & Policy Partners',
    subtitle: 'Strengthening the innovation ecosystem.',
    description:
      'We work with government bodies, foundations, and ecosystem enablers to build infrastructure, support startups, and drive innovation-led growth across sectors.',
    icon: '🌐',
    iconBgClass: 'bg-cyan-600',
    textClass: 'text-cyan-600',
    hoverBorderClass: 'hover:border-cyan-200',
    partners: [
      { name: 'KEONICS', abbr: 'KEO', color: 'linear-gradient(135deg,#0f766e,#2dd4bf)' },
      { name: 'STPI', abbr: 'STPI', color: 'linear-gradient(135deg,#2563eb,#60a5fa)' },
      { name: 'CII', abbr: 'CII', color: 'linear-gradient(135deg,#0f766e,#2dd4bf)' },
      { name: 'Deshpande Foundation', abbr: 'DF', color: 'linear-gradient(135deg,#16a34a,#4ade80)' },
      { name: 'EkStep Foundation', abbr: 'EK', color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)' },
      { name: 'Culkey Foundation', abbr: 'CF', color: 'linear-gradient(135deg,#b45309,#f59e0b)' },
      { name: 'Create (Spin-off)', abbr: 'CRT', color: 'linear-gradient(135deg,#374151,#9ca3af)' },
      { name: 'GX', abbr: 'GX', color: 'linear-gradient(135deg,#111827,#4b5563)' },
    ],
  },
  {
    key: 'investor',
    title: 'Investor Networks',
    subtitle: 'Fueling innovation with capital and connections.',
    description:
      'We collaborate with venture capital funds, angel networks, and ecosystem investors to support startups in accessing funding, mentorship, and growth opportunities.',
    icon: '💰',
    iconBgClass: 'bg-emerald-600',
    textClass: 'text-emerald-600',
    hoverBorderClass: 'hover:border-emerald-200',
    partners: [
      { name: '100X.VC', abbr: '100X', color: 'linear-gradient(135deg,#1e1b4b,#4338ca)' },
      { name: 'Seafund', abbr: 'SEA', color: 'linear-gradient(135deg,#0f766e,#5eead4)' },
      { name: 'Campus Fund', abbr: 'CF', color: 'linear-gradient(135deg,#7c3aed,#c084fc)' },
      { name: 'TiE', abbr: 'TiE', color: 'linear-gradient(135deg,#dc2626,#fb7185)' },
    ],
  },
]