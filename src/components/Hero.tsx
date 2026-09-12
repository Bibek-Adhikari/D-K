import React from 'react';
import { translations } from '../constants/translations';
import HeroStats from './HeroStats';

interface HeroProps {
  lang?: 'en' | 'ne';
  onRequestQuote?: () => void;
  onViewProducts?: () => void;
  onViewLocation?: () => void;
  onOpenChat?: () => void;
}

// Static Hero content - clean high-contrast typography
const HeroContent: React.FC<{
  lang: 'en' | 'ne';
  onViewProducts?: () => void;
  onViewLocation?: () => void;
}> = ({ lang, onViewProducts, onViewLocation }) => {
  const t = translations[lang];

  return (
    <>
      <span className="inline-block bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide shadow-lg shadow-orange-500/20">
        {t.estd}
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
        {t.tagline.split(', ').map((part, i) => (
          <React.Fragment key={i}>
            {i === 1 ? <span className="text-brand-orange">{part}</span> : part}
            {i === 0 && <br className="hidden md:block" />}
          </React.Fragment>
        ))}
      </h1>
      <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl font-medium">
        {t.heroDesc}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onViewProducts}
          className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 active:scale-95 cursor-pointer"
          aria-label="View our products and services"
        >
          {t.ourProducts}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        <button
          onClick={onViewLocation}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          aria-label="Contact Store"
        >
          {t.nav.contact}
        </button>
      </div>
    </>
  );
};

export const Hero: React.FC<HeroProps> = ({
  lang = 'en',
  onViewProducts,
  onViewLocation,
}) => {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-start md:items-center pt-28 md:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/01image.webp"
          onError={(e) => {
            // High-resolution authentic hardware and plumbing store warehouse
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1920&q=80';
          }}
          alt="D&k Hardware Store Kailash Chowk Madhyapur Thimi Nepal"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40 dark:from-slate-950/90 dark:to-slate-950/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Static content for SEO and instant render */}
          <div className="motion-div" style={{ opacity: 1, transform: 'translateY(0)' }}>
            <HeroContent
              lang={lang}
              onViewProducts={onViewProducts}
              onViewLocation={onViewLocation}
            />
          </div>

          {/* Stats Bar */}
          <React.Suspense
            fallback={
              <div className="grid grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16">
                {[
                  { label: t.yearsTrust, value: '10+' },
                  { label: t.happyClients, value: '5000+' },
                  { label: t.qualityCheck, value: '100%' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 md:p-4 rounded-2xl text-white"
                  >
                    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold opacity-80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            }
          >
            <HeroStats lang={lang} />
          </React.Suspense>
        </div>
      </div>
    </section>
  );
};
