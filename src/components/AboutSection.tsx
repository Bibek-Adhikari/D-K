import React, { useState } from 'react';
import { ShieldCheck, Phone, ArrowRight, Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { translations } from '../constants/translations';
import { BUSINESS_INFO } from '../data/products';

interface AboutSectionProps {
  lang: 'en' | 'ne';
  onOpenBoq: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenBoq }) => {
  const t = translations[lang];
  const [activePhoto, setActivePhoto] = useState<'eauset' | 'aisle'>('eauset');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentPhotoSrc = activePhoto === 'eauset' ? '/assets/eauset_display.jpg' : '/assets/showroom_aisle.jpg';
  const currentPhotoAlt = activePhoto === 'eauset'
    ? 'D&K Hardware Eauset Bath Fittings and Luxury Vanity Display Wall'
    : 'D&K Hardware Parryware Sanitaryware and Showroom Aisle';

  return (
    <section id="about-section" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Authentic Showroom Display (Second Image) with Dual Photo Switcher */}
          <div className="w-full lg:w-1/2 relative group">
            
            {/* Gallery Tabs for Both Showroom Views */}
            <div className="flex items-center gap-2 mb-3 bg-gray-100 dark:bg-slate-900 p-1.5 rounded-2xl w-fit border border-gray-200 dark:border-slate-800 text-xs font-bold">
              <button
                onClick={() => setActivePhoto('eauset')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  activePhoto === 'eauset'
                    ? 'bg-[#1e3a8a] text-white shadow-xs'
                    : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>{lang === 'ne' ? 'ईउसेट बाथ फिटिङ' : 'Eauset Bath Fittings'}</span>
              </button>

              <button
                onClick={() => setActivePhoto('aisle')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  activePhoto === 'aisle'
                    ? 'bg-[#1e3a8a] text-white shadow-xs'
                    : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span>{lang === 'ne' ? 'सेनेटरीवेयर आइल' : 'Sanitaryware Aisle'}</span>
              </button>
            </div>

            <div 
              className="relative z-10 overflow-hidden shadow-2xl aspect-4/3 rounded-[2.5rem] bg-gray-100 dark:bg-slate-800 border border-gray-200/80 dark:border-slate-800 cursor-pointer group/img"
              onClick={() => setIsLightboxOpen(true)}
              title="Click to view full photo"
            >
              <img
                src={currentPhotoSrc}
                alt={currentPhotoAlt}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

              {/* Expand button */}
              <div className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 backdrop-blur-xs text-white p-2.5 rounded-xl transition-all shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Tagline on Image */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="bg-[#f97316] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1.5 shadow-sm">
                  {activePhoto === 'eauset' 
                    ? (lang === 'ne' ? 'ईउसेट आधिकारिक डिस्प्ले' : 'Eauset Aqua Rejuvenation Display')
                    : (lang === 'ne' ? 'प्यारीवेयर सेनेटरी शोरुम' : 'Parryware Sanitaryware Display')}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug drop-shadow-xs">
                  {activePhoto === 'eauset'
                    ? (lang === 'ne' 
                        ? 'शावर प्यानल, बेसिन मिक्सर तथा आधुनिक भ्यानिटी क्याबिनेटहरू' 
                        : 'Luxury shower systems, mixer faucets & vanity cabinets on live display')
                    : (lang === 'ne'
                        ? 'कमोड, वाशबेसिन तथा बाथरुम एसेसोरिजहरूको प्रत्यक्ष प्रदर्शनी'
                        : 'Water closets, commodes & modern bath accessories ready in stock')}
                </p>
              </div>
            </div>

            {/* Corner Floating Trust Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-slate-800 hidden sm:block z-20">
              <div className="text-2xl sm:text-3xl font-black text-[#1e3a8a] dark:text-blue-400 leading-none mb-1">
                100%
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest">
                {lang === 'ne' ? 'सक्कली सामग्री' : 'GENUINE PRODUCTS'}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Story & Value Pillars */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#f97316] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              {lang === 'ne' ? 'हाम्रो कथा र शोरुम' : 'OUR STORY & SHOWROOM'}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 mb-6 leading-[1.15] tracking-tight">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.about.desc}
            </p>

            {/* 4 Feature Checkmark Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.about.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-bold text-gray-800 dark:text-slate-200 text-xs sm:text-sm leading-tight">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBoq}
                className="bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-orange-500/20 text-sm sm:text-base flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{lang === 'ne' ? 'BOQ कोटेसन माग्नुहोस्' : 'Request Contractor BOQ'}</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-gray-800 dark:text-slate-200 hover:text-[#f97316] font-bold text-sm sm:text-base py-3.5 px-4 transition-colors"
              >
                <Phone size={18} className="text-[#f97316] fill-current" />
                <span>01-5925757</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Second Image */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={currentPhotoSrc}
                alt={currentPhotoAlt}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider">
                  {activePhoto === 'eauset' ? 'Eauset Luxury Fixtures' : 'Parryware Sanitary Aisle'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                  {activePhoto === 'eauset'
                    ? (lang === 'ne' ? 'ईउसेट एक्वा रेजुभेनेसन बाथ फिटिङ तथा भ्यानिटी डिस्प्ले' : 'Eauset Aqua Rejuvenation Bath Display Wall')
                    : (lang === 'ne' ? 'प्यारीवेयर सेनेटरीवेयर तथा कमोड डिस्प्ले' : 'Parryware Commodes & Shower Display Aisle')}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Kailash Chowk, Madhyapur Thimi • D&K Hardware and Sanitary Store
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActivePhoto(activePhoto === 'eauset' ? 'aisle' : 'eauset')}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2 px-3.5 rounded-xl transition-all"
                >
                  {activePhoto === 'eauset' ? 'Switch to Aisle View →' : 'Switch to Eauset View →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
