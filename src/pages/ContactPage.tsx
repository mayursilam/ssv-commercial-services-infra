import React, { useState } from 'react';
import { SafeImage } from '../components/SafeImage';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, ArrowRightIcon, CheckIcon } from '../components/Icons';
import { COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Security Services',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              DIRECT COMMUNICATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              CONTACT SSV OPERATIONS
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect with our operational leadership in Dharashiv, Maharashtra. We provide on-site facility surveys, formal RFPs, and immediate deployment assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C0122A]">CORPORATE COORDINATES</span>
                <h2 className="text-3xl font-black text-[#001423] font-gotham uppercase">
                  HEADQUARTERS & SERVICE HOTLINES
                </h2>
                <p className="text-sm text-[#5A6273]">
                  Reach out via phone, WhatsApp, or email for prompt operational coordination.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-center gap-4 hover:border-[#C0122A] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C0122A]/10 text-[#C0122A] flex items-center justify-center flex-shrink-0">
                    <PhoneIcon size={20} color="#C0122A" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-[#848A99]">Direct Phone Line</div>
                    <div className="text-lg font-bold text-[#001423] group-hover:text-[#C0122A] transition-colors">{COMPANY_INFO.phone}</div>
                    <div className="text-[11px] text-[#5A6273]">24/7 Operations & Emergency Escalation</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-center gap-4 hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <WhatsappIcon size={20} color="#25D366" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-[#848A99]">WhatsApp Chat</div>
                    <div className="text-lg font-bold text-[#001423] group-hover:text-[#25D366] transition-colors">+91 86690 05122</div>
                    <div className="text-[11px] text-[#5A6273]">Fastest for site surveys & quick quotes</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-center gap-4 hover:border-slate-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#001423]/10 text-[#001423] flex items-center justify-center flex-shrink-0">
                    <MailIcon size={20} color="#001423" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-[#848A99]">Official Email</div>
                    <div className="text-base font-bold text-[#001423] group-hover:text-[#C0122A] transition-colors">{COMPANY_INFO.email}</div>
                    <div className="text-[11px] text-[#5A6273]">For vendor tenders, RFPs & formal contracts</div>
                  </div>
                </a>

                <div className="p-5 bg-[#F6F8FA] border border-slate-200 rounded-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C0122A]/10 text-[#C0122A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPinIcon size={20} color="#C0122A" />
                  </div>
                  <div className="text-xs text-[#5A6273]">
                    <div className="text-xs font-bold uppercase text-[#848A99] mb-0.5">Registered Office Address</div>
                    <p className="font-bold text-sm text-[#001423]">{COMPANY_INFO.address.line1}</p>
                    <p>{COMPANY_INFO.address.line2}</p>
                    <p>{COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RFP & Requirement Form */}
            <div className="lg:col-span-7 bg-[#001423] text-white p-8 sm:p-10 rounded-sm border border-[#0F3759] shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#0F3759] pb-4 mb-4">
                    <h3 className="text-2xl font-bold font-gotham text-white uppercase">
                      TRANSMIT FACILITY REQUIREMENTS
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Our commercial operations supervisor will review your property specifications and respond promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Deshmukh"
                        className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Company / Property Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Maharashtra Logistics Hub"
                        className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 86690 05122"
                        className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@logistics.in"
                        className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Primary Service Requirement *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A]"
                    >
                      <option value="Security Services">Security Services (Manned Guarding / CCTV / VIP / Patrol)</option>
                      <option value="Housekeeping Services">Housekeeping Services (Commercial / Industrial / Sanitization)</option>
                      <option value="Infra Services">Infra Services (Turnkey Civil / Utility Shifting / Road Paving)</option>
                      <option value="Integrated Facility Services">Integrated Facility Package (Security + Housekeeping + Infra)</option>
                      <option value="Turnkey Projects">Turnkey Projects</option>
                      <option value="Utility Shifting">Utility Shifting</option>
                      <option value="Road Construction">Road Construction</option>
                      <option value="Service Sector Solutions">Service Sector Solutions</option>
                      <option value="Other">Other Specific Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Requirement Details / Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention site location, area in sq. ft., number of security personnel, or civil project scope..."
                      className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C0122A] hover:bg-[#9E0E22] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
                    >
                      <span>SUBMIT RFP ENQUIRY</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C0122A]/20 border-2 border-[#C0122A] flex items-center justify-center mx-auto text-[#C0122A]">
                    <CheckIcon size={32} color="#C0122A" />
                  </div>
                  <h3 className="text-2xl font-bold font-gotham text-white uppercase">Inquiry Confirmed</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your request for <strong className="text-white">{formData.service}</strong> has been logged. Our Dharashiv headquarters will contact you at <span className="text-white font-bold">{formData.phone}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#031B2D] hover:bg-[#06243C] text-xs font-bold uppercase tracking-wider text-slate-300 border border-[#0F3759] rounded-sm transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
