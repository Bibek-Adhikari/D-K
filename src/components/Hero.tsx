import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MapPin, Maximize2, X, CheckCircle2, Store } from 'lucide-react';
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
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Track scroll position across the hero viewport range
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax translation: image translates down relative to section as user scrolls down
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '22%']
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-start md:items-center pt-28 md:pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle Parallax Background Image Container featuring Showroom Aisle (First Image) */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[10%] left-0 right-0 w-full h-[120%] z-0 pointer-events-none will-change-transform"
      >
        <img
          src="/assets/showroom_aisle.jpg"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/01image.webp';
          }}
          alt="D&K Hardware and Sanitary Showroom Aisle Kailash Chowk Madhyapur Thimi"
          className="object-cover w-full h-full select-none"
          referrerPolicy="no-referrer"
        />
        {/* Balanced contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#0b1329]/90 to-slate-950/75 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950/80" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Tagline, CTAs & Stats */}
          <div className="lg:col-span-7">
            {/* Foreground content */}
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

          {/* Right Column: Hero Showroom Showcase Card (First Image) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative group">
              {/* Decorative subtle ambient glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              <div className="relative bg-white/10 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-white/20 dark:border-slate-800 text-white shadow-2xl overflow-hidden">
                {/* Header Strip inside Card */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="font-bold tracking-wide uppercase text-[11px] text-emerald-300">
                      {lang === 'ne' ? 'कैलाश चोक शोरुम' : 'Kailash Chowk Flagship'}
                    </span>
                  </div>
                  <span className="text-[11px] text-white/70 font-medium">
                    Madhyapur Thimi
                  </span>
                </div>

                {/* Main Image Container */}
                <div 
                  className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 cursor-pointer group/img"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Click to view full showroom photo"
                >
                  <img
                    src="/assets/showroom_aisle.jpg"
                    alt="D&K Hardware and Sanitary Showroom Display Aisle"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  
                  {/* Floating click to expand button */}
                  <div className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 backdrop-blur-xs text-white p-2 rounded-xl transition-all shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="bg-[#f97316] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider inline-block mb-1 shadow-xs">
                      {lang === 'ne' ? 'प्यारीवेयर सेनेटरी शोरुम' : 'Parryware Sanitary Aisle'}
                    </span>
                    <p className="text-xs font-bold text-white leading-snug drop-shadow-xs">
                      {lang === 'ne' ? 'कमोड, वाशबेसिन तथा शावर प्रणालीको प्रत्यक्ष प्रदर्शनी' : 'Commodes, washbasins & live shower display'}
                    </p>
                  </div>
                </div>

                {/* Footer Details */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-white/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{lang === 'ne' ? 'तयारी स्टक तथा तत्काल डेलिभरी' : 'Ready Stock • Immediate Dispatch'}</span>
                  </div>

                  {onViewLocation && (
                    <button
                      onClick={onViewLocation}
                      className="inline-flex items-center gap-1 text-[#f97316] hover:text-orange-400 font-bold transition-colors cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{lang === 'ne' ? 'नक्सा हेर्नुहोस्' : 'Visit Us'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal for First Image */}
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
                src="/assets/showroom_aisle.jpg"
                alt="D&K Hardware and Sanitary Showroom Aisle"
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider">
                  {lang === 'ne' ? 'शोरुम प्रत्यक्ष दृश्य' : 'Live Showroom View'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                  {lang === 'ne' 
                    ? 'डी एण्ड के हार्डवेयर: सेनेटरीवेयर तथा शावर प्रदर्शनी' 
                    : 'D&K Hardware: Sanitaryware & Shower Display Aisle'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Kailash Chowk, Madhyapur Thimi • Authorized Dealer for Parryware & Eauset
                </p>
              </div>

              {onViewLocation && (
                <button
                  onClick={() => {
                    setIsLightboxOpen(false);
                    onViewLocation();
                  }}
                  className="bg-[#f97316] hover:bg-orange-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all flex-shrink-0 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{lang === 'ne' ? 'शोरुममा आउनुहोस्' : 'Visit Our Showroom'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
