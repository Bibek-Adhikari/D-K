import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { translations } from '../constants/translations';

interface ContactLocationProps {
  lang: 'en' | 'ne';
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="contact-location" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        
        {/* Unified Card Layout matching Binayak Suppliers */}
        <div className="bg-[#1e3a8a] dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-transparent dark:border-slate-800">
          
          {/* Left Column: Store Details */}
          <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[#f97316] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
                {t.contact.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                {t.contact.title}
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                {t.contact.desc}
              </p>

              <div className="space-y-6">
                {/* Store Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3.5 rounded-2xl flex-shrink-0">
                    <MapPin className="text-[#f97316]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact.storeLocationTitle}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {t.locationFull}
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                      {lang === 'ne' ? 'सवारी साधन तथा सामान लोड-अनलोड गर्ने फराकिलो ठाउँ सहित' : 'Direct vehicular access with easy loading bays'}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3.5 rounded-2xl flex-shrink-0">
                    <Phone className="text-[#f97316]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact.phoneTitle}</h3>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-2xl sm:text-3xl font-black text-[#f97316] hover:underline block font-mono"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-white/60 text-xs mt-1">
                      {t.contact.phoneDesc}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3.5 rounded-2xl flex-shrink-0">
                    <Clock className="text-[#f97316]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact.hoursTitle}</h3>
                    <p className="text-white/85 text-sm">
                      {lang === 'ne' ? 'सोमबार – शुक्रबार: बिहान ७:३० – बेलुकी ६:००' : 'Monday – Friday: 7:30 AM – 6:00 PM'}
                    </p>
                    <p className="text-[#f97316] font-semibold text-sm mt-0.5">
                      {lang === 'ne' ? 'शनिबार – आइतबार: बिहान ७:०० – बेलुकी ६:०० (हप्ताको ७ दिन खुला)' : 'Saturday – Sunday: 7:00 AM – 6:00 PM (Open 7 Days)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Row */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
              >
                <Phone size={16} className="fill-current" />
                <span>{lang === 'ne' ? 'कल गर्नुहोस्: ०१-५९२५७५७' : 'Call: 01-5925757'}</span>
              </a>

              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 transition-all active:scale-95"
              >
                <Navigation size={16} />
                <span>{lang === 'ne' ? 'गुगल म्याप्समा खोल्नुहोस्' : 'Google Maps Directions'}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="md:w-1/2 bg-gray-100 dark:bg-slate-800 min-h-[440px] relative">
            <iframe
              title="D&k Hardware and Sanitary Location Kailash Chowk Madhyapur Thimi"
              src="https://maps.google.com/maps?q=27.6787,85.3789&z=16&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              allowFullScreen
            />
            <a
              href={BUSINESS_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors z-10 flex items-center gap-1.5"
            >
              <MapPin size={14} className="text-[#f97316]" />
              <span>{lang === 'ne' ? 'Google Maps मा खोल्नुहोस् →' : 'View on Google Maps →'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
