import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle, Search } from 'lucide-react';
import { STORE_FAQS, BUSINESS_INFO } from '../data/products';

interface FaqSectionProps {
  lang: 'en' | 'ne';
  categoryFilter?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, categoryFilter }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(categoryFilter || 'All');

  const categories = ['All', 'General', 'Hardware', 'Stationery', 'Delivery & Orders'];

  const filteredFaqs = STORE_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      faq.question.toLowerCase().includes(query) ||
      faq.questionNe.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.answerNe.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 text-[#1e3a8a] dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#f97316]" />
            {lang === 'ne' ? 'प्रायः सोधिने प्रश्नहरू' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {lang === 'ne' ? 'हामी कसरी मद्दत गर्न सक्छौं?' : 'Everything You Need to Know'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-slate-300">
            {lang === 'ne'
              ? 'हार्डवेयर, पाइप, सेनेटरी तथा स्टेसनरी सामग्री, ढुवानी र थोक दररेटसम्बन्धी सामान्य जिज्ञासाहरू।'
              : 'Clear answers on hardware, plumbing standards, institutional stationery supply, and Kathmandu Valley delivery.'}
          </p>

          {/* Search bar inside FAQ */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ne' ? 'प्रश्न वा विषय खोज्नुहोस्...' : 'Search questions or keywords...'}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] dark:focus:ring-blue-400"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'All' && (lang === 'ne' ? 'सबै' : 'All')}
                {cat === 'General' && (lang === 'ne' ? 'सामान्य' : 'General')}
                {cat === 'Hardware' && (lang === 'ne' ? 'हार्डवेयर' : 'Hardware')}
                {cat === 'Stationery' && (lang === 'ne' ? 'स्टेसनरी' : 'Stationery')}
                {cat === 'Delivery & Orders' && (lang === 'ne' ? 'ढुवानी तथा अर्डर' : 'Delivery & Orders')}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-slate-400 text-sm">
              {lang === 'ne' ? 'कुनै प्रश्न फेला परेन। कृपया फोन वा ह्वाट्सएपमा सोध्नुहोस्।' : 'No questions matched your search. Contact us directly!'}
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50/70 dark:bg-slate-800/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-slate-800"
                  >
                    <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-snug">
                      {lang === 'ne' ? faq.questionNe : faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-white dark:bg-slate-700 shadow-xs transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#f97316]' : 'text-gray-500 dark:text-slate-300'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-100 dark:border-slate-700/50">
                      <p>{lang === 'ne' ? faq.answerNe : faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Help Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-[#1e3a8a] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base">
              {lang === 'ne' ? 'थप प्राविधिक सल्लाह वा विशेष दररेट चाहिन्छ?' : 'Need immediate assistance or bulk pricing?'}
            </h4>
            <p className="text-xs text-blue-100 mt-0.5">
              {lang === 'ne'
                ? 'हाम्रा प्रतिनिधि कैलाश चोक पसलमा प्रत्यक्ष सहयोग गर्न तयार छन्।'
                : 'Our sales desk at Kailash Chowk, Thimi is ready to help 7 days a week.'}
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp 9851056522</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
