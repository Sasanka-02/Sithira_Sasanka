/**
 * Purpose: Single source of truth for every section of the portfolio.
 * Edit content here; components only render it.
 */
import type {
  Activity,
  Category,
  Credential,
  Degree,
  Education,
  Experience,
  Metric,
  Profile,
  Project,
  SkillDomain
} from '@/types';

/** SpeakFree research links. Paste the Vercel URL into RESEARCH_LIVE_URL to show the 'Live website' button. */
const RESEARCH_LIVE_URL = 'https://speakfreewebsite.vercel.app/';
const researchLinks = [
  { label: 'Live website', url: RESEARCH_LIVE_URL, icon: 'mdi:open-in-new' },
  { label: 'View code', url: 'https://github.com/Sasanka-02/ResearchProject', icon: 'mdi:github' }
].filter((l) => l.url !== '');

export const profile: Profile = {
  fullName: 'Sithira Sasanka',
  handle: 'sithira',
  title: 'IT Undergraduate | Network & Systems Engineering',
  tagline: 'Hands-on with switching, wireless, firewalls, VPNs and fiber in a 24/7 IT/OT environment.',
  location: 'Gampaha, Sri Lanka',
  phone: '+94 76 408 7950',
  email: 'sithirasasanka002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sithira-sasanka-324383348/',
  github: 'https://github.com/Sasanka-02',
  photoUrl: '/profile.jpg',
  cvUrl: '/cv.pdf',
  summary:
    "Final-year IT undergraduate at SLIIT who recently completed a six-month network & systems internship at Colombo West International Terminal (CWIT), Sri Lanka's first fully automated container terminal.",
  about: [
    "From April to October 2026 I was an IT intern (Network & Systems) at CWIT, where the network doesn't just carry email. It connects driverless vehicles, cranes, remote operators and the automation systems that move containers around the clock.",
    'Working alongside the network team, I got hands-on at every layer: splicing fiber in the yard, configuring VLANs and trunks on aggregation switches, setting up vehicle Wi-Fi through the WLC, and assisting with firewall updates and an IPsec VPN to a banking partner during planned maintenance.',
    "Outside the internship I build labs (Cisco switching and routing, AWS VPCs defined as code, and now a Palo Alto HA cluster) and I'm studying for the CCNA."
  ],
  seeking: 'Network Engineer / NOC Engineer'
};

export const metrics: Metric[] = [
  { value: '6 mo', label: 'IT/OT internship', detail: 'CWIT · Colombo Port' },
  { value: '6', label: 'Maintenance windows supported', detail: '~23 hours, overnight' },
  { value: '12', label: 'ITVs configured', detail: 'Wi-Fi via Cisco WLC' },
  { value: '3', label: 'Data centers supported', detail: 'Main · PLC · DR' }
];

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'all' },
  { id: 'network', label: 'network' },
  { id: 'security', label: 'security' },
  { id: 'cloud', label: 'cloud' },
  { id: 'infra', label: 'infrastructure' },
  { id: 'software', label: 'software' }
];

