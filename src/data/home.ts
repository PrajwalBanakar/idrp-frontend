export type HeroSlide = {
  heading: string
  subtext: string
  image: string
}

export type IconCard = {
  title: string
  description: string
  icon: string
}

export type Program = {
  title: string
  duration: string
  description: string
  detailsTo: string
  applyTo: string
  features: string[]
}

export type GovernmentProgram = {
  title: string
  description: string
  route: string
}

export type Service = {
  title: string
  description: string
  route: string
  icon: string
}

export type Story = {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  color: string
}

export type PartnerCategory = {
  key: string
  label: string
}

export type Partner = {
  name: string
  abbr: string
  color: string
  category: string
}

export type Award = {
  title: string
  issuer: string
  year: string
  image: string
  bg: string
}

export type Stat = {
  label: string
  target: number
  prefix?: string
  suffix: string
  icon: string
}

export type CourseOffering = {
  title: string
  duration: string
  description: string
  route: string
}

export const heroSlides: HeroSlide[] = [
  {
    heading: "Empowering Deep-Tech Innovation for Tomorrow's Solutions",
    subtext:
      'IIIT Dharwad Research Park is at the forefront of nurturing breakthrough innovations that address complex technological and societal challenges.',
    image: '/hero1.jfif',
  },
  {
    heading: 'Where ideas transform into impactful ventures',
    subtext: 'Providing the ecosystem, guidance, and capital to help you scale.',
    image: '/hero2.jfif',
  },
  {
    heading: 'Build, connect, and grow in a space designed for founders',
    subtext: 'More than just desks, IDRP is a hub for innovation and meaningful collaboration.',
    image: '/hero3.jfif',
  },
]

