export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageId: string;
  link: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  solutions: string[];
  imageId: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const COMPANY_INFO = {
  legalName: 'SSV COMMERCIAL SERVICES & INFRA PRIVATE LIMITED',
  brandName: 'SSV',
  tagline: 'ENSURING SAFETY, DELIVERING EXCELLENCE',
  concept: 'THE PEOPLE, SYSTEMS AND INFRASTRUCTURE BEHIND BETTER SPACES.',
  phone: '+91 86690 05122',
  phoneRaw: '+918669005122',
  whatsappUrl: 'https://wa.me/918669005122',
  email: 'ssvsecservices@gmail.com',
  address: {
    line1: 'Chhatrapati Sambhaji Maharaj Nagar',
    line2: 'Behind DIC Office, Dharashiv',
    state: 'Maharashtra',
    pincode: '413501',
    country: 'India'
  },
  hours: '24/7 Operational Command & Emergency Support',
  colors: {
    red: '#C0122A',
    coolGray: '#848A99',
    white: '#FFFFFF',
    darkNavy: '#001423'
  }
};

export const CORE_PILLARS = [
  {
    number: '01',
    id: 'security',
    title: 'SECURITY SERVICES',
    shortDesc: 'Professional protection, surveillance and comprehensive security solutions.',
    fullDesc: 'SSV delivers tailored security frameworks combining rigorously trained personnel, active perimeter guarding, electronic surveillance, and emergency protocols to protect people, assets, and commercial premises.',
    link: 'security.html',
    pageKey: 'security',
    imageId: 'securityGuard',
    accentColor: '#C0122A',
    stats: '24/7 Monitored Protection'
  },
  {
    number: '02',
    id: 'housekeeping',
    title: 'HOUSEKEEPING SERVICES',
    shortDesc: 'Professional cleaning, hygiene management and complete facility upkeep.',
    fullDesc: 'From high-traffic corporate offices and industrial factory floors to residential townships, SSV provides systematic hygiene management, mechanized cleaning, deep sanitization, and eco-friendly practices.',
    link: 'housekeeping.html',
    pageKey: 'housekeeping',
    imageId: 'housekeepingStaff',
    accentColor: '#848A99',
    stats: 'Hospital-Grade Hygiene'
  },
  {
    number: '03',
    id: 'infrastructure',
    title: 'INFRA SERVICES',
    shortDesc: 'Infrastructure and project solutions from strategic planning through civil execution.',
    fullDesc: 'SSV executes critical infrastructure operations including turnkey civil projects, precision utility shifting, durable road construction, and specialized industrial site solutions designed to move projects forward.',
    link: 'infrastructure.html',
    pageKey: 'infrastructure',
    imageId: 'constructionSite',
    accentColor: '#C0122A',
    stats: 'Engineered Execution'
  }
];

