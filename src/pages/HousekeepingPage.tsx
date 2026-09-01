import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { 
  SparklesIcon, BuildingIcon, DropletsIcon, TrashIcon, LeafIcon, 
  SprayIcon, CheckIcon, ArrowRightIcon, PhoneIcon 
} from '../components/Icons';
import { HOUSEKEEPING_SERVICES_LIST, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface HousekeepingPageProps {
  onNavigate?: (page: string) => void;
  onOpenEnquiry?: (service?: string) => void;
}

export const HousekeepingPage: React.FC<HousekeepingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#001423]">
      {/* Housekeeping Banner */}
      <section className="relative py-20 lg:py-28 bg-[#001423] text-white border-b-2 border-[#848A99] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.housekeepingStaff.url}
            alt="SSV Housekeeping & Commercial Cleaning Services"
            aspectRatio="auto"
            containerClassName="w-full h-full"
            overlay={true}
            darkOverlayOpacity="bg-gradient-to-r from-[#000E1A]/95 via-[#001423]/80 to-[#001423]/60"
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#848A99]/20 border border-[#848A99]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              DIVISION 02 // HOUSEKEEPING & FACILITY UPKEEP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              CLEANER SPACES.<br />BETTER ENVIRONMENTS.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Industrial scrubbing machines, hospital-grade eco-friendly cleaning agents, and trained housekeeping staff delivering spotless hygiene across commercial, factory, and residential spaces.
            </p>
            <div className="pt-2">
              <button
                id="housekeeping-hero-proposal-btn"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                }}
                className="px-8 py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-black tracking-widest uppercase rounded-sm inline-flex items-center gap-2 transition-all shadow-xl"
              >
                <span>REQUEST HOUSEKEEPING PROPOSAL</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Housekeeping Specializations */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#848A99] uppercase">
              HYGIENE & CLEANING PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              MECHANIZED FACILITY CARE
            </h2>
            <p className="text-sm text-[#5A6273]">
              From daily corporate workspace upkeep to high-pressure industrial plant degreasing and pest management.
            </p>
          </div>

          <div className="space-y-12">
            {HOUSEKEEPING_SERVICES_LIST.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[#F6F8FA] border border-slate-200 rounded-sm hover:border-[#848A99] transition-all`}
                >
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#848A99] px-2 py-0.5 bg-slate-200 rounded">
                        {service.number}
                      </span>
                      <span className="text-xs font-bold text-[#848A99] uppercase tracking-wider">
                        {service.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#001423] font-gotham uppercase">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#5A6273] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-[#001423] uppercase tracking-wider mb-2">
                        Execution Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#001423]">
                            <CheckIcon size={14} color="#848A99" className="mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => {
                          if (onNavigate) onNavigate('contact');
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#001423] hover:text-[#C0122A] uppercase hover:underline"
                      >
                        <span>Contact for {service.title}</span>
                        <ArrowRightIcon size={12} />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <SafeImage
                      src={IMAGES[service.imageId].url}
                      alt={service.title}
                      aspectRatio="video"
                      containerClassName="rounded-sm shadow-md border border-slate-300"
                      badge="CERTIFIED HYGIENE"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Housekeeping Commitments */}
      <section className="py-16 bg-[#001423] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="p-5 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Mechanized Cleaning</h4>
            <p className="text-xs text-slate-300">Ride-on scrubbers, wet/dry vacuums, and high-pressure steam washers.</p>
          </div>
          <div className="p-5 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Eco-Friendly Chemicals</h4>
            <p className="text-xs text-slate-300">Biodegradable, non-toxic cleaning agents safe for indoor air quality.</p>
          </div>
          <div className="p-5 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Structured Rosters</h4>
            <p className="text-xs text-slate-300">Color-coded microfibers, daily checklists, and supervisor spot audits.</p>
          </div>
          <div className="p-5 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Waste Segregation</h4>
            <p className="text-xs text-slate-300">Environmentally compliant source segregation and hygienic transfer.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
