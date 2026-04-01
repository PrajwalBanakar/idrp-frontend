import type { Mentor, MentorCategory } from '@/types/mentors'

const facultyBookletPath = '/Faculty%20Booklet.pdf'

function bookletPage(page: number) {
  return `${facultyBookletPath}#page=${page}`
}

export const mentorTabs: { key: MentorCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'business', label: 'Business Mentors' },
  { key: 'technology', label: 'Technology Mentors' },
  { key: 'faculty', label: 'Faculty Mentors' },
]

export const businessMentors: Mentor[] = [
  {
    name: 'Ram Subramanian',
    role: 'Business Mentor',
    image: '/advisory-ram.jfif',
    imageAlt: 'Ram Subramanian',
    linkedin: '',
  },
  {
    name: 'Mallikarjun Kande',
    role: 'Business Mentor',
    image: '/business-mallikarjun.jfif',
    imageAlt: 'Mallikarjun Kande',
    linkedin: 'https://www.linkedin.com/in/mallikarjun-kande-18709342/',
  },
  {
    name: 'Shashidar Shettar',
    role: 'Business Mentor',
    image: '/business-shashidar.jfif',
    imageAlt: 'Shashidar Shettar',
    linkedin: '',
  },
  {
    name: 'Santosh Devanallikar',
    role: 'Business Mentor',
    image: '/business-santosh.jfif',
    imageAlt: 'Santosh Devanallikar',
    linkedin: '',
  },
  {
    name: 'Ravi Kumar',
    role: 'Business Mentor',
    image: '/business-ravi.jfif',
    imageAlt: 'Ravi Kumar',
    linkedin: '',
  },
  {
    name: 'RK Patil',
    role: 'Business Mentor',
    image: '/business-rk.jfif',
    imageAlt: 'RK Patil',
    linkedin: '',
  },
  {
    name: 'Sasikumar Sundarajan',
    role: 'Business Mentor',
    image: '/business-sasikumar.jfif',
    imageAlt: 'Sasikumar Sundarajan',
    linkedin: '',
  },
  {
    name: 'Ambarish Kulkarni',
    role: 'Business Mentor',
    image: '/business-ambarish.jfif',
    imageAlt: 'Ambarish Kulkarni',
    linkedin: '',
  },
  {
    name: 'Anand Bariya',
    role: 'Business Mentor',
    image: '/business-anand.jfif',
    imageAlt: 'Anand Bariya',
    linkedin: 'https://www.linkedin.com/in/anand-bariya-9ba9906a/',
  },
  {
    name: 'Shubash Marihal',
    role: 'Business Mentor',
    image: '/business-shubash.jfif',
    imageAlt: 'Shubash Marihal',
    linkedin: '',
  },
]

export const technologyMentors: Mentor[] = [
  {
    name: 'Mallikarjun Kande',
    role: 'Technology Mentor',
    image: '/business-mallikarjun.jfif',
    imageAlt: 'Mallikarjun Kande',
    linkedin: 'https://www.linkedin.com/in/mallikarjun-kande-18709342/',
  },
  {
    name: 'Santosh Devanallikar',
    role: 'Technology Mentor',
    image: '/technology-santosh.jfif',
    imageAlt: 'Santosh Devanallikar',
    linkedin: '',
  },
  {
    name: 'Ravi Kumar',
    role: 'Technology Mentor',
    image: '/technology-ravi.jfif',
    imageAlt: 'Ravi Kumar',
    linkedin: '',
  },
  {
    name: 'RK Patil',
    role: 'Technology Mentor',
    image: '/technology-rk.jfif',
    imageAlt: 'RK Patil',
    linkedin: '',
  },
  {
    name: 'Preetham Umarani',
    role: 'Technology Mentor',
    image: '/technology-preetham.jfif',
    imageAlt: 'Preetham Umarani',
    linkedin: 'https://www.linkedin.com/in/preetham-umarani/',
  },
]

