import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, ShieldIcon, SparklesIcon, ConstructionIcon, CheckIcon } from '../components/Icons';
import { COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-[#001423]">
      {/* Banner */}
      <section className="relative py-20 lg:py-28 bg-[#001423] text-white border-b-2 border-[#C0122A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.contactCorporate.url}
            alt="SSV Contact and Corporate Headquarters"
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
              DIRECT OPERATIONS HELPLINE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white leading-tight">
              LET'S BUILD A SAFER,<br />
              <span className="text-[#C0122A]">CLEANER, BETTER</span> ENVIRONMENT.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our operational leadership in Dharashiv, Maharashtra for rapid security deployment, mechanized housekeeping, and infrastructure project consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main High-Conversion Contact Hub */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 3 Core Primary Contact Action Cards */}
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C0122A]">INSTANT CONNECTIVITY</span>
              <h2 className="text-3xl font-black text-[#001423] font-gotham uppercase">
                DIRECT CONTACT CHANNELS
              </h2>
              <p className="text-sm text-[#5A6273]">
                Immediate access to our central operations desk. Choose your preferred communication channel below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Channel 1: CALL US */}
              <div 
                id="contact-card-call"
                className="bg-[#F6F8FA] border-2 border-slate-200 hover:border-[#C0122A] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C0122A]/10 text-[#C0122A] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon size={24} color="#C0122A" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#848A99] uppercase block">DIRECT HOTLINE</span>
                    <h3 className="text-xl font-black text-[#001423] font-gotham uppercase mt-1">CALL US</h3>
                    <p className="text-lg font-bold text-[#C0122A] mt-2">+91 86690 05122</p>
                    <p className="text-xs text-[#5A6273] mt-2 leading-relaxed">
                      24/7 dedicated line for operational coordination, emergency security escalation, and immediate site requirements.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    id="contact-btn-call-now"
                    className="w-full py-3.5 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-red-950/30"
                  >
                    <PhoneIcon size={14} color="#FFFFFF" />
                    <span>CALL NOW</span>
                  </a>
                </div>
              </div>

              {/* Channel 2: WHATSAPP US */}
              <div 
                id="contact-card-whatsapp"
                className="bg-[#F6F8FA] border-2 border-slate-200 hover:border-[#25D366] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <WhatsappIcon size={24} color="#25D366" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#848A99] uppercase block">INSTANT CHAT</span>
                    <h3 className="text-xl font-black text-[#001423] font-gotham uppercase mt-1">WHATSAPP US</h3>
                    <p className="text-lg font-bold text-[#25D366] mt-2">+91 86690 05122</p>
                    <p className="text-xs text-[#5A6273] mt-2 leading-relaxed">
                      Fastest communication for sharing site photos, GPS locations, property layouts, and getting quick operational updates.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-btn-whatsapp-us"
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <WhatsappIcon size={16} color="#000000" />
                    <span>WHATSAPP US</span>
                  </a>
                </div>
              </div>

              {/* Channel 3: EMAIL US */}
              <div 
                id="contact-card-email"
                className="bg-[#F6F8FA] border-2 border-slate-200 hover:border-[#001423] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#001423]/10 text-[#001423] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MailIcon size={24} color="#001423" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#848A99] uppercase block">OFFICIAL DESK</span>
                    <h3 className="text-xl font-black text-[#001423] font-gotham uppercase mt-1">EMAIL US</h3>
                    <p className="text-base font-bold text-[#001423] mt-2 break-all">{COMPANY_INFO.email}</p>
                    <p className="text-xs text-[#5A6273] mt-2 leading-relaxed">
                      Formal correspondence, corporate vendor onboarding, contracts, and municipal infrastructure communications.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    id="contact-btn-send-email"
                    className="w-full py-3.5 bg-[#001423] hover:bg-[#06243C] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MailIcon size={14} color="#FFFFFF" />
                    <span>SEND EMAIL</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Balanced Corporate Coordinates & Regional Operations Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
            
            {/* Headquarters Detailed Card */}
            <div className="lg:col-span-6 bg-[#001423] text-white p-8 sm:p-10 rounded-sm border border-[#0F3759] shadow-xl flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#C0122A]" />
                  <span className="text-xs font-black tracking-[0.2em] text-[#848A99] uppercase">
                    REGISTERED HEADQUARTERS
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-gotham uppercase">
                    SSV COMMERCIAL SERVICES & INFRA PRIVATE LIMITED
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                    Dharashiv, Maharashtra
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm text-slate-300">
                  <div className="flex items-start gap-3.5">
                    <MapPinIcon size={20} color="#C0122A" className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-bold uppercase text-slate-400">Postal Address</div>
                      <p className="text-white font-bold mt-0.5">{COMPANY_INFO.address.line1}</p>
                      <p className="text-slate-300">{COMPANY_INFO.address.line2}</p>
                      <p className="text-slate-300">{COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <PhoneIcon size={20} color="#C0122A" className="flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold uppercase text-slate-400">Telephone</div>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:text-[#C0122A] transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <MailIcon size={20} color="#848A99" className="flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold uppercase text-slate-400">Electronic Mail</div>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-bold hover:text-slate-300 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#0F3759] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Operations Status: Active 24/7</span>
                </div>
                <div className="font-semibold text-slate-300">
                  CIN Registered Private Limited Company
                </div>
              </div>
            </div>

            {/* Division Hotlines & Coverage Grid */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Three Divisional Capability Lines */}
              <div className="space-y-4">
                <div className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-start gap-4 hover:border-[#C0122A] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#C0122A]/10 text-[#C0122A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldIcon size={18} color="#C0122A" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#001423] uppercase">01 Security Operations Desk</h4>
                    <p className="text-xs text-[#5A6273] mt-0.5">
                      Manned guarding deployments, CCTV surveillance setups, executive protection, and access control systems.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#C0122A] hover:underline">
                        Call Security Desk →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-start gap-4 hover:border-[#848A99] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#848A99]/15 text-[#848A99] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <SparklesIcon size={18} color="#848A99" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#001423] uppercase">02 Housekeeping Operations Desk</h4>
                    <p className="text-xs text-[#5A6273] mt-0.5">
                      Commercial cleaning, mechanized scrubbing, deep sanitization, industrial floor care, and waste management.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#25D366] hover:underline">
                        WhatsApp Housekeeping Desk →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-start gap-4 hover:border-[#001423] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#001423]/10 text-[#001423] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ConstructionIcon size={18} color="#001423" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#001423] uppercase">03 Civil Infrastructure Desk</h4>
                    <p className="text-xs text-[#5A6273] mt-0.5">
                      Turnkey civil projects, utility shifting, road construction, industrial pavement, and site engineering works.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#001423] hover:underline">
                        Email Engineering Team →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographic Coverage Indicator */}
              <div className="p-5 bg-[#031B2D] text-white rounded-sm border border-[#0F3759]">
                <div className="text-xs font-bold text-[#C0122A] uppercase tracking-wider mb-1">
                  OPERATIONAL COVERAGE
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Headquartered in <strong className="text-white">Dharashiv</strong>, with operational reach across <strong className="text-white">Solapur, Latur, Chhatrapati Sambhajinagar, Pune, and key industrial belts across Maharashtra</strong>.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
