import type {
  Startup,
  StartupCategory,
  StartupStat,
  Tab,
  StartupsHero,
  StartupsIntro,
} from '@/types/startups'

export const startupsHero: StartupsHero = {
  imageSrc: '/vision-community.jfif',
  imageAlt: 'Startups',
  eyebrow: 'Portfolio',
  title: 'Startups',
  description:
    'Explore startups from the IDRP ecosystem with their profiles, founders, faculty mentors, teams, and investor-facing information.',
}

export const startupsIntro: StartupsIntro = {
  eyebrow: 'Our Community',
  title: 'Meet the Innovators Driving Our Ecosystem',
  paragraphs: [
    'At IDRP, we support startups through pre-incubation, incubation, mentoring, funding access, and ecosystem connections.',
    'Open any card to see the startup brief, founders, faculty mentors, team members, contact details, website, and investor one-pager.',
  ],
  imageSrc: '/campus/idrp_drone.jpeg',
  imageAlt: 'IDRP Startups',
}

export const startupStats: StartupStat[] = [
  { value: '23+', label: 'Startups listed' },
  { value: '2', label: 'Cohorts mapped' },
  { value: '150+', label: 'Active community' },
]

export const startupTabs: Tab[] = [
  { key: 'all', label: 'All Startups' },
  { key: 'pre-incubated', label: 'Pre Incubated' },
  { key: 'incubated', label: 'Incubated' },
  { key: 'funded', label: 'Funded' },
]

export const categoryLabels: Record<StartupCategory, string> = {
  'pre-incubated': 'Pre Incubated',
  incubated: 'Incubated',
  funded: 'Funded',
}

