import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { 
  ConstructionIcon, RoadIcon, HardHatIcon, WrenchIcon, UtilityIcon, 
  CheckIcon, ArrowRightIcon, PhoneIcon 
} from '../components/Icons';
import { INFRASTRUCTURE_MODULES, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface InfrastructurePageProps {
  onOpenEnquiry: (service?: string) => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-white text-[#001423]">
      {/* Infrastructure Banner - Dark Editorial Engineering */}
      <section className="relative py-20 lg:py-28 bg-[#000E1A] text-white border-b-2 border-[#C0122A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.constructionSite.url}
            alt="SSV Civil Infrastructure Projects"
            aspectRatio="auto"
            containerClassName="w-full h-full"
            overlay={true}
            darkOverlayOpacity="bg-gradient-to-r from-[#000B14]/95 via-[#001423]/80 to-[#001423]/60"
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C0122A]/20 border border-[#C0122A]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              DIVISION 03 // INFRA SERVICES & CIVIL WORKS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              INFRASTRUCTURE<br />
              <span className="text-[#C0122A]">THAT MOVES PROJECTS</span> FORWARD.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Execution of heavy civil works, turnkey industrial projects, precision underground and overhead utility shifting, and high-durability road construction.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('Infra Services')}
                className="px-8 py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-black tracking-widest uppercase rounded-sm inline-flex items-center gap-2 transition-all shadow-xl"
              >
                <span>CONSULT WITH INFRA ENGINEERS</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Infrastructure Modules */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C0122A] uppercase">
              CIVIL & STRUCTURAL PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              HEAVY INFRASTRUCTURE EXECUTION
            </h2>
            <p className="text-sm text-[#5A6273]">
              From ground leveling and utility diversion to arterial road construction and turnkey site delivery.
            </p>
          </div>

          <div className="space-y-12">
            {INFRASTRUCTURE_MODULES.map((module, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={module.id}
                  id={module.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[#001423] text-white rounded-sm border border-[#0F3759] hover:border-[#C0122A] transition-all`}
                >
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-white px-2 py-0.5 bg-[#C0122A] rounded">
                        {module.number}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {module.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white font-gotham uppercase">
                      {module.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-[#C0122A] uppercase tracking-wider mb-2">
                        Engineering Scope:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {module.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckIcon size={14} color="#C0122A" className="mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => onOpenEnquiry(module.title)}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#C0122A] uppercase hover:underline"
                      >
                        <span>Submit RFP for {module.title}</span>
                        <ArrowRightIcon size={12} />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <SafeImage
                      src={IMAGES[module.imageId].url}
                      alt={module.title}
                      aspectRatio="video"
                      containerClassName="rounded-sm shadow-md border border-[#0F3759]"
                      badge="ENGINEERED CIVIL"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities Strip */}
      <section className="py-16 bg-[#F6F8FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#001423]">
              CIVIL PROJECT GOVERNANCE & SAFETY
            </h3>
            <p className="text-xs text-[#5A6273] mt-1">Strict adherence to structural norms and statutory clearances.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-white border border-slate-200 rounded-sm">
              <h4 className="text-sm font-bold text-[#001423]">Machinery Fleet</h4>
              <p className="text-xs text-[#5A6273] mt-1">Graders, asphalt compactors, excavators, and utility trenching equipment.</p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-sm">
              <h4 className="text-sm font-bold text-[#001423]">Utility Coordination</h4>
              <p className="text-xs text-[#5A6273] mt-1">Liaison and zero-disruption planning with municipal and power authorities.</p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-sm">
              <h4 className="text-sm font-bold text-[#001423]">Material Quality</h4>
              <p className="text-xs text-[#5A6273] mt-1">Rigorous batch testing for concrete, aggregates, and bituminous mixes.</p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-sm">
              <h4 className="text-sm font-bold text-[#001423]">Milestone Delivery</h4>
              <p className="text-xs text-[#5A6273] mt-1">Structured project timelines with on-site engineering supervision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