export const SECURITY_SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'manned-guarding',
    number: '01',
    title: 'Manned Guarding',
    tagline: 'Vigilant on-ground physical protection',
    description: 'Disciplined, uniformed security guards trained in access control, patrol procedures, incident logging, and gatekeeping for commercial, industrial, and residential properties.',
    features: ['24/7 Static & roving patrols', 'Stringent background checks & verification', 'Visitor & vehicle registration logging', 'Emergency escalation readiness'],
    imageId: 'securityGuard',
    link: 'security.html#manned-guarding',
    iconName: 'Shield'
  },
  {
    id: 'corporate-security',
    number: '02',
    title: 'Corporate Security',
    tagline: 'Executive workplace protection & access management',
    description: 'Specialized security personnel tailored for corporate headquarters, tech parks, and commercial towers requiring professional presentation and discreet vigilance.',
    features: ['Front-desk concierge & security liaison', 'Badge management & turnstile monitoring', 'Confidential facility asset protection', 'After-hours floor security checks'],
    imageId: 'accessControl',
    link: 'security.html#corporate-security',
    iconName: 'Lock'
  },
  {
    id: 'crowd-management',
    number: '03',
    title: 'Crowd Management & Event Security',
    tagline: 'Strategic crowd control for gatherings & high-footfall events',
    description: 'Operational crowd management protocols designed to prevent bottlenecks, ensure structured queuing, and maintain public safety during exhibitions, summits, and large gatherings.',
    features: ['Perimeter barricade coordination', 'Entry/exit throughput optimization', 'Emergency evacuation route clearance', 'Conflict de-escalation tactics'],
    imageId: 'securityTeam',
    link: 'security.html#crowd-management',
    iconName: 'Users'
  },
  {
    id: 'vip-protection',
    number: '04',
    title: 'VIP Protection',
    tagline: 'Close protection for executives & dignitaries',
    description: 'Discreet personal protection officers trained in route surveying, close-quarter security escort, risk avoidance, and secure transit coordination.',
    features: ['Advance venue reconnaissance', 'Close protection escort details', 'Secure route planning & transit safety', 'Discreet, high-readiness presence'],
    imageId: 'securityTeam',
    link: 'security.html#vip-protection',
    iconName: 'Shield'
  },
  {
    id: 'cctv-surveillance',
    number: '05',
    title: 'CCTV Surveillance & Monitoring',
    tagline: 'Continuous electronic video surveillance',
    description: 'Centralized control-room monitoring and live video oversight to detect anomalies, perimeter breaches, and operational hazards in real time.',
    features: ['24/7 Dedicated command-center feeds', 'Incident playback & forensic archiving', 'Multi-camera zone coverage audits', 'Rapid dispatch alert integration'],
    imageId: 'cctvMonitoring',
    link: 'security.html#cctv-surveillance',
    iconName: 'Camera'
  },
  {
    id: 'access-control',
    number: '06',
    title: 'Access Control Systems',
    tagline: 'Strict authorization & visitor management',
    description: 'Physical and electronic access enforcement restricting unauthorized entry, managing delivery vehicles, and securing restricted zones.',
    features: ['Biometric & RFID card verification', 'Boom barrier & turnstile supervision', 'Material in/out gate pass tracking', 'Visitor identity validation'],
    imageId: 'accessControl',
    link: 'security.html#access-control',
    iconName: 'Scan'
  },
  {
    id: 'fire-safety',
    number: '07',
    title: 'Fire Safety & Emergency Response',
    tagline: 'Proactive hazard prevention & rapid evacuation',
    description: 'Security officers trained in basic firefighting, emergency response drills, fire extinguisher operation, and rapid building evacuation protocols.',
    features: ['First-responder fire extinguishing readiness', 'Emergency evacuation coordination', 'Fire exit & hazard obstruction checks', 'Coordination with municipal emergency teams'],
    imageId: 'heroCommercial',
    link: 'security.html#fire-safety',
    iconName: 'Flame'
  }
];