export const startups: Startup[] = [
  {
    id: 'agri-indus',
    name: 'Agri Indus',
    sector: 'AGRI TECH',
    category: 'pre-incubated',
    logo: '',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bcs125@iiitdwd.ac.in',
    contactPhone: '+917319785299',
    techFacultyMentors: [
      {
        name: 'Dr. Prakash Pawar',
        email: 'prakashpawar@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sachin Kumar',
        role: 'Founder',
        linkedin: '',
        email: '24bcs125@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Sachin Kumar',
        email: '24bcs125@iiitdwd.ac.in',
      },
      {
        name: 'Udit Dadhich',
        email: '24bcs158@iiitdwd.ac.in',
      },
      {
        name: 'Sudhanshu Baberwal',
        email: '24bcs147@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'c-3',
    name: 'C^3',
    sector: 'SOCIAL TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/c_3.jpg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '22bcs041@iiitdwd.ac.in',
    contactPhone: '+917259216502',
    techFacultyMentors: [
      {
        name: 'Dr. Siddharth R',
        email: 'siddharth_r@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Sandesh Phalke',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'G Rohith Yadav',
        role: 'Founder',
        linkedin: '',
        email: '22bcs041@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'G Rohith Yadav',
        email: '22bcs041@iiitdwd.ac.in',
      },
      {
        name: 'Vankadara Shanmukha Sai',
        email: '22BCS135@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'cre8hub',
    name: 'Cre8Hub',
    sector: 'SOCIAL TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/cre8hub.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '23bec028@iiitdwd.ac.in',
    contactPhone: '+917860278600',
    techFacultyMentors: [
      {
        name: 'Dr. Sunil Saumya',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Md Adnan Khan',
        role: 'Founder',
        linkedin: '',
        email: '23bec028@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Md Adnan Khan',
        email: '23bec028@iiitdwd.ac.in',
      },
      {
        name: 'Pratyush Anand',
        email: '23bec039@iiitdwd.ac.in',
      },
      {
        name: 'Prathamesh Rajaram Patil',
        email: '23bds043@iiitdwd.ac.in',
      },
      {
        name: 'Nikhil Kumar',
        email: '23bds038@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'evento',
    name: 'Evento',
    sector: 'SOCIAL TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/evento.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bcs148@iiitdwd.ac.in',
    contactPhone: '+919263520241',
    techFacultyMentors: [
      {
        name: 'Dr. Prabhu Prasad',
        email: 'prabhuprasad@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sugyan Singh',
        role: 'Founder',
        linkedin: '',
        email: '24bcs148@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Arhan Ghosarwade',
        email: '24bcs020@iiitdwd.ac.in',
      },
      {
        name: 'Sugyan',
        email: '24bcs148@iiitdwd.ac.in',
      },
      {
        name: 'Sachin Kumar',
        email: '24bcs124@iiitdwd.ac.in',
      },
      {
        name: 'Siddhant Kumar',
        email: '24bcs144@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'friend-in-fog',
    name: 'Friend In Fog',
    sector: 'AUTO TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Friend In Fog.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bec062@iiitdwd.ac.in',
    contactPhone: '+919810830166',
    techFacultyMentors: [
      {
        name: 'Mallikarjun Kande',
        email: 'mallikarjun.kande@space-e.org',
      },
      {
        name: 'Dr. Sandesh Sanjeev Phalke',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sushant Sharma',
        role: 'Founder',
        linkedin: '',
        email: '24bec062@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Sushant Sharma',
        email: '24bec062@iiitdwd.ac.in',
      },
      {
        name: 'Hemant Kumar',
        email: '24bds025@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'hey-attrangi',
    name: 'Hey Attrangi',
    sector: 'HEALTH TECH',
    category: 'funded',
    logo: '/startups/logo/heyattrangi.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '22bcs068@iiitdwd.ac.in',
    contactPhone: '+917995736278',
    techFacultyMentors: [],
    founders: [
      {
        name: 'Dr. Sandesh Sanjeev Phalke',
        role: 'Founder',
        linkedin: '',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Dusary Charan',
        email: '23bcs047@iiitdwd.ac.in',
      },
      {
        name: 'Medasani Bharath Reddy',
        email: '22bcs068@iiitdwd.ac.in',
      },
      {
        name: 'Jakkoju Kalyan',
        email: '23bec022@iiitdwd.ac.in',
      },
      {
        name: 'Doddi VenkataLakshmi Prasad',
        email: '23bec018@iiitdwd.ac.in',
      },
      {
        name: 'Daraboina Harshith',
        email: '23bcs037@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'mlera',
    name: 'MLera',
    sector: 'ED TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/MLera.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '22bds036@iiitdwd.ac.in',
    contactPhone: '+918667419176',
    techFacultyMentors: [
      {
        name: 'Dr. Siddharth R',
        email: 'siddharth_r@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Madhan S',
        role: 'Founder',
        linkedin: '',
        email: '22bds036@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Madhan S',
        email: '22bds036@iiitdwd.ac.in',
      },
      {
        name: 'H Shri Harsha',
        email: '22bcs044@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'natanaswara-ai',
    name: 'Natanaswara.AI',
    sector: 'COMMERCE TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Natanasvara.jpg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'chinmay@iiitdwd.ac.in',
    contactPhone: '+918197254535',
    techFacultyMentors: [
      {
        name: 'Dr. Chinmayananda A',
        email: 'chinmay@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Chinmayananda A',
        role: 'Founder',
        linkedin: '',
        email: 'chinmay@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Raksha Karthik',
        email: 'raksha.jayaram@gmail.com',
      },
      {
        name: 'Devaraju B V',
        email: 'dev.nkm@gmail.com',
      },
      {
        name: 'Chinmayananda A',
        email: 'chinmay@iiitdwd.ac.in',
      },
      {
        name: 'Tanmay Gupta',
        email: '23bds061@iiitdwd.ac.in',
      },
      {
        name: 'Dhrupad Das',
        email: '23bds018@iiitdwd.ac.in',
      },
      {
        name: 'Yashpreet Singh Reejak',
        email: '23bds072@iiitdwd.ac.in',
      },
      {
        name: 'Thirumala Teena Chowdary',
        email: '22bds059@iiitdwd.ac.in',
      },
      {
        name: 'Aditya Guntur',
        email: '23bds003@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'bookmyturf',
    name: 'BookMyTurf',
    sector: 'COMMERCE TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/bookmyturf.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '22bds056@iiitdwd.ac.in',
    contactPhone: '+919113612246',
    techFacultyMentors: [
      {
        name: 'Sunil Kumar P V',
        email: 'sunilkumar.pv@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Sandesh Sanjeev Phalke',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Suhaas S',
        role: 'Founder',
        linkedin: '',
        email: '22bds056@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Suhaas S',
        email: '22bds056@iiitdwd.ac.in',
      },
      {
        name: 'Vansh',
        email: '22bds061@iiitdwd.ac.in',
      },
      {
        name: 'Dr Sandesh Phalke Sir',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'v-gyan',
    name: 'V-Gyan',
    sector: 'ED TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/VGyan.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'jyoti.24phdcs08@iiitdwd.ac.in',
    contactPhone: '+917022429486',
    techFacultyMentors: [
      {
        name: 'Prof. S R Mahadeva Prasanna',
        email: 'prasanna@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Jyoti Gadad',
        role: 'Founder',
        linkedin: '',
        email: 'jyoti.24phdcs08@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Jyoti Gadad',
        email: 'jyoti.24phdcs08@iiitdwd.ac.in',
      },
      {
        name: 'Shruti B S',
        email: 'shruthi.24mtrec01@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'deep-traits',
    name: 'Deep Traits',
    sector: 'PEOPLE TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/deep_traits.PNG',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'shraddha.22phdec02@iiitdwd.ac.in',
    contactPhone: '+918792098337',
    techFacultyMentors: [
      {
        name: 'Dr. Chinmayananda A',
        email: 'chinmay@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Shraddha G Revankar',
        role: 'Founder',
        linkedin: '',
        email: 'shraddha.22phdec02@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Shraddha Revankar',
        email: 'shraddha.22phdec02@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Chinmayananda A',
        email: 'chinmay@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Nataraj K S',
        email: 'nataraj@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Manjunath Vanahalli',
        email: 'manjunathkv@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'kisan-voice',
    name: 'Kisan Voice',
    sector: 'AGRI TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Kisan_Voice.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'prashantb@iiitdwd.ac.in',
    contactPhone: '+917892069460',
    techFacultyMentors: [
      {
        name: 'Dr. Prakash Pawar',
        email: 'Prakashpawar@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Prashant G. B.',
        role: 'Founder',
        linkedin: '',
        email: 'prashantb@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Prashant Bannulmath',
        email: 'prashantb@iiitdwd.ac.in',
      },
      {
        name: 'Swapnil Sontakke',
        email: 'swapnil.sontakke@iiitdwd.ac.in',
      },
      {
        name: 'Shaik Zuhair Hasan',
        email: '21bds060@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'removation',
    name: 'Removation',
    sector: 'DESIGN TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/removation.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bcs086@iiitdwd.ac.in',
    contactPhone: '+919334100814',
    techFacultyMentors: [
      {
        name: 'Dr. Suvadip Hazra',
        email: 'suvadip@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Nikhil Kumar Sinha',
        role: 'Founder',
        linkedin: '',
        email: '24bcs086@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Nikhil Kumar Sinha',
        email: '24bcs086@iiitdwd.ac.in',
      },
      {
        name: 'Nirbhay Kumar',
        email: '24bcs089@iiitdwd.ac.in',
      },
      {
        name: 'Nitish Kumar',
        email: '24bcs093@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'smartnest',
    name: 'SmartNest',
    sector: 'DEEP TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Smart Nest.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'sunil.saumya@iiitdwd.ac.in',
    contactPhone: '+918863830309',
    techFacultyMentors: [
      {
        name: 'Dr. Sunil Saumya',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sunil Saumya',
        role: 'Founder',
        linkedin: '',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Sunil Saumya',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
      {
        name: 'Shlok Jha',
        email: 'shlokjha.3@gmail.com',
      },
    ],
  },
  {
    id: 'sparkle-studio',
    name: 'Sparkle Studio',
    sector: 'DESIGN TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Sparkle Studio.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bcs104@iiitdwd.ac.in',
    contactPhone: '+916301260330',
    techFacultyMentors: [
      {
        name: 'Dr. Girish G N',
        email: 'girish@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'P.Mithil',
        role: 'Founder',
        linkedin: '',
        email: '24bcs104@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'P.Mithil',
        email: '24bcs104@iiitdwd.ac.in',
      },
      {
        name: 'Tharun',
        email: '24bds032@iiitdwd.ac.in',
      },
      {
        name: 'Jeevan',
        email: '24bds046@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'cipherion',
    name: 'Cipherion',
    sector: 'CYBERSECURITY',
    category: 'funded',
    logo: '/startups/logo/cipherion.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '',
    contactPhone: '+918105188413',
    techFacultyMentors: [
      {
        name: 'Dr. Girish Revadigar',
        email: '',
      },
    ],
    founders: [
      {
        name: 'Kunaal Shindagi',
        role: 'Founder',
        linkedin: '',
        email: '',
      },
      {
        name: 'Pooja Ekbote',
        role: 'Founder',
        linkedin: '',
        email: '',
      },
      {
        name: 'Nagaraj Bhandare',
        role: 'Founder',
        linkedin: '',
        email: '',
      },
    ],
    teamMembers: [],
  },
  {
    id: 'nexr',
    name: 'NeXR Technology Private Limited',
    sector: 'HEALTH TECH',
    category: 'incubated',
    logo: '/startups/logo/NeXR.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'vinay.oswald@gmail.com',
    contactPhone: '+919538246925',
    techFacultyMentors: [
      {
        name: 'Dr. Sunil Saumya',
        email: '',
      },
    ],
    founders: [
      {
        name: 'Vinay',
        role: 'Founder',
        linkedin: '',
        email: 'vinay.oswald@gmail.com',
      },
      {
        name: 'Shyam Sundar',
        role: 'Founder',
        linkedin: '',
        email: 'yadavshyam686@gmail.com',
      },
    ],
    teamMembers: [],
  },
  {
    id: 'neuraforesight',
    name: 'Neuraforesight Pvt Ltd',
    sector: 'HEALTH TECH',
    category: 'funded',
    logo: '/startups/logo/neuraforesight.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'sachin.marihal@saspinjara.com',
    contactPhone: '+919538033363',
    techFacultyMentors: [
      {
        name: 'Dr. Manjunath Vanahalli',
        email: '',
      },
    ],
    founders: [
      {
        name: 'Sachin Marihal',
        role: 'Founder',
        linkedin: '',
        email: 'sachin.marihal@saspinjara.com',
      },
      {
        name: 'Aravind Puttakkalavar',
        role: 'Founder',
        linkedin: '',
        email: 'aravind.p@saspinjara.com',
      },
      {
        name: 'Anil Ranadev',
        role: 'Founder',
        linkedin: '',
        email: 'anil_ranadev@saspinjara.com',
      },
    ],
    teamMembers: [],
  },
  {
    id: 'sphuranex',
    name: 'SphuraNex',
    sector: 'HEALTH TECH',
    category: 'incubated',
    logo: '/startups/logo/sphuranex.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '23bec035@iiitdwd.ac.in',
    contactPhone: '+917257832741',
    techFacultyMentors: [
      {
        name: 'Dr. Nataraj K.S',
        email: 'nataraj@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Om Mishra',
        role: 'Founder',
        linkedin: '',
        email: '23bec035@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Om Mishra',
        email: '23bec035@iiitdwd.ac.in',
      },
      {
        name: 'Natraj K S',
        email: 'nataraj@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'step-in',
    name: 'Step-In',
    sector: 'DEEP TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Step-In.jpg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bcs150@iiitdwd.ac.in',
    contactPhone: '+917975793771',
    techFacultyMentors: [
      {
        name: 'Dr. Shirshendu Layek',
        email: 'shirshendu@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Swetha S',
        role: 'Founder',
        linkedin: '',
        email: '24bcs150@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Swetha S',
        email: '24bcs150@iiitdwd.ac.in',
      },
      {
        name: 'M Praneeth',
        email: '24bcs064@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'mediraksha',
    name: 'MediRaksha',
    sector: 'HEALTHCARE',
    category: 'pre-incubated',
    logo: '/startups/logo/MediRaksha.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '24bcs025@iiitdwd.ac.in',
    contactPhone: '+918081116505',
    techFacultyMentors: [
      {
        name: 'Dr. Deepak K T',
        email: 'deepak@iiitdwd.ac.in',
      },
      {
        name: 'Preetham Umarani',
        email: '',
      },
    ],
    founders: [
      {
        name: 'Ayush Kumar Pal',
        role: 'Founder',
        linkedin: '',
        email: '24bcs025@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Ayush Kumar Pal',
        email: '24bcs025@iiitdwd.ac.in',
      },
      {
        name: 'Abhijeet Nagar',
        email: '24bcs002@iiitdwd.ac.in',
      },
      {
        name: 'Avi Arora',
        email: '24bcs023@iiitdwd.ac.in',
      },
      {
        name: 'Saswath Chowta',
        email: '24bcs031@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'vayucharge',
    name: 'VayuCharge',
    sector: 'DEEP TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Vayucharge.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'rajeshk@iiitdwd.ac.in',
    contactPhone: '',
    techFacultyMentors: [],
    founders: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'Founder',
        linkedin: '',
        email: 'rajeshk@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 'vocal-drone',
    name: 'Vocal Drone',
    sector: 'DEEP TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Vocal Drone.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'prashantb@iiitdwd.ac.in',
    contactPhone: '+917892069460',
    techFacultyMentors: [
      {
        name: 'Dr. Deepak K T',
        email: 'deepak@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Prashant G. B.',
        role: 'Founder',
        linkedin: '',
        email: 'prashantb@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Prashant Bannulmath',
        email: 'prashantb@iiitdwd.ac.in',
      },
      {
        name: 'Swapnil Sontakke',
        email: 'swapnil.sontakke@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'jnana-setu',
    name: 'JNANA SETU',
    sector: 'ED TECH',
    category: 'pre-incubated',
    logo: '/startups/logo/Jnanasetu.png',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: '22bcs126@iiitdwd.ac.in',
    contactPhone: '+918217680139',
    techFacultyMentors: [
      {
        name: 'Prof. S R Mahadeva Prasanna',
        email: 'prasanna@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Suchit Artal',
        role: 'Founder',
        linkedin: '',
        email: '22bcs126@iiitdwd.ac.in',
      },
      {
        name: 'Samuel Naik',
        role: 'Founder',
        linkedin: '',
        email: '22bcs108@iiitdwd.ac.in',
      },
      {
        name: 'S.N.Bhakti',
        role: 'Founder',
        linkedin: '',
        email: '22bcs104@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Suchit Artal',
      },
      {
        name: 'Samuel Naik',
      },
      {
        name: 'S.N.Bhakti',
      },
      {
        name: 'Rahul Trimukhe',
      },
    ],
  },
]