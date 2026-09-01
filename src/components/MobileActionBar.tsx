import React from 'react';
import { PhoneIcon, WhatsappIcon, ArrowRightIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface MobileActionBarProps {
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#000E1A]/95 backdrop-blur-lg border-t-2 border-[#C0122A] p-2 flex items-center gap-2 shadow-2xl">
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 py-2.5 bg-[#031B2D] border border-[#0F3759] text-white font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#06243C]"
      >
        <PhoneIcon size={14} color="#C0122A" />
        <span>CALL</span>
      </a>

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 bg-[#031B2D] border border-[#0F3759] text-[#25D366] font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#06243C]"
      >
        <WhatsappIcon size={14} color="#25D366" />
        <span>WHATSAPP</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex-[1.2] py-2.5 bg-[#C0122A] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-sm active:bg-[#9E0E22] shadow-lg shadow-red-950/50"
      >
        <span>ENQUIRE</span>
        <ArrowRightIcon size={12} />
      </button>
    </div>
  );
};