export const skillDomains: SkillDomain[] = [
  {
    id: 'switching',
    category: 'network',
    title: 'Routing & Switching',
    icon: 'mdi:lan',
    command: 'show run | section switching',
    summary: 'Cisco IOS configuration across access, aggregation and yard switches.',
    skills: [
      { name: 'Cisco IOS CLI', env: 'prod' },
      { name: 'VLANs', env: 'prod' },
      { name: '802.1Q trunking', env: 'prod' },
      { name: 'Uplinks / aggregation', env: 'prod' },
      { name: 'IP addressing & subnetting', env: 'prod' },
      { name: 'LAN/WAN troubleshooting', env: 'prod' },
      { name: 'VTP', env: 'lab' },
      { name: 'DTP', env: 'lab' },
      { name: 'Static routing', env: 'lab' },
      { name: 'CCNA routing concepts', env: 'lab' }
    ]
  },
  {
    id: 'wireless',
    category: 'network',
    title: 'Wireless & Monitoring',
    icon: 'mdi:access-point-network',
    command: 'show wireless client summary',
    summary: 'Keeping moving vehicles connected and catching faults early.',
    skills: [
      { name: 'Cisco WLC', env: 'prod' },
      { name: 'AP & client roaming', env: 'prod' },
      { name: 'Cisco Catalyst Center (DNAC)', env: 'prod' },
      { name: 'Alert & incident monitoring', env: 'prod' },
      { name: 'First-level IT & Wi-Fi support', env: 'prod' },
      { name: 'Incident escalation', env: 'prod' }
    ]
  },
  {
    id: 'security',
    category: 'security',
    title: 'Network Security',
    icon: 'mdi:shield-lock-outline',
    command: 'get system status && show security policies',
    summary: 'Next-generation firewalls and site-to-site VPN.',
    skills: [
      { name: 'Fortinet FortiGate (FortiOS)', env: 'prod' },
      { name: 'Firewall policy configuration', env: 'prod' },
      { name: 'Palo Alto PAN-OS (hotfix, assisted)', env: 'prod' },
      { name: 'Firmware updates (assisted)', env: 'prod' },
      { name: 'IPsec site-to-site VPN (assisted)', env: 'prod' },
      { name: 'PAN-OS HA clustering', env: 'lab' },
      { name: 'Palo Alto User-ID', env: 'lab' }
    ]
  },
  {
    id: 'cloud',
    category: 'cloud',
    title: 'Cloud Networking',
    icon: 'mdi:cloud-outline',
    command: 'aws cloudformation deploy --template vpc.yaml',
    summary: 'Multi-tier AWS VPC designs deployed as infrastructure-as-code.',
    skills: [
      { name: 'AWS VPC', env: 'lab' },
      { name: 'Public / private subnets', env: 'lab' },
      { name: 'Route tables, IGW & NAT', env: 'lab' },
      { name: 'Security groups', env: 'lab' },
      { name: 'CloudFormation (YAML)', env: 'lab' },
      { name: 'Infrastructure as code', env: 'lab' },
      { name: 'Docker', env: 'academic' }
    ]
  },
  {
    id: 'physical',
    category: 'infra',
    title: 'Physical Infrastructure',
    icon: 'mdi:cable-data',
    command: 'fluke --test fiber --report',
    summary: 'Layer 1 done properly: spliced, tested, labelled.',
    skills: [
      { name: 'Fiber splicing', env: 'prod' },
      { name: 'FLUKE Versiv 2 testing', env: 'prod' },
      { name: 'Structured cabling', env: 'prod' },
      { name: 'Outdoor fiber box repair', env: 'prod' },
      { name: 'Rack verification & labelling', env: 'prod' },
      { name: 'UPS & battery health checks', env: 'prod' }
    ]
  },
  {
    id: 'datacenter',
    category: 'infra',
    title: 'Data Center & Systems',
    icon: 'mdi:server-network',
    command: 'vcenter --list vms --site dr',
    summary: 'Main, PLC and DR data center operations.',
    skills: [
      { name: 'Main / PLC / DR DC support', env: 'prod' },
      { name: 'VMware vCenter', env: 'prod' },
      { name: 'Blade servers', env: 'prod' },
      { name: 'Failover testing', env: 'prod' },
      { name: 'Docker', env: 'academic' }
    ]
  },
  {
    id: 'voice',
    category: 'network',
    title: 'Voice & Collaboration',
    icon: 'mdi:phone-voip',
    command: 'cucm --add-phone --user new',
    summary: 'Cisco unified communications for new users.',
    skills: [
      { name: 'Cisco CUCM', env: 'prod' },
      { name: 'Cisco IP phone provisioning', env: 'prod' }
    ]
  },
  {
    id: 'operations',
    category: 'infra',
    title: 'Change & Documentation',
    icon: 'mdi:clipboard-check-outline',
    command: 'change --window night --validate',
    summary: 'Planned changes with baselines, rollback thinking and clean diagrams.',
    skills: [
      { name: 'Maintenance windows', env: 'prod' },
      { name: 'Baseline checks', env: 'prod' },
      { name: 'Post-change validation', env: 'prod' },
      { name: 'Microsoft Visio diagrams', env: 'prod' },
      { name: 'Technical documentation', env: 'prod' },
      { name: 'Cisco Packet Tracer', env: 'lab' }
    ]
  },
  {
    id: 'programming',
    category: 'software',
    title: 'Programming',
    icon: 'mdi:code-braces',
    command: 'ls ~/languages',
    summary: 'Languages from coursework, research and side projects.',
    skills: [
      { name: 'Python', env: 'academic' },
      { name: 'Java', env: 'academic' },
      { name: 'C', env: 'academic' },
      { name: 'C++', env: 'academic' },
      { name: 'Kotlin', env: 'academic' },
      { name: 'JavaScript / TypeScript', env: 'academic' },
      { name: 'PHP', env: 'academic' }
    ]
  },
  {
    id: 'web',
    category: 'software',
    title: 'Web, Data & Tooling',
    icon: 'mdi:web',
    command: 'npm ls --depth=0',
    summary: 'Full-stack and API work from academic and research projects.',
    skills: [
      { name: 'React.js', env: 'academic' },
      { name: 'Node.js / Express.js', env: 'academic' },
      { name: 'FastAPI', env: 'academic' },
      { name: 'HTML / CSS', env: 'academic' },
      { name: 'SQL', env: 'academic' },
      { name: 'MongoDB', env: 'academic' },
      { name: 'Celery / Redis', env: 'academic' },
      { name: 'Git', env: 'academic' },
      { name: 'Postman', env: 'academic' }
    ]
  }
];

