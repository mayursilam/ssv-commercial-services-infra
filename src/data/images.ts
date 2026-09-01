export interface ImageAsset {
  id: string;
  title: string;
  category: 'security' | 'housekeeping' | 'infrastructure' | 'industries' | 'corporate' | 'about';
  url: string;
  alt: string;
  caption?: string;
}

export const IMAGES: Record<string, ImageAsset> = {
  // 1. Modern commercial building
  heroCommercial: {
    id: 'heroCommercial',
    title: 'Modern Commercial Headquarters',
    category: 'corporate',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    alt: 'Modern architectural glass and steel commercial building representing SSV commercial infrastructure',
    caption: 'Premier commercial facilities managed under SSV security and infrastructure standards'
  },
  // 2. Security professional at commercial property
  securityGuard: {
    id: 'securityGuard',
    title: 'Professional Manned Guarding',
    category: 'security',
    url: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=85',
    alt: 'Uniformed security professional providing vigilant manned guarding at commercial property',
    caption: 'Trained and verified security personnel for 24/7 perimeter protection'
  },
  // 3. CCTV monitoring room
  cctvMonitoring: {
    id: 'cctvMonitoring',
    title: 'CCTV Surveillance & Command Center',
    category: 'security',
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
    alt: 'High-tech CCTV video surveillance control room monitoring multi-zone operations',
    caption: 'Continuous electronic surveillance and real-time incident detection'
  },
  // 4. Access control
  accessControl: {
    id: 'accessControl',
    title: 'Access Control & Turnstile Management',
    category: 'security',
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern commercial lobby smart access control turnstiles and visitor verification system',
    caption: 'Integrated access gates preventing unauthorized entry across corporate facilities'
  },
  // 5. Security team / patrol
  securityTeam: {
    id: 'securityTeam',
    title: 'Tactical & Event Security Squad',
    category: 'security',
    url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=85',
    alt: 'Coordinated security team conducting perimeter sweeps and crowd management',
    caption: 'Specialized crowd control and executive protection protocols'
  },
  // 6. Corporate office environment
  corporateOffice: {
    id: 'corporateOffice',
    title: 'Executive Corporate Interiors',
    category: 'corporate',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Pristine modern corporate office environment maintained with immaculate housekeeping',
    caption: 'Clean, safe and productive workspaces for enterprises'
  },
  // 7. Professional housekeeping staff
  housekeepingStaff: {
    id: 'housekeepingStaff',
    title: 'Professional Floor & Surface Care',
    category: 'housekeeping',
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85',
    alt: 'Professional housekeeping team using industrial cleaning equipment on commercial floors',
    caption: 'Trained workforce executing comprehensive hygiene and sanitization workflows'
  },
  // 8. Commercial cleaning
  commercialCleaning: {
    id: 'commercialCleaning',
    title: 'Commercial Facility Cleaning',
    category: 'housekeeping',
    url: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=85',
    alt: 'Commercial deep cleaning staff maintaining pristine glass and architectural surfaces',
    caption: 'Systematic daily and scheduled facility upkeep'
  },
  // 9. Industrial cleaning
  industrialCleaning: {
    id: 'industrialCleaning',
    title: 'Industrial & Factory Maintenance',
    category: 'housekeeping',
    url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=85',
    alt: 'Industrial plant floor sanitization and hazardous area waste management',
    caption: 'Heavy-duty factory and warehouse hygiene compliance'
  },
  // 10. Deep cleaning / sanitization
  deepSanitization: {
    id: 'deepSanitization',
    title: 'Deep Cleaning & Sanitization',
    category: 'housekeeping',
    url: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1200&q=85',
    alt: 'Specialized chemical sanitization and hospital-grade disinfection',
    caption: 'Eco-friendly cleaning agents and strict health standards'
  },
  // 11. Modern facility
  facilityManagement: {
    id: 'facilityManagement',
    title: 'Integrated Facility Operations',
    category: 'corporate',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern glass atrium showcasing complete commercial facility management',
    caption: 'Harmonizing safety, hygiene and infrastructure under one SLA'
  },
  // 12. Construction site / Heavy machinery
  constructionSite: {
    id: 'constructionSite',
    title: 'Turnkey Infrastructure Execution',
    category: 'infrastructure',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=85',
    alt: 'Heavy civil construction site with cranes and earthmoving equipment',
    caption: 'End-to-end turnkey project execution with rigorous engineering oversight'
  },
  // 13. Engineering / infrastructure
  engineeringInfra: {
    id: 'engineeringInfra',
    title: 'Civil & Structural Engineering',
    category: 'infrastructure',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    alt: 'Engineers reviewing infrastructural blueprints on active development site',
    caption: 'Technical precision from ground planning to structural completion'
  },
  // 14. Utility infrastructure
  utilityShifting: {
    id: 'utilityShifting',
    title: 'Utility Shifting & Pipeline Works',
    category: 'infrastructure',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Underground electrical and utility conduit shifting for municipal infrastructure',
    caption: 'Relocation of underground power, telecom and water utilities'
  },
  // 15. Road construction
  roadConstruction: {
    id: 'roadConstruction',
    title: 'Road Construction & Paving',
    category: 'infrastructure',
    url: 'https://images.unsplash.com/photo-1584463699037-33634032d9db?auto=format&fit=crop&w=1200&q=85',
    alt: 'Asphalt paving machinery laying heavy-duty roadway pavement',
    caption: 'High-durability arterial roads, industrial corridors and internal pavements'
  },
  // 16. Urban infrastructure
  urbanInfra: {
    id: 'urbanInfra',
    title: 'Urban Infrastructure & Expressways',
    category: 'infrastructure',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern concrete highway flyover representing connected urban infrastructure',
    caption: 'Large-scale connectivity and public infrastructure engineering'
  },
  // 17. Modern commercial architecture
  commercialArchitecture: {
    id: 'commercialArchitecture',
    title: 'Commercial Architectural Complex',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    alt: 'Geometric glass business center under clear daylight',
    caption: 'Tailored solutions for grade-A commercial real estate'
  },
  // 18. IT / technology park
  itTechPark: {
    id: 'itTechPark',
    title: 'IT & Technology Parks',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    alt: 'High-tech campus with campus security surveillance and clean server floor operations',
    caption: 'Mission-critical security and uptime for IT campuses'
  },
  // 19. Healthcare facility
  healthcareFacility: {
    id: 'healthcareFacility',
    title: 'Healthcare & Hospital Environments',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern hospital corridor with sterile hygiene and controlled visitor access',
    caption: 'Infection-control cleaning and emergency-ready security teams'
  },
  // 20. Industrial manufacturing facility
  industrialFacility: {
    id: 'industrialFacility',
    title: 'Industrial Manufacturing Plants',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85',
    alt: 'High-volume production facility with heavy machinery and strict safety gates',
    caption: 'Perimeter defense, logistics gate management and industrial sanitization'
  },
  // 21. Retail / shopping mall
  retailMall: {
    id: 'retailMall',
    title: 'Retail Malls & Shopping Complexes',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Multi-level retail mall with polished floors, high footfall crowd control and escalators',
    caption: 'Crowd management, loss prevention and high-frequency housekeeping'
  },
  // 22. Hospitality / hotel
  hospitalityHotel: {
    id: 'hospitalityHotel',
    title: 'Hospitality & Luxury Hotels',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    alt: 'Grand luxury hotel lobby with gleaming marble floors and discrete VIP security',
    caption: 'White-glove housekeeping and discreet executive protection'
  },
  // 23. Residential complex
  residentialSociety: {
    id: 'residentialSociety',
    title: 'Residential Townships & Housing Societies',
    category: 'industries',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    alt: 'Gated modern apartment towers with perimeter fencing and security boom gates',
    caption: 'Community safety, visitor logging and daily estate maintenance'
  },
  // 24. Professional people / team
  professionalTeam: {
    id: 'professionalTeam',
    title: 'Operations & Management Team',
    category: 'about',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85',
    alt: 'Diverse operational leaders reviewing service quality and safety compliance reports',
    caption: 'Dedicated supervisors ensuring SLA adherence across all client properties'
  },
  // 25. Corporate contact environment
  contactCorporate: {
    id: 'contactCorporate',
    title: 'Corporate Headquarters & Consultation Hub',
    category: 'corporate',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    alt: 'Corporate consultation conference room for enterprise contract planning',
    caption: 'Direct coordination with our leadership at Dharashiv, Maharashtra'
  }
};
