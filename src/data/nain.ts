import type { NAINPageData } from '@/types/nain'

export const nainImages = [
  { src: '/nain/img1.jpeg', alt: 'Startup demo' },
  { src: '/nain/img2.jpeg', alt: 'Student innovation' },
  { src: '/nain/img3.jpeg', alt: 'Mentorship session' },
]

export const nainPage: NAINPageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'New Age Innovation Network',
    subtitle:
      'NAIN at IDRP supports innovation, mentoring, prototyping, and entrepreneurship by connecting institutes, coordinators, faculty guides, and student teams through structured project guidance and ecosystem support.',
    primaryActionLabel: 'Explore Institutes',
    primaryActionHref: '#institutes',
    secondaryActionLabel: 'Contact IDRP',
    secondaryActionTo: '/contact',
  },

  overview: {
    eyebrow: 'Overview',
    title: 'Building an institute-level innovation network',
    paragraphs: [
      'The New Age Innovation Network (NAIN) builds an innovation pipeline by mentoring institutes, supporting student idea development, enabling project execution, and strengthening early-stage entrepreneurial thinking.',
      'As the number of supported institutes and projects grows every year, this page is designed to showcase support in a scalable way — year-wise, institute-wise, and project-wise.',
    ],
    stats: [
      {
        id: 'institutes',
        label: 'Institutes Supported',
        tone: 'teal',
      },
      {
        id: 'projects',
        label: 'Total Projects',
        tone: 'cyan',
      },
    ],
  },

  pmu: {
    name: 'Indian Institute of Information Technology, Dharwad',
    principalInvestigator: 'Dr. Deepak K T',
    coPrincipalInvestigator: 'Dr. Sunil Saumya',
    programAssociate: 'Ms. Darshana Kasar',
  },

  institutesSection: {
    title: 'Institutes supported under NAIN',
  },

  institutes: [
    {
      id: 'kleit',
      name: 'KLE Institute of Technology',
      city: 'Hubballi',
      state: 'Karnataka',
      description: 'NAIN host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/kleit.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Krishnendu Ghosh',
            dia: 'Mr. Manjunath Prasad',
            misExecutives: ['Mrs. Deepa Sajjan'],
            nainCoordinator: 'Mr. Manjunath Prasad',
          },
          projects: [
            {
              id: 'kleit-p1',
              title: 'Oursoulss : Empowering Lives through Professional and Peer Counseling',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Mr. Manish S Shetty',
              teamMembers: [
                'Mr. Yashas Patil',
                'Miss. Shravani Sindagi',
                'Miss. Tejaswini Badiger',
              ],
            },
            {
              id: 'kleit-p2',
              title: 'Pedal Powered Electricity Generation for Government Schools',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Mr. Amir Hamza Betgeri',
              teamMembers: [
                'Mr. Vijay Joshi',
                'Mr. Talluri Shivaram',
                'Mr. T. Sampat',
                'Mr. Vishvanatha M.',
              ],
            },
            {
              id: 'kleit-p3',
              title: 'Development of AIuminum Air Battery',
              facultyGuideName: 'Mr. Manjunath G. Prasad',
              teamLeaderName: 'Mr. Omkar Deshpande',
              teamMembers: [
                'Kiran Madiwalar',
                'Mr. Gagan R. Kori',
                'Mr. khushal R. Damamgar',
              ],
            },
            {
              id: 'kleit-p4',
              title: 'Smart Medicine Dispenser with App Integration for Automated Medication Management',
              facultyGuideName: 'Dr. Manu T. M.',
              teamLeaderName: 'Miss. Vinaya Alandkar',
              teamMembers: [
                'Mr. Namit Jalihal',
                'Mr. Praveen Ketannavar',
                'Mr. Pruthvi Navalur',
                'Rajesh Sambaragi',
              ],
            },
            {
              id: 'kleit-p5',
              title: 'Evaluating the Feasibility and Benefits of Grey water for the Urban Community Using IoT.',
              facultyGuideName: 'Dr. Rajashekhar S. Laddimath',
              teamLeaderName: 'Mr. Umar Faruk Budde Saheb Hallikeri',
              teamMembers: [
                'Irabhadrayya C. Hiremath',
                'Mr. Rahul Y. Bevinahalli',
                'Mr. Hanumant S. Vajjaramatti',
                'Mr. Netravati G. Ambigeri',
              ],
            },
            {
              id: 'kleit-p6',
              title: 'UAV – GPR for Emergency Rescue Mission',
              facultyGuideName: 'Dr. Manu T. M.',
              teamLeaderName: 'Mr. Manoj N',
              teamMembers: ['Mr. Dhanraj S'],
            },
            {
              id: 'kleit-p7',
              title: 'Assistive Technology for Empowering Visually Impaired Students in Mainstream Classrooms',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Miss. Ananya Kalasaraddi',
              teamMembers: [
                'Mr. Krishna G. Pawar',
                'Mr. Ronit R. Bongale',
                'Miss. Shakuntala Saunshi',
              ],
            },
            {
              id: 'kleit-p8',
              title: 'Influences of marbel powder on properties of alkali activated slag concrete cured atambint temperature',
              facultyGuideName: 'Dr. Veeresh B. Karikatti',
              teamLeaderName: 'Mr. Sagar Munavalli',
              teamMembers: [
                'Mr. Atul P. Pujar',
                'Miss. Laxmi Khodanpur',
                'Mr. Abhishek R. Bagalkote',
                'Mr. Sagar Kolur',
              ],
            },
            {
              id: 'kleit-p9',
              title: 'Prevention of Open Car Door Accident (sonic collision detection)',
              facultyGuideName: 'Mr. Prakash M. N.',
              teamLeaderName: 'Mr. Akash A Hotagi',
              teamMembers: [
                'Mr. Abhishek B Karadipatil',
                'Mr. Chetan S. Kumbar',
                'Mr. Manjunath D. Ballery',
                'Mr. Vijay Hiregouder',
              ],
            },
            {
              id: 'kleit-p10',
              title: 'NiravaDx: Revolutionizing Non - Invasive Blood Group Detection for Rapid Diagnostics',
              facultyGuideName: 'Dr. Sushrut S. H.',
              teamLeaderName: 'Miss. Sharadeeshri H Kenchagoudati',
              teamMembers: ['Miss. Rajeshwari D.'],
            },
          ],
        },
      ],
    },

    {
      id: 'dimhans',
      name: 'Dharwad Institute of Mental Health and Neurosciences',
      city: 'Dharwad',
      state: 'Karnataka',
      description: 'NAIN host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/dimhans.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Chinmayananda A',
            dia: 'Dr. Shivarudrappa Bhairappanavar',
            misExecutives: ['NA'],
            nainCoordinator: 'Dr. Srinivas Kosgi',
          },
          projects: [
            {
              id: 'dimhans-p1',
              title:
                'Digital Voice Recording of Psychiatric evaluation (History, MSE, Higher Mental Status Examination and psychopathology) on Patient visiting out patients service',
              facultyGuideName: 'Dr. Srinivas Kosgi',
              teamLeaderName: 'Dr. Madhu Koli - Department of Psychiatry',
              teamMembers: [
                'Dr. Arunkumar C',
                'Dr. Shivarudrappa Bhairappanavar',
                'Dr. Deepak K T',
                'Dr. Ramchandra Horratti',
                'Smt. Ashwini R Patil',
              ],
            },
            {
              id: 'dimhans-p2',
              title:
                'Ai Based Application To Empower Parents Of Children With IDD with Regard To Self-Help Skills',
              facultyGuideName: 'Smt. Sushma C',
              teamLeaderName: 'Arpitha I M - Department of Clinical Psychology',
              teamMembers: [
                'Smt. Ashwini R Patil',
                'Dr. Sunanda G T',
                'Dr. Megahamala',
                'Smt. Mallika B N',
              ],
            },
            {
              id: 'dimhans-p3',
              title:
                'Effectiveness of awareness of suicide assessment model on Role of Healthcare Workers in Managing Suicide Risk in Patients admitted at DIMHANS Dharwad',
              facultyGuideName: 'Dr. Susheelkumar V Ronad',
              teamLeaderName: 'Deepa V Channappagouda - Department of Psychiatry Nursing',
              teamMembers: [
                'Dr. Shivarudrappa Bhairappanavar',
                'Dr. Asif Savanoor',
                'Dr. Chetan S Patali',
                'Mr. Oba Naik P',
              ],
            },
            {
              id: 'dimhans-p4',
              title:
                'A study to evaluate the effectiveness of structured program on depression awareness among teacher at residential school of Dharwad under social welfare department.',
              facultyGuideName: 'Dr. Susheelkumar V Ronad',
              teamLeaderName: 'Ashwini Basvaraj Nekar - Department of Psychiatry Nursing',
              teamMembers: [
                'Dr. Arunkuar C',
                'Dr. Shivarudrappa Bhairappanavar',
                'Dr. Veeresh Nadagaon',
                'Dr. Febby Mary',
              ],
            },
            {
              id: 'dimhans-p5',
              title:
                "Development of SNP Panel for Screening of Alzheimer’s disease associated SNP’s in Indian Cohort",
              facultyGuideName: 'Dr. Manjunath Bajantri and Dr. Srinivas Kosgi',
              teamLeaderName: 'Dr. Ramchandra Horatti - Department of Psychiatry',
              teamMembers: [
                'Dr. Deepak K T',
                'Dr. Shivarudrappa Bhairappanavar',
                'Mr. Ashok Kumar',
                'Dr. Pavansingh Tiwari',
              ],
            },
            {
              id: 'dimhans-p6',
              title:
                'Relapse Prevention Among Patients With Alcohol Use Disorder in Indian Scenario: Role of Psycho-Social Interventions',
              facultyGuideName: 'Dr. Ashok Kori',
              teamLeaderName: 'Mr. Ramesh - Department of Psychiatry Social Work',
              teamMembers: [
                'Arunkumar C',
                'Dr. Srinivas Kosgi',
                'Dr. Susheelkumar V Ronad',
              ],
            },
            {
              id: 'dimhans-p7',
              title: 'Biological Markers In Problematic Internet Use',
              facultyGuideName: 'Dr. Megahamala T',
              teamLeaderName: 'Dr. Itishree Das - Department of Psychiatry',
              teamMembers: [
                'Smt. Ashwini R Patil',
                'Dr. Raghavendra Patil',
                'Smt. Sushma C',
                'Smt. Mallika B N',
                'Dr. Sindhu',
                'Dr. Shivarudrappa Bhairappanavar',
              ],
            },
            {
              id: 'dimhans-p8',
              title:
                'The Effects Of Waiting Time And Satisfaction Among Patients Visiting Psychiatry Outpatient Department Of A Tertiary Care',
              facultyGuideName: 'Dr. Megahamala T',
              teamLeaderName: 'Dr. Triveni Malaghan - Department of Psychiatry',
              teamMembers: [
                'Smt. Ashwini R Patil',
                'Dr. Raghavendra Patil',
                'Smt. Sushma C',
                'Smt. Mallika B N',
                'Dr. Jayashree',
              ],
            },
            {
              id: 'dimhans-p9',
              title:
                'Effectiveness of Technology based nursing intervention (video support and SMS) on symptom severity, number of admissions and medication adherence among mentally ill individuals',
              facultyGuideName: 'Dr. Sreevani R',
              teamLeaderName: 'Mr. Ganesh Tevarannavar - Department of Psychiatry Nursing',
              teamMembers: ['Smt. Ashwini R Patil'],
            },
          ],
        },
      ],
    },

    {
      id: 'klecop',
      name: 'KLE College of Pharmacy',
      city: 'Belagavi',
      state: 'Karnataka',
      description: 'NAIN host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/klepharm.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Sunilkumar P V',
            dia: 'Dr. Bhaskar K. Kurangi',
            misExecutives: ['Mr. Rohan Singadi'],
            nainCoordinator: 'Dr. Nithyananda Sastry Darbha',
          },
          projects: [
            {
              id: 'klecop-p1',
              title:
                "Formulation, evaluation, and optimization of Paeoniflorin-loaded niosomal in-situ gel for the effective management of Parkinson's disease",
              facultyGuideName: 'Ms. Kishori P Sutar & Mr. Prakash Biradar',
              teamLeaderName: 'Ms. Yashaswini Joshi',
              teamMembers: ['Ms. Priyanka Saini', 'Mr. Shivaraj Hooli'],
            },
            {
              id: 'klecop-p2',
              title: 'Development of bacoside loaded cubosome nanoformulation for targeting brain',
              facultyGuideName: 'Dr. Bhaskar Kurangi',
              teamLeaderName: 'Ms. Krutika Krishna Shet',
              teamMembers: ['Mr. Akash Borganave', 'Mr. Soham Naik Gaonkar'],
            },
            {
              id: 'klecop-p3',
              title:
                'Permeability-Enhanced Liposomal Emulgel Formulation of Mupirocin and Bromelain for the treatment of Bacterial Folliculitis.',
              facultyGuideName: 'Dr. Bhuvaneshwari Sharannavar',
              teamLeaderName: 'Ms. Chanchal Tapdiya',
              teamMembers: ['Ms. Shrigouri Patil', 'Mr. Sushant Madar'],
            },
            {
              id: 'klecop-p4',
              title: 'Cosmeceutical Dual-Action Nano Formulation for Hair Restoration and Hair Growth',
              facultyGuideName: 'Dr. V.S. Mannur',
              teamLeaderName: 'Mr. Naman Kothari',
              teamMembers: [
                'Mr. Rahul Koli',
                'Mr. Gangadhar Meled',
                'Mr. Pratik Basagoudar',
              ],
            },
            {
              id: 'klecop-p5',
              title:
                'Novel heterocyclic compound as an anti-cancer agent against triple-negative breast cancer: In vitro anticancer activity',
              facultyGuideName: 'Dr. Shankar G Alegaon',
              teamLeaderName: 'Mr. Vishwajit Gundu Patil',
              teamMembers: ['Mr. Niteen R Sutar', 'Mr. Vinayak Dundage'],
            },
            {
              id: 'klecop-p6',
              title:
                'Assessment of Safety and Efficacy of Total Parenteral Nutrition (TPN) in NICU and Neonates – A Clinical Pharmacist’s Approach',
              facultyGuideName: 'Dr. Shashikala Wali',
              teamLeaderName: 'Mr. Mohanmad Junaid Patel',
              teamMembers: [
                'Mr. Mohammed Uzair I Inamdar',
                'Mr. Mohd Hayat Mujawar',
                'Mr. Farhan Bagsiraj',
                'Dr. Shweta Radekar',
              ],
            },
            {
              id: 'klecop-p7',
              title: 'Exploring natural dyes for commercially viable environmental friendly applications.',
              facultyGuideName: 'Dr. Nithyananda Sastry Darbha',
              teamLeaderName: 'Mr. Kumar B Koneri',
              teamMembers: ['Ms. Aakanksha Shinde', 'Mr. Shreyash Gaikwad'],
            },
            {
              id: 'klecop-p8',
              title:
                'Development and evaluation of herbal bioacatives loaded nanoformulation for anti-inflammatory potential.',
              facultyGuideName: 'Mr. Akshay K Patil',
              teamLeaderName: 'Ms. Pratibha Koli',
              teamMembers: [
                'Mr. Praneeth Mandi',
                'Mr. Omkar Jagnure',
                'Mr. Sagar Wasedar',
                'Mr. Sachin Gudasi',
              ],
            },
            {
              id: 'klecop-p9',
              title: 'Indigenous smart herbal mosquito repellent machine with advanced features.',
              facultyGuideName: 'Dr. Basavaraj Dinnimath',
              teamLeaderName: 'Ms. Priva V Shettennavar',
              teamMembers: [
                'Ms. Priya V Shettennavar',
                'Ms. Pooja Chandrakant Chougala',
                'Ms. Priyanka Mrityunjay Marihal',
              ],
            },
            {
              id: 'klecop-p10',
              title:
                'Nanosuspension-Based Combination Therapy of Dacarbazine and Statin for Enhanced Melanoma Therapy.',
              facultyGuideName: 'Ms. Nisha Shirkoli',
              teamLeaderName: 'Ms. Sanisha Santosh Shetye',
              teamMembers: [
                'Mr. Atharv Daddi',
                'Mr. Adarsh Umrani',
                'Ms. Shraddha Puranik',
                'Ms. Shifa Sayed',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'sgbit',
      name: 'S. G. Balekundri Institute of Technology',
      city: 'Belagavi',
      state: 'Karnataka',
      description: 'NAIN host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/sgbit.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Sunil C K',
            dia: 'Dr. Suresh Akkole',
            misExecutives: ['Dr. Manjunath Sharanappanavar'],
            nainCoordinator: 'Dr. Sanjeev Kulkarni',
          },
          projects: [
            {
              id: 'sgbit-p1',
              title: 'E- Cattle management',
              facultyGuideName: 'Dr. Anita Patil',
              teamLeaderName: 'Bibiraheema Nadaf',
              teamMembers: [
                'MohammedAzeem H Nadaf',
                'Chetan S Karadiguddi',
                'Supriya Anand Hanagadakar',
                'Sanjeevini Ravasab Chougala',
              ],
            },
            {
              id: 'sgbit-p2',
              title:
                'Production of Eco-Friendly Cementless Interlocking Paver Blocks using Plastic Sand for Light Traffic',
              facultyGuideName: 'Prof.Vivekanand Korishetti, Prof.Sandeep Kulkarni',
              teamLeaderName: 'Rahul Gadaveer',
              teamMembers: [
                'Pradeep M Amboji',
                'B Jhanu',
                'Sanjana Mutakekar',
                'Masud Ahmed',
              ],
            },
            {
              id: 'sgbit-p3',
              title: 'Renewable energy-Urja wave',
              facultyGuideName: 'Prof.Suvarna Karki',
              teamLeaderName: 'Suraj Umesh Pachapur',
              teamMembers: [
                'Ankit M Dasankoppa',
                'Vaishnavi R Patil',
                'Harshit R Hiremath',
                'Prakul Sunil Hiremath',
              ],
            },
            {
              id: 'sgbit-p4',
              title: 'Tribrid Vehicle',
              facultyGuideName: 'Prof. Mallikarjun Bhagawati',
              teamLeaderName: 'Kartik Payannavar',
              teamMembers: [
                'Basavaraj M Bhusani',
                'Darshan Badiger',
                'Priyanka Badiger',
              ],
            },
            {
              id: 'sgbit-p5',
              title: 'MediAssist: AI-Powered Healthcare Companion App',
              facultyGuideName: 'Prof.Santosh Naduvinamani.',
              teamLeaderName: 'Rakesh Sabnis',
              teamMembers: [
                'Nilesh S Patil',
                'Naveedahmed I Hakim',
                'Piyush Kulkarni',
                'Atul Patil',
              ],
            },
            {
              id: 'sgbit-p6',
              title:
                'CareTroid: Robotic Assistance for Elderly Well-being and Remote Family Support',
              facultyGuideName: 'Prof.Rajeshwari Kisan, Prof.Kshitij Sheth',
              teamLeaderName: 'Shrusti Padmannavar',
              teamMembers: [
                'Sampada Chaugule',
                'Hemant Mandi',
                'Chirag Kamble',
                'Rushikesh Patil',
              ],
            },
            {
              id: 'sgbit-p7',
              title:
                'NOVEL ERA OF JUSTICE-AI: Advanced Criminal Case Analysis and Automated Judgment System',
              facultyGuideName: 'Dr.Shankargoud Patil',
              teamLeaderName: 'Aryan Akshay Hubballi',
              teamMembers: [
                'Adarsh Mulangi',
                'Mahesh Goudappanavar',
                'Karthik Murti',
                'Tukaram kilari',
              ],
            },
            {
              id: 'sgbit-p8',
              title: 'Automated Effluent Treatment System',
              facultyGuideName: 'Dr.Supanna Shirguppe, Dr Prashant B Bhagawati',
              teamLeaderName: 'Adnan Belwadi',
              teamMembers: [
                'Misbha Killedar',
                'Rohan Bajantri',
                'Prachi Jakkanawar',
              ],
            },
            {
              id: 'sgbit-p9',
              title: 'Bioloop : Transforming CO2 into biofuel',
              facultyGuideName: 'Dr.Shivanand Hiremath',
              teamLeaderName: 'Shreya Yargattimath',
              teamMembers: [
                'Harshit R Hiremath',
                'Prakul Sunil Hiremath',
                'Suraj Umesh Pachapur',
                'Ankit M Dasankoppa',
              ],
            },
            {
              id: 'sgbit-p10',
              title: 'Variable angle on chair cum stretcher prototype',
              facultyGuideName: 'Prof.Vishwanath Khadakbhavi',
              teamLeaderName: 'Basavaraj Singadi',
              teamMembers: [
                'Nikhita.B',
                'Aralikatti',
                'Shivashankar.R.Talakeri',
                'Siddarth.Jingre',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'bldea',
      name: "BLDEA's V P Dr. P.G. Halakatti College of Engineering and Technology",
      city: 'Vijayapura',
      state: 'Karnataka',
      description: 'NAIN host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/bldeacet.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Prakash Pawar',
            dia: 'Mr. Bheemesh K. Gudur',
            misExecutives: ['Mrs. Deepti D Patil'],
            nainCoordinator: 'Mr. Rajashekhar D Salagar',
          },
          projects: [
            {
              id: 'bldea-p1',
              title: 'Manufacturing of ECO friendly paint using cow dung',
              facultyGuideName: 'Dr. B. M. Angadi and Dr. Anuradha Tankasali',
              teamLeaderName: 'Khushi Katti',
              teamMembers: [
                'Suraj Paramashety',
                'Kumkum Hajeri',
                'Sachin Savalgi',
                'Jagadish Babaleshwar',
              ],
            },
            {
              id: 'bldea-p2',
              title:
                'AI-Powered Interactive Robot with Real-Time Video Tracking and Voice Query Response System',
              facultyGuideName: 'Dr.Pradeep Malaji and Prof. Hemavathi Biradar',
              teamLeaderName: 'Harsh Kalaburgi',
              teamMembers: [
                'Aditya R Hiremath',
                'Keerti C Deshpande',
                'Manjunath Wali',
                'Aditya Talawar',
              ],
            },
            {
              id: 'bldea-p3',
              title: 'SmartWeed: Automated Weed Detection and Removal System for Sustainable Farming',
              facultyGuideName: 'Prof. V. C. Sajjanar',
              teamLeaderName: 'Mruthunjay Hiremath',
              teamMembers: [
                'Piyush Jadhav',
                'Sarvada Shahapure',
                'Sanjana Ghorpade',
                'Alumni: Dr. R. M. Math',
              ],
            },
            {
              id: 'bldea-p4',
              title: '3D Printed Functionally Graded Thermoelectric Devices',
              facultyGuideName: 'Dr. R. S. Kondaguli',
              teamLeaderName: 'Srushthi Shankar Budni',
              teamMembers: ['Sarvesh Maidaragi', 'Vinay Katnalli'],
            },
            {
              id: 'bldea-p5',
              title:
                'Biochar-Based Negative Carbon Concrete: Optimizing Environmental Performance with Sensor Technology',
              facultyGuideName: 'Prof. M. B. Ishwaragol',
              teamLeaderName: 'Seema Basavraj Savalgi',
              teamMembers: [
                'Sudha Gouli',
                'Swati Ramrath',
                'Narendra Rodagi',
                'Navedahmed Choudari',
              ],
            },
            {
              id: 'bldea-p6',
              title: 'Smart Irrigation Systems: Automated controls to optimize water usage',
              facultyGuideName: 'Prof. M. U. Nagaral',
              teamLeaderName: 'Aishwarya Chakote',
              teamMembers: [
                'Swati Shirashyad',
                'Varsha Korabu',
                'Spoorti Kolkar',
                'Mufliya Kaunen',
              ],
            },
            {
              id: 'bldea-p7',
              title:
                'Krishi care:Collecting and Analyzing Drone Imagery for Crop pest control',
              facultyGuideName: 'Dr. Leena Ragha',
              teamLeaderName: 'Nikita S Nirvanashetti',
              teamMembers: [
                'Megha Pawadabasappa Dengi',
                'Mohammad Uwais Thanedar',
                'Shraddha Santosh Patil',
                'Sneha Chinchali',
              ],
            },
            {
              id: 'bldea-p8',
              title:
                'Cattle feed (Pallets) Manufacturing machine using agricultural waste',
              facultyGuideName: 'Dr. B. M. Angadi',
              teamLeaderName: 'Bhavya Melinamath',
              teamMembers: [
                'Iranna Karakal',
                'Nandeesh Awati',
                'Omkar Mane',
                'Basangouda P Patil',
              ],
            },
            {
              id: 'bldea-p9',
              title: 'Krishi Sprayer : Drone based intelligent sprayer',
              facultyGuideName: 'Dr. Leena Ragha',
              teamLeaderName: 'Sayeda Rifat Ayeesha Quadri',
              teamMembers: ['Srinidhi Sutraway', 'Adarsh Bannur', 'Numan Patil'],
            },
            {
              id: 'bldea-p10',
              title:
                'Design and Development of a 3.5 kW off-board solar charging station for farm machinery/loads using multioutput DC-DC Converter.',
              facultyGuideName: 'Prof. Shirang Kulkarni',
              teamLeaderName: 'Shivaraj Basavaprabhu',
              teamMembers: [
                'Vidya Mallikarajuna Math.',
                'Aishwaraya R Sagar.',
                'Sagar U Poojari.',
                'Alumni: Prof. Prashant Kadi',
              ],
            },
          ],
        },
      ],
    },
  ],
}