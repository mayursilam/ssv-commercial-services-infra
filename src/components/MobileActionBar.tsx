import React from 'react';
import { PhoneIcon, WhatsappIcon, MailIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface MobileActionBarProps {
  onNavigate?: (page: string) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#000E1A]/95 backdrop-blur-lg border-t-2 border-[#C0122A] p-2 grid grid-cols-3 gap-2 shadow-2xl">
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        id="mobile-action-call"
        className="py-2.5 bg-[#C0122A] text-white font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#9E0E22] shadow-md shadow-red-950/50"
      >
        <PhoneIcon size={14} color="#FFFFFF" />
        <span>CALL NOW</span>
      </a>

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-action-whatsapp"
        className="py-2.5 bg-[#031B2D] border border-[#0F3759] text-[#25D366] font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#06243C]"
      >
        <WhatsappIcon size={14} color="#25D366" />
        <span>WHATSAPP US</span>
      </a>

      <a
        href={`mailto:${COMPANY_INFO.email}`}
        id="mobile-action-email"
        className="py-2.5 bg-[#031B2D] border border-[#0F3759] text-white font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#06243C]"
      >
        <MailIcon size={14} color="#848A99" />
        <span>SEND EMAIL</span>
      </a>
    </div>
  );
};
