import { assetPath } from '../utils/assetPath';

export const servicesData = [
  {
    id: 'cctv-systems',
    title: 'Commercial & Residential CCTV Systems',
    category: 'Surveillance',
    badge: 'Popular',
    image: assetPath('/images/services/service-1.png'),
    shortDesc: 'Complete 4K HD IP and analog camera installations with AI motion detection, night vision, and 24/7 remote smartphone access.',
    fullDesc: 'High-definition smart security cameras featuring AI-driven human/vehicle detection, color night vision, license plate recognition, and seamless remote monitoring on mobile devices. Designed for maximum reliability and 24/7 coverage for homes, retail, and commercial complexes.',
    features: [
      '4K Ultra HD Crisp Resolution',
      'AI Human & Vehicle Motion Detection',
      'Full Color Thermal & Night Vision',
      'Remote Smartphone Live View & Playback',
      'Vandal-Proof & IP67 Weatherproof',
      'Cloud & On-Premises NVR Storage'
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control Systems',
    category: 'Access Control',
    badge: 'Enterprise',
    image: assetPath('/images/services/service-2.png'),
    shortDesc: 'Secure door access control using RFID cards, PIN keypads, and mobile app unlocking for offices, apartments, and industrial sites.',
    fullDesc: 'Manage, restrict, and monitor entry into sensitive areas with electronic locks, card readers, and centralized access management software. Keep detailed audit logs of all entries and instantly revoke access when needed.',
    features: [
      'Smart RFID & Proximity Card Readers',
      'PIN Keypads & Electronic Door Locks',
      'Real-Time Entrance Audit Logs',
      'Automated Time-Based Door Schedules',
      'Mobile App Remote Door Release',
      'Emergency Master Panic Integration'
    ]
  },
  {
    id: 'biometric-attendance',
    title: 'Biometric Attendance Systems',
    category: 'Access Control',
    badge: 'HR Tech',
    image: assetPath('/images/services/service-5.png'),
    shortDesc: 'Advanced fingerprint and AI facial recognition terminals to track employee attendance and integrate with payroll software.',
    fullDesc: 'Streamline workforce management and eliminate buddy punching with high-speed 0.2-second facial recognition and fingerprint biometric scanners. Includes automated attendance reporting and direct CSV/Excel export for payroll systems.',
    features: [
      'Sub-Second Contactless Face Recognition',
      'Optical Anti-Spoof Fingerprint Sensors',
      'Automated Daily/Monthly Shift Reports',
      'Multi-Branch Remote Sync over Cloud',
      'Direct Integration with Payroll Software',
      'Battery Backup & Offline Event Log'
    ]
  },
  {
    id: 'smart-intercoms',
    title: 'Smart Video Intercoms',
    category: 'Smart Automation',
    badge: 'Smart Living',
    image: assetPath('/images/services/service-6.png'),
    shortDesc: 'Two-way HD video doorbells and indoor touchscreen monitors for seamless guest verification and remote gate control.',
    fullDesc: 'See and speak to visitors at your door or gate from indoor touchscreens or anywhere in the world using your mobile phone. Features crystal-clear 1080p video, night vision, and remote gate release control.',
    features: [
      '1080p HD Wide-Angle Camera',
      'Two-Way Audio with Noise Cancellation',
      'Indoor Touchscreen Display Monitors',
      'Remote Gate & Electric Lock Release',
      'Infrared Night Vision Illumination',
      'Mobile Push Notification & Live Stream'
    ]
  },
  {
    id: 'fiber-networking',
    title: 'Fiber Optic & Network Infrastructure',
    category: 'Networking',
    badge: 'High Speed',
    image: assetPath('/images/services/service-7.jpg'),
    shortDesc: 'Structured Cat6/Cat6A cabling, server rack installations, and long-distance fiber optic fusion splicing for lightning-fast speeds.',
    fullDesc: 'Build a rock-solid network backbone with high-speed fiber optics and structured copper cabling. We provide end-to-end design, installation, cable organization, patch panel termination, and OTDR signal testing.',
    features: [
      'Cat6/Cat6A High-Speed Copper Cabling',
      'Precision Fiber Optic Fusion Splicing',
      'Server Rack & Cable Cable Management',
      'OTDR & Fluke Line Performance Testing',
      'Inter-Building Backbone Connections',
      'Zero Interference High-Bandwidth Trunking'
    ]
  },
  {
    id: 'wireless-wifi',
    title: 'Wireless & Wi-Fi Enterprise Solutions',
    category: 'Networking',
    badge: 'Seamless',
    image: assetPath('/images/services/service-8.png'),
    shortDesc: 'High-density Wi-Fi 6 mesh networks with seamless roaming, RF heatmaps, and captive portal guest access.',
    fullDesc: 'Eliminate dead zones and buffering with commercial-grade Wi-Fi 6 access points. Ideal for multi-story offices, hotels, schools, and large warehouses needing unbroken connectivity as users move around.',
    features: [
      'High-Speed Wi-Fi 6 Dual-Band Access',
      'Zero-Handoff Seamless Roaming',
      'Custom Branded Guest Captive Portals',
      'RF Heatmap & Coverage Site Audits',
      'VLAN Network Isolation & Security',
      'Cloud Dashboard Central Management'
    ]
  },
  {
    id: 'cloud-storage',
    title: 'Cloud Storage & Backup Systems',
    category: 'Surveillance',
    badge: 'Secure',
    image: assetPath('/images/services/service-3.jpg'),
    shortDesc: 'Offsite encrypted cloud video recording and NAS backup solutions protecting against theft, damage, and data loss.',
    fullDesc: 'Protect your critical CCTV footage and company data with automated, encrypted offsite backups. Even if local recorders are damaged, stolen, or destroyed, your footage remains safely stored in the cloud.',
    features: [
      '256-Bit Encrypted Offsite Redundancy',
      'Automatic Scheduled Camera Backup',
      'Failover Storage on Network NAS',
      'Instant Video Retrieval & Export',
      'Infinite Scalability for Multiple Sites',
      'Full Compliance with Data Retention Laws'
    ]
  },
  {
    id: 'pabx-telephony',
    title: 'PABX & IP Telephony Systems',
    category: 'Smart Automation',
    badge: 'Telecom',
    image: assetPath('/images/services/service-9.png'),
    shortDesc: 'Modern IP-PBX phone systems, IVR auto-attendants, extension routing, and VoIP solutions for seamless communication.',
    fullDesc: 'Connect your team effortlessly with crystal-clear IP telephony. Features include custom IVR voice menus, voicemail-to-email, call recording, inter-office free calling, and mobile SIP softphone integration.',
    features: [
      'VoIP & IP-PBX System Deployment',
      'Interactive Voice Response (IVR)',
      'Extension-to-Extension Free Calling',
      'Call Recording & Call Center Queues',
      'SIP Softphone App for Mobile Devices',
      'Voicemail-to-Email Delivery'
    ]
  }
];

export const serviceCategories = [
  'All',
  'Surveillance',
  'Access Control',
  'Networking',
  'Smart Automation'
];
