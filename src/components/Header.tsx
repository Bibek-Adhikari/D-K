import React, { useState, useEffect } from 'react';
import { Phone, Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  lang: 'en' | 'ne';
  onToggleLang: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenChat?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: string }[] = [
    { label: lang === 'ne' ? 'गृहपृष्ठ' : 'Home', id: 'home' },
    { label: lang === 'ne' ? 'उत्पादनहरू' : 'Products', id: 'products' },
    { label: lang === 'ne' ? 'सेवाहरू' : 'Services', id: 'services' },
    { label: lang === 'ne' ? 'हाम्रो बारेमा' : 'About', id: 'about' },
    { label: lang === 'ne' ? 'ज्ञान केन्द्र' : 'Guides', id: 'guides' },
    { label: lang === 'ne' ? 'सम्पर्क' : 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none cursor-pointer group"
          aria-label="Go to Home"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white font-black flex items-center justify-center text-sm shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            D&K
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-base sm:text-lg leading-tight transition-colors ${
              theme === 'light' ? 'text-gray-900 group-hover:text-[#1e3a8a]' : 'text-white group-hover:text-blue-400'
            }`}>
              {lang === 'ne' ? 'डी एण्ड के हार्डवेयर तथा स्टेसनरी' : 'D&K Hardware & Stationery'}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links & Controls */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex gap-6 font-semibold text-xs sm:text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`transition-colors cursor-pointer select-none py-1 ${
                    isActive
                      ? 'text-[#f97316] font-bold'
                      : theme === 'light'
                      ? 'text-gray-700 hover:text-[#f97316]'
                      : 'text-slate-200 hover:text-[#f97316]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              aria-label="Toggle Language"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all font-bold text-xs cursor-pointer ${
                theme === 'light'
                  ? 'border-gray-300 text-gray-800 bg-white hover:bg-gray-100'
                  : 'border-slate-700 text-slate-200 bg-slate-900 hover:bg-slate-800'
              }`}
            >
              <Globe size={14} className="text-[#f97316]" />
              <span>{lang === 'ne' ? 'English' : 'नेपाली'}</span>
            </button>

            {/* Dark/Light Theme Switcher */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                theme === 'light'
                  ? 'border-gray-300 text-gray-800 bg-white hover:bg-gray-100'
                  : 'border-slate-700 text-slate-200 bg-slate-900 hover:bg-slate-800'
              }`}
            >
              {theme === 'light' ? <Moon size={15} className="text-gray-700" /> : <Sun size={15} className="text-amber-400" />}
            </button>

            {/* Call Store CTA Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-orange-500/20 active:scale-95"
            >
              <Phone size={13} className="fill-current" />
              <span>01-5925757</span>
            </a>
          </div>
        </div>

        {/* Mobile / Tablet top-bar controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className={`p-2 rounded-full border transition-colors cursor-pointer ${
              theme === 'light'
                ? 'border-gray-300 text-gray-800 bg-white'
                : 'border-slate-700 text-slate-200 bg-slate-900'
            }`}
          >
            {theme === 'light' ? <Moon size={15} className="text-gray-700" /> : <Sun size={15} className="text-amber-400" />}
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
            <Globe size={13} className="text-[#f97316]" />
            <span className="hidden md:inline whitespace-nowrap">{lang === 'ne' ? 'English' : 'नेपाली'}</span>
            <span className="md:hidden whitespace-nowrap">{lang === 'ne' ? 'EN' : 'ने'}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-xl transition-colors ${
              theme === 'light' ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-slate-800'
            }`}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className={`border-t p-5 lg:hidden shadow-2xl transition-colors ${
          theme === 'light' ? 'bg-white border-gray-200 text-gray-900' : 'bg-slate-900 border-slate-800 text-white'
        }`}>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left text-sm font-semibold p-2.5 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#f97316] font-bold'
                      : theme === 'light'
                      ? 'text-gray-800 hover:bg-gray-50'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#f97316]" />}
                </button>
              );
            })}

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-3 rounded-xl font-bold flex justify-center items-center gap-2 mt-3 shadow-md text-xs"
            >
              <Phone size={16} />
              <span>{lang === 'ne' ? 'व्हाट्सएप: ९८५१०५६५२२' : 'WhatsApp: 9851056522'}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
