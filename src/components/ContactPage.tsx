import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Navigation,
  Building,
  Truck,
  QrCode
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { QrPaymentSection } from './QrPaymentSection';

interface ContactPageProps {
  lang: 'en' | 'ne';
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Hardware & Plumbing',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#1e3a8a] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-xs">
            {lang === 'ne' ? 'सम्पर्क तथा स्थान' : 'Contact & Location'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {lang === 'ne' ? 'हामीलाई भेट्नुहोस् वा सम्पर्क गर्नुहोस्' : 'Get in Touch with D&K'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-slate-300">
            {lang === 'ne'
              ? 'कैलाश चोक, मध्यपुर थिमीमा रहेको हाम्रो पसलमा सिधै आउनुहोस् वा फोन/ह्वाट्सएप मार्फत तुरुन्तै सोधपुछ गर्नुहोस्।'
              : 'Visit our flagship showroom & warehouse in Madhyapur Thimi, or reach out directly for contractor quotes and school supply contracts.'}
          </p>

          {/* Quick QR payment anchor */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <a
              href="#qr-payments"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-50 dark:bg-orange-950/40 text-[#f97316] hover:bg-orange-100 border border-orange-200 dark:border-orange-900/50 transition-colors shadow-2xs"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>{lang === 'ne' ? 'छिटो भुक्तानीको लागि QR कोडहरू हेर्नुहोस् ↓' : 'Looking to Pay? View Fonepay & eSewa QR Codes ↓'}</span>
            </a>
          </div>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Phone */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#f97316] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                {lang === 'ne' ? 'फोन नम्बर' : 'Phone Desk'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                {lang === 'ne' ? 'स्टक तथा तत्काल दररेटको लागि' : 'Direct line for stocks & rates'}
              </p>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="mt-3 block font-mono font-bold text-lg text-[#1e3a8a] dark:text-orange-400 hover:underline"
              >
                01-5925757
              </a>
            </div>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="mt-4 text-xs font-bold text-[#f97316] hover:underline"
            >
              {lang === 'ne' ? 'सिधै फोन गर्नुहोस् →' : 'Call Now →'}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                WhatsApp
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                {lang === 'ne' ? 'सामानको फोटो वा सूची पठाउन' : 'Send photos or lists'}
              </p>
              <div className="mt-3 font-mono font-bold text-base text-emerald-600">
                +977-9842692437
              </div>
            </div>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-emerald-600 hover:underline"
            >
              {lang === 'ne' ? 'ह्वाट्सएप खोल्नुहोस् →' : 'Chat on WhatsApp →'}
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#1e3a8a] dark:text-blue-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                {lang === 'ne' ? 'खुल्ने समय' : 'Store Hours'}
              </h3>
              <p className="text-xs text-[#f97316] font-bold mt-1">
                {lang === 'ne' ? 'हप्ताको ७ दिन खुला' : 'Open 7 Days a Week'}
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-slate-300 space-y-0.5">
                <div>Mon–Fri: 7:30 AM – 6:00 PM</div>
                <div>Sat–Sun: 7:00 AM – 6:00 PM</div>
              </div>
            </div>
            <span className="mt-4 text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {lang === 'ne' ? 'अहिले खुला छ' : 'Currently Open'}
            </span>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                {lang === 'ne' ? 'स्थान' : 'Location'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-slate-300 mt-1 leading-snug">
                Kailash Chowk, Madhyapur Thimi, Bagmati Province, 88400, Nepal
              </p>
            </div>
            <a
              href={BUSINESS_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-[#1e3a8a] dark:text-blue-400 hover:underline"
            >
              {lang === 'ne' ? 'नक्सा हेर्नुहोस् →' : 'Open Map →'}
            </a>
          </div>
        </div>

        {/* Main Section: Interactive Map + Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Map Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col">
            <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f97316]" />
                  <span>{lang === 'ne' ? 'गुगल नक्सा (Google Maps)' : 'Interactive Location Map'}</span>
                </h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                  Kailash Chowk, Madhyapur Thimi, Bhaktapur
                </p>
              </div>
              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f97316] hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs transition-colors flex items-center gap-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{lang === 'ne' ? 'दिशा देखाउनुहोस्' : 'Directions'}</span>
              </a>
            </div>

            <div className="relative w-full h-[380px] sm:h-[450px] bg-gray-100 dark:bg-slate-800">
              <iframe
                title="D&K Hardware and Stationery Location Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#f97316]" />
                <span>
                  {lang === 'ne'
                    ? 'ट्रक तथा पिकअप गाडी पार्किङ र सामान लोड गर्न फराकिलो सडक सुविधा।'
                    : 'Wide road clearance with dedicated truck & vehicle loading access.'}
                </span>
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="font-bold text-[#1e3a8a] dark:text-orange-400 hover:underline"
              >
                01-5925757
              </a>
            </div>
          </div>

          {/* Contact Message Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang === 'ne' ? 'सन्देश सफलतापूर्वक प्राप्त भयो!' : 'Message Received!'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-2 max-w-xs mx-auto leading-relaxed">
                  {lang === 'ne'
                    ? 'कैलाश चोक पसलका प्रतिनिधिले तपाईंलाई फोन नम्बरमा छिट्टै सम्पर्क गर्नेछन्।'
                    : 'Our team at Kailash Chowk, Thimi will contact you shortly regarding your inquiry.'}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', department: 'Hardware & Plumbing', message: '' });
                  }}
                  className="mt-6 inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
                >
                  <span>{lang === 'ne' ? 'अर्को सन्देश पठाउनुहोस्' : 'Send Another Message'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {lang === 'ne' ? 'हामीलाई सन्देश पठाउनुहोस्' : 'Send Direct Inquiry'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    {lang === 'ne'
                      ? 'सामानको उपलब्धता वा दररेटबारे तुरुन्तै सोध्न तलको विवरण भर्नुहोस्।'
                      : 'Fill out this form for quick product availability and custom quotations.'}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1">
                    {lang === 'ne' ? 'पूरा नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Dipak Adhikari"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1e3a8a] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1">
                      {lang === 'ne' ? 'सम्पर्क फोन *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., 98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1e3a8a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1">
                      {lang === 'ne' ? 'ईमेल (वैकल्पिक)' : 'Email (Optional)'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., name@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1e3a8a] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1">
                    {lang === 'ne' ? 'सम्बन्धित विभाग' : 'Department'}
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1e3a8a] focus:outline-none"
                  >
                    <option value="Hardware & Plumbing">Hardware & Plumbing (पाइप, औजार, सेनेटरी)</option>
                    <option value="Stationery & Paper">Stationery & Paper (A4 पेपर, कापी, रजिस्टर)</option>
                    <option value="Contractor Bulk">Contractor Bulk (निर्माण दररेट)</option>
                    <option value="General Inquiry">General Store Visit (सामान्य जानकारी)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 mb-1">
                    {lang === 'ne' ? 'तपाईंको जिज्ञासा वा सामानको सूची' : 'Message or Items Needed'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ne'
                        ? 'आवश्यक सामान, परिमाण वा कार्यस्थलको जानकारी यहाँ लेख्नुहोस्...'
                        : 'Describe materials, estimated quantities, or project location...'
                    }
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1e3a8a] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ne' ? 'सन्देश पठाउनुहोस्' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Supported QR Payment Codes (Fonepay, eSewa, NepalPay, Bank Wire) */}
        <QrPaymentSection lang={lang} className="mb-4" id="qr-payments" />
      </div>
    </div>
  );
};
