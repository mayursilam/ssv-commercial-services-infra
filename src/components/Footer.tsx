import React from 'react';
import { Logo } from './Logo';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, ArrowRightIcon } from './Icons';
import { COMPANY_INFO, CORE_PILLARS } from '../data/content';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, pageKey: string, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#000E1A] text-slate-300 border-t-2 border-[#C0122A] relative overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 tech-grid-pattern-dark opacity-40 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="index.html"
              onClick={(e) => handleNav(e, 'home', 'index.html')}
              className="inline-block"
            >
              <Logo
                variant="horizontal"
                className="w-[220px] sm:w-[250px]"
              />
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              SSV Commercial Services & Infra Private Limited delivers premier security, housekeeping, and civil infrastructure solutions designed to support safer, cleaner, and better-managed environments across commercial, residential, and industrial facilities.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#031B2D] border border-[#0F3759] text-[11px] font-bold text-slate-300 uppercase tracking-wider rounded-sm">
                01 Security
              </span>
              <span className="px-2.5 py-1 bg-[#031B2D] border border-[#0F3759] text-[11px] font-bold text-slate-300 uppercase tracking-wider rounded-sm">
                02 Housekeeping
              </span>
              <span className="px-2.5 py-1 bg-[#031B2D] border border-[#0F3759] text-[11px] font-bold text-slate-300 uppercase tracking-wider rounded-sm">
                03 Infra
              </span>
            </div>

            <div className="pt-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#031B2D] hover:bg-[#06243C] text-[#25D366] border border-[#0F3759] rounded-sm text-xs font-bold tracking-wider uppercase transition-all"
              >
                <WhatsappIcon size={16} color="#25D366" />
                <span>Chat with Operations on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services Column (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-black tracking-widest uppercase border-b border-[#0F3759] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C0122A]" />
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="security.html"
                  onClick={(e) => handleNav(e, 'security', 'security.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Security & Manned Guarding</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="security.html"
                  onClick={(e) => handleNav(e, 'security', 'security.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>CCTV & Electronic Surveillance</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="housekeeping.html"
                  onClick={(e) => handleNav(e, 'housekeeping', 'housekeeping.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Commercial & Office Cleaning</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="housekeeping.html"
                  onClick={(e) => handleNav(e, 'housekeeping', 'housekeeping.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Industrial Deep Sanitization</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  onClick={(e) => handleNav(e, 'infrastructure', 'infrastructure.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Turnkey Civil Projects</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  onClick={(e) => handleNav(e, 'infrastructure', 'infrastructure.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Utility Shifting & Relocation</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  onClick={(e) => handleNav(e, 'infrastructure', 'infrastructure.html')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Road & Pavement Construction</span>
                  <span className="text-[#C0122A] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-black tracking-widest uppercase border-b border-[#0F3759] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C0122A]" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="index.html"
                  onClick={(e) => handleNav(e, 'home', 'index.html')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  onClick={(e) => handleNav(e, 'about', 'about.html')}
                  className="hover:text-white transition-colors"
                >
                  About SSV
                </a>
              </li>
              <li>
                <a
                  href="services.html"
                  onClick={(e) => handleNav(e, 'services', 'services.html')}
                  className="hover:text-white transition-colors"
                >
                  Services Overview
                </a>
              </li>
              <li>
                <a
                  href="industries.html"
                  onClick={(e) => handleNav(e, 'industries', 'industries.html')}
                  className="hover:text-white transition-colors"
                >
                  Industries Served
                </a>
              </li>
              <li>
                <a
                  href="why-ssv.html"
                  onClick={(e) => handleNav(e, 'why-ssv', 'why-ssv.html')}
                  className="hover:text-white transition-colors"
                >
                  Why SSV
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  onClick={(e) => handleNav(e, 'contact', 'contact.html')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-black tracking-widest uppercase border-b border-[#0F3759] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C0122A]" />
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPinIcon size={16} color="#C0122A" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{COMPANY_INFO.address.line1}</p>
                  <p className="text-slate-400">{COMPANY_INFO.address.line2}</p>
                  <p className="text-slate-400">{COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon size={16} color="#C0122A" className="flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-semibold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon size={16} color="#848A99" className="flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="contact.html"
                  id="footer-contact-cta"
                  onClick={(e) => handleNav(e, 'contact', 'contact.html')}
                  className="w-full py-2.5 px-3 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-center font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 mt-8 border-t border-[#0F3759]/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p>© 2026 {COMPANY_INFO.legalName}. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">Security</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-400 transition-colors">Housekeeping</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-400 transition-colors">Infra Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