export const impactCards: IconCard[] = [
  {
    title: 'Deep-Tech Domains',
    description:
      'Specializing in Computer Vision, Extended Reality, Generative AI, Speech & NLP, Blockchain, Cyber Security, Space Tech, and IoT innovations.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`,
  },
  {
    title: 'Sector Expertise',
    description:
      'Serving Industry 4.0, Healthcare, Financial Services, Semiconductor, Agriculture, Mobility, and Digital Commerce sectors.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
  },
  {
    title: 'World-Class Infrastructure',
    description:
      'State-of-the-art labs, prototyping facilities, and testing environments to accelerate product development from concept to market.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>`,
  },
  {
    title: 'Mentorship Network',
    description:
      'Access to industry experts, successful entrepreneurs, and academic leaders who guide startups through their growth journey.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    title: 'Funding Support',
    description:
      'Seed funding, grant facilitation, and investor connections to fuel startup growth at every stage from ideation to scale.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    title: 'Startup School Programs',
    description:
      'Comprehensive training programs covering business strategy, product development, GTM execution, and leadership skills.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
]

export const programs: Program[] = [
  {
    title: 'Yuva Udyami Program',
    duration: '6–12 months',
    description:
      'A structured early-stage program for founders at idea, problem-validation, or prototype stage. Designed to help aspiring startups validate the problem, refine the solution, build an MVP roadmap, and prepare for incubation readiness.',
    detailsTo: '/pre-incubation',
    applyTo: '/apply/pre-incubation',
    features: [
      'Idea validation and customer discovery',
      'Mentorship on problem-solution fit',
      'MVP planning and prototype guidance',
      'Business model and market research support',
      'Pitch deck and founder readiness sessions',
      'Pathway to incubation and funding opportunities',
    ],
  },
  {
    title: 'Udyami Resident Incubation',
    duration: '12–18 months',
    description:
      'Comprehensive support for startups at idea, PoC, or MVP stage. Get access to dedicated workspace, labs, mentorship, and seed funding opportunities.',
    detailsTo: '/incubation',
    applyTo: '/apply/resident-incubation',
    features: [
      'Dedicated workspace at campus',
      'Access to research labs and equipment',
      'Technical mentorship from faculty',
      'Business development support',
      'Seed funding up to ₹50 lakhs',
      'Industry networking events',
    ],
  },
  {
    title: 'Udyami Virtual Incubation',
    duration: '6–12 months',
    description:
      'Remote support for startups and entrepreneurs who want to leverage our ecosystem without physical presence. Perfect for early-stage ventures across India.',
    detailsTo: '/incubation',
    applyTo: '/apply/virtual-incubation',
    features: [
      'Remote mentorship sessions',
      'Access to digital resources',
      'Investor connect programs',
      'Online Startup School',
      'Alumni network access',
      'Grant application support',
    ],
  },
]

export const governmentPrograms: GovernmentProgram[] = [
  {
    title: 'New Age Innovation Network',
    description:
      'A government-supported initiative focused on innovation, entrepreneurship development, and startup ecosystem strengthening for student and early-stage founders.',
    route: '/programs/nain',
  },
  {
    title: 'Common Instrumentation Facility',
    description:
      'Shared access to advanced instrumentation, lab facilities, and prototyping infrastructure that supports research, product development, and deep-tech experimentation.',
    route: '/programs/cif',
  },
  {
    title: 'Centre of Excellence in Quantum AI and Computing',
    description:
      'A focused initiative to advance research, talent development, and innovation in quantum technologies, artificial intelligence, and next-generation computing systems.',
    route: '/programs/coe-quantum-ai',
  },
  {
    title: 'Capacity Building for Design and Entrepreneurship',
    description:
      'A structured program to build innovation capability, product thinking, design mindset, and entrepreneurial readiness among students, researchers, and aspiring founders.',
    route: '/programs/cbde',
  },
]

export const courses: CourseOffering[] = [
  {
    title: 'Online M.Tech Program',
    duration: '2 Years',
    description:
      'A comprehensive online postgraduate program focused on deep-tech domains, applied AI, and industry-driven research aligned with real-world problems.',
    route: '/courses/online-mtech',
  },
  {
    title: 'Industry Exposure Track (IET)',
    duration: '3 Months',
    description:
      'A short-term intensive program connecting students and professionals with real industry problems, tools, and workflows.',
    route: '/courses/iet',
  },
  {
    title: 'Faculty Development Program (FDP)',
    duration: '2 Days',
    description:
      'Designed for faculty to upgrade teaching methodologies, research alignment, and industry-relevant skills in emerging technologies.',
    route: '/courses/fdp',
  },
  {
    title: '3-Day Workshops (3DW)',
    duration: '2–3 Days',
    description:
      'Hands-on technical workshops focused on specific tools, domains, and emerging technologies for rapid skill development.',
    route: '/courses/3dw',
  },
]

export const services: Service[] = [
  {
    title: 'Industry Research and Advisory',
    description:
      'Collaborative research, consulting, and strategic advisory support aligned with real industry challenges and innovation goals.',
    route: '/industry-research',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h16.5M3.75 3v16.5m4.5-9 2.25 2.25 3.75-4.5 2.25 2.25 3-3" /></svg>`,
  },
  {
    title: 'Technical Education Academy',
    description:
      'Specialized technical education programs, industry-ready courses, and capacity-building initiatives for students, faculty, and professionals.',
    route: '/technical-education-academy',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14.25 4.5 9.75 12 5.25l7.5 4.5-7.5 4.5Zm0 0v6.75m0-6.75 6.16-3.696a.75.75 0 0 1 1.09.665v4.431a.75.75 0 0 1-.384.654L12 21m0-6.75L5.134 10.554a.75.75 0 0 0-1.134.651v4.446a.75.75 0 0 0 .384.654L12 21" /></svg>`,
  },
]

export const approaches: IconCard[] = [
  {
    title: 'Curated networking events for founders',
    description: 'Engage, collaborate, and grow within a vibrant startup community',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    title: 'Hands-on workshops & masterclasses',
    description: 'Develop critical skills guided by experienced professionals',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
  {
    title: 'Mentorship & expert clinics',
    description: 'Navigate legal, financial, and product challenges with experienced guidance',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
  },
]

export const successStories: Story[] = [
  {
    quote:
      'IDRP gave us more than infrastructure — they gave us belief. From a lab prototype to a funded product, the journey was made possible by their ecosystem.',
    name: 'Arjun Mehta',
    role: 'Co-founder & CEO',
    company: 'NeuroSense AI',
    initials: 'AM',
    color: 'linear-gradient(135deg, #0d9488, #06b6d4)',
  },
  {
    quote:
      'The mentorship at IDRP is unparalleled. We had access to domain experts who helped us pivot at exactly the right moment and scale faster than we imagined.',
    name: 'Priya Nair',
    role: 'Founder',
    company: 'AgriVision Labs',
    initials: 'PN',
    color: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    quote:
      "Graduating from the Deep-Tech Accelerator opened doors we didn't even know existed. Three investor meetings in the first week post-demo day.",
    name: 'Rohan Desai',
    role: 'CEO',
    company: 'SecureChain Systems',
    initials: 'RD',
    color: 'linear-gradient(135deg, #ea580c, #fbbf24)',
  },
  {
    quote:
      'The co-working space and research lab access meant we could run real experiments without burning our runway. IDRP de-risked our early stage completely.',
    name: 'Sneha Kulkarni',
    role: 'Founder & CTO',
    company: 'XR Dynamics',
    initials: 'SK',
    color: 'linear-gradient(135deg, #0891b2, #22d3ee)',
  },
  {
    quote:
      "IDRP's network of corporate partners led directly to our first enterprise pilot. That pilot became our anchor customer and changed everything.",
    name: 'Vikram Rao',
    role: 'Co-founder',
    company: 'IoTForge',
    initials: 'VR',
    color: 'linear-gradient(135deg, #be185d, #f472b6)',
  },
  {
    quote:
      'From grant writing support to investor introductions, IDRP covered every gap a first-time founder faces. We raised our seed round within 8 months.',
    name: 'Ananya Sharma',
    role: 'Founder',
    company: 'MediScan Health',
    initials: 'AS',
    color: 'linear-gradient(135deg, #15803d, #4ade80)',
  },
  {
    quote:
      'The Startup School curriculum was practical and rigorous. It shaped how we think about GTM, pricing, and building a team — lessons that still guide us.',
    name: 'Karan Joshi',
    role: 'CEO',
    company: 'SpaceSense Tech',
    initials: 'KJ',
    color: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
  },
  {
    quote:
      "Being part of the IDRP community meant we were never building alone. The peer network of founders is something you can't put a price on.",
    name: 'Divya Menon',
    role: 'Co-founder',
    company: 'NLP Nexus',
    initials: 'DM',
    color: 'linear-gradient(135deg, #b45309, #fcd34d)',
  },
]

export const partnerCategories: PartnerCategory[] = [
  { key: 'all', label: 'All' },
  { key: 'technology', label: 'Technology' },
  { key: 'academic', label: 'Academic' },
  { key: 'ecosystem', label: 'Ecosystem' },
  { key: 'investor', label: 'Investor' },
]

export const allPartners: Partner[] = [
  {
    name: 'KEONICS',
    abbr: 'KEO',
    color: 'linear-gradient(135deg,#0f766e,#2dd4bf)',
    category: 'ecosystem',
  },
  {
    name: 'STPI',
    abbr: 'STPI',
    color: 'linear-gradient(135deg,#2563eb,#60a5fa)',
    category: 'ecosystem',
  },
  {
    name: 'CII',
    abbr: 'CII',
    color: 'linear-gradient(135deg,#0f766e,#2dd4bf)',
    category: 'ecosystem',
  },
  {
    name: 'Deshpande Foundation',
    abbr: 'DF',
    color: 'linear-gradient(135deg,#16a34a,#4ade80)',
    category: 'ecosystem',
  },
  {
    name: 'EkStep Foundation',
    abbr: 'EK',
    color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    category: 'ecosystem',
  },
  {
    name: 'Culkey Foundation',
    abbr: 'CF',
    color: 'linear-gradient(135deg,#b45309,#f59e0b)',
    category: 'ecosystem',
  },
  {
    name: '100X.VC',
    abbr: '100X',
    color: 'linear-gradient(135deg,#1e1b4b,#4338ca)',
    category: 'investor',
  },
  {
    name: 'Seafund',
    abbr: 'SEA',
    color: 'linear-gradient(135deg,#0f766e,#5eead4)',
    category: 'investor',
  },
  {
    name: 'Campus Fund',
    abbr: 'CF',
    color: 'linear-gradient(135deg,#7c3aed,#c084fc)',
    category: 'investor',
  },
  {
    name: 'TiE',
    abbr: 'TiE',
    color: 'linear-gradient(135deg,#dc2626,#fb7185)',
    category: 'investor',
  },
  {
    name: 'Infosys',
    abbr: 'INF',
    color: 'linear-gradient(135deg,#2563eb,#60a5fa)',
    category: 'technology',
  },
  {
    name: 'iMerit',
    abbr: 'IM',
    color: 'linear-gradient(135deg,#dc2626,#f87171)',
    category: 'technology',
  },
  {
    name: 'Nanopix',
    abbr: 'NP',
    color: 'linear-gradient(135deg,#0ea5e9,#67e8f9)',
    category: 'technology',
  },
  {
    name: 'Maven Silicon',
    abbr: 'MS',
    color: 'linear-gradient(135deg,#16a34a,#86efac)',
    category: 'technology',
  },
  {
    name: 'Sankalp Semiconductor',
    abbr: 'SS',
    color: 'linear-gradient(135deg,#2563eb,#93c5fd)',
    category: 'technology',
  },
  {
    name: 'Tessolve',
    abbr: 'TES',
    color: 'linear-gradient(135deg,#ea580c,#fb923c)',
    category: 'technology',
  },
  {
    name: 'FutureWiz',
    abbr: 'FW',
    color: 'linear-gradient(135deg,#f97316,#fdba74)',
    category: 'technology',
  },
  {
    name: 'Sandeepani (SESD)',
    abbr: 'SES',
    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    category: 'academic',
  },
  {
    name: 'FAS Silicon Academy',
    abbr: 'FAS',
    color: 'linear-gradient(135deg,#059669,#34d399)',
    category: 'academic',
  },
  {
    name: 'Fuel',
    abbr: 'FUEL',
    color: 'linear-gradient(135deg,#f59e0b,#fde68a)',
    category: 'academic',
  },
  {
    name: 'Xcel Corp',
    abbr: 'XC',
    color: 'linear-gradient(135deg,#6b7280,#9ca3af)',
    category: 'academic',
  },
  {
    name: 'Create (Spin-off | Pivot)',
    abbr: 'CRT',
    color: 'linear-gradient(135deg,#374151,#9ca3af)',
    category: 'ecosystem',
  },
  {
    name: 'GX',
    abbr: 'GX',
    color: 'linear-gradient(135deg,#111827,#4b5563)',
    category: 'ecosystem',
  },
  {
    name: 'RV-VLSI Design Center',
    abbr: 'RV',
    color: 'linear-gradient(135deg,#0f766e,#99f6e4)',
    category: 'academic',
  },
]

export const awards: Award[] = [
  {
    title: 'Best Technology Business Incubator',
    issuer: 'NITI Aayog',
    year: '2023',
    image: '',
    bg: 'from-teal-600 to-cyan-500',
  },
  {
    title: 'Outstanding Startup Ecosystem Award',
    issuer: 'MeitY',
    year: '2023',
    image: '',
    bg: 'from-blue-600 to-indigo-500',
  },
  {
    title: 'Top Deep-Tech Incubator of India',
    issuer: 'NASSCOM',
    year: '2022',
    image: '',
    bg: 'from-violet-600 to-purple-500',
  },
  {
    title: 'National Innovation Award',
    issuer: 'DST India',
    year: '2022',
    image: '',
    bg: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Best Incubator — Karnataka',
    issuer: 'Karnataka Govt.',
    year: '2022',
    image: '',
    bg: 'from-rose-600 to-pink-500',
  },
  {
    title: 'Emerging Incubator Excellence',
    issuer: 'TiE Global',
    year: '2021',
    image: '',
    bg: 'from-emerald-600 to-teal-400',
  },
  {
    title: 'Women in Tech Enabler Award',
    issuer: 'CII',
    year: '2021',
    image: '',
    bg: 'from-fuchsia-600 to-pink-400',
  },
  {
    title: 'Atal Innovation Mission Recognition',
    issuer: 'AIM — NITI Aayog',
    year: '2021',
    image: '',
    bg: 'from-sky-600 to-blue-400',
  },
]

export const stats: Stat[] = [
  {
    label: 'Startups scaled up by over 200%',
    target: 70,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`,
  },
  {
    label: 'Mentors and Industry Experts',
    target: 80,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
  },
  {
    label: 'Facilitated in Funding',
    target: 50,
    suffix: 'Mn+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    label: 'Vibrant startup community',
    target: 150,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    label: 'Startup networking events',
    target: 1000,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
  },
  {
    label: 'Jobs created by startups',
    target: 10,
    suffix: 'K+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>`,
  },
  {
    label: 'Patents filed by our startups',
    target: 60,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
  },
  {
    label: 'Investors and strategic partners',
    target: 50,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
  },
]