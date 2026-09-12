import React from 'react';
import { ArrowRight, Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { translations } from '../constants/translations';

interface HeroProps {
  onRequestQuote: () => void;
  onViewProducts: () => void;
  onViewLocation: () => void;
  onOpenChat: () => void;
  lang: 'en' | 'ne';
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onViewProducts,
  onViewLocation,
  lang,
}) => {
  const t = translations[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Blue / Slate Overlay */}
      <img
        src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1920&q=80"
        alt="D&K Hardware Store Warehouse"
        className="object-cover w-full h-full absolute inset-0 -z-20"
      />
      
      {/* Deep brand gradient overlay (no text gradient, just rich background contrast) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e3a8a]/85 to-slate-950/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/90 -z-10" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          
          {/* Established Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f97316] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 tracking-wide shadow-lg shadow-orange-500/25">
            <MapPin size={14} />
            <span>
              {lang === 'ne'
                ? 'कैलाश चोक, मध्यपुर थिमी • आधिकारिक हार्डवेयर डिलर'
                : 'KAILASH CHOWK, MADHYAPUR THIMI • AUTHENTIC HARDWARE'}
            </span>
          </div>

          {/* Main Title - ZERO text gradients, bold, clean, pure typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.12] tracking-tight">
            D&k Hardware & Sanitary <span className="text-[#f97316]">pvt ltd</span>
          </h1>

          {/* Clean Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl font-normal">
            {lang === 'ne'
              ? 'सीपीभीसी र पीपीआर प्लम्बिङ पाइप, आधुनिक सेनेटरीवेयर, पावर टुल्स र सम्पूर्ण निर्माण सामग्रीको आधिकारिक थोक तथा खुद्रा बिक्रेता।'
              : 'Your premier destination for certified CPVC/PPR plumbing pipes, luxury sanitaryware, high-performance power tools, and building materials at genuine wholesale pricing.'}
          </p>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f97316]" />
              <span>{lang === 'ne' ? '१००% प्रमाणित ब्रान्डहरू' : '100% Certified Brands'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f97316]" />
              <span>{lang === 'ne' ? 'थोक तथा खुद्रा दर' : 'Contractor Wholesale Rates'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f97316]" />
              <span>{lang === 'ne' ? 'हप्ताको ७ दिन खुला' : 'Open 7 Days a Week'}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary Orange Button */}
            <button
              onClick={onRequestQuote}
              className="bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 active:scale-95 cursor-pointer"
            >
              <span>{t.hero.quoteBtn}</span>
              <ArrowRight size={20} />
            </button>

            {/* Secondary Products Button */}
            <button
              onClick={onViewProducts}
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <span>{lang === 'ne' ? 'सामग्रीहरू हेर्नुहोस्' : 'Explore Products'}</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Phone size={18} className="text-[#f97316] fill-current" />
              <span>01-5925757</span>
            </a>
          </div>

          {/* 3 Bottom Stat Badges matching Binayak Suppliers */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-3.5 sm:p-4 rounded-2xl text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">100%</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold opacity-80">
                {lang === 'ne' ? 'प्रमाणित गुणस्तर' : 'Certified Quality'}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-3.5 sm:p-4 rounded-2xl text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">7 Days</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold opacity-80">
                {lang === 'ne' ? 'हप्ताको ७ दिन खुला' : 'Open Weekly'}
              </div>
            </div>

            <div 
              onClick={onViewLocation}
              className="bg-white/10 backdrop-blur-sm border border-white/15 p-3.5 sm:p-4 rounded-2xl text-white cursor-pointer hover:bg-white/15 transition-colors"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f97316] mb-0.5">Thimi</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold opacity-80">
                {lang === 'ne' ? 'कैलाश चोक, थिमी' : 'Kailash Chowk'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
