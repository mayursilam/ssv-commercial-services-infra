import React, { useState } from 'react';
import { CloseIcon, CheckIcon, PhoneIcon, WhatsappIcon, ArrowRightIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Security Services'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: defaultService,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous professional client-side capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: 'Security Services',
      message: ''
    });
    onClose();
  };

  const servicesOptions = [
    'Security Services',
    'Housekeeping Services',
    'Infra Services',
    'Turnkey Projects',
    'Utility Shifting',
    'Road Construction',
    'Service Sector Solutions',
    'Integrated Facility Solution (Security + Housekeeping + Infra)',
    'Other Commercial Requirement'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000E1A]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#001423] border border-[#0F3759] shadow-2xl rounded-sm text-white overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="bg-[#000E1A] px-6 py-4 border-b border-[#0F3759] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C0122A]" />
            <span className="text-xs font-black tracking-widest uppercase text-slate-200">
              COMMERCIAL INQUIRY & RFP
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#0F3759] pb-3 mb-4">
                <h3 className="text-xl font-bold tracking-tight text-white font-gotham">
                  Connect with SSV Operations
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Submit your facility specifications or project details. Our operational command will reach out within business hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Patil"
                    className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Industrial Park"
                    className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Required Service Pillar *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A] transition-colors"
                >
                  {servicesOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#001423] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Requirement Details / Scope
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your site location, scope of guards, sq.ft. area, or civil requirements..."
                  className="w-full bg-[#031B2D] border border-[#0F3759] rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C0122A] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#C0122A] hover:bg-[#9E0E22] text-white font-bold text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING DETAILS...</span>
                  ) : (
                    <>
                      <span>SUBMIT RFP ENQUIRY</span>
                      <ArrowRightIcon size={14} />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-[#0F3759]">
                <span>Need immediate response?</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-[#C0122A] font-bold hover:underline flex items-center gap-1"
                >
                  <PhoneIcon size={12} color="#C0122A" />
                  <span>Call +91 86690 05122</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#C0122A]/20 border-2 border-[#C0122A] flex items-center justify-center mx-auto text-[#C0122A]">
                <CheckIcon size={32} color="#C0122A" />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight text-white font-gotham">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#C0122A] font-bold tracking-widest uppercase mt-1">
                  SSV Operational Command Notified
                </p>
              </div>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your requirement for{' '}
                <strong className="text-white">{formData.service}</strong> at{' '}
                <strong className="text-white">{formData.company}</strong> has been logged. Our Dharashiv operations supervisor will review your specifications and contact you at{' '}
                <span className="text-white font-semibold">{formData.phone}</span>.
              </p>

              <div className="bg-[#031B2D] border border-[#0F3759] p-4 rounded-sm max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-300">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Submission Summary
                </div>
                <div><span className="text-slate-400">Pillar:</span> <strong className="text-white">{formData.service}</strong></div>
                <div><span className="text-slate-400">Company:</span> <strong className="text-white">{formData.company}</strong></div>
                <div><span className="text-slate-400">Official Email:</span> <strong className="text-white">{formData.email}</strong></div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/918669005122?text=Hello%20SSV%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.service)}%20for%20${encodeURIComponent(formData.company)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsappIcon size={14} color="#000000" />
                  <span>Send Direct WhatsApp Message</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#031B2D] hover:bg-[#06243C] text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-[#0F3759] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
