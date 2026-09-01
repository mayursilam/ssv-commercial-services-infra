import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { ShieldIcon, SparklesIcon, ConstructionIcon, CheckIcon, ArrowRightIcon, PhoneIcon } from '../components/Icons';
import { COMPANY_INFO, VALUE_PILLARS } from '../data/content';
import { IMAGES } from '../data/images';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="bg-white text-[#001423]">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-[#001423] text-white overflow-hidden border-b-2 border-[#C0122A]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.corporateOffice.url}
            alt="SSV corporate management operations"
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
              ABOUT OUR ORGANIZATION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              ABOUT SSV COMMERCIAL SERVICES & INFRA
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              SSV Commercial Services & Infra Private Limited delivers professional security, housekeeping, and infrastructure solutions designed to support safer, cleaner, and better-managed environments.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Ethos & Foundation */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                  OPERATIONAL ETHOS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase leading-tight">
                SAFETY AND SECURITY AS FUNDAMENTAL OPERATIONAL PILLARS
              </h2>

              <p className="text-sm sm:text-base text-[#5A6273] leading-relaxed">
                SSV recognizes that safety and security are fundamental to seamless operations. Whether managing Grade-A corporate towers, busy manufacturing lines, or residential housing societies, an unprotected or improperly maintained space impedes productivity and compromises peace of mind.
              </p>

              <p className="text-sm sm:text-base text-[#5A6273] leading-relaxed">
                The company provides security and housekeeping solutions supported by trained personnel, modern technology, professional practices, and customer-centric service. Coupled with our heavy civil and turnkey infrastructure capability, SSV represents a unified partner for facility and civil asset lifecycle management.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-6 py-3.5 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>CONNECT WITH MANAGEMENT</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={IMAGES.professionalTeam.url}
                alt="SSV management team reviewing operations"
                aspectRatio="portrait"
                containerClassName="rounded-sm shadow-xl border border-slate-200"
                badge="MANAGED DISCIPLINE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#F6F8FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 border border-slate-200 rounded-sm shadow-sm space-y-4 border-t-4 border-t-[#C0122A]">
              <div className="text-xs font-black tracking-widest text-[#C0122A] uppercase">
                OUR MISSION
              </div>
              <h3 className="text-2xl font-black text-[#001423] font-gotham uppercase">
                DELIVERING EXCELLENCE & UNCOMPROMISING STANDARDS
              </h3>
              <p className="text-sm text-[#5A6273] leading-relaxed">
                To create safe, hygienic, and resilient environments through customer-centric service, highly trained personnel, advanced technology, and professional execution that elevates operational well-being.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#001423]">
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#C0122A" />
                  <span>Prioritizing physical safety and proactive hazard mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#C0122A" />
                  <span>Maintaining hospital-grade hygiene and mechanized cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#C0122A" />
                  <span>Executing engineering & infrastructure projects on schedule</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 border border-slate-200 rounded-sm shadow-sm space-y-4 border-t-4 border-t-[#001423]">
              <div className="text-xs font-black tracking-widest text-[#001423] uppercase">
                OUR VISION
              </div>
              <h3 className="text-2xl font-black text-[#001423] font-gotham uppercase">
                THE REGION'S BENCHMARK FOR COMMERCIAL & INFRA PARTNERSHIPS
              </h3>
              <p className="text-sm text-[#5A6273] leading-relaxed">
                To be recognized as the premier provider of commercial services and civil infrastructure, distinguished by trust, integrity, innovation, quality, operational efficiency, and sustainable practices.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#001423]">
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#001423" />
                  <span>Building long-term client relationships based on accountability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#001423" />
                  <span>Continuous technological upgrading of tools and monitoring systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#001423" />
                  <span>Promoting eco-friendly materials and statutory worker welfare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Integration */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C0122A]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#848A99] uppercase">
                INTEGRATED SERVICE ECOSYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              HOW OUR DIVISIONS COLLABORATE
            </h2>
            <p className="text-sm text-[#5A6273]">
              Eliminating operational fragmentation through unified governance and clear point-of-contact accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F6F8FA] border border-slate-200 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#C0122A]/10 text-[#C0122A] flex items-center justify-center">
                <ShieldIcon size={20} color="#C0122A" />
              </div>
              <h4 className="text-lg font-bold text-[#001423]">01 Security Division</h4>
              <p className="text-xs text-[#5A6273] leading-relaxed">
                Controls perimeter gates, logs visitor and vehicle influx, runs CCTV surveillance feeds, and enforces building emergency protocols.
              </p>
            </div>

            <div className="p-6 bg-[#F6F8FA] border border-slate-200 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#848A99]/10 text-[#848A99] flex items-center justify-center">
                <SparklesIcon size={20} color="#848A99" />
              </div>
              <h4 className="text-lg font-bold text-[#001423]">02 Housekeeping Division</h4>
              <p className="text-xs text-[#5A6273] leading-relaxed">
                Maintains continuous hygiene rosters, operates industrial scrubbing machinery, performs deep sanitization, and manages waste segregation.
              </p>
            </div>

            <div className="p-6 bg-[#F6F8FA] border border-slate-200 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#001423]/10 text-[#001423] flex items-center justify-center">
                <ConstructionIcon size={20} color="#001423" />
              </div>
              <h4 className="text-lg font-bold text-[#001423]">03 Infra Division</h4>
              <p className="text-xs text-[#5A6273] leading-relaxed">
                Constructs access roads, shifts subterranean and overhead utilities, and executes turnkey civil additions to sustain property value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarter & Regional Hub */}
      <section className="py-16 bg-[#000E1A] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C0122A]">REGIONAL HEADQUARTERS</span>
            <h3 className="text-2xl font-bold font-gotham text-white mt-1">Dharashiv, Maharashtra</h3>
            <p className="text-xs text-slate-400 mt-1">{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              Call +91 86690 05122
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