export const facultyMentors: Mentor[] = [
  {
    name: 'Dr. Jagadish DN',
    role: 'Faculty Mentor',
    image: '/faculty-jagadish.jfif',
    imageAlt: 'Dr. Jagadish DN',
    linkedin: 'https://www.linkedin.com/in/jagadish-d-n-23465111b/',
    profileUrl: bookletPage(29),
  },
  {
    name: 'Dr. Aswath Babu',
    role: 'Faculty Mentor',
    image: '/faculty-aswath.jfif',
    imageAlt: 'Dr. Aswath Babu',
    linkedin: '',
    profileUrl: bookletPage(52),
  },
  {
    name: 'Dr. Manjunath Vanahalli',
    role: 'Faculty Mentor',
    image: '/faculty-manjunath.jfif',
    imageAlt: 'Dr. Manjunath Vanahalli',
    linkedin: 'https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69/',
    profileUrl: bookletPage(41),
  },
  {
    name: 'Dr. Anushree Kini',
    role: 'Faculty Mentor',
    image: '/faculty-anushree.jfif',
    imageAlt: 'Dr. Anushree Kini',
    linkedin: 'https://www.linkedin.com/in/dr-anushree-kini-012a53124/',
    profileUrl: bookletPage(51),
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Faculty Mentor',
    image: '/faculty-rajesh.jfif',
    imageAlt: 'Dr. Rajesh Kumar',
    linkedin: 'https://www.linkedin.com/in/dr-rajesh-kumar-2417ab11b/',
    profileUrl: bookletPage(34),
  },
  {
    name: 'Dr. Abdul Wahid',
    role: 'Faculty Mentor',
    image: '/faculty-abdul.jfif',
    imageAlt: 'Dr. Abdul Wahid',
    linkedin: 'https://www.linkedin.com/in/abdul-wahid-phd-43065690/',
    profileUrl: bookletPage(5),
  },
  {
    name: 'Dr. Girish G N',
    role: 'Faculty Mentor',
    image: '/faculty-girish.jfif',
    imageAlt: 'Dr. Girish G N',
    linkedin: 'https://www.linkedin.com/in/girishgn28/',
    profileUrl: bookletPage(9),
  },
  {
    name: 'Dr. Sunil C K',
    role: 'Faculty Mentor',
    image: '/faculty-sunilck.jfif',
    imageAlt: 'Dr. Sunil C K',
    linkedin: 'https://www.linkedin.com/in/sunil-ck-ph-d-4599237a/',
    profileUrl: bookletPage(18),
  },
  {
    name: 'Dr. Sunil Saumya',
    role: 'Faculty Mentor',
    image: '/faculty-sunil.jfif',
    imageAlt: 'Dr. Sunil Saumya',
    linkedin: 'https://www.linkedin.com/in/sunil-saumya-158856b1/',
    profileUrl: bookletPage(48),
  },
  {
    name: 'Dr. Malay Kumar',
    role: 'Faculty Mentor',
    image: '/faculty-malay.jfif',
    imageAlt: 'Dr. Malay Kumar',
    linkedin: 'https://www.linkedin.com/in/dr-malay-kumar-b2442427/',
    profileUrl: bookletPage(11),
  },
  {
    name: 'Dr. Pavan Kumar C',
    role: 'Faculty Mentor',
    image: '/faculty-pavan.jfif',
    imageAlt: 'Dr. Pavan Kumar C',
    linkedin: '',
    profileUrl: bookletPage(13),
  },
  {
    name: 'Dr. Sandesh Phalke',
    role: 'Faculty Mentor',
    image: '/faculty-sandesh.jfif',
    imageAlt: 'Dr. Sandesh Phalke',
    linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137/',
    profileUrl: bookletPage(57),
  },
  {
    name: 'Dr. Chinmayananda A',
    role: 'Faculty Mentor',
    image: '/faculty-chinmayananda.jfif',
    imageAlt: 'Dr. Chinmayananda A',
    linkedin: 'https://www.linkedin.com/in/chinmayananda-a-941b06307/',
    profileUrl: bookletPage(24),
  },
  {
    name: 'Dr. Krishnendu Ghosh',
    role: 'Faculty Mentor',
    image: '/faculty-krishnendu.jfif',
    imageAlt: 'Dr. Krishnendu Ghosh',
    linkedin: 'https://www.linkedin.com/in/krishnendu-ghosh-44642117/',
    profileUrl: bookletPage(10),
  },
  {
    name: 'Dr. Pankaj Kumar',
    role: 'Faculty Mentor',
    image: '/faculty-pankaj.jfif',
    imageAlt: 'Dr. Pankaj Kumar',
    linkedin: 'https://www.linkedin.com/in/pankaj-kumar-960505261/',
    profileUrl: bookletPage(26),
  },
  {
    name: 'Dr. Prabhu Prasad',
    role: 'Faculty Mentor',
    image: '/faculty-prabhu.jfif',
    imageAlt: 'Dr. Prabhu Prasad',
    linkedin: 'https://www.linkedin.com/in/prabhu-prasad-b-m-428b3837/',
    profileUrl: bookletPage(14),
  },
  {
    name: 'Dr. Prakash Pawar',
    role: 'Faculty Mentor',
    image: '/faculty-prakash.jfif',
    imageAlt: 'Dr. Prakash Pawar',
    linkedin: 'https://www.linkedin.com/in/dr-prakash-pawar-78224356/',
    profileUrl: bookletPage(33),
  },
  {
    name: 'Dr. Nataraj K S',
    role: 'Faculty Mentor',
    image: '/faculty-nataraj.jfif',
    imageAlt: 'Dr. Nataraj K S',
    linkedin: 'https://www.linkedin.com/in/nataraj-k-s-2a501323/',
    profileUrl: bookletPage(32),
  },
  {
    name: 'Dr. Shirshendu Layek',
    role: 'Faculty Mentor',
    image: '/faculty-shirshendu.jfif',
    imageAlt: 'Dr. Shirshendu Layek',
    linkedin: 'https://www.linkedin.com/in/dr-shirshendu-layek-68151076/',
    profileUrl: bookletPage(45),
  },
  {
    name: 'Dr. Siddharth R',
    role: 'Faculty Mentor',
    image: '/faculty-siddharth.jfif',
    imageAlt: 'Dr. Siddharth R',
    linkedin: 'https://www.linkedin.com/in/siddharth-r-85168678/',
    profileUrl: bookletPage(46),
  },
  {
    name: 'Dr. Sunil Kumar P V',
    role: 'Faculty Mentor',
    image: '/faculty-sunilkumar.jfif',
    imageAlt: 'Dr. Sunil Kumar P V',
    linkedin: 'https://www.linkedin.com/in/pvskumar/',
    profileUrl: bookletPage(19),
  },
  {
    name: 'Dr. Suvadip Hazra',
    role: 'Faculty Mentor',
    image: '/faculty-suvadip.jfif',
    imageAlt: 'Dr. Suvadip Hazra',
    linkedin: 'https://www.linkedin.com/in/dr-suvadip-hazra-60491b67/',
    profileUrl: bookletPage(20),
  },
  {
    name: 'Dr. Vivekraj V K',
    role: 'Faculty Mentor',
    image: '/faculty-vivekraj.jfif',
    imageAlt: 'Dr. Vivekraj V K',
    linkedin: 'https://www.linkedin.com/in/vivekraj-v-k-1196a536/',
    profileUrl: bookletPage(21),
  },
  {
    name: 'Dr. Sibasankar Padhy',
    role: 'Faculty Mentor',
    image: '/faculty-sibasankar.jfif',
    imageAlt: 'Dr. Sibasankar Padhy',
    linkedin: 'https://www.linkedin.com/in/sibasankar-padhy-324a7328/',
    profileUrl: bookletPage(37),
  },
]

export const mentorGroups: Record<Exclude<MentorCategory, 'all'>, Mentor[]> = {
  business: businessMentors,
  technology: technologyMentors,
  faculty: facultyMentors,
}

function mergeMentor(existing: Mentor | undefined, incoming: Mentor): Mentor {
  if (!existing) return incoming

  return {
    ...existing,
    ...incoming,
    role: existing.role || incoming.role,
    image: existing.image || incoming.image,
    imageAlt: existing.imageAlt || incoming.imageAlt,
    organization: existing.organization || incoming.organization,
    bio: existing.bio || incoming.bio,
    linkedin: existing.linkedin || incoming.linkedin,
    profileUrl: existing.profileUrl || incoming.profileUrl,
  }
}

const mentorMap = new Map<string, Mentor>()

;[...businessMentors, ...technologyMentors, ...facultyMentors].forEach((mentor) => {
  const key = mentor.name.trim().toLowerCase()
  const existing = mentorMap.get(key)
  mentorMap.set(key, mergeMentor(existing, mentor))
})

export const allMentors: Mentor[] = Array.from(mentorMap.values())