export const HOUSEKEEPING_SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'commercial-cleaning',
    number: '01',
    title: 'Commercial & Domestic Cleaning',
    tagline: 'Comprehensive daily hygiene for active spaces',
    description: 'Systematic cleaning solutions for workspaces, common lobbies, corridors, domestic estates, and commercial suites ensuring spotless presentation.',
    features: ['Mechanized surface scrubbing & buffing', 'Glass & facade maintenance', 'Daily dusting, sweeping & vacuuming', 'Restroom sanitation & restocking'],
    imageId: 'housekeepingStaff',
    link: 'housekeeping.html#commercial-cleaning',
    iconName: 'Sparkles'
  },
  {
    id: 'industrial-cleaning',
    number: '02',
    title: 'Offices, Industrial & Factory Cleaning',
    tagline: 'Heavy-duty maintenance for production facilities',
    description: 'Industrial-grade cleaning for manufacturing plant floors, warehouses, machine shops, and engineering bays requiring strict compliance with safety norms.',
    features: ['Oil & grease surface degreasing', 'High-ceiling & truss dust extraction', 'Warehouse floor scrubbing', 'Industrial waste disposal coordination'],
    imageId: 'industrialCleaning',
    link: 'housekeeping.html#industrial-cleaning',
    iconName: 'Building'
  },
  {
    id: 'residential-maintenance',
    number: '03',
    title: 'Residential Maintenance',
    tagline: 'Complete upkeep for housing societies & townships',
    description: 'Dedicated residential maintenance teams handling clubhouse facilities, shared stairwells, lifts, parking basements, and podium areas for housing societies.',
    features: ['Common area scheduled maintenance', 'Basement & parking pressure washing', 'Litter collection & garden pathway clearing', 'Dedicated society housekeeping rosters'],
    imageId: 'residentialSociety',
    link: 'housekeeping.html#residential-maintenance',
    iconName: 'Building'
  },
  {
    id: 'deep-sanitization',
    number: '04',
    title: 'Deep Cleaning & Sanitization',
    tagline: 'Intensive hospital-grade disinfection',
    description: 'Periodic deep cleaning programs utilizing certified eco-friendly disinfectants and high-pressure steam extraction for carpets, upholstery, and critical touchpoints.',
    features: ['Hospital-grade surface sanitization', 'Carpet shampooing & upholstery extraction', 'Tile grout & deep stain removal', 'Touchpoint antimicrobial treatment'],
    imageId: 'deepSanitization',
    link: 'housekeeping.html#deep-sanitization',
    iconName: 'Droplets'
  },
  {
    id: 'waste-management',
    number: '05',
    title: 'Waste Management',
    tagline: 'Segregation & hygienic disposal systems',
    description: 'Structured solid waste management adhering to environmental norms, including source segregation, color-coded bin management, and safe transfer.',
    features: ['Wet and dry waste segregation protocols', 'Garbage chute & collection area sanitation', 'Hazardous & e-waste handling awareness', 'Environmentally compliant disposal pipelines'],
    imageId: 'commercialCleaning',
    link: 'housekeeping.html#waste-management',
    iconName: 'Trash'
  },
  {
    id: 'pest-control',
    number: '06',
    title: 'Pest Control Solutions',
    tagline: 'Safe, eco-friendly pest prevention',
    description: 'Proactive inspection and application of approved, odor-free pest management treatments to protect premises from rodents, insects, and termites.',
    features: ['Targeted gel & spray applications', 'Rodent baiting & trap stations', 'Pre- and post-construction termite treatments', 'Safe, certified non-hazardous chemicals'],
    imageId: 'deepSanitization',
    link: 'housekeeping.html#pest-control',
    iconName: 'Spray'
  }
];

