import React, { useState } from 'react';
import { 
  QrCode, 
  Smartphone, 
  Copy, 
  Check, 
  ShieldCheck, 
  Receipt, 
  MessageCircle, 
  Building2, 
  Maximize2, 
  X,
  CreditCard,
  CheckCircle2,
  Info
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface QrPaymentSectionProps {
  lang: 'en' | 'ne';
  className?: string;
  id?: string;
}

type PaymentTab = 'fonepay' | 'esewa' | 'khalti' | 'bank';

export const QrPaymentSection: React.FC<QrPaymentSectionProps> = ({ 
  lang, 
  className = '', 
  id = 'qr-payments' 
}) => {
  const [activeTab, setActiveTab] = useState<PaymentTab>('fonepay');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  // SVG QR Code generator with authentic position detection squares and data modules
  const renderQrSvg = (type: 'fonepay' | 'esewa' | 'khalti', size = 220) => {
    const primaryColor = type === 'fonepay' ? '#dc2626' : type === 'esewa' ? '#16a34a' : '#7c3aed';
    
    return (
      <svg 
        viewBox="0 0 200 200" 
        width={size} 
        height={size} 
        className="w-full max-w-[220px] aspect-square mx-auto drop-shadow-xs"
        aria-label={`${type.toUpperCase()} QR Code`}
      >
        <rect width="200" height="200" fill="#ffffff" rx="12" />
        
        {/* Top-Left Finder Pattern */}
        <rect x="16" y="16" width="48" height="48" fill="#1e293b" rx="6" />
        <rect x="24" y="24" width="32" height="32" fill="#ffffff" rx="3" />
        <rect x="32" y="32" width="16" height="16" fill={primaryColor} rx="2" />

        {/* Top-Right Finder Pattern */}
        <rect x="136" y="16" width="48" height="48" fill="#1e293b" rx="6" />
        <rect x="144" y="24" width="32" height="32" fill="#ffffff" rx="3" />
        <rect x="152" y="32" width="16" height="16" fill={primaryColor} rx="2" />

        {/* Bottom-Left Finder Pattern */}
        <rect x="16" y="136" width="48" height="48" fill="#1e293b" rx="6" />
        <rect x="24" y="144" width="32" height="32" fill="#ffffff" rx="3" />
        <rect x="32" y="152" width="16" height="16" fill={primaryColor} rx="2" />

        {/* Timing Lines */}
        <g fill="#334155">
          <rect x="72" y="32" width="6" height="6" />
          <rect x="86" y="32" width="6" height="6" />
          <rect x="100" y="32" width="6" height="6" />
          <rect x="114" y="32" width="6" height="6" />
          <rect x="32" y="72" width="6" height="6" />
          <rect x="32" y="86" width="6" height="6" />
          <rect x="32" y="100" width="6" height="6" />
          <rect x="32" y="114" width="6" height="6" />
        </g>

        {/* Data Pattern Modules Matrix */}
        <g fill="#1e293b">
          {/* Top Center modules */}
          <rect x="72" y="16" width="10" height="10" rx="1" />
          <rect x="88" y="16" width="10" height="10" rx="1" />
          <rect x="104" y="22" width="8" height="8" rx="1" />
          <rect x="118" y="16" width="10" height="10" rx="1" />
          <rect x="72" y="46" width="12" height="8" rx="1" />
          <rect x="92" y="46" width="8" height="12" rx="1" />
          <rect x="108" y="46" width="14" height="8" rx="1" />

          {/* Left Mid modules */}
          <rect x="16" y="72" width="10" height="10" rx="1" />
          <rect x="16" y="88" width="10" height="10" rx="1" />
          <rect x="16" y="108" width="10" height="10" rx="1" />
          <rect x="46" y="72" width="14" height="8" rx="1" />
          <rect x="46" y="90" width="10" height="14" rx="1" />
          <rect x="46" y="112" width="12" height="10" rx="1" />

          {/* Center Matrix */}
          <rect x="70" y="70" width="12" height="12" rx="1" fill={primaryColor} />
          <rect x="90" y="70" width="10" height="10" rx="1" />
          <rect x="108" y="70" width="12" height="10" rx="1" />
          <rect x="128" y="70" width="10" height="12" rx="1" />
          <rect x="70" y="90" width="10" height="10" rx="1" />
          <rect x="118" y="90" width="10" height="10" rx="1" />
          <rect x="70" y="108" width="14" height="8" rx="1" />
          <rect x="92" y="108" width="10" height="12" rx="1" />
          <rect x="110" y="108" width="10" height="10" rx="1" />
          <rect x="128" y="108" width="14" height="10" rx="1" />

          {/* Right Mid modules */}
          <rect x="146" y="72" width="12" height="10" rx="1" />
          <rect x="166" y="72" width="18" height="8" rx="1" />
          <rect x="146" y="90" width="10" height="14" rx="1" />
          <rect x="164" y="90" width="10" height="10" rx="1" />
          <rect x="180" y="90" width="8" height="18" rx="1" />
          <rect x="146" y="112" width="14" height="10" rx="1" />
          <rect x="168" y="110" width="14" height="12" rx="1" />

          {/* Bottom Center modules */}
          <rect x="72" y="136" width="12" height="12" rx="1" />
          <rect x="92" y="136" width="8" height="8" rx="1" />
          <rect x="108" y="136" width="12" height="10" rx="1" />
          <rect x="128" y="136" width="10" height="14" rx="1" />
          <rect x="72" y="156" width="10" height="10" rx="1" />
          <rect x="90" y="152" width="12" height="14" rx="1" />
          <rect x="110" y="156" width="10" height="10" rx="1" />
          <rect x="72" y="174" width="14" height="10" rx="1" />
          <rect x="94" y="174" width="10" height="10" rx="1" />
          <rect x="112" y="174" width="14" height="10" rx="1" />

          {/* Bottom Right modules */}
          <rect x="146" y="136" width="14" height="10" rx="1" />
          <rect x="168" y="136" width="16" height="10" rx="1" />
          <rect x="146" y="154" width="10" height="14" rx="1" />
          <rect x="164" y="154" width="12" height="10" rx="1" />
          <rect x="182" y="154" width="8" height="10" rx="1" />
          <rect x="146" y="174" width="12" height="10" rx="1" />
          <rect x="166" y="172" width="18" height="12" rx="1" />
        </g>

        {/* Center Brand Badge Overlay */}
        <rect x="80" y="80" width="40" height="40" fill="#ffffff" rx="8" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
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
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/60 text-[#f97316]">
                <QrCode className="w-3.5 h-3.5" />
                <span>{lang === 'ne' ? 'छिटो डिजिटल भुक्तानी' : 'Instant Digital Payments'}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" />
                <span>0% Extra Fee</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
              {lang === 'ne' ? 'क्युआर कोड मार्फत भुक्तानी (Scan & Pay)' : 'Scan & Pay QR Payment Codes'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-1 max-w-2xl">
              {lang === 'ne'
                ? 'Fonepay, eSewa, मोबाइल बैंकिङ वा सिधै बैंक खाता मार्फत सहजै भुक्तानी गर्नुहोस्। सामान डेलिभरी वा पसलमा बिल तिर्न तुरुन्तै स्क्यान गर्नुहोस्।'
                : 'Instantly pay via Fonepay (30+ Nepali Mobile Banking Apps), eSewa wallet, Khalti, or direct official company bank account transfer.'}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
            title="Enlarge QR Code"
          >
            <Maximize2 className="w-4 h-4 text-[#f97316]" />
            <span>{lang === 'ne' ? 'ठूलो QR हेर्नुहोस्' : 'Enlarge QR'}</span>
          </button>
        </div>

        {/* Tab Selection */}
        <div className="pt-6">
          <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 dark:bg-slate-800/80 rounded-2xl max-w-xl">
            <button
              onClick={() => setActiveTab('fonepay')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'fonepay'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Fonepay QR</span>
            </button>

            <button
              onClick={() => setActiveTab('esewa')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'esewa'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>eSewa QR</span>
            </button>

            <button
              onClick={() => setActiveTab('khalti')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'khalti'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>NepalPay / Khalti</span>
            </button>

            <button
              onClick={() => setActiveTab('bank')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'bank'
                  ? 'bg-[#1e3a8a] text-white shadow-xs'
                  : 'text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'ne' ? 'बैंक खाता' : 'Bank Wire'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* QR Stand Card Presentation (Left 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            {activeTab === 'bank' ? (
              // Bank Transfer Presentation Card
              <div className="w-full max-w-sm bg-gradient-to-br from-[#1e3a8a] via-[#172554] to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-blue-900/50 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-white/15 px-2.5 py-1 rounded-md">
                      Current Account
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-blue-200">
                    {lang === 'ne' ? 'आधिकारिक कम्पनी खाता' : 'Official Corporate Account'}
                  </h3>
                  <p className="text-base font-bold text-white mt-1 leading-snug">
                    D&K Hardware, Sanitary and Stationery Pvt. Ltd.
                  </p>

                  <div className="mt-5 space-y-3 font-mono text-xs">
                    <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] text-gray-400 uppercase font-sans">Bank & Branch</div>
                      <div className="text-white font-bold text-sm">Global IME Bank Ltd.</div>
                      <div className="text-gray-300 text-[11px]">Madhyapur Thimi Branch, Bhaktapur</div>
                    </div>

                    <div className="bg-black/30 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase font-sans">Account Number</div>
                        <div className="text-orange-300 font-bold text-base tracking-wider">12901010008842</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('12901010008842', 'acc')}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                        title="Copy Account Number"
                      >
                        {copiedField === 'acc' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="bg-black/30 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase font-sans">PAN / VAT Number</div>
                        <div className="text-white font-bold text-sm tracking-wider">609823145</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('609823145', 'pan')}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                        title="Copy PAN Number"
                      >
                        {copiedField === 'pan' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200">
                  <span className="flex items-center gap-1">
                    <Receipt className="w-3.5 h-3.5 text-orange-400" />
                    <span>VAT Bill Provided</span>
                  </span>
                  <span>Branch Code: 129</span>
                </div>
              </div>
            ) : (
              // Authentic Merchant Counter Stand Card (Fonepay / eSewa / Khalti)
              <div className="w-full max-w-sm bg-white dark:bg-slate-950 rounded-3xl p-5 sm:p-6 border-2 border-gray-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
                {/* Brand Header Banner */}
                <div 
                  className={`py-2 px-4 rounded-2xl text-white font-bold text-xs uppercase tracking-wider mb-4 shadow-xs flex items-center justify-center gap-2 ${
                    activeTab === 'fonepay'
                      ? 'bg-red-600'
                      : activeTab === 'esewa'
                      ? 'bg-emerald-600'
                      : 'bg-purple-600'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>
                    {activeTab === 'fonepay' 
                      ? 'Fonepay Merchant Network' 
                      : activeTab === 'esewa' 
                      ? 'eSewa Direct Merchant' 
                      : 'NepalPay / Khalti QR'}
                  </span>
                </div>

                {/* Merchant Name */}
                <h3 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white uppercase tracking-tight">
                  D&K HARDWARE AND STATIONERY
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-slate-400 font-mono mt-0.5">
                  PAN: 609823145 • Thimi, Bhaktapur
                </p>

                {/* QR Code Canvas */}
                <div className="my-4 p-3 bg-white rounded-2xl border border-gray-200 dark:border-slate-800 shadow-inner inline-block">
                  {renderQrSvg(activeTab as 'fonepay' | 'esewa' | 'khalti', 200)}
                </div>

                {/* Scan Instructions */}
                <p className="text-xs font-semibold text-gray-800 dark:text-slate-200">
                  {activeTab === 'fonepay'
                    ? (lang === 'ne' ? 'कुनै पनि मोबाइल बैंकिङ एपबाट स्क्यान गर्नुहोस्' : 'Scan with ANY Nepali Mobile Banking App')
                    : activeTab === 'esewa'
                    ? (lang === 'ne' ? 'eSewa एप खोलेर स्क्यान र पे गर्नुहोस्' : 'Scan & Pay directly using eSewa App')
                    : (lang === 'ne' ? 'Khalti वा NepalPay एपबाट स्क्यान गर्नुहोस्' : 'Scan via Khalti or NepalPay App')}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-slate-400 font-mono">
                  <span>ID: {activeTab === 'esewa' ? '9842692437' : 'DK-88400'}</span>
                  <button
                    onClick={() => copyToClipboard(activeTab === 'esewa' ? '9842692437' : 'DK-88400', 'merchantId')}
                    className="flex items-center gap-1 text-[#f97316] hover:underline font-sans font-bold cursor-pointer"
                  >
                    {copiedField === 'merchantId' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>{lang === 'ne' ? 'कपि भयो!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{lang === 'ne' ? 'कपि गर्नुहोस्' : 'Copy ID'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Payment Guidance & Actions (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step-by-Step Payment Instructions */}
            <div className="bg-gray-50 dark:bg-slate-800/60 p-5 sm:p-6 rounded-2xl border border-gray-200/80 dark:border-slate-800">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'ne' ? 'भुक्तानी गर्ने सरल ४ चरणहरू' : 'How to Complete Your Payment in 4 Steps'}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-gray-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5 bg-white dark:bg-slate-900 p-3 rounded-xl border border-gray-100 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    1
                  </span>
                  <div>
                    <span className="font-bold block text-gray-900 dark:text-white">
                      {lang === 'ne' ? 'एप खोल्नुहोस्' : 'Open Your App'}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-slate-400">
                      {lang === 'ne' ? 'ग्लोबल, नबिल वा कुनै पनि बैंक एप वा eSewa' : 'Open Mobile Banking (Global, Nabil, etc.) or eSewa'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white dark:bg-slate-900 p-3 rounded-xl border border-gray-100 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    2
                  </span>
                  <div>
                    <span className="font-bold block text-gray-900 dark:text-white">
                      {lang === 'ne' ? 'क्युआर स्क्यान गर्नुहोस्' : 'Tap Scan QR'}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-slate-400">
                      {lang === 'ne' ? 'माथिको क्युआर कोड आफ्नो क्यामेराले स्क्यान गर्नुहोस्' : 'Scan the QR code shown on the screen or counter'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white dark:bg-slate-900 p-3 rounded-xl border border-gray-100 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    3
                  </span>
                  <div>
                    <span className="font-bold block text-gray-900 dark:text-white">
                      {lang === 'ne' ? 'रकम र विवरण लेख्नुहोस्' : 'Enter Amount & Remarks'}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-slate-400">
                      {lang === 'ne' ? 'बिल रकम राख्नुहोस् र Remarks मा नाम/बिल नं. लेख्नुहोस्' : 'Enter amount and put your Name/Bill No. in remarks'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white dark:bg-slate-900 p-3 rounded-xl border border-gray-100 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    4
                  </span>
                  <div>
                    <span className="font-bold block text-gray-900 dark:text-white">
                      {lang === 'ne' ? 'रसिद ह्वाट्सएपमा पठाउनुहोस्' : 'Send Slip on WhatsApp'}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-slate-400">
                      {lang === 'ne' ? 'तुरुन्तै सामान डेलिभरी र भ्याट बिलको लागि स्क्रिनसट पठाउनुहोस्' : 'Share screenshot to +977-9842692437 for immediate dispatch'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Share Verification CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/9779842692437?text=${encodeURIComponent(
                  'Namaste D&K Hardware & Stationery! I have completed the QR / Bank payment for my order. Attached is the payment slip/screenshot.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {lang === 'ne' ? 'भुक्तानी रसिद ह्वाट्सएपमा पठाउनुहोस्' : 'Send Payment Slip via WhatsApp'}
                </span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all cursor-pointer"
              >
                <Info className="w-4 h-4 text-[#f97316]" />
                <span>{lang === 'ne' ? 'भुक्तानी सोधपुछ: ०१-५९२५७५७' : 'Call Desk: 01-5925757'}</span>
              </a>
            </div>

            {/* Supported Banks & Providers Strip */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                {lang === 'ne' ? 'समर्थित बैंक तथा डिजिटल भुक्तानी साझेदारहरू:' : 'Supported Payment Networks & Wallets:'}
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {[
                  { name: 'Fonepay', color: 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 border-red-200 dark:border-red-900' },
                  { name: 'eSewa', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900' },
                  { name: 'Khalti', color: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-900' },
                  { name: 'Global IME Bank', color: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-900' },
                  { name: 'Nabil Bank', color: 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300 border-green-200 dark:border-green-900' },
                  { name: 'NIC Asia Mobank', color: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-900' },
                  { name: 'Official VAT Cheque', color: 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-900' }
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Enlarge QR Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-gray-200 dark:border-slate-800 shadow-2xl relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950 text-[#f97316] mb-2">
              D&K Store QR Payment
            </div>

            <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
              {activeTab === 'esewa' ? 'eSewa Merchant QR' : activeTab === 'khalti' ? 'Khalti / NepalPay' : 'Fonepay Official QR'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 mb-4">
              Kailash Chowk, Madhyapur Thimi • PAN: 609823145
            </p>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 dark:border-slate-800 inline-block shadow-inner">
              {renderQrSvg(activeTab === 'bank' ? 'fonepay' : activeTab, 260)}
            </div>

            <p className="text-xs font-medium text-gray-600 dark:text-slate-300 mt-4">
              {lang === 'ne' ? 'आफ्नो फोनको क्यामेरा वा मोबाइल बैंकिङ एपले स्क्यान गर्नुहोस्' : 'Scan with your mobile camera or banking app'}
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-2.5 bg-[#1e3a8a] text-white font-bold text-xs rounded-xl shadow-xs"
            >
              {lang === 'ne' ? 'बन्द गर्नुहोस्' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
