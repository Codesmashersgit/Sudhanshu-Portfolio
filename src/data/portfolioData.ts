import { ServiceItem, ProjectItem, NavItem, FigurineItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export const FIGURINES: FigurineItem[] = [
  {
    id: '01',
    name: "Jack 'The Creator'",
    subtitle: 'Signature 3D Persona & Hooded Avatar',
    edition: 'Edition #01 // Collector Choice',
    imageUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
    accentColor: '#B600A8',
    glowColor: 'rgba(182, 0, 168, 0.45)',
    polycount: '128,400 Polys',
    engine: 'Octane / Blender 4.2',
    description:
      'Jack in his signature streetwear 3D aesthetic with tactile woven fabrics, dynamic subsurface scattering, and stylized lighting.',
    bgHeading: 'JACK',
  },
  {
    id: '02',
    name: 'Neo Orbital Group',
    subtitle: 'Interstellar Modular Starship Collectible',
    edition: 'Edition #02 // Sci-Fi Series',
    imageUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    accentColor: '#00E5FF',
    glowColor: 'rgba(0, 229, 255, 0.45)',
    polycount: '245,800 Polys',
    engine: 'Cinema 4D / Redshift',
    description:
      'Futuristic aerospace toy figurine engineered with procedural chrome plating, luminous thruster nodes, and modular docking ports.',
    bgHeading: 'ORBIT',
  },
  {
    id: '03',
    name: 'Lego Chromatic Brick',
    subtitle: 'Tactile Geometric Toy Construct',
    edition: 'Edition #03 // Geometric Toy',
    imageUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    accentColor: '#FFB703',
    glowColor: 'rgba(255, 183, 3, 0.45)',
    polycount: '86,200 Polys',
    engine: 'Substance 3D / Cycles',
    description:
      'High-gloss stylized brick figurine featuring snap-socket physics, vibrant dispersion materials, and micro-bevel reflections.',
    bgHeading: 'BRICK',
  },
  {
    id: '04',
    name: 'Lunar Celestial Sphere',
    subtitle: 'Zero-G Planetary Core Monolith',
    edition: 'Edition #04 // Planetary Core',
    imageUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    polycount: '192,500 Polys',
    engine: 'Houdini FX / Mantra',
    description:
      'Atmospheric crater topography suspended in magnetic zero-gravity with iridescent rim fresnels and cinematic particle dust.',
    bgHeading: 'LUNAR',
  },
  {
    id: '05',
    name: 'Prismatic Poly Gem',
    subtitle: 'Hard-Surface Specular Lattice',
    edition: 'Edition #05 // Specular Diamond',
    imageUrl:
      'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    polycount: '312,000 Polys',
    engine: 'Unreal Engine 5.5',
    description:
      'Procedural crystal facet sculpture with internal caustics, multi-angle refraction indices, and chromatic aberration highlights.',
    bgHeading: 'CRYSTAL',
  },
];

export const MARQUEE_IMAGES: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const MARQUEE_ROW_1 = MARQUEE_IMAGES.slice(0, 11);
export const MARQUEE_ROW_2 = MARQUEE_IMAGES.slice(11);

export const ABOUT_DECORATIONS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3d: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group3d: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export const ABOUT_BIO_TEXT =
  "Hey dude! I'm a Full Stack Developer who builds cool AI apps and real-time platforms using React, Node.js, and AWS. I basically spend my days turning caffeine into clean, scalable code. Whether I'm wrestling with backend architectures or deploying cloud servers, I actually enjoy solving complex engineering puzzles. I love making things look great and work perfectly. Let's build something awesome together (before the AI takes all our jobs)!";

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Full Stack Development',
    description:
      'Building scalable, production-ready web applications from end-to-end using React.js, Node.js, Express.js, and modern databases like PostgreSQL and MongoDB.',
  },
  {
    id: '02',
    name: 'Backend & API Design',
    description:
      'Designing secure, high-performance REST APIs with JWT authentication, Role-Based Access Control (RBAC), and efficient database architectures.',
  },
  {
    id: '03',
    name: 'AI & LLM Integration',
    description:
      'Integrating advanced AI models (GPT-4o, Gemini) and APIs (Deepgram) to build intelligent, context-aware assistants and conversational flows.',
  },
  {
    id: '04',
    name: 'Cloud & DevOps (AWS)',
    description:
      'Containerizing applications with Docker and deploying robust workloads on AWS EC2 behind Nginx, ensuring high availability and 99.5% uptime.',
  },
  {
    id: '05',
    name: 'Real-Time Communication',
    description:
      'Developing low-latency, real-time features including Peer-to-Peer video/audio using WebRTC and scalable live chat systems via Socket.IO.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    name: 'GhostHire',
    category: 'AI / Full Stack',
    tagline: 'AI Interview Assistant generating contextual responses using LLMs and Voice APIs.',
    tools: ['React.js', 'Node.js', 'GPT-4o', 'Deepgram API', 'MongoDB'],
    liveUrl: 'https://github.com/Codesmashersgit',
    col1TopImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1BottomImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: '02',
    name: 'Multi-language IDE',
    category: 'Cloud / Infrastructure',
    tagline: 'Browser-based online IDE supporting execution of 15+ programming languages.',
    tools: ['React.js', 'Docker', 'AWS EC2', 'Monaco Editor', 'Node.js'],
    liveUrl: 'https://github.com/Codesmashersgit',
    col1TopImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1BottomImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: '03',
    name: 'Melodify',
    category: 'Web App',
    tagline: 'An ad-free music player with personalized playlists and trending content.',
    tools: ['React', 'Redux', 'Rapid API', 'Tailwind CSS'],
    liveUrl: 'https://github.com/Codesmashersgit',
    col1TopImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1BottomImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];
