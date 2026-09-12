import { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BoqForm } from './components/BoqForm';
import { CommitmentSection } from './components/CommitmentSection';
import { AboutSection } from './components/AboutSection';
import { ContactLocation } from './components/ContactLocation';
import { ProductsPage } from './components/ProductsPage';
import { ServicesPage } from './components/ServicesPage';
import { BlogResources } from './components/BlogResources';
import { ContactPage } from './components/ContactPage';
import { LegalPages } from './components/LegalPages';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ChatBotOverlay } from './components/ChatBotOverlay';
import { FloatingContactMenu } from './components/FloatingContactMenu';
import { Phone, FileText, Bot, ArrowRight, Wrench, Droplets, BookOpen, Tag, Zap, Truck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, STORE_SERVICES } from './data/products';
import { ActiveView } from './types';

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
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [itemsList, setItemsList] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [addedItems, setAddedItems] = useState<string[]>([]);

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

  // Sync view with URL hash for navigation & bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['products', 'services', 'about', 'blog', 'contact', 'privacy', 'terms'].includes(hash)) {
        setActiveView(hash as ActiveView);
      } else {
        setActiveView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: ActiveView) => {
    setActiveView(view);
    if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

    // If currently on Home, smooth scroll to BOQ form
    if (activeView === 'home') {
      const boqElement = document.getElementById('boq-section');
      if (boqElement) {
        boqElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToSection = (id: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Breadcrumb configurations for active view
  const getBreadcrumbs = () => {
    switch (activeView) {
      case 'products':
        return [{ label: lang === 'ne' ? 'उत्पादनहरू (Products)' : 'Products Catalog', active: true }];
      case 'services':
        return [{ label: lang === 'ne' ? 'सेवाहरू (Services)' : 'Services', active: true }];
      case 'about':
        return [{ label: lang === 'ne' ? 'हाम्रो बारेमा (About Us)' : 'About Us', active: true }];
      case 'blog':
        return [{ label: lang === 'ne' ? 'ज्ञान केन्द्र र ब्लग (Guides)' : 'Guides & Resources', active: true }];
      case 'contact':
        return [{ label: lang === 'ne' ? 'सम्पर्क र नक्सा (Contact)' : 'Contact & Location', active: true }];
      case 'privacy':
        return [{ label: lang === 'ne' ? 'गोपनीयता नीति (Privacy)' : 'Privacy Policy', active: true }];
      case 'terms':
        return [{ label: lang === 'ne' ? 'नियम तथा सर्तहरू (Terms)' : 'Terms of Service', active: true }];
      default:
        return [];
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} flex flex-col font-sans selection:bg-orange-500 selection:text-white pb-16 sm:pb-0 transition-colors duration-200`}>
      {/* Slim full-width scroll progress bar at top */}
      <ScrollProgressBar />

      {/* Header & Sticky Navigation */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBoq={() => scrollToSection('boq-section')}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Render Breadcrumbs when viewing secondary pages */}
        {activeView !== 'home' && (
          <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <Breadcrumbs
              items={getBreadcrumbs()}
              onNavigate={handleNavigate}
              lang={lang}
            />
          </div>
        )}

        {/* View 1: Home Page */}
        {activeView === 'home' && (
          <div>
            {/* Hero Section with Parallax Background */}
            <Hero
              onRequestQuote={() => scrollToSection('boq-section')}
              onViewProducts={() => handleNavigate('products')}
              onViewLocation={() => scrollToSection('contact-location')}
              onOpenChat={() => setIsChatOpen(true)}
              lang={lang}
            />

            {/* Quick Department Cards Strip */}
            <section className="py-10 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#f97316] uppercase tracking-wider block">
                      {lang === 'ne' ? 'हाम्रा मुख्य विभागहरू' : 'Core Departments'}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                      {lang === 'ne' ? 'तपाईंलाई के आवश्यक छ?' : 'What Are You Sourcing Today?'}
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('products')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] dark:text-orange-400 hover:underline cursor-pointer"
                  >
                    <span>{lang === 'ne' ? 'सबै सामग्रीहरू हेर्नुहोस्' : 'Explore Full Catalog'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {[
                    { titleEn: 'Hardware & Tools', titleNe: 'हार्डवेयर र औजार', icon: Wrench, count: 'Power & Hand' },
                    { titleEn: 'Plumbing & Sanitary', titleNe: 'प्लम्बिङ र सेनेटरी', icon: Droplets, count: 'CPVC & PPR' },
                    { titleEn: 'Stationery & Paper', titleNe: 'स्टेसनरी र A4 पेपर', icon: BookOpen, count: 'Copier & Books' },
                    { titleEn: 'Office & School', titleNe: 'अफिस र स्कुल', icon: Tag, count: 'Files & Supplies' },
                    { titleEn: 'Electrical & Paints', titleNe: 'विद्युत र पेन्ट्स', icon: Zap, count: 'Switches & Colors' },
                  ].map((dept, idx) => {
                    const Icon = dept.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleNavigate('products')}
                        className="bg-gray-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-200/80 dark:border-slate-800 text-left hover:border-[#1e3a8a] dark:hover:border-blue-500 hover:shadow-sm transition-all group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white line-clamp-1">
                          {lang === 'ne' ? dept.titleNe : dept.titleEn}
                        </h3>
                        <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5">
                          {dept.count}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Featured Products Catalog */}
            <FeaturedProducts
              onAddToBoq={handleAddToBoq}
              addedItems={addedItems}
              lang={lang}
            />

            {/* Quality Commitment Section */}
            <CommitmentSection lang={lang} />

            {/* Services Overview Strip */}
            <section className="py-16 bg-gray-50 dark:bg-slate-900/40 border-y border-gray-100 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-[11px] font-bold text-[#f97316] uppercase tracking-wider block mb-1">
                    {lang === 'ne' ? 'व्यावसायिक सुविधाहरू' : 'Wholesale & Institutional'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                    {lang === 'ne' ? 'हामी कसरी सहयोग गर्न सक्छौं?' : 'Tailored Services for Every Project'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {STORE_SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-[#1e3a8a] dark:text-blue-400 uppercase tracking-wider">
                          {srv.targetAudience}
                        </span>
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white mt-1 leading-snug">
                          {lang === 'ne' ? srv.titleNe : srv.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-slate-300 mt-2 line-clamp-3">
                          {lang === 'ne' ? srv.descriptionNe : srv.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate('services')}
                        className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 text-xs font-bold text-[#f97316] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{lang === 'ne' ? 'विस्तृत सेवा हेर्नुहोस्' : 'Learn More'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* BOQ / Bulk Quotation Request Form */}
            <BoqForm
              itemsList={itemsList}
              onItemsListChange={setItemsList}
              lang={lang}
            />

            {/* About Store Section */}
            <AboutSection
              lang={lang}
              onOpenBoq={() => scrollToSection('boq-section')}
            />

            {/* Frequently Asked Questions */}
            <FaqSection lang={lang} />

            {/* Contact & Google Maps Section */}
            <ContactLocation lang={lang} />
          </div>
        )}

        {/* View 2: Full Products Catalog */}
        {activeView === 'products' && (
          <ProductsPage
            lang={lang}
            onAddToBoq={handleAddToBoq}
            addedItems={addedItems}
            onNavigateToBoq={() => {
              setActiveView('home');
              window.location.hash = '';
              setTimeout(() => {
                const el = document.getElementById('boq-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          />
        )}

        {/* View 3: Services Page */}
        {activeView === 'services' && (
          <ServicesPage
            lang={lang}
            onNavigateToBoq={() => {
              setActiveView('home');
              window.location.hash = '';
              setTimeout(() => {
                const el = document.getElementById('boq-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {/* View 4: About Us Page */}
        {activeView === 'about' && (
          <div className="py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <AboutSection
                lang={lang}
                onOpenBoq={() => {
                  setActiveView('home');
                  window.location.hash = '';
                  setTimeout(() => {
                    const el = document.getElementById('boq-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              />
              <div className="mt-8">
                <CommitmentSection lang={lang} />
              </div>
              <div className="mt-12">
                <FaqSection lang={lang} categoryFilter="General" />
              </div>
            </div>
          </div>
        )}

        {/* View 5: Blog & DIY Guides */}
        {activeView === 'blog' && (
          <BlogResources
            lang={lang}
            onNavigateToBoq={() => {
              setActiveView('home');
              window.location.hash = '';
              setTimeout(() => {
                const el = document.getElementById('boq-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          />
        )}

        {/* View 6: Contact & Location */}
        {activeView === 'contact' && (
          <ContactPage lang={lang} />
        )}

        {/* View 7: Legal - Privacy Policy */}
        {activeView === 'privacy' && (
          <LegalPages
            type="privacy"
            lang={lang}
            onBack={() => handleNavigate('home')}
          />
        )}

        {/* View 8: Legal - Terms of Service */}
        {activeView === 'terms' && (
          <LegalPages
            type="terms"
            lang={lang}
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />

      {/* Floating Speed Dial Contact Menu */}
      <FloatingContactMenu
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBoq={() => {
          if (activeView !== 'home') {
            setActiveView('home');
            window.location.hash = '';
            setTimeout(() => {
              const el = document.getElementById('boq-section');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          } else {
            scrollToSection('boq-section');
          }
        }}
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
          onClick={() => {
            if (activeView !== 'home') {
              setActiveView('home');
              window.location.hash = '';
              setTimeout(() => {
                const el = document.getElementById('boq-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            } else {
              scrollToSection('boq-section');
            }
          }}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-[#1e3a8a] dark:text-orange-400 font-bold py-2.5 px-2 rounded-xl text-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{lang === 'ne' ? 'BOQ कोटेसन' : 'BOQ Quote'}</span>
        </button>
      </div>
    </div>
  );
}
