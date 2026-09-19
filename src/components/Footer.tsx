import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  Mail, 
  MessageCircle, 
  FileText, 
  Bot,
  QrCode,
  Building2,
  Smartphone,
  Check,
  Copy,
  X,
  CreditCard
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface FooterProps {
  lang: 'en' | 'ne';
  onNavigateSection?: (sectionId: string) => void;
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigateSection, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [activeQrTab, setActiveQrTab] = useState<'fonepay' | 'esewa' | 'khalti' | 'bank'>('fonepay');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (sectionId: string) => {
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    }
  };

  const renderQrSvg = (type: 'fonepay' | 'esewa' | 'khalti') => {
    const primaryColor = type === 'fonepay' ? '#dc2626' : type === 'esewa' ? '#16a34a' : '#7c3aed';
    return (
      <svg 
        viewBox="0 0 200 200" 
        width="200" 
        height="200" 
        className="w-full max-w-[200px] aspect-square mx-auto drop-shadow-xs"
        aria-label={`${type.toUpperCase()} QR Code`}
      >
        <rect width="200" height="200" fill="#ffffff" rx="10" />
        <rect x="16" y="16" width="48" height="48" fill="#1e293b" rx="6" />
        <rect x="24" y="24" width="32" height="32" fill="#ffffff" rx="3" />
        <rect x="32" y="32" width="16" height="16" fill={primaryColor} rx="2" />
        <rect x="136" y="16" width="48" height="48" fill="#1e293b" rx="6" />
        <rect x="144" y="24" width="32" height="32" fill="#ffffff" rx="3" />
        <rect x="152" y="32" width="16" height="16" fill={primaryColor} rx="2" />
        <rect x="16" y="136" width="48" height="48" fill="#1e293b" rx="6" />
        <rect x="24" y="144" width="32" height="32" fill="#ffffff" rx="3" />
        <rect x="32" y="152" width="16" height="16" fill={primaryColor} rx="2" />
        <g fill="#1e293b">
          <rect x="72" y="16" width="10" height="10" rx="1" />
          <rect x="88" y="16" width="10" height="10" rx="1" />
          <rect x="104" y="22" width="8" height="8" rx="1" />
          <rect x="118" y="16" width="10" height="10" rx="1" />
          <rect x="72" y="46" width="12" height="8" rx="1" />
          <rect x="92" y="46" width="8" height="12" rx="1" />
          <rect x="108" y="46" width="14" height="8" rx="1" />
          <rect x="16" y="72" width="10" height="10" rx="1" />
          <rect x="16" y="88" width="10" height="10" rx="1" />
          <rect x="16" y="108" width="10" height="10" rx="1" />
          <rect x="46" y="72" width="14" height="8" rx="1" />
          <rect x="70" y="70" width="12" height="12" rx="1" fill={primaryColor} />
          <rect x="90" y="70" width="10" height="10" rx="1" />
          <rect x="108" y="70" width="12" height="10" rx="1" />
          <rect x="128" y="70" width="10" height="12" rx="1" />
          <rect x="146" y="72" width="12" height="10" rx="1" />
          <rect x="166" y="72" width="18" height="8" rx="1" />
          <rect x="72" y="136" width="12" height="12" rx="1" />
          <rect x="92" y="136" width="8" height="8" rx="1" />
          <rect x="146" y="136" width="14" height="10" rx="1" />
          <rect x="168" y="136" width="16" height="10" rx="1" />
          <rect x="72" y="156" width="10" height="10" rx="1" />
          <rect x="90" y="152" width="12" height="14" rx="1" />
          <rect x="146" y="154" width="10" height="14" rx="1" />
          <rect x="164" y="154" width="12" height="10" rx="1" />
        </g>
        <rect x="80" y="80" width="40" height="40" fill="#ffffff" rx="8" />
        <rect x="83" y="83" width="34" height="34" fill={primaryColor} rx="6" />
        <text 
          x="100" 
          y="104" 
          fill="#ffffff" 
          fontSize="13" 
          fontWeight="900" 
          fontFamily="system-ui, sans-serif" 
          textAnchor="middle"
        >
          {type === 'fonepay' ? 'fone' : type === 'esewa' ? 'eS' : 'K'}
        </text>
      </svg>
    );
  };

  return (
    <footer id="main-footer" className="bg-[#0b1329] text-gray-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Store Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white font-black flex items-center justify-center text-sm shadow">
                D&K
              </div>
              <div>
                <span className="font-bold text-white text-base sm:text-lg tracking-tight block">
                  {lang === 'ne' ? 'डी एण्ड के हार्डवेयर तथा स्टेसनरी' : 'D&K Hardware and Stationery'}
                </span>
                <span className="text-[11px] text-gray-400">
                  {BUSINESS_INFO.legalName}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              {lang === 'ne'
                ? 'कैलाश चोक, मध्यपुर थिमीमा १० वर्षभन्दा बढी समयदेखि निर्माण व्यवसायी, विद्यालय, कार्यालय तथा घरधनीहरूलाई गुणस्तरीय हार्डवेयर, CPVC/PPR पाइप, सेनेटरी र स्टेसनरी सामग्री उपलब्ध गराउँदै आएको भरपर्दो प्रतिष्ठान।'
                : 'Over a decade of trusted retail and wholesale supply for building contractors, plumbers, academic institutions, and corporate offices in Madhyapur Thimi, Bhaktapur, and Kathmandu Valley.'}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#f97316] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>ESTD. 2072 B.S. (2015 A.D.) • Registered Local Business</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'ne' ? 'छिटो नेभिगेसन' : 'Store Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ne' ? 'गृहपृष्ठ (Home)' : 'Home Overview'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ne' ? 'उत्पादन क्याटलग (Products)' : 'All Products Catalog'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ne' ? 'थोक तथा ढुवानी सेवा (Services)' : 'Contractor & School Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ne' ? 'हाम्रो बारेमा (About Us)' : 'About Our Story'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('guides')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ne' ? 'ज्ञान केन्द्र र ब्लग (Guides)' : 'DIY & Buying Guides'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'ne' ? 'सम्पर्क र नक्सा (Contact)' : 'Contact & Google Map'}
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="space-y-3">
            <div className="pt-2 border-t border-slate-800 text-xs text-gray-300 space-y-1">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#f97316]" />
                <span>Open 7 Days a Week</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Mon–Fri: 7:30 AM – 6:00 PM<br />
                Sat–Sun: 7:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Direct Contact & AI Endpoint */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'ne' ? 'सिधा सम्पर्क' : 'Direct Inquiry'}
            </h4>
            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                id="footer-phone-cta"
                className="flex items-center gap-2 text-white hover:text-[#f97316] text-lg font-mono font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f97316] fill-current" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +977-9842692437</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>

              <div className="pt-2 text-[11px] text-gray-400">
                <p>{lang === 'ne' ? 'थिमी, भक्तपुर, सल्लाघारी र काठमाडौँमा ढुवानी सुविधा।' : 'Prompt site delivery across Kathmandu Valley.'}</p>
              </div>

              {/* Machine-Readable / AI Transparency Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-[10px]">
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-slate-800 text-blue-300 hover:bg-slate-700 px-2 py-0.5 rounded transition-colors"
                >
                  <Bot className="w-3 h-3" />
                  <span>llms.txt</span>
                </a>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-slate-800 text-gray-300 hover:bg-slate-700 px-2 py-0.5 rounded transition-colors"
                >
                  <FileText className="w-3 h-3" />
                  <span>sitemap.xml</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Quick Payments & QR Codes Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
              <QrCode className="w-4 h-4 text-[#f97316]" />
              <span>{lang === 'ne' ? 'स्वीकृत क्युआर तथा अनलाइन भुक्तानी' : 'Supported QR & Online Payments'}:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => { setActiveQrTab('fonepay'); setIsQrModalOpen(true); }}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-950/70 text-red-300 border border-red-800/60 hover:bg-red-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View Fonepay QR"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>Fonepay QR</span>
              </button>
              <button
                onClick={() => { setActiveQrTab('esewa'); setIsQrModalOpen(true); }}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View eSewa QR"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>eSewa QR</span>
              </button>
              <button
                onClick={() => { setActiveQrTab('khalti'); setIsQrModalOpen(true); }}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-950/70 text-purple-300 border border-purple-800/60 hover:bg-purple-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View NepalPay / Khalti QR"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>NepalPay / Khalti</span>
              </button>
              <button
                onClick={() => { setActiveQrTab('bank'); setIsQrModalOpen(true); }}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-950/70 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View Corporate Bank Account"
              >
                <Building2 className="w-3 h-3 text-blue-400" />
                <span>Mobile Banking / Wire</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsQrModalOpen(true)}
            id="footer-open-qr-btn"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer flex-shrink-0"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>{lang === 'ne' ? 'क्युआर कोड हेर्नुहोस् (Scan & Pay)' : 'Scan & Pay QR Codes'}</span>
          </button>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span>© {currentYear} {BUSINESS_INFO.legalName}. {lang === 'ne' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}</span>
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-white underline cursor-pointer"
            >
              {lang === 'ne' ? 'गोपनीयता नीति (Privacy)' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-white underline cursor-pointer"
            >
              {lang === 'ne' ? 'सर्तहरू (Terms)' : 'Terms of Service'}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#f97316] transition-colors cursor-pointer"
          >
            <span>{lang === 'ne' ? 'माथि जानुहोस्' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick QR Payment Modal Triggered from Footer */}
      {isQrModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs text-gray-900 dark:text-white"
          onClick={() => setIsQrModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 max-w-md w-full border border-gray-200 dark:border-slate-800 shadow-2xl relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#f97316] bg-orange-50 dark:bg-orange-950/60 px-3 py-1 rounded-full mb-3">
              <QrCode className="w-3.5 h-3.5" />
              <span>{lang === 'ne' ? 'छिटो भुक्तानी क्युआर' : 'Quick Digital Payment'}</span>
            </span>

            <h3 className="text-xl font-black tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            

            {/* Modal Tabs */}
            <div className="flex gap-1 p-1 bg-gray-100 dark:bg-slate-800 rounded-xl mb-4 text-xs font-bold">
              <button
                onClick={() => setActiveQrTab('fonepay')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeQrTab === 'fonepay' ? 'bg-red-600 text-white shadow-xs' : 'text-gray-600 dark:text-slate-300'
                }`}
              >
                Fonepay
              </button>
              <button
                onClick={() => setActiveQrTab('esewa')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeQrTab === 'esewa' ? 'bg-emerald-600 text-white shadow-xs' : 'text-gray-600 dark:text-slate-300'
                }`}
              >
                eSewa
              </button>
              <button
                onClick={() => setActiveQrTab('khalti')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeQrTab === 'khalti' ? 'bg-purple-600 text-white shadow-xs' : 'text-gray-600 dark:text-slate-300'
                }`}
              >
                Khalti
              </button>
              <button
                onClick={() => setActiveQrTab('bank')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeQrTab === 'bank' ? 'bg-[#1e3a8a] text-white shadow-xs' : 'text-gray-600 dark:text-slate-300'
                }`}
              >
                Bank
              </button>
            </div>

            {/* Modal Tab Body */}
            {activeQrTab === 'bank' ? (
              <div className="text-left bg-gray-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-gray-200 dark:border-slate-700 space-y-2.5 text-xs">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Account Name</div>
                  <div className="font-bold text-gray-900 dark:text-white leading-tight">
                    D&K Hardware, Sanitary and Stationery Pvt. Ltd.
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Bank & Branch</div>
                  <div className="font-semibold text-gray-800 dark:text-slate-200">
                    Global IME Bank Ltd., Madhyapur Thimi
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-gray-200 dark:border-slate-700">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">A/C Number</div>
                    <div className="font-mono font-bold text-sm text-[#1e3a8a] dark:text-orange-400">12901010008842</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('12901010008842', 'acc')}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 text-gray-700 dark:text-slate-200 transition-colors"
                  >
                    {copiedField === 'acc' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-gray-200 dark:border-slate-700">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">PAN / VAT</div>
                    <div className="font-mono font-bold text-sm text-gray-900 dark:text-white">609823145</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('609823145', 'pan')}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 text-gray-700 dark:text-slate-200 transition-colors"
                  >
                    {copiedField === 'pan' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-2xl border border-gray-200 dark:border-slate-700 inline-block shadow-inner">
                  {renderQrSvg(activeQrTab)}
                </div>
                <p className="text-xs font-semibold text-gray-700 dark:text-slate-300">
                  {activeQrTab === 'fonepay'
                    ? (lang === 'ne' ? 'सबै मोबाइल बैंकिङ एपहरूबाट स्क्यान गर्न मिल्छ' : 'Scan with any Nepali Mobile Banking App')
                    : activeQrTab === 'esewa'
                    ? (lang === 'ne' ? 'eSewa वालेटबाट सिधै भुक्तानी गर्नुहोस्' : 'Scan & pay directly with eSewa App')
                    : (lang === 'ne' ? 'NepalPay वा Khalti वालेटबाट स्क्यान गर्नुहोस्' : 'Scan with NepalPay or Khalti')}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
                  <span>Merchant ID: {activeQrTab === 'esewa' ? '9842692437' : 'DK-88400'}</span>
                  <button
                    onClick={() => copyToClipboard(activeQrTab === 'esewa' ? '9842692437' : 'DK-88400', 'mid')}
                    className="text-[#f97316] font-sans font-bold hover:underline"
                  >
                    {copiedField === 'mid' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            )}

            {/* WhatsApp Verification CTA */}
            <div className="mt-5 space-y-2">
              <a
                href={`https://wa.me/9779842692437?text=${encodeURIComponent(
                  'Namaste D&K Hardware and Stationery, I have completed a QR payment. Here is the receipt screenshot for dispatch.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ne' ? 'रसिद ह्वाट्सएपमा पठाउनुहोस्' : 'Send Payment Slip via WhatsApp'}</span>
              </a>

              {onNavigateSection && (
                <button
                  onClick={() => {
                    setIsQrModalOpen(false);
                    handleNav('contact');
                  }}
                  className="w-full text-xs text-[#1e3a8a] dark:text-blue-400 font-bold hover:underline py-1"
                >
                  {lang === 'ne' ? 'पूर्ण सम्पर्क तथा भुक्तानी खण्ड हेर्नुहोस् →' : 'View Full Payment & Contact Section →'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
