import { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommitmentSection } from './components/CommitmentSection';
import { AboutSection } from './components/AboutSection';
import { ProductsPage } from './components/ProductsPage';
import { ServicesPage } from './components/ServicesPage';
import { BlogResources } from './components/BlogResources';
import { ContactPage } from './components/ContactPage';
import { LegalPages } from './components/LegalPages';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ChatBotOverlay } from './components/ChatBotOverlay';
import { FloatingContactMenu } from './components/FloatingContactMenu';

const SECTION_IDS = ['home', 'products', 'services', 'about', 'guides', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export default function App() {
  const [lang, setLang] = useState<'en' | 'ne'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') {
          return saved;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
      } catch {
        // Fallback to light
      }
    }
    return 'light';
  });
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [legalView, setLegalView] = useState<'privacy' | 'terms' | null>(null);

  // Sync dark mode class on document element and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable
    }
  }, [theme]);

  // Scroll-spy: every stacked block declares which nav item it belongs to
  // via data-spy, so the highlight tracks scrolling in both directions with
  // no dead gaps between sections. No URL hashes — pure smooth scrolling.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const mid = window.scrollY + window.innerHeight * 0.4;
      let current: SectionId = 'home';
      document.querySelectorAll('[data-spy]').forEach((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= mid) {
          current = (el as HTMLElement).dataset.spy as SectionId;
        }
      });
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ne' : 'en'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
  };

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalView(type);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} flex flex-col font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200`}>
      {/* Slim full-width scroll progress bar at top */}
      <ScrollProgressBar />

      {/* Header & Sticky Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        lang={lang}
        onToggleLang={handleToggleLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Single-page content: every section stacked, free up/down scrolling */}
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero */}
        <div data-spy="home">
          <Hero
            onViewProducts={() => scrollToSection('products')}
            onViewLocation={() => scrollToSection('contact')}
            onOpenChat={() => setIsChatOpen(true)}
            lang={lang}
          />
        </div>

        {/* Quality Commitment Section */}
        <div data-spy="home">
          <CommitmentSection lang={lang} />
        </div>

        {/* Full Products Catalog */}
        <div id="products" data-spy="products" className="scroll-mt-16 sm:scroll-mt-20">
          <ProductsPage lang={lang} />
        </div>

        {/* Services */}
        <div id="services" data-spy="services" className="scroll-mt-16 sm:scroll-mt-20">
          <ServicesPage
            lang={lang}
            onNavigateToContact={() => scrollToSection('contact')}
          />
        </div>

        {/* About Store Section */}
        <div id="about" data-spy="about" className="scroll-mt-16 sm:scroll-mt-20">
          <AboutSection lang={lang} />
        </div>

        {/* Blog & DIY Guides */}
        <div id="guides" data-spy="guides" className="scroll-mt-16 sm:scroll-mt-20">
          <BlogResources lang={lang} />
        </div>

        {/* Contact & Location */}
        <div id="contact" data-spy="contact" className="scroll-mt-16 sm:scroll-mt-20">
          <ContactPage lang={lang} />
        </div>

        {/* Frequently Asked Questions */}
        <div data-spy="contact">
          <FaqSection lang={lang} />
        </div>
      </main>

      {/* Global Footer */}
      <div data-spy="contact">
        <Footer
          lang={lang}
          onNavigateSection={scrollToSection}
          onOpenLegal={openLegal}
        />
      </div>

      {/* Legal pages render as an overlay on the single page */}
      {legalView && (
        <div className="fixed inset-0 z-[70] overflow-y-auto bg-gray-50 dark:bg-slate-950 pt-16 sm:pt-20">
          <LegalPages
            type={legalView}
            lang={lang}
            onBack={() => setLegalView(null)}
          />
        </div>
      )}

      {/* Floating Speed Dial Contact Menu */}
      <FloatingContactMenu
        onOpenChat={() => setIsChatOpen(true)}
        lang={lang}
      />

      {/* AI Assistant Dialog Overlay */}
      <ChatBotOverlay
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        lang={lang}
      />

    </div>
  );
}
