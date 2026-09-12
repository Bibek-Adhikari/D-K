import React, { useState, useEffect } from 'react';
import { Phone, Globe, Sun, Moon, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { translations } from '../constants/translations';

interface HeaderProps {
  onNavigateToBoq?: () => void;
  onNavigateToProducts: () => void;
  onNavigateToCommitment: () => void;
  onNavigateToLocation?: () => void;
  onNavigateToAbout: () => void;
  onOpenChat?: () => void;
  lang: 'en' | 'ne';
  onToggleLang: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateToBoq,
  onNavigateToProducts,
  onNavigateToCommitment,
  onNavigateToLocation,
  onNavigateToAbout,
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: lang === 'ne' ? 'होम' : 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: t.nav.products, action: onNavigateToProducts },
    { label: lang === 'ne' ? 'प्रतिबद्धता' : 'Commitment', action: onNavigateToCommitment },
    { label: lang === 'ne' ? 'हाम्रो बारेमा' : 'About', action: onNavigateToAbout },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'light'
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-100'
            : 'bg-slate-900/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-800'
          : theme === 'light'
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-xs'
          : 'bg-slate-950/80 backdrop-blur-md py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left focus:outline-none cursor-pointer group"
          aria-label="Go to top"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white font-black flex items-center justify-center text-sm shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            D&K
          </div>
          <div className="flex flex-col">
            <h1 className={`font-bold text-base sm:text-lg leading-tight transition-colors ${
              theme === 'light' ? 'text-gray-900 group-hover:text-[#1e3a8a]' : 'text-white group-hover:text-blue-400'
            }`}>
              {t.brandName}
            </h1>
            <p className={`text-[10px] uppercase tracking-widest font-bold mt-0.5 flex items-center gap-1 ${
              theme === 'light' ? 'text-gray-500' : 'text-slate-400'
            }`}>
              <ShieldCheck className="w-3 h-3 text-[#f97316]" />
              <span>{lang === 'ne' ? 'कैलाश चोक, मध्यपुर थिमी' : 'Kailash Chowk, Thimi'}</span>
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links & Controls */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-5 font-semibold text-sm">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className={`transition-all hover:scale-105 cursor-pointer select-none ${
                  theme === 'light'
                    ? 'text-gray-700 hover:text-[#f97316]'
                    : 'text-slate-200 hover:text-[#f97316]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              aria-label="Toggle Language"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all font-bold text-xs cursor-pointer ${
                theme === 'light'
                  ? 'border-gray-300 text-gray-800 bg-white/70 hover:bg-gray-100'
                  : 'border-slate-700 text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Globe size={14} className="text-[#f97316]" />
              <span>{lang === 'ne' ? 'English' : 'नेपाली'}</span>
            </button>

            {/* Dark/Light Theme Switcher */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                theme === 'light'
                  ? 'border-gray-300 text-gray-800 bg-white/70 hover:bg-gray-100'
                  : 'border-slate-700 text-slate-200 hover:bg-slate-800'
              }`}
            >
              {theme === 'light' ? <Moon size={16} className="text-gray-700" /> : <Sun size={16} className="text-amber-400" />}
            </button>

            {/* Call Store CTA Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 text-white px-5 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20 active:scale-95"
            >
              <Phone size={14} className="fill-current" />
              <span>01-5925757</span>
            </a>
          </div>
        </div>

        {/* Mobile top-bar controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-colors ${
              theme === 'light'
                ? 'border-gray-300 text-gray-800 bg-white'
                : 'border-slate-700 text-slate-200 bg-slate-900'
            }`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={onToggleLang}
            aria-label="Toggle Language"
            className={`px-2.5 py-1.5 rounded-full border text-xs font-bold transition-colors flex items-center gap-1 ${
              theme === 'light'
                ? 'border-gray-300 text-gray-800 bg-white'
                : 'border-slate-700 text-slate-200 bg-slate-900'
            }`}
          >
            <Globe size={14} className="text-[#f97316]" />
            <span>{lang === 'ne' ? 'EN' : 'ने'}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-lg transition-colors ${
              theme === 'light' ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-slate-800'
            }`}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className={`border-t p-5 md:hidden shadow-2xl transition-colors ${
          theme === 'light' ? 'bg-white border-gray-200 text-gray-900' : 'bg-slate-900 border-slate-800 text-white'
        }`}>
          <nav className="flex flex-col gap-3">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
                className={`text-left text-base font-semibold py-2 border-b transition-colors ${
                  theme === 'light'
                    ? 'border-gray-100 text-gray-800 hover:text-[#f97316]'
                    : 'border-slate-800 text-slate-200 hover:text-[#f97316]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-[#f97316] text-white p-3.5 rounded-xl font-bold flex justify-center items-center gap-2 mt-2 shadow-md"
            >
              <Phone size={18} />
              <span>{lang === 'ne' ? 'कल गर्नुहोस्: ०१-५९२५७५७' : 'Call Store: 01-5925757'}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
