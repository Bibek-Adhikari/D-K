import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BoqForm } from './components/BoqForm';
import { CommitmentSection } from './components/CommitmentSection';
import { AboutSection } from './components/AboutSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { ChatBotOverlay } from './components/ChatBotOverlay';
import { FloatingContactMenu } from './components/FloatingContactMenu';
import { Phone, FileText, Bot } from 'lucide-react';
import { BUSINESS_INFO } from './data/products';
import { translations } from './constants/translations';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ne'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [itemsList, setItemsList] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [addedItems, setAddedItems] = useState<string[]>([]);

  // Sync dark mode class on document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ne' : 'en'));
  };

  const handleAddToBoq = (productName: string) => {
    setAddedItems((prev) => (prev.includes(productName) ? prev : [...prev, productName]));
    setItemsList((prev) => {
      const newLine = `• 1x ${productName}`;
      if (!prev.trim()) return newLine;
      return `${prev}\n${newLine}`;
    });

    // Smooth scroll to BOQ form
    const boqElement = document.getElementById('boq-section');
    if (boqElement) {
      boqElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} flex flex-col font-sans selection:bg-orange-500 selection:text-white pb-16 sm:pb-0 transition-colors duration-200`}>
      {/* Header & Sticky Navigation */}
      <Header
        onNavigateToBoq={() => scrollToSection('boq-section')}
        onNavigateToProducts={() => scrollToSection('featured-products')}
        onNavigateToCommitment={() => scrollToSection('commitment-section')}
        onNavigateToLocation={() => scrollToSection('contact-location')}
        onNavigateToAbout={() => scrollToSection('about-section')}
        onOpenChat={() => setIsChatOpen(true)}
        lang={lang}
        onToggleLang={handleToggleLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Clean, High-Impact Hero with Solid Accents (No Text Gradients) */}
        <Hero
          onRequestQuote={() => scrollToSection('boq-section')}
          onViewProducts={() => scrollToSection('featured-products')}
          onViewLocation={() => scrollToSection('contact-location')}
          onOpenChat={() => setIsChatOpen(true)}
          lang={lang}
        />

        {/* Featured Products Catalog (Binayak Suppliers 4-Column Card Grid) */}
        <FeaturedProducts
          onAddToBoq={handleAddToBoq}
          addedItems={addedItems}
          lang={lang}
        />

        {/* Commitment to Quality (Clean, High-Contrast Statement) */}
        <CommitmentSection lang={lang} />

        {/* BOQ / Bulk Quotation Request Form */}
        <BoqForm
          itemsList={itemsList}
          onItemsListChange={setItemsList}
          lang={lang}
        />

        {/* About Store Section (Authentic Story & Trust Checkmarks) */}
        <AboutSection
          lang={lang}
          onOpenBoq={() => scrollToSection('boq-section')}
        />

        {/* Contact & Google Maps Section (Unified Card Layout) */}
        <ContactLocation lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Speed Dial Contact Menu */}
      <FloatingContactMenu
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBoq={() => scrollToSection('boq-section')}
        lang={lang}
      />

      {/* AI Assistant Dialog Overlay */}
      <ChatBotOverlay
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        lang={lang}
      />

      {/* Mobile Bottom Sticky Action Bar */}
      <div 
        id="mobile-bottom-action-bar" 
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-800 p-2.5 px-3 flex items-center gap-2 shadow-2xl"
      >
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs shadow-md"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>{lang === 'ne' ? '०१-५९२५७५७' : 'Call Store'}</span>
        </a>

        <button
          onClick={() => setIsChatOpen(true)}
          className="inline-flex items-center justify-center gap-1 bg-[#1e3a8a] dark:bg-blue-600 text-white font-bold py-2.5 px-3 rounded-xl text-xs"
          title="AI Assistant"
        >
          <Bot className="w-4 h-4" />
          <span>{lang === 'ne' ? 'एआई' : 'AI'}</span>
        </button>

        <button
          onClick={() => scrollToSection('boq-section')}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-[#1e3a8a] dark:text-orange-400 font-bold py-2.5 px-2 rounded-xl text-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{lang === 'ne' ? 'BOQ कोटेसन' : 'BOQ Quote'}</span>
        </button>
      </div>
    </div>
  );
}

