import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';
import { translations } from '../constants/translations';
import { BUSINESS_INFO } from '../data/products';

interface AboutSectionProps {
  lang: 'en' | 'ne';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="about-section" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Authentic Showroom Display Image (Second Image) with Organic Rounded Border & Trust Badge */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 overflow-hidden shadow-2xl aspect-4/3 rounded-[2.5rem] bg-gray-100 dark:bg-slate-800 border border-gray-100 dark:border-slate-800">
              <img
                src="/assets/eauset_display.jpg"
                alt="D&K Hardware Eauset Bath Fittings and Luxury Vanity Display Wall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Corner Floating Trust Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-slate-800 hidden sm:block z-20">
              <div className="text-3xl sm:text-4xl font-black text-[#1e3a8a] dark:text-blue-400 leading-none mb-1">
                100%
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest">
                {t.genuineOnly}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Story & Value Pillars */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#f97316] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              {lang === 'ne' ? 'हाम्रो कथा' : 'OUR STORY'}
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
    </section>
  );
};
