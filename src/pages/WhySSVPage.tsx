import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { CheckIcon, ArrowRightIcon, ShieldIcon, SparklesIcon, ConstructionIcon } from '../components/Icons';
import { VALUE_PILLARS, QUALITATIVE_STRENGTHS, PROCESS_STAGES, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface WhySSVPageProps {
  onOpenEnquiry: () => void;
}

export const WhySSVPage: React.FC<WhySSVPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-white text-[#001423]">
      {/* Banner */}
      <section className="relative py-20 lg:py-28 bg-[#001423] text-white border-b-2 border-[#C0122A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.professionalTeam.url}
            alt="Why Choose SSV Commercial Services & Infra"
            aspectRatio="auto"
            containerClassName="w-full h-full"
            overlay={true}
            darkOverlayOpacity="bg-[#000E1A]/85"
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C0122A]/20 border border-[#C0122A]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              VALUE PROPOSITION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              WHY SSV COMMERCIAL SERVICES & INFRA
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We stand apart through disciplined governance, trained and verified manpower, modern mechanized equipment, transparent reporting, and turnkey execution.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Value Blocks */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C0122A] uppercase">
              THE FIVE PILLARS OF EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              CORE OPERATIONAL ADVANTAGES
            </h2>
          </div>

          <div className="space-y-8">
            {VALUE_PILLARS.map((vp) => (
              <div
                key={vp.number}
                className="p-8 bg-[#F6F8FA] border border-slate-200 hover:border-[#C0122A] rounded-sm transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-3xl font-black text-[#C0122A] font-mono">{vp.number}</span>
                  </div>
                  <div className="lg:col-span-6 space-y-2">
                    <h3 className="text-2xl font-bold text-[#001423] font-gotham uppercase">{vp.title}</h3>
                    <p className="text-sm text-[#5A6273] leading-relaxed">{vp.description}</p>
                  </div>
                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-6 pt-4 lg:pt-0 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#001423]">Operational Standard:</div>
                    <div className="space-y-1.5">
                      {vp.details.map((d, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#5A6273]">
                          <CheckIcon size={14} color="#C0122A" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Qualitative Strengths */}
      <section className="py-20 bg-[#F6F8FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#848A99] uppercase">
              QUALITATIVE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              EIGHT REASONS CLIENTS RELY ON SSV
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITATIVE_STRENGTHS.map((str, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-sm shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#C0122A] flex items-center justify-center font-bold text-xs font-mono">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-[#001423]">{str.title}</h4>
                <p className="text-xs text-[#5A6273] leading-relaxed">{str.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C0122A] uppercase">
              OPERATIONAL TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              THE 5-STAGE DEPLOYMENT MODEL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STAGES.map((st) => (
              <div key={st.number} className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm space-y-2">
                <span className="text-xs font-mono font-bold text-[#C0122A]">{st.number}</span>
                <h4 className="text-base font-bold text-[#001423] uppercase">{st.title}</h4>
                <p className="text-[11px] font-semibold text-[#848A99]">{st.subtitle}</p>
                <p className="text-xs text-[#5A6273] leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-bold uppercase tracking-widest rounded-sm inline-flex items-center gap-2 shadow-md transition-all"
            >
              <span>SCHEDULE A SITE EVALUATION</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
