import type { Program } from '@/types/program'

export const programCatalog: Program[] = [
  {
    id: 'pre-incubation',
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
    id: 'resident-incubation',
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
    id: 'virtual-incubation',
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