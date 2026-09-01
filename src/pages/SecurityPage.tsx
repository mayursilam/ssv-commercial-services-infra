import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { 
  ShieldIcon, CameraIcon, LockIcon, ScanIcon, BellIcon, FlameIcon, 
  UsersIcon, CheckIcon, ArrowRightIcon, PhoneIcon 
} from '../components/Icons';
import { SECURITY_SERVICES_LIST, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface SecurityPageProps {
  onOpenEnquiry: (service?: string) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-white text-[#001423]">
      {/* Banner */}
      <section className="relative py-20 lg:py-28 bg-[#001423] text-white border-b-2 border-[#C0122A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.securityGuard.url}
            alt="SSV Security Guard Services"
            aspectRatio="auto"
            containerClassName="w-full h-full"
            overlay={true}
            darkOverlayOpacity="bg-gradient-to-r from-[#000E1A]/95 via-[#001423]/80 to-[#001423]/60"
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C0122A]/20 border border-[#C0122A]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              DIVISION 01 // SECURITY SERVICES
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              ENSURING SAFETY & PERIMETER DEFENSE
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tailored protection frameworks combining vetted security officers, strict access management, command-center video monitoring, and emergency response teams.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('Security Services')}
                className="px-8 py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-black tracking-widest uppercase rounded-sm inline-flex items-center gap-2 transition-all shadow-xl"
              >
                <span>DEPLOY SECURITY PERSONNEL</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Specializations Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C0122A] uppercase">
              PROTECTION SPECIALIZATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001423] font-gotham uppercase">
              COMPREHENSIVE SECURITY PORTFOLIO
            </h2>
            <p className="text-sm text-[#5A6273]">
              Every security deployment is backed by verified background checks, site-specific SOPs, and disciplined supervision.
            </p>
          </div>

          <div className="space-y-12">
            {SECURITY_SERVICES_LIST.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[#F6F8FA] border border-slate-200 rounded-sm hover:border-[#C0122A] transition-all`}
                >
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#C0122A] px-2 py-0.5 bg-red-100 rounded">
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
                        Key Deployment Protocols:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#001423]">
                            <CheckIcon size={14} color="#C0122A" className="mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => onOpenEnquiry(service.title)}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#C0122A] uppercase hover:underline"
                      >
                        <span>Enquire for {service.title}</span>
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
                      badge="VERIFIED SECURITY"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Operations Rigor */}
      <section className="py-16 bg-[#001423] text-white border-t-2 border-[#C0122A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="p-6 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-2">
            <h4 className="text-base font-bold text-[#C0122A] uppercase">100% Background Verified</h4>
            <p className="text-xs text-slate-300">All security guards undergo identity verification, address authentication, and criminal record screening.</p>
          </div>
          <div className="p-6 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-2">
            <h4 className="text-base font-bold text-white uppercase">24/7 Field Patrol Audits</h4>
            <p className="text-xs text-slate-300">Senior patrolling officers conduct scheduled and surprise night-shift inspections to verify alertness.</p>
          </div>
          <div className="p-6 bg-[#031B2D] border border-[#0F3759] rounded-sm space-y-2">
            <h4 className="text-base font-bold text-[#C0122A] uppercase">Fire & Emergency SOPs</h4>
            <p className="text-xs text-slate-300">Trained in emergency evacuation drills, fire extinguisher operation, and rapid municipal escalation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