export const softSkills = [
  'Problem solving',
  'Analytical thinking',
  'Collaboration',
  'Communication',
  'Calm under pressure (24/7 ops)'
];

export const projects: Project[] = [
  {
    id: 'agg-switching',
    title: 'Phase 2 Aggregation Switching',
    category: 'network',
    env: 'prod',
    context: 'CWIT internship',
    period: '2026',
    status: 'Completed',
    summary:
      'Configured new aggregation switches for the ABB, ZPMC and CAMCO terminal-automation systems during the Phase 2 expansion.',
    highlights: [
      'Built VLAN segmentation, 802.1Q trunks and uplinks for three automation vendors on Cisco IOS.',
      'Replaced and reconfigured a yard switch after a configuration mismatch.',
      'Helped draw and complete the Phase 2 network architecture in Microsoft Visio.'
    ],
    stack: ['Cisco IOS', 'VLANs', '802.1Q', 'Uplinks', 'Visio']
  },
  {
    id: 'itv-wireless',
    title: 'ITV Wireless Setup & Roaming',
    category: 'network',
    env: 'prod',
    context: 'CWIT internship',
    period: '2026',
    status: 'Completed',
    summary:
      'Fixed and configured 12 new Internal Transfer Vehicles (ITVs), the driverless trucks that move containers across the yard, and managed their wireless connectivity.',
    highlights: [
      'Fixed and configured 12 new ITVs.',
      'Managed ITV wireless connectivity and roaming through the Cisco WLC.',
      'Monitored the network with Cisco Catalyst Center (DNAC).'
    ],
    stack: ['Cisco WLC', 'Catalyst Center', 'Wi-Fi roaming', 'IT/OT']
  },
  {
    id: 'ipsec-vpn',
    title: 'Site-to-Site IPsec VPN to a Bank (Assisted)',
    category: 'security',
    env: 'prod',
    context: 'CWIT internship',
    period: '2026',
    status: 'Assisted',
    summary: 'Assisted the network team in setting up a site-to-site IPsec VPN tunnel between CWIT and Sampath Bank.',
    highlights: ['Assisted in setting up the site-to-site IPsec VPN tunnel between CWIT and Sampath Bank.'],
    stack: ['IPsec', 'Site-to-site VPN']
  },
  {
    id: 'fortigate',
    title: 'FortiGate 101F Setup & Firewall Updates',
    category: 'security',
    env: 'prod',
    context: 'CWIT internship',
    period: '2026',
    status: 'Completed',
    summary:
      'Configured a new FortiGate 101F with new firewall policies, and assisted with firewall firmware and hotfix updates.',
    highlights: [
      'Configured a new FortiGate 101F with new firewall policies.',
      'Assisted with a Fortinet FortiGate firmware update.',
      'Assisted with a Palo Alto PAN-OS hotfix.'
    ],
    stack: ['FortiGate 101F', 'FortiOS', 'PAN-OS', 'Firmware lifecycle']
  },
  {
    id: 'paloalto-ha',
    title: 'Palo Alto HA Cluster & User-ID',
    category: 'security',
    env: 'lab',
    context: 'Home lab',
    period: '2026',
    status: 'In progress',
    summary: 'Learning Palo Alto firewall cluster management and User-ID setup in a lab.',
    highlights: [
      'Practising high-availability (HA) cluster management on Palo Alto firewalls.',
      'Setting up User-ID for user-based security rules.'
    ],
    stack: ['PAN-OS', 'HA cluster', 'User-ID']
  },
  {
    id: 'aws-vpc',
    title: 'Multi-Tier AWS VPC as Code',
    category: 'cloud',
    env: 'lab',
    context: 'Cloud lab',
    period: '2026',
    status: 'Lab',
    summary: 'Designed a multi-tier VPC network on AWS and deployed it with CloudFormation YAML templates.',
    highlights: [
      'Multi-tier VPC design with separate subnets for each tier.',
      'Infrastructure defined as code in CloudFormation YAML templates.'
    ],
    stack: ['AWS VPC', 'CloudFormation', 'YAML', 'Subnets']
  },
  {
    id: 'cisco-lab',
    title: 'Cisco Campus Switching & Routing Lab',
    category: 'network',
    env: 'lab',
    context: 'Packet Tracer lab',
    period: '2025 – 2026',
    status: 'Lab',
    summary: 'A multi-switch campus built in Cisco Packet Tracer to practise CCNA-level switching and routing.',
    highlights: [
      'VLANs and trunking with VTP and DTP.',
      'Static routing between network segments.',
      'General Cisco switch configuration and verification.'
    ],
    stack: ['Packet Tracer', 'Cisco IOS', 'VTP', 'DTP', 'Static routing']
  },
  {
    id: 'fiber',
    title: 'Fiber for Remote Crane Operation',
    category: 'infra',
    env: 'prod',
    context: 'CWIT internship',
    period: '2026',
    status: 'Completed',
    summary:
      'Fiber work for the remote crane-operator (RCO) desks, new cranes and yard Wi-Fi.',
    highlights: [
      'Spliced 6-core fiber for the remote crane-operator desks.',
      'Connected 2 new CRMG cranes and the yard Wi-Fi poles.',
      'Repaired a damaged outdoor fiber box.',
      'Tested and certified links with a FLUKE Versiv 2.'
    ],
    stack: ['Fiber splicing', 'FLUKE Versiv 2', 'Structured cabling']
  },
  {
    id: 'maintenance',
    title: 'Night Maintenance Windows & DC Operations',
    category: 'infra',
    env: 'prod',
    context: 'CWIT internship',
    period: '2026',
    status: 'Completed',
    summary:
      "Supported planned changes and day-to-day operations across the terminal's main, PLC and DR data centers.",
    highlights: [
      'Supported 6 planned night maintenance windows (~23 hours) with baseline checks, failover testing and post-change validation.',
      'Managed VMs in VMware vCenter and blade servers.',
      'Ran weekly UPS and battery health checks.',
      'Verified and labelled IT-OT network racks.'
    ],
    stack: ['Catalyst Center', 'VMware vCenter', 'Blade servers', 'UPS']
  },
  {
    id: 'speakfree',
    title: 'SpeakFree: Speech Disorder Screening',
    category: 'software',
    env: 'academic',
    context: 'SLIIT research · R26-IT-086',
    period: '2026',
    status: 'Completed',
    summary:
      'Final-year research project (completed). Built the speech capture and feature-extraction component of a four-member AI platform for speech disorder screening and therapy.',
    highlights: [
      'Browser capture UI in React, TypeScript and Vite, with a FastAPI backend.',
      'Noise reduction, voice activity detection and Whisper ASR with confidence scoring.',
      'HuBERT embeddings and Librosa acoustic features.',
      'Structured JSON contract for the other three components; containerised with Docker, Celery and Redis.'
    ],
    stack: ['FastAPI', 'React', 'Whisper', 'HuBERT', 'Docker', 'Redis'],
    links: researchLinks
  },
  {
    id: 'ssms',
    title: 'Security Service Management System',
    category: 'software',
    env: 'academic',
    context: 'Team of 8',
    period: 'Jul – Nov 2024',
    status: 'Shipped',
    summary: 'MERN web application for a security services company. I built the inventory management module.',
    highlights: [
      'Inventory management module on MongoDB, Express.js, React.js and Node.js.',
      'Used Git for version control and Postman for API testing.'
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Postman']
  },
  {
    id: 'timemate',
    title: 'Time Mate',
    category: 'software',
    env: 'academic',
    context: 'Android app',
    period: 'Jul – Nov 2024',
    status: 'Shipped',
    summary: 'Android productivity app with task management, timers and reminders.',
    highlights: [
      'Task management, timers and reminders.',
      'Local data retention with Shared Preferences.'
    ],
    stack: ['Kotlin', 'Android Studio', 'Shared Preferences']
  },
  {
    id: 'library',
    title: 'Library Management System',
    category: 'software',
    env: 'academic',
    context: 'Team of 5',
    period: 'Jul – Nov 2023',
    status: 'Shipped',
    summary: 'Web-based library system. I owned the CRUD operations and the unregistered-student features.',
    highlights: ['CRUD operations and unregistered-student workflows.'],
    stack: ['PHP', 'JavaScript', 'HTML', 'CSS']
  }
];

export const experience: Experience[] = [
  {
    role: 'IT Intern (Network & Systems)',
    company: 'Colombo West International Terminal (Pvt) Ltd',
    location: 'Colombo Port',
    period: 'Apr 2026 – Oct 2026',
    summary: "Six-month internship with the IT/network team at Sri Lanka's first fully automated container terminal, a 24/7 IT/OT environment.",
    log: [
      { tag: 'NOC', text: 'Monitored the IT/OT network with Cisco Catalyst Center (DNAC); supported 6 planned night maintenance windows (~23 h) with baseline checks, failover testing and post-change validation.' },
      { tag: 'WLAN', text: 'Fixed and configured 12 new Internal Transfer Vehicles (ITVs); managed their wireless connectivity and roaming through the Cisco WLC.' },
      { tag: 'SEC', text: 'Assisted with a Palo Alto PAN-OS hotfix and a FortiGate firmware update; configured a new FortiGate 101F with new firewall policies.' },
      { tag: 'VPN', text: 'Assisted in setting up a site-to-site IPsec VPN tunnel between CWIT and Sampath Bank.' },
      { tag: 'L2', text: 'Configured new aggregation switches for the ABB, ZPMC and CAMCO automation systems (VLANs, trunks, uplinks); replaced and reconfigured a yard switch after a configuration mismatch.' },
      { tag: 'L1', text: 'Spliced 6-core fiber for the RCO desks, connected 2 new CRMG cranes and yard Wi-Fi poles, repaired an outdoor fiber box and tested links with a FLUKE Versiv 2.' },
      { tag: 'DC', text: 'Supported the main, PLC and DR data centers; managed VMs in VMware vCenter and blade servers; ran weekly UPS and battery health checks.' },
      { tag: 'DOC', text: 'Helped complete the Phase 2 network architecture in Microsoft Visio; provisioned Cisco IP phones for 2 new users in CUCM.' },
      { tag: 'OPS', text: 'Verified and labelled IT-OT network racks; provided first-level IT, Wi-Fi and control-room (TechOps) support with clear incident escalation.' }
    ]
  }
];

export const credentials: Credential[] = [
  { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco · currently studying, not yet certified', status: 'in-progress', date: '2026' },
  { name: 'Fortinet FortiGate (FortiOS)', issuer: 'Internship · CWIT', status: 'hands-on', date: '2026' },
  { name: 'Palo Alto Networks (PAN-OS)', issuer: 'Hotfix support at CWIT · HA lab', status: 'hands-on', date: '2026' },
  { name: 'Cisco WLC · Catalyst Center · CUCM', issuer: 'Internship · CWIT', status: 'hands-on', date: '2026' }
];

export const degree: Degree = {
  degree: 'BSc (Hons) in Information Technology',
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  period: 'Nov 2022 – Present',
  status: 'Final year',
  specialisation: 'Specialisation in Information Technology',
  modules: [
    { code: 'IT4110', name: 'Computer Systems & Network Administration', network: true },
    { code: 'IT4020', name: 'Modern Topics in IT' },
    { code: 'IT2070', name: 'Data Structures & Algorithms' }
  ],
  research: {
    title: 'SpeakFree: AI Speech Disorder Screening & Therapy Assistant',
    code: 'R26-IT-086',
    status: 'Completed',
    summary:
      'Built the speech capture and feature-extraction component of a four-member research platform (React, FastAPI, Whisper, HuBERT, Docker).',
    links: researchLinks
  }
};

export const education: Education[] = [
  {
    degree: 'Diploma in Business English',
    institution: 'Institute of Management & Business Studies',
    period: 'Jan 2019 – Nov 2019'
  },
  {
    degree: 'GCE Advanced Level (Engineering Technology)',
    institution: 'Bandaranayake College, Gampaha',
    period: '2022',
    results: ['Engineering Technology · B', 'Science for Technology · B', 'ICT · C', 'General English · B']
  },
  {
    degree: 'GCE Ordinary Level',
    institution: 'Bandaranayake College, Gampaha',
    period: '',
    detail: "7 A's and 2 B's, including A passes in English, ICT and Mathematics.",
    results: ["7 A's", "2 B's"]
  }
];

export const activities: Activity[] = [
  { title: 'President', organization: 'Bandaranayake College Red Cross Society', period: '2019 – 2020' },
  { title: 'Member', organization: 'Bandaranayake College Cricket Team', period: '2015 – 2017' }
];
