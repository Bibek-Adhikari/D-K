import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { translations } from '../constants/translations';

interface FooterProps {
  lang: 'en' | 'ne';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0b1329] text-gray-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white font-black flex items-center justify-center text-sm shadow">
                D&K
              </div>
              <span className="font-bold text-white text-base sm:text-lg tracking-tight">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#f97316] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'ne' ? 'प्रमाणित गुणस्तर • उचित मूल्य' : 'Certified Quality • Direct Wholesale'}</span>
            </div>
          </div>

          {/* Detailed Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {t.footer.detailedLocation}
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-white font-medium">Kailash Chowk, Madhyapur Thimi</div>
                <div>Bagmati Province, Postal Code: 88400</div>
                <div>Nepal</div>
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f97316] hover:underline inline-block pt-1 text-[11px]"
                >
                  {lang === 'ne' ? 'Google Maps मा खोल्नुहोस् →' : 'View on Google Maps →'}
                </a>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400">{lang === 'ne' ? 'सोमबार – शुक्रबार' : 'Monday – Friday'}</div>
                  <div className="text-white font-medium">7:30 AM – 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400">{lang === 'ne' ? 'शनिबार – आइतबार' : 'Saturday – Sunday'}</div>
                  <div className="text-[#f97316] font-semibold">7:00 AM – 6:00 PM (Open 7 Days)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact Line */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {t.footer.customerLine}
            </h4>
            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                id="footer-phone-cta"
                className="flex items-center gap-2 text-white hover:text-[#f97316] text-xl font-mono font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f97316] fill-current" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.footer.deliveryScope}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear} {t.brandName}. {t.footer.copyright}
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#f97316] transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
