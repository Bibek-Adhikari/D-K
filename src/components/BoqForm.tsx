import React, { useState } from 'react';
import { FileSpreadsheet, Send, CheckCircle2, Copy, Phone, Plus, RefreshCw, MessageSquare } from 'lucide-react';
import { translations } from '../constants/translations';
import { BUSINESS_INFO } from '../data/products';

interface BoqFormProps {
  itemsList: string;
  onItemsListChange: (value: string) => void;
  lang: 'en' | 'ne';
}

export const BoqForm: React.FC<BoqFormProps> = ({
  itemsList,
  onItemsListChange,
  lang,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState<'Contractor / Construction' | 'Plumber / Technician' | 'Residential Owner' | 'Commercial Project'>('Contractor / Construction');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copied, setCopied] = useState(false);

  const t = translations[lang];

  const quickPicks = [
    { en: 'CPVC 1" SDR 11 Pipe (10 pcs)', ne: 'सीपीभीसी १" SDR 11 पाइप (१० थान)' },
    { en: 'PPR 25mm Hot Water Pipe (5 pcs)', ne: 'पीपीआर २५मिमी तातो पानी पाइप (५ थान)' },
    { en: 'CPVC 1" Elbows & Couplers (20 pcs)', ne: 'सीपीभीसी १" एल्बो र कप्लर (२० थान)' },
    { en: 'Chrome Basin Mixer Faucet (2 pcs)', ne: 'क्रोम बेसिन मिक्सर धारा (२ थान)' },
    { en: 'Wall Mount Shower Valve Set (1 pc)', ne: 'वाल माउन्ट सावर भल्भ सेट (१ थान)' },
    { en: '20V Cordless Drill Driver (1 pc)', ne: '२० भोल्ट कर्डलेस ड्रिल (१ थान)' },
  ];

  const handleQuickAdd = (itemText: string) => {
    onItemsListChange(itemsList ? `${itemsList}\n• ${itemText}` : `• ${itemText}`);
  };

  const constructWhatsAppUrl = (currentInquiryId?: string) => {
    const lines = [
      `*Namaste D&K Hardware and Stationery,*`,
      `I would like to request an instant price quotation / BOQ estimate:`,
      currentInquiryId ? `• *Inquiry Ref:* ${currentInquiryId}` : '',
      fullName ? `• *Name:* ${fullName}` : '',
      phone ? `• *Phone:* ${phone}` : '',
      `• *Project Type:* ${projectType}`,
      notes ? `• *Location/Notes:* ${notes}` : '',
      `\n*Compiled Material / Shopping List:*`,
      itemsList || '(Pending item selection)',
    ].filter(Boolean);

    const fullText = lines.join('\n');
    return `https://wa.me/9779842692437?text=${encodeURIComponent(fullText)}`;
  };

  const handleShareWhatsApp = (e?: React.MouseEvent) => {
    if (!itemsList.trim()) {
      alert(lang === 'ne' ? 'कृपया पहिले सामानहरूको सूची लेख्नुहोस्।' : 'Please enter or select at least one item before sharing via WhatsApp.');
      return;
    }
    const url = constructWhatsAppUrl(inquiryId);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !itemsList) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/boq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          projectType,
          notes,
          itemsList,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setInquiryId(data.inquiryId || `DK-${Math.floor(100000 + Math.random() * 900000)}`);
      } else {
        setInquiryId(`DK-${Math.floor(100000 + Math.random() * 900000)}`);
      }
    } catch {
      setInquiryId(`DK-${Math.floor(100000 + Math.random() * 900000)}`);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleCopyQuote = () => {
    const summary = `*D&K HARDWARE & SANITARY - BOQ QUOTE*\nRef: ${inquiryId}\nCustomer: ${fullName}\nPhone: ${phone}\nProject: ${projectType}\nDelivery Notes: ${notes || 'N/A'}\nItems:\n${itemsList}`;
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setNotes('');
    onItemsListChange('');
    setIsSubmitted(false);
  };

  return (
    <section id="boq-section" className="py-24 bg-gray-50 dark:bg-slate-900/50 transition-colors">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
            {t.boq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 mb-4 tracking-tight">
            {t.boq.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t.boq.desc}
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} id="boq-inquiry-form" className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="boq-name-input" className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.boq.fullNameLabel} <span className="text-[#f97316]">*</span>
                  </label>
                  <input
                    type="text"
                    id="boq-name-input"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.boq.fullNamePlaceholder}
                    className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="boq-phone-input" className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.boq.phoneLabel} <span className="text-[#f97316]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="boq-phone-input"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.boq.phonePlaceholder}
                    className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-colors"
                  />
                </div>
              </div>

              {/* Project Type & Site Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="boq-project-type" className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.boq.projectTypeLabel}
                  </label>
                  <select
                    id="boq-project-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as any)}
                    className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-colors cursor-pointer"
                  >
                    <option value="Contractor / Construction">{lang === 'ne' ? 'ठेकेदार / निर्माण कम्पनी' : 'Contractor / Construction'}</option>
                    <option value="Plumber / Technician">{lang === 'ne' ? 'प्लम्बर / प्राविधिक' : 'Plumber / Technician'}</option>
                    <option value="Residential Owner">{lang === 'ne' ? 'घरधनी / व्यक्तिगत निर्माण' : 'Residential Owner'}</option>
                    <option value="Commercial Project">{lang === 'ne' ? 'व्यावसायिक भवन / कम्प्लेक्स' : 'Commercial Project'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="boq-notes-input" className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.boq.notesLabel}
                  </label>
                  <input
                    type="text"
                    id="boq-notes-input"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.boq.notesPlaceholder}
                    className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-colors"
                  />
                </div>
              </div>

              {/* Items List Textarea */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="boq-items-textarea" className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider">
                    {t.boq.itemsLabel} <span className="text-[#f97316]">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    {itemsList && (
                      <button
                        type="button"
                        onClick={() => handleShareWhatsApp()}
                        className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer"
                        title={t.boq.shareWhatsAppPrompt}
                      >
                        <MessageSquare size={13} />
                        <span>{t.boq.shareViaWhatsApp}</span>
                      </button>
                    )}
                    {itemsList && (
                      <button
                        type="button"
                        onClick={() => onItemsListChange('')}
                        className="text-xs text-gray-400 hover:text-[#f97316] transition-colors cursor-pointer"
                      >
                        {t.boq.clear}
                      </button>
                    )}
                  </div>
                </div>
                <textarea
                  id="boq-items-textarea"
                  required
                  rows={4}
                  value={itemsList}
                  onChange={(e) => onItemsListChange(e.target.value)}
                  placeholder={t.boq.itemsPlaceholder}
                  className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl p-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-colors font-mono leading-relaxed"
                />
              </div>

              {/* Quick Pick Chips */}
              <div>
                <span className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                  {t.boq.quickAddTitle}
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickPicks.map((chip, idx) => {
                    const label = lang === 'ne' ? chip.ne : chip.en;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQuickAdd(label)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-orange-950/40 text-gray-700 dark:text-slate-300 hover:text-[#f97316] border border-gray-200 dark:border-slate-700 hover:border-orange-300 transition-colors cursor-pointer"
                      >
                        <Plus size={12} className="text-[#f97316]" />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons: Submit & Share via WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-orange-500/25 text-sm sm:text-base flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      <span>{t.boq.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{t.boq.submitBtn}</span>
                    </>
                  )}
                </button>

                {/* Share via WhatsApp button */}
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  id="boq-share-whatsapp-btn"
                  title={t.boq.shareWhatsAppPrompt}
                  className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/25 text-sm sm:text-base flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare size={18} />
                  <span>{t.boq.shareViaWhatsApp}</span>
                </button>
              </div>

            </form>
          ) : (
            /* Submission Success Card */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 dark:bg-orange-950/40 text-[#f97316] mb-3">
                  Ref: {inquiryId}
                </span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  {t.boq.quoteReceived}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  {t.boq.thankYouDesc}
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-800 text-left max-w-lg mx-auto font-mono text-xs space-y-1.5 text-gray-700 dark:text-slate-300">
                <div><strong className="text-gray-900 dark:text-white">Client:</strong> {fullName} ({phone})</div>
                <div><strong className="text-gray-900 dark:text-white">Category:</strong> {projectType}</div>
                <div><strong className="text-gray-900 dark:text-white">Items:</strong> {itemsList.length > 80 ? `${itemsList.slice(0, 80)}...` : itemsList}</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleShareWhatsApp}
                  id="boq-success-whatsapp-btn"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>{t.boq.shareViaWhatsApp}</span>
                </button>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center gap-2 shadow-md shadow-orange-500/20"
                >
                  <Phone size={16} />
                  <span>{t.boq.callStoreFast}: 01-5925757</span>
                </a>

                <button
                  onClick={handleCopyQuote}
                  className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-800 dark:text-white font-semibold py-3 px-5 rounded-xl text-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Copy size={16} />
                  <span>{copied ? t.boq.copied : t.boq.copyDetails}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs text-gray-500 dark:text-slate-400 hover:underline block w-full pt-2 cursor-pointer"
                >
                  {t.boq.submitAnother}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
