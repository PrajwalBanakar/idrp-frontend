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
  { value: '20+', label: 'Startups listed' },
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
        phone: '+917319785299',
      },
    ],
    teamMembers: [
      {
        name: 'Sachin Kumar',
        phone: '+917319785299',
        email: '24bcs125@iiitdwd.ac.in',
      },
      {
        name: 'Udit Dadhich',
        phone: '+917976231451',
        email: '24bcs158@iiitdwd.ac.in',
      },
      {
        name: 'Sudhanshu Baberwal',
        phone: '+917568348002',
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
        phone: '+917259216502',
      },
    ],
    teamMembers: [
      {
        name: 'G Rohith Yadav',
        phone: '+917259216502',
        email: '22bcs041@iiitdwd.ac.in',
      },
      {
        name: 'Medasani Bharath Reddy',
        phone: '+917995736278',
        email: '22bcs068@iiitdwd.ac.in',
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
        phone: '+917860278600',
      },
    ],
    teamMembers: [
      {
        name: 'Md Adnan Khan',
        phone: '+917860278600',
        email: '23bec028@iiitdwd.ac.in',
      },
      {
        name: 'Pratyush Anand',
        phone: '+916394911939',
        email: '23bec039@iiitdwd.ac.in',
      },
      {
        name: 'Prathamesh Rajaram Patil',
        phone: '+918767825953',
        email: '23bds043@iiitdwd.ac.in',
      },
      {
        name: 'Nikhil Kumar',
        phone: '+917990134940',
        email: '23bds038@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'evento',
    name: 'Evento',
    sector: '',
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
        phone: '+919263520241',
      },
    ],
    teamMembers: [
      {
        name: 'Arhan Ghosarwade',
        phone: '+916366616225',
        email: '24bcs020@iiitdwd.ac.in',
      },
      {
        name: 'Sugyan',
        phone: '+919263520241',
        email: '24bcs148@iiitdwd.ac.in',
      },
      {
        name: 'Sachin Kumar',
        phone: '+919142388602',
        email: '24bcs124@iiitdwd.ac.in',
      },
      {
        name: 'Siddhant Kumar',
        phone: '+917903979639',
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
        phone: '+919810830166',
      },
    ],
    teamMembers: [
      {
        name: 'Sushant Sharma',
        phone: '+919810830166',
        email: '24bec062@iiitdwd.ac.in',
      },
      {
        name: 'Hemant Kumar',
        phone: '+919117371642',
        email: '24bds025@iiitdwd.ac.in',
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
        phone: '+918667419176',
      },
    ],
    teamMembers: [
      {
        name: 'Madhan S',
        phone: '+918667119176',
        email: '22bds036@iiitdwd.ac.in',
      },
      {
        name: 'H Shri Harsha',
        phone: '+919113593508',
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
        phone: '+918197254535',
      },
    ],
    teamMembers: [
      {
        name: 'Raksha Karthik',
        phone: '+919886107701',
        email: 'raksha.jayaram@gmail.com',
      },
      {
        name: 'Devaraju B V',
        phone: '+919035773052',
        email: 'dev.nkm@gmail.com',
      },
      {
        name: 'Chinmayananda A',
        phone: '+918197254535',
        email: 'chinmay@iiitdwd.ac.in',
      },
      {
        name: 'Tanmay Gupta',
        phone: '+917067478042',
        email: '23bds061@iiitdwd.ac.in',
      },
      {
        name: 'Dhrupad Das',
        phone: '+917003984898',
        email: '23bds018@iiitdwd.ac.in',
      },
      {
        name: 'Yashpreet Singh Reejak',
        phone: '+917820026551',
        email: '23bds072@iiitdwd.ac.in',
      },
      {
        name: 'Thirumala Teena Chowdary',
        phone: '+918143941625',
        email: '22bds059@iiitdwd.ac.in',
      },
      {
        name: 'Aditya Guntur',
        phone: '+918688580516',
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
        phone: '+919113612246',
      },
    ],
    teamMembers: [
      {
        name: 'Suhaas S',
        phone: '+919113612246',
        email: '22bds056@iiitdwd.ac.in',
      },
      {
        name: 'Vansh',
        phone: '+919121761830',
        email: '22bds061@iiitdwd.ac.in',
      },
      {
        name: 'Dr Sandesh Phalke Sir',
        phone: '+919552324069',
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
        name: 'Prof. S R Mahadev Prasanna',
        email: 'prasanna@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Jyoti Gadad',
        role: 'Founder',
        linkedin: '',
        email: 'jyoti.24phdcs08@iiitdwd.ac.in',
        phone: '+917022429486',
      },
    ],
    teamMembers: [
      {
        name: 'Jyoti Gadad',
        phone: '+917022429486',
        email: 'jyoti.24phdcs08@iiitdwd.ac.in',
      },
      {
        name: 'Shruti B S',
        phone: '+918105390215',
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
        phone: '+918792098337',
      },
    ],
    teamMembers: [
      {
        name: 'Shraddha Revankar',
        phone: '+918792098337',
        email: 'shraddha.22phdec02@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Chinmayananda A',
        phone: '+918197254535',
        email: 'chinmay@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Nataraj K S',
        phone: '+917257832741',
        email: 'nataraj@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Manjunath Vanahalli',
        phone: '+919538156995',
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
        phone: '+917892069460',
      },
    ],
    teamMembers: [
      {
        name: 'Prashant Bannulmath',
        phone: '+917892069460',
        email: 'prashantb@iiitdwd.ac.in',
      },
      {
        name: 'Swapnil Sontakke',
        phone: '+918149536928',
        email: 'swapnil.sontakke@iiitdwd.ac.in',
      },
      {
        name: 'Shaik Zuhair Hasan',
        phone: '+919494292277',
        email: '21bds060@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'removation',
    name: 'Removation',
    sector: 'DESIGN TECH',
    category: 'pre-incubated',
    logo: '',
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
        phone: '+919334100814',
      },
    ],
    teamMembers: [
      {
        name: 'Nikhil Kumar Sinha',
        phone: '+919334100814',
        email: '24bcs086@iiitdwd.ac.in',
      },
      {
        name: 'Nirbhay Kumar',
        phone: '+916207454417',
        email: '24bcs089@iiitdwd.ac.in',
      },
      {
        name: 'Nitish Kumar',
        phone: '+919905500462',
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
        phone: '+918863830309',
      },
    ],
    teamMembers: [
      {
        name: 'Sunil Saumya',
        phone: '+918863830309',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
      {
        name: 'Shlok Jha',
        phone: '+919625130545',
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
        phone: '+916301260330',
      },
    ],
    teamMembers: [
      {
        name: 'P.Mithil',
        phone: '+916301260330',
        email: '24bcs104@iiitdwd.ac.in',
      },
      {
        name: 'Tharun',
        phone: '+919467487777',
        email: '24bds032@iiitdwd.ac.in',
      },
      {
        name: 'Jeevan',
        phone: '+918688525471',
        email: '24bds046@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 'sphuranex',
    name: 'SphuraNex',
    sector: 'HEALTH TECH',
    category: 'pre-incubated',
    logo: '',
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
        phone: '+917257832741',
      },
    ],
    teamMembers: [
      {
        name: 'Om Mishra',
        phone: '+917257832741',
        email: '23bec035@iiitdwd.ac.in',
      },
      {
        name: 'Natraj K S',
        phone: '+918879538379',
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
        phone: '+917975793771',
      },
    ],
    teamMembers: [
      {
        name: 'Swetha S',
        phone: '+917975793771',
        email: '24bcs150@iiitdwd.ac.in',
      },
      {
        name: 'M Praneeth',
        phone: '+919481910170',
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
        phone: '+918081116505',
      },
    ],
    teamMembers: [
      {
        name: 'Ayush Kumar Pal',
        phone: '+918081116505',
        email: '24bcs025@iiitdwd.ac.in',
      },
      {
        name: 'Abhijeet Nagar',
        phone: '+919165134017',
        email: '24bcs002@iiitdwd.ac.in',
      },
      {
        name: 'Avi Arora',
        phone: '+918959524959',
        email: '24bcs023@iiitdwd.ac.in',
      },
      {
        name: 'Saswath Chowta',
        phone: '+919989441092',
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
    contactEmail: '22bec047@iiitdwd.ac.in',
    contactPhone: '+918977779523',
    techFacultyMentors: [
      {
        name: 'Dr. Rajesh Kumar',
        email: 'rajeshk@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'TN Sameera',
        role: 'Founder',
        linkedin: '',
        email: '22bec047@iiitdwd.ac.in',
        phone: '+918977779523',
      },
    ],
    teamMembers: [
      {
        name: 'A.S.Mithil',
        phone: '+917989256313',
        email: '22bec001@iiitdwd.ac.in',
      },
      {
        name: 'TN Sameera',
        phone: '+918977779523',
        email: '22bec047@iiitdwd.ac.in',
      },
      {
        name: 'Shiva Shankar B',
        phone: '+918217506727',
        email: '22bec043@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Rajesh Kumar',
        phone: '+918506007086',
        email: 'rajeshk@iiitdwd.ac.in',
      },
    ],
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
        phone: '+917892069460',
      },
    ],
    teamMembers: [
      {
        name: 'Prashant Bannulmath',
        phone: '+917892069460',
        email: 'prashantb@iiitdwd.ac.in',
      },
      {
        name: 'Swapnil Sontakke',
        phone: '+918149536928',
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
        name: 'Prof. S R Mahadev Prasanna',
        email: 'prasanna@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Suchit Artal',
        role: 'Founder',
        linkedin: '',
        email: '22bcs126@iiitdwd.ac.in',
        phone: '+918217680139',
      },
      {
        name: 'Samuel Naik',
        role: 'Founder',
        linkedin: '',
        email: '22bcs108@iiitdwd.ac.in',
        phone: '',
      },
      {
        name: 'S.N.Bhakti',
        role: 'Founder',
        linkedin: '',
        email: '22bcs104@iiitdwd.ac.in',
        phone: '',
      },
      {
        name: 'Rahul Trimukhe',
        role: 'Founder',
        linkedin: '',
        email: '22bcs097@iiitdwd.ac.in',
        phone: '',
      },
    ],
    teamMembers: [
      {
        name: 'Suchit Artal',
        phone: '+918217680139',
      },
      {
        name: 'Samuel Naik',
        phone: '+919916511834',
      },
      {
        name: 'S.N.Bhakti',
        phone: '+916360718021',
      },
      {
        name: 'Rahul Trimukhe',
        phone: '+917406173077',
      },
    ],
  },
]