export const INFRASTRUCTURE_MODULES: ServiceDetail[] = [
  {
    id: 'turnkey-projects',
    number: '01',
    title: 'Turnkey Projects',
    tagline: 'End-to-end civil & infrastructure execution',
    description: 'Comprehensive turnkey project delivery from initial site survey and planning to structural execution, procurement, quality assurance, and final handover.',
    features: ['Integrated civil & structural works', 'Project scheduling & milestone tracking', 'On-site engineering oversight & safety compliance', 'Strict quality control & material testing'],
    imageId: 'constructionSite',
    link: 'infrastructure.html#turnkey-projects',
    iconName: 'Construction'
  },
  {
    id: 'utility-shifting',
    number: '02',
    title: 'Utility Shifting',
    tagline: 'Precision relocation of critical municipal & site utilities',
    description: 'Safe and coordinated relocation of underground electrical conduits, telecom fiber cables, water pipelines, and drainage networks for infrastructure expansion.',
    features: ['Underground cable trenching & realignment', 'Water & sewage pipeline relocation', 'Coordination with municipal & power authorities', 'Zero-downtime execution planning'],
    imageId: 'utilityShifting',
    link: 'infrastructure.html#utility-shifting',
    iconName: 'Utility'
  },
  {
    id: 'road-construction',
    number: '03',
    title: 'Road Construction',
    tagline: 'Durable road paving & civil connectivity',
    description: 'Construction and resurfacing of industrial access corridors, arterial roadways, concrete pavements, and internal township roads designed for heavy load cycles.',
    features: ['Sub-base grading & compaction', 'Bituminous asphalt paving & concrete paving', 'Stormwater drainage gutter integration', 'Road curb, divider & signage installation'],
    imageId: 'roadConstruction',
    link: 'infrastructure.html#road-construction',
    iconName: 'Road'
  },
  {
    id: 'service-sector-solutions',
    number: '04',
    title: 'Service Sector Solutions',
    tagline: 'Specialized industrial & commercial site works',
    description: 'Targeted civil enhancements, perimeter boundary wall constructions, industrial platform erection, and custom infrastructure works for commercial facilities.',
    features: ['Perimeter boundary walls & security fencing', 'Site leveling, grading & soil stabilization', 'Industrial concrete flooring & loading bays', 'Specialized civil maintenance contracts'],
    imageId: 'urbanInfra',
    link: 'infrastructure.html#service-sector-solutions',
    iconName: 'Wrench'
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'commercial',
    title: 'Commercial Complexes',
    category: 'Commercial',
    description: 'Integrated security, housekeeping, and civil upkeep for Grade-A corporate towers, business parks, and multi-tenant office complexes.',
    solutions: ['Access control turnstiles', 'Mechanized daily cleaning', 'Lobby security concierge', 'Preventive infrastructure care'],
    imageId: 'commercialArchitecture'
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    category: 'Industrial',
    description: 'Rigorous perimeter defense, material gate passes, hazardous waste handling, and heavy-duty factory floor cleaning for industrial plants.',
    solutions: ['Material in/out gate logging', 'Plant floor degreasing', 'Perimeter security patrol', 'Utility infrastructure upkeep'],
    imageId: 'industrialFacility'
  },
  {
    id: 'residential',
    title: 'Housing Societies & Townships',
    category: 'Residential',
    description: 'Comprehensive estate services for residential societies, gated communities, and apartment complexes ensuring safe, hygienic living.',
    solutions: ['Visitor vehicle logging', 'Society common area housekeeping', 'Basement & parking upkeep', 'Clubhouse sanitization'],
    imageId: 'residentialSociety'
  },
  {
    id: 'retail',
    title: 'Retail & Shopping Malls',
    category: 'Retail',
    description: 'Active crowd management, loss prevention, continuous high-traffic floor buffing, and restroom sanitation for bustling retail environments.',
    solutions: ['High-footfall crowd control', 'Continuous floor scrubbing', 'Emergency exit monitoring', 'Waste segregation'],
    imageId: 'retailMall'
  },
  {
    id: 'hospitality',
    title: 'Hotels & Hospitality',
    category: 'Hospitality',
    description: 'High-standard guest concierge security, pristine banquet floor maintenance, and guest comfort management for premier hospitality venues.',
    solutions: ['Discreet VIP security', 'Spotless lobby upkeep', '24/7 Guest assistance security', 'Specialized surface polishing'],
    imageId: 'hospitalityHotel'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Hospitals',
    category: 'Healthcare',
    description: 'Stringent infection-control sanitization, hospital-grade disinfection, and emergency entrance security for healthcare institutes.',
    solutions: ['Hospital-grade sanitization', 'Emergency lane clearance', 'Sterile zone cleanliness', 'Restricted ward security'],
    imageId: 'healthcareFacility'
  },
  {
    id: 'construction',
    title: 'Construction & Civil Projects',
    category: 'Infrastructure',
    description: 'Material security, heavy machinery safety watch, on-site utility shifting, and turnkey civil execution for active construction developments.',
    solutions: ['Material theft prevention', 'Heavy equipment security', 'On-site utility shifting', 'Civil road & paving works'],
    imageId: 'constructionSite'
  },
  {
    id: 'it-parks',
    title: 'IT & Technology Parks',
    category: 'Commercial',
    description: '24/7 multi-tier perimeter protection, server room access authorization, and clean room maintenance for technology campuses.',
    solutions: ['24/7 Command surveillance', 'Restricted server room security', 'Anti-static floor cleaning', 'Rapid incident response'],
    imageId: 'itTechPark'
  },
  {
    id: 'public-land',
    title: 'Public & Open Land Environments',
    category: 'Infrastructure',
    description: 'Large-scale open land boundary fencing, utility diversion, road grading, and perimeter security to safeguard strategic land assets.',
    solutions: ['Perimeter boundary fencing', 'Encroachment prevention patrols', 'Land leveling & grading', 'Utility corridor shifting'],
    imageId: 'urbanInfra'
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    number: '01',
    title: 'Experienced & Reliable Team',
    description: 'Our team comprises disciplined, vetted, and rigorously trained personnel managed by seasoned operational supervisors with deep domain expertise across security, facility maintenance, and civil engineering.',
    details: ['Comprehensive background verification', 'Formal induction & protocol training', 'Dedicated on-ground field supervisors', 'Continuous operational refresher courses']
  },
  {
    number: '02',
    title: 'Client-Centric Approach',
    description: 'We believe no two facilities are identical. SSV structures every operational plan around the specific risk profile, footfall patterns, and physical constraints of your facility.',
    details: ['Customized site survey & risk assessment', 'Flexible and scalable deployment rosters', 'Direct single-point escalation officer', 'Transparent service reporting & review']
  },
  {
    number: '03',
    title: 'Cost-Effective Solutions',
    description: 'Delivering uncompromised quality without fiscal bloat. Through mechanized efficiency, streamlined labor deployment, and turnkey infrastructure execution, we optimize your total operational spend.',
    details: ['Elimination of operational redundancies', 'Optimized resource allocation matrices', 'Transparent, milestone-based commercial terms', 'Measurable cost-efficiency metrics']
  },
  {
    number: '04',
    title: 'Advanced Technology & Equipment',
    description: 'From modern CCTV surveillance control rooms and biometric access logging to industrial floor scrubbers and heavy civil machinery, we leverage the right tools for superior results.',
    details: ['Industrial ride-on & walk-behind scrubbers', 'High-definition digital surveillance integration', 'Standardized reporting & incident registers', 'Certified heavy earthmoving & paving equipment']
  },
  {
    number: '05',
    title: 'Commitment to Excellence',
    description: 'Integrity, safety, and operational excellence guide every deployment. We maintain strict compliance with all statutory labor laws, safety standards, and environmental practices.',
    details: ['100% Statutory & labor law compliance', 'Zero-tolerance safety policies', 'Eco-friendly cleaning agents & practices', 'Consistent SLA benchmark delivery']
  }
];

export const QUALITATIVE_STRENGTHS = [
  { title: 'Highly Trained Personnel', desc: 'Rigorous physical, tactical, and etiquette training for all security and service staff.' },
  { title: 'Customized Service Plans', desc: 'Site-specific standard operating procedures tailored to your exact property.' },
  { title: 'Comprehensive Cleaning Solutions', desc: 'End-to-end cleaning from daily upkeep to specialized industrial degreasing.' },
  { title: 'Trained & Skilled Workforce', desc: 'Certified operators for modern equipment and heavy civil infrastructure machinery.' },
  { title: 'Eco-Friendly Cleaning Practices', desc: 'Biodegradable, non-toxic cleaning agents that protect health and environment.' },
  { title: '24/7 Support & Quick Response', desc: 'Always-available operational command line and rapid emergency response teams.' },
  { title: 'Safety & Hygiene Standards', desc: 'Strict adherence to health protocols, PPE compliance, and fire safety norms.' },
  { title: 'Customizable Service Packages', desc: 'Modular service contracts that scale flexibly as your enterprise grows.' }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    subtitle: 'Comprehensive Site Survey & Risk Assessment',
    description: 'Our senior specialists visit your site to analyze vulnerabilities, traffic flows, layout geometry, hygiene pain points, or infrastructure requirements.'
  },
  {
    number: '02',
    title: 'PLAN',
    subtitle: 'Tailored Solution Architecture & SOP Design',
    description: 'We construct a customized operational blueprint detailing guard deployment rosters, cleaning frequency charts, material specs, and project milestones.'
  },
  {
    number: '03',
    title: 'DEPLOY',
    subtitle: 'Trained Workforce & Equipment Induction',
    description: 'We place vetted, uniformed personnel, install necessary machinery, establish logbooks, and brief teams on site-specific emergency protocols.'
  },
  {
    number: '04',
    title: 'MANAGE',
    subtitle: 'Active Supervision & SLA Compliance',
    description: 'On-ground supervisors conduct surprise night patrols, hygiene spot audits, and milestone reviews to ensure seamless daily execution.'
  },
  {
    number: '05',
    title: 'IMPROVE',
    subtitle: 'Continuous Review & Protocol Optimization',
    description: 'Periodic client reviews and operational feedback loops allow us to continuously refine procedures, enhance safety, and drive efficiency.'
  }
];
