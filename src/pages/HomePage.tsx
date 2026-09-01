import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { SafeImage } from '../components/SafeImage';
import { 
  ShieldIcon, CameraIcon, LockIcon, ScanIcon, BellIcon, FlameIcon, 
  SparklesIcon, BuildingIcon, DropletsIcon, TrashIcon, LeafIcon, SprayIcon, 
  ConstructionIcon, RoadIcon, HardHatIcon, WrenchIcon, UtilityIcon, 
  ArrowRightIcon, PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, CheckIcon, ChevronRightIcon, UsersIcon
} from '../components/Icons';
import { 
  COMPANY_INFO, CORE_PILLARS, SECURITY_SERVICES_LIST, 
  HOUSEKEEPING_SERVICES_LIST, INFRASTRUCTURE_MODULES, 
  INDUSTRIES_LIST, VALUE_PILLARS, QUALITATIVE_STRENGTHS, PROCESS_STAGES 
} from '../data/content';
import { IMAGES } from '../data/images';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry?: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedIndustryTab, setSelectedIndustryTab] = useState<string>('all');

  const filteredIndustries = selectedIndustryTab === 'all'
    ? INDUSTRIES_LIST
    : INDUSTRIES_LIST.filter(item => item.category.toLowerCase() === selectedIndustryTab.toLowerCase());

  return (
    <div className="bg-white text-[#001423]">
      {/* ========================================================
          HERO SECTION - CINEMATIC FULL-SCREEN
          ======================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] bg-[#000E1A] text-white flex flex-col justify-between overflow-hidden border-b-2 border-[#C0122A]">
        {/* Background Visual Layer with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.heroCommercial.url}
            alt="Modern commercial headquarters and infrastructure managed by SSV"
            containerClassName="w-full h-full"
            aspectRatio="auto"
            overlay={true}
            darkOverlayOpacity="bg-gradient-to-r from-[#000B14]/95 via-[#001423]/80 to-[#001423]/60"
            zoomOnHover={false}
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#C0122A]/20 border border-[#C0122A]/40 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
              <span className="w-2 h-2 rounded-full bg-[#C0122A] animate-ping" />
              <span>COMMERCIAL SERVICES & INFRASTRUCTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-gotham text-white uppercase">
              ENSURING SAFETY.<br />
              <span className="text-[#C0122A]">DELIVERING</span> EXCELLENCE.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              SSV Commercial Services & Infra Pvt. Ltd. delivers professional security, housekeeping, and infrastructure solutions designed to support safer, cleaner, and better-managed environments.
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-200 shadow-xl shadow-red-950/60 rounded-sm flex items-center justify-center gap-3 group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#031B2D]/80 hover:bg-[#06243C] text-white text-xs sm:text-sm font-bold tracking-widest uppercase border border-[#0F3759] hover:border-slate-400 transition-all rounded-sm flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>GET IN TOUCH</span>
                <PhoneIcon size={15} color="#C0122A" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hero Pillar Navigation Cue */}
        <div className="relative z-10 bg-[#000E1A]/90 border-t border-white/10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {CORE_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => onNavigate(pillar.pageKey)}
                className="p-3 md:px-6 flex items-center justify-between text-left group hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-[#C0122A]">{pillar.number}</span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C0122A] transition-colors">
                      {pillar.title}
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal line-clamp-1">
                      {pillar.shortDesc}
                    </span>
                  </div>
                </div>
                <ChevronRightIcon size={16} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 - EDITORIAL STATEMENT
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  SECTION 02 // CAPABILITY ECOSYSTEM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#001423] font-gotham uppercase leading-[1.1]">
                THREE CAPABILITIES.<br />
                <span className="text-[#C0122A]">ONE PROFESSIONAL</span> PARTNER.
              </h2>

              <p className="text-base sm:text-lg text-[#5A6273] leading-relaxed">
                At SSV, we understand that modern enterprises require integrated management. Rather than coordinating with disconnected contractors, our clients rely on a unified standard for physical protection, facility hygiene, and critical infrastructure execution.
              </p>

              {/* 01 / 02 / 03 Visual Treatment */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#C0122A]">01</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#001423]">Safety</p>
                  <p className="text-[11px] text-[#848A99]">Manned & electronic security</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#848A99]">02</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#001423]">Cleanliness</p>
                  <p className="text-[11px] text-[#848A99]">Mechanized housekeeping</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#C0122A]">03</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#001423]">Civil Infra</p>
                  <p className="text-[11px] text-[#848A99]">Turnkey engineering</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#C0122A] uppercase hover:text-[#9E0E22] transition-colors"
                >
                  <span>LEARN MORE ABOUT SSV OPERATIONS</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>

            {/* Right Large Image Composition */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C0122A] z-10 pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#848A99] z-10 pointer-events-none" />
                
                <SafeImage
                  src={IMAGES.facilityManagement.url}
                  alt="Integrated commercial facility management by SSV"
                  aspectRatio="portrait"
                  containerClassName="rounded-sm shadow-2xl border border-slate-200"
                  badge="INTEGRATED ECOSYSTEM"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-[#001423]/95 backdrop-blur-md p-4 text-white border-l-4 border-[#C0122A] shadow-xl">
                  <p className="text-xs font-bold tracking-wider uppercase text-slate-300">Operational Philosophy</p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    "The people, systems and infrastructure behind better spaces."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 - THREE CORE SERVICE PANELS
          ======================================================== */}
      <section className="py-20 bg-[#F6F8FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C0122A]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#848A99] uppercase">
                CORE CAPABILITY PILLARS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              PROFESSIONAL SERVICE SPECTRUM
            </h2>
            <p className="text-sm text-[#5A6273]">
              Structured delivery models tailored for industrial estates, corporate complexes, and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="group bg-white border border-slate-200 hover:border-[#C0122A] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Image container with hover zoom */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <SafeImage
                      src={IMAGES[pillar.imageId].url}
                      alt={pillar.title}
                      aspectRatio="auto"
                      containerClassName="w-full h-full"
                      overlay={true}
                      darkOverlayOpacity="bg-black/25 group-hover:bg-black/10"
                    />
                    <div className="absolute top-3 left-3 bg-[#001423] text-white px-3 py-1 text-xs font-black tracking-wider">
                      {pillar.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-xl font-black text-[#001423] tracking-tight uppercase group-hover:text-[#C0122A] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold tracking-wider text-[#C0122A] uppercase">
                      {pillar.stats}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5A6273] leading-relaxed">
                      {pillar.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(pillar.pageKey)}
                    className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-[#001423] group-hover:text-[#C0122A] transition-colors"
                  >
                    <span>VIEW SERVICE</span>
                    <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform text-[#C0122A]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 - SECURITY SERVICES DEEP-DIVE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  01 // SECURITY SERVICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#001423] font-gotham uppercase">
                PROTECTION DESIGNED<br />
                <span className="text-[#C0122A]">AROUND YOUR</span> ENVIRONMENT.
              </h2>
              <p className="text-sm sm:text-base text-[#5A6273] leading-relaxed">
                From manned physical guarding and executive VIP protection to electronic CCTV video surveillance and biometric access gates, SSV delivers proactive risk prevention.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <button
                onClick={() => onNavigate('security')}
                className="px-6 py-3.5 bg-[#001423] hover:bg-[#031B2D] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-3 transition-colors border border-[#0F3759]"
              >
                <span>EXPLORE ALL SECURITY PROTOCOLS</span>
                <ArrowRightIcon size={14} color="#C0122A" />
              </button>
            </div>
          </div>

          {/* Security Visual Grid with HUD elements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Left Security Image with HUD Overlay */}
            <div className="lg:col-span-5 relative bg-[#001423] rounded-sm overflow-hidden border border-slate-300 shadow-xl">
              <SafeImage
                src={IMAGES.securityGuard.url}
                alt="Uniformed security guard providing access surveillance"
                aspectRatio="portrait"
                containerClassName="w-full h-full min-h-[420px]"
                overlay={true}
                darkOverlayOpacity="bg-gradient-to-t from-[#000E1A] via-transparent to-black/20"
              />
              {/* Subtle Tech Overlay */}
              <div className="absolute top-4 right-4 bg-[#001423]/90 text-white border border-[#C0122A]/40 px-3 py-1.5 rounded-sm text-[10px] font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                <span>PERIMETER: SECURE</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#001423]/95 border border-white/10 p-4 text-white text-xs space-y-1">
                <div className="font-bold uppercase tracking-wider text-[#C0122A]">Standard Operating Procedure</div>
                <div className="text-slate-300">Vetted personnel, logbook enforcement, and 24/7 patrol shifts.</div>
              </div>
            </div>

            {/* Right Service Matrix Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECURITY_SERVICES_LIST.slice(0, 6).map((service) => (
                <div
                  key={service.id}
                  className="p-5 bg-[#F6F8FA] hover:bg-white border border-slate-200 hover:border-[#C0122A] rounded-sm transition-all duration-200 space-y-2 group hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C0122A]">{service.number}</span>
                    <span className="text-[10px] text-[#848A99] uppercase tracking-wider font-semibold">Security</span>
                  </div>
                  <h4 className="text-base font-bold text-[#001423] group-hover:text-[#C0122A] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#5A6273] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 - HOUSEKEEPING DEEP-DIVE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F6F8FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#848A99]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  02 // HOUSEKEEPING SERVICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#001423] font-gotham uppercase">
                CLEANER SPACES.<br />
                <span className="text-[#848A99]">BETTER</span> ENVIRONMENTS.
              </h2>
              <p className="text-sm sm:text-base text-[#5A6273] leading-relaxed">
                We combine trained housekeeping personnel with mechanized scrubbing technology, eco-friendly sanitization agents, and strict waste management workflows to maintain pristine environments.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <button
                onClick={() => onNavigate('housekeeping')}
                className="px-6 py-3.5 bg-[#001423] hover:bg-[#031B2D] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-3 transition-colors border border-[#0F3759]"
              >
                <span>VIEW HOUSEKEEPING PROGRAMS</span>
                <ArrowRightIcon size={14} color="#848A99" />
              </button>
            </div>
          </div>

          {/* Housekeeping Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {HOUSEKEEPING_SERVICES_LIST.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <SafeImage
                  src={IMAGES[item.imageId].url}
                  alt={item.title}
                  aspectRatio="video"
                />
                <div className="p-6 space-y-2">
                  <span className="text-xs font-bold text-[#848A99] font-mono">{item.number}</span>
                  <h4 className="text-lg font-bold text-[#001423] group-hover:text-[#C0122A] transition-colors">{item.title}</h4>
                  <p className="text-xs text-[#5A6273] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HOUSEKEEPING_SERVICES_LIST.slice(3).map((item) => (
              <div key={item.id} className="p-5 bg-white border border-slate-200 rounded-sm flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-[#848A99] mt-0.5">{item.number}</span>
                <div>
                  <h5 className="text-sm font-bold text-[#001423]">{item.title}</h5>
                  <p className="text-xs text-[#5A6273] mt-1">{item.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 - INFRASTRUCTURE DEEP-DIVE (DARK NAVY / EDITORIAL)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#001423] text-white border-y-2 border-[#C0122A] relative overflow-hidden">
        {/* Background Architectural Grid Pattern */}
        <div className="absolute inset-0 tech-grid-pattern-dark opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  03 // INFRASTRUCTURE & CIVIL ENGINEERING
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-gotham uppercase">
                INFRASTRUCTURE<br />
                <span className="text-[#C0122A]">THAT MOVES PROJECTS</span> FORWARD.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                SSV executes heavy-duty civil works, turnkey site projects, precision underground and overhead utility shifting, and high-durability road construction for industrial and municipal developments.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('infrastructure')}
                className="px-6 py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-3 transition-colors shadow-lg shadow-red-950/50"
              >
                <span>VIEW INFRA CAPABILITIES</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>

          {/* 4 Large Visual Infrastructure Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFRASTRUCTURE_MODULES.map((module) => (
              <div
                key={module.id}
                className="group bg-[#031B2D] border border-[#0F3759] hover:border-[#C0122A] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={IMAGES[module.imageId].url}
                      alt={module.title}
                      aspectRatio="auto"
                      containerClassName="w-full h-full"
                      overlay={true}
                      darkOverlayOpacity="bg-black/35 group-hover:bg-black/10"
                    />
                    <div className="absolute top-2 left-2 bg-[#C0122A] text-white px-2 py-0.5 text-xs font-mono font-bold">
                      {module.number}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-base font-black text-white uppercase group-hover:text-[#C0122A] transition-colors">
                      {module.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <ul className="space-y-1.5 border-t border-[#0F3759] pt-3 text-[11px] text-slate-400">
                    {module.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#C0122A]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07 - INDUSTRIES EXPLORER
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  WHERE WE SERVE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
                TAILORED INDUSTRY SOLUTIONS
              </h2>
              <p className="text-sm text-[#5A6273]">
                Specialized operational standards designed for diverse sector requirements across Maharashtra.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'Commercial', 'Industrial', 'Residential', 'Infrastructure'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedIndustryTab(tab)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors ${
                    selectedIndustryTab === tab
                      ? 'bg-[#001423] text-white'
                      : 'bg-[#F6F8FA] text-[#5A6273] hover:bg-slate-200'
                  }`}
                >
                  {tab === 'all' ? 'All Sectors' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.slice(0, 6).map((ind) => (
              <div
                key={ind.id}
                className="group relative bg-[#001423] rounded-sm overflow-hidden border border-slate-200 hover:border-[#C0122A] shadow-md hover:shadow-xl transition-all duration-300 min-h-[300px] flex flex-col justify-end p-6"
              >
                <div className="absolute inset-0 z-0">
                  <SafeImage
                    src={IMAGES[ind.imageId].url}
                    alt={ind.title}
                    aspectRatio="auto"
                    containerClassName="w-full h-full"
                    overlay={true}
                    darkOverlayOpacity="bg-gradient-to-t from-[#000E1A] via-[#001423]/70 to-black/30 group-hover:via-[#001423]/50"
                  />
                </div>

                <div className="relative z-10 space-y-2 text-white">
                  <span className="text-[10px] font-bold tracking-widest text-[#C0122A] uppercase bg-[#000B14]/80 px-2 py-0.5 rounded-sm inline-block">
                    {ind.category}
                  </span>
                  <h4 className="text-xl font-bold font-gotham text-white group-hover:text-[#C0122A] transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {ind.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {ind.solutions.slice(0, 2).map((s, i) => (
                      <span key={i} className="text-[10px] bg-white/10 px-2 py-0.5 text-slate-300 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('industries')}
              className="px-6 py-3 bg-[#F6F8FA] hover:bg-slate-200 text-[#001423] text-xs font-bold tracking-widest uppercase rounded-sm border border-slate-300 inline-flex items-center gap-2 transition-colors"
            >
              <span>EXPLORE ALL INDUSTRY CATEGORIES</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08 - ABOUT & MISSION / VISION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F6F8FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  ABOUT SSV COMMERCIAL SERVICES & INFRA
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
                THE FOUNDATION OF TRUST & OPERATIONAL DISCIPLINE
              </h2>

              <p className="text-sm sm:text-base text-[#5A6273] leading-relaxed">
                SSV recognizes that safety and security are fundamental to seamless operations. The company provides security and housekeeping solutions supported by trained personnel, modern technology, professional practices, and customer-centric service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white border border-slate-200 rounded-sm space-y-2">
                  <div className="text-xs font-black text-[#C0122A] uppercase tracking-wider">OUR MISSION</div>
                  <p className="text-xs text-[#5A6273] leading-relaxed">
                    To deliver uncompromising safety, cleanliness, and operational efficiency through trained professionals, innovative systems, and sustainable practices.
                  </p>
                </div>

                <div className="p-5 bg-white border border-slate-200 rounded-sm space-y-2">
                  <div className="text-xs font-black text-[#001423] uppercase tracking-wider">OUR VISION</div>
                  <p className="text-xs text-[#5A6273] leading-relaxed">
                    To be the foremost trusted partner for commercial services and infrastructure, known for integrity, quality execution, and client satisfaction.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#001423] hover:bg-[#031B2D] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors"
                >
                  <span>READ COMPLETE CORPORATE PROFILE</span>
                  <ArrowRightIcon size={14} color="#C0122A" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={IMAGES.professionalTeam.url}
                alt="SSV operational management and field supervisors"
                aspectRatio="video"
                containerClassName="rounded-sm shadow-xl border border-slate-300"
                badge="LEADERSHIP & COMPLIANCE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09 - WHY SSV (5 VALUE PILLARS + 8 STRENGTHS)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C0122A]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#848A99] uppercase">
                WHY ENTERPRISES CHOOSE SSV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              FIVE CORE VALUE PILLARS
            </h2>
            <p className="text-sm text-[#5A6273]">
              Structured governance, verified workforce, and reliable execution on every assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {VALUE_PILLARS.map((p) => (
              <div
                key={p.number}
                className="p-6 bg-[#F6F8FA] border border-slate-200 rounded-sm space-y-3 hover:border-[#C0122A] transition-all group"
              >
                <span className="text-2xl font-black text-[#C0122A] font-mono">{p.number}</span>
                <h4 className="text-lg font-bold text-[#001423] group-hover:text-[#C0122A] transition-colors">{p.title}</h4>
                <p className="text-xs text-[#5A6273] leading-relaxed">{p.description}</p>
                <ul className="space-y-1 pt-2 border-t border-slate-200 text-[11px] text-[#001423]">
                  {p.details.slice(0, 2).map((d, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckIcon size={12} color="#C0122A" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Qualitative Strengths Matrix */}
          <div className="bg-[#001423] text-white p-8 rounded-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C0122A] mb-4">
              QUALITATIVE OPERATIONAL BENCHMARKS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {QUALITATIVE_STRENGTHS.map((item, i) => (
                <div key={i} className="p-3.5 bg-[#031B2D] border border-[#0F3759] rounded-sm">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#C0122A]" />
                    {item.title}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10 - PROCESS TIMELINE
          ======================================================== */}
      <section className="py-20 bg-[#F6F8FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C0122A]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#848A99] uppercase">
                SYSTEMATIC DEPLOYMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              FIVE-STAGE OPERATIONAL ROADMAP
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STAGES.map((step) => (
              <div key={step.number} className="bg-white border border-slate-200 p-5 rounded-sm space-y-2 relative">
                <div className="text-xs font-mono font-bold text-[#C0122A]">{step.number}</div>
                <h4 className="text-base font-black text-[#001423] uppercase">{step.title}</h4>
                <div className="text-[11px] font-semibold text-[#848A99]">{step.subtitle}</div>
                <p className="text-xs text-[#5A6273] leading-relaxed pt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11 - DIRECT CONTACT SHOWCASE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#000E1A] text-white border-t-2 border-[#C0122A]" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C0122A]/20 border border-[#C0122A]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              DIRECT OPERATIONS CONTACT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-gotham uppercase">
              LET'S BUILD A SAFER,<br />
              <span className="text-[#C0122A]">CLEANER, BETTER</span> ENVIRONMENT.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our operational leadership in Dharashiv, Maharashtra for rapid security deployment, mechanized housekeeping, and infrastructure project consultation.
            </p>
          </div>

          {/* 3 Core Primary Contact Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: CALL US */}
            <div 
              id="home-contact-card-call"
              className="bg-[#031B2D] border-2 border-[#0F3759] hover:border-[#C0122A] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#C0122A]/20 text-[#C0122A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneIcon size={24} color="#C0122A" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#848A99] uppercase block">DIRECT HOTLINE</span>
                  <h3 className="text-xl font-black text-white font-gotham uppercase mt-1">CALL US</h3>
                  <p className="text-lg font-bold text-[#C0122A] mt-2">+91 86690 05122</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    24/7 dedicated line for operational coordination, emergency security escalation, and immediate site requirements.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0F3759]">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  id="home-btn-call-now"
                  className="w-full py-3.5 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-red-950/40"
                >
                  <PhoneIcon size={14} color="#FFFFFF" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Card 2: WHATSAPP US */}
            <div 
              id="home-contact-card-whatsapp"
              className="bg-[#031B2D] border-2 border-[#0F3759] hover:border-[#25D366] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsappIcon size={24} color="#25D366" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#848A99] uppercase block">INSTANT CHAT</span>
                  <h3 className="text-xl font-black text-white font-gotham uppercase mt-1">WHATSAPP US</h3>
                  <p className="text-lg font-bold text-[#25D366] mt-2">+91 86690 05122</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Fastest communication for sharing site photos, GPS coordinates, property layouts, and quick operational updates.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0F3759]">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="home-btn-whatsapp-us"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsappIcon size={16} color="#000000" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>

            {/* Card 3: EMAIL US */}
            <div 
              id="home-contact-card-email"
              className="bg-[#031B2D] border-2 border-[#0F3759] hover:border-slate-300 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MailIcon size={24} color="#FFFFFF" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#848A99] uppercase block">OFFICIAL EMAIL</span>
                  <h3 className="text-xl font-black text-white font-gotham uppercase mt-1">EMAIL US</h3>
                  <p className="text-base font-bold text-white mt-2 break-all">{COMPANY_INFO.email}</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Formal correspondence, corporate vendor onboarding, contracts, and municipal infrastructure communications.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0F3759]">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  id="home-btn-send-email"
                  className="w-full py-3.5 bg-[#001423] hover:bg-[#06243C] border border-[#0F3759] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MailIcon size={14} color="#FFFFFF" />
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location & Headquarters Bar */}
          <div className="p-6 sm:p-8 bg-[#001423] border border-[#0F3759] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#C0122A]/20 flex items-center justify-center flex-shrink-0">
                <MapPinIcon size={22} color="#C0122A" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#C0122A] uppercase tracking-wider">Registered Corporate Office</div>
                <div className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}</div>
                <div className="text-xs text-slate-400">{COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country} (Dharashiv, Maharashtra)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-md flex items-center gap-2"
              >
                <span>VIEW FULL CONTACT HUB</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
