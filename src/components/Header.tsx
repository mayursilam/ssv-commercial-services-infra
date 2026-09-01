import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PhoneIcon, MailIcon, WhatsappIcon, MenuIcon, CloseIcon, ChevronRightIcon, ArrowRightIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenEnquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'index.html', key: 'home' },
    { name: 'About SSV', href: 'about.html', key: 'about' },
    { 
      name: 'Services', 
      href: 'services.html', 
      key: 'services',
      hasChildren: true,
      children: [
        { name: 'All Services Overview', href: 'services.html', key: 'services', desc: 'Unified security, housekeeping & infra framework' },
        { name: '01 Security Services', href: 'security.html', key: 'security', desc: 'Manned guarding, CCTV surveillance & VIP protection' },
        { name: '02 Housekeeping Services', href: 'housekeeping.html', key: 'housekeeping', desc: 'Commercial cleaning, hygiene & sanitization' },
        { name: '03 Infra Services', href: 'infrastructure.html', key: 'infrastructure', desc: 'Turnkey projects, utility shifting & road construction' },
      ]
    },
    { name: 'Industries', href: 'industries.html', key: 'industries' },
    { name: 'Why SSV', href: 'why-ssv.html', key: 'why-ssv' },
    { name: 'Contact', href: 'contact.html', key: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, pageKey: string, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageKey);
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Corporate Utility Bar */}
      <div className="hidden lg:block bg-[#000E1A] text-slate-300 border-b border-[#0F3759]/40 py-1.5 px-6 text-xs select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-white/90 tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C0122A] inline-block animate-pulse" />
              SSV COMMERCIAL SERVICES & INFRA PRIVATE LIMITED
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-medium tracking-wider">
              ENSURING SAFETY, DELIVERING EXCELLENCE
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <PhoneIcon size={13} color="#C0122A" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <MailIcon size={13} color="#848A99" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:brightness-110 font-semibold transition-all"
            >
              <WhatsappIcon size={13} color="#25D366" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#001423]/95 backdrop-blur-md shadow-2xl border-b border-[#0F3759]/60 py-3'
            : 'bg-[#001423] border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="index.html"
            onClick={(e) => handleLinkClick(e, 'home', 'index.html')}
            className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="SSV Home"
          >
            <Logo variant="horizontal" theme="light" height={42} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.key || 
                (item.hasChildren && ['services', 'security', 'housekeeping', 'infrastructure'].includes(currentPage));

              if (item.hasChildren) {
                return (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.key, item.href)}
                      className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-150 inline-flex items-center gap-1 rounded ${
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                        servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[#000E1A] border border-[#0F3759] shadow-2xl rounded-sm p-3 space-y-1">
                        {item.children?.map((child) => (
                          <a
                            key={child.key}
                            href={child.href}
                            onClick={(e) => handleLinkClick(e, child.key, child.href)}
                            className={`block p-2.5 rounded transition-all ${
                              currentPage === child.key 
                                ? 'bg-[#C0122A]/20 border-l-2 border-[#C0122A] text-white' 
                                : 'hover:bg-white/5 text-slate-300 hover:text-white'
                            }`}
                          >
                            <div className="text-xs font-bold uppercase tracking-wider">{child.name}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{child.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.key, item.href)}
                  className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-150 rounded ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else if (onNavigate) onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C0122A] hover:bg-[#9E0E22] text-white text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-md shadow-red-950/40 rounded-sm hover:translate-y-[-1px]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#001423]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/10">
              <Logo variant="stacked" theme="light" height={48} />
            </div>

            <div className="space-y-1 pt-2">
              {navLinks.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.key, item.href)}
                    className={`block py-3 px-3 rounded text-base font-bold tracking-wide transition-colors ${
                      currentPage === item.key
                        ? 'bg-[#C0122A] text-white'
                        : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>

                  {item.hasChildren && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l border-[#0F3759] ml-4 my-1">
                      {item.children?.slice(1).map((child) => (
                        <a
                          key={child.key}
                          href={child.href}
                          onClick={(e) => handleLinkClick(e, child.key, child.href)}
                          className={`block py-2 text-xs font-semibold uppercase tracking-wider ${
                            currentPage === child.key ? 'text-[#C0122A]' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
                else if (onNavigate) onNavigate('contact');
              }}
              className="w-full py-3.5 bg-[#C0122A] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRightIcon size={14} />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="py-3 px-3 bg-[#031B2D] text-white font-semibold flex items-center justify-center gap-2 rounded-sm border border-[#0F3759]"
              >
                <PhoneIcon size={14} color="#C0122A" />
                <span>Call Us</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 bg-[#031B2D] text-[#25D366] font-semibold flex items-center justify-center gap-2 rounded-sm border border-[#0F3759]"
              >
                <WhatsappIcon size={14} color="#25D366" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
