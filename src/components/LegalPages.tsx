import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface LegalPagesProps {
  type: 'privacy' | 'terms';
  lang: 'en' | 'ne';
  onBack: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, lang, onBack }) => {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1e3a8a] dark:text-orange-400 hover:underline mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'ne' ? 'गृहपृष्ठमा फर्कनुहोस्' : 'Return to Home'}</span>
        </button>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-slate-800 shadow-sm">
          {type === 'privacy' ? (
            <div>
              <div className="flex items-center gap-2.5 mb-2 text-[#1e3a8a] dark:text-blue-400">
                <ShieldCheck className="w-6 h-6 text-[#f97316]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ne' ? 'गोपनीयता नीति' : 'Official Store Policy'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                {lang === 'ne' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-6">
                Effective Date: September 2026 • D&K Hardware, Sanitary and Stationery Pvt. Ltd., Kailash Chowk, Madhyapur Thimi, Nepal.
              </p>

              <div className="space-y-5 text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    1. Information We Collect
                  </h3>
                  <p>
                    When you use our website or contact us via phone or WhatsApp, we collect basic contact details such as your full name, phone number, delivery site location, and material requirements list.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    2. How We Use Your Data
                  </h3>
                  <p>
                    Your contact information is strictly utilized to prepare wholesale price estimates, verify stock availability at our Kailash Chowk showroom, coordinate site transport logistics across Kathmandu Valley, and respond to your direct inquiries.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    3. No Third-Party Selling
                  </h3>
                  <p>
                    We never sell, rent, or trade customer phone numbers or quotation lists to third-party telemarketers. All quote submissions remain confidential between your construction/office team and D&K Hardware and Stationery.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    4. Contact Details
                  </h3>
                  <p>
                    For privacy inquiries or to update your submitted contractor profile, WhatsApp us at 9851056522 or email {BUSINESS_INFO.email}.
                  </p>
                </section>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2.5 mb-2 text-[#1e3a8a] dark:text-blue-400">
                <FileText className="w-6 h-6 text-[#f97316]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ne' ? 'नियम तथा सर्तहरू' : 'Customer Agreement'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                {lang === 'ne' ? 'नियम तथा सर्तहरू (Terms of Service)' : 'Terms of Service'}
              </h1>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-6">
                Effective Date: September 2026 • D&K Hardware, Sanitary and Stationery Pvt. Ltd., Kailash Chowk, Madhyapur Thimi, Nepal.
              </p>

              <div className="space-y-5 text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    1. Price Estimates & Quotes
                  </h3>
                  <p>
                    Rates generated on the website or provided via phone/WhatsApp represent current market wholesale quotations. Due to fluctuations in raw copper, CPVC resin, steel, and pulp paper, quotes are generally valid for 7 calendar days unless specified otherwise.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    2. Physical Store Pickup & Site Delivery
                  </h3>
                  <p>
                    Customers and tipper/pickup drivers may collect ordered hardware directly from our Kailash Chowk facility. Scheduled delivery to sites in Madhyapur Thimi, Bhaktapur, Sallaghari, and Kathmandu Valley is subject to vehicle access and road unloading conditions.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    3. Return & Replacement Policy
                  </h3>
                  <p>
                    Standard uncut CPVC/PPR pipes, fittings, and unopened stationery cartons in original condition may be exchanged within 5 business days with the official purchase receipt. Custom-tinted paint and cut electrical cables are non-returnable.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    4. VAT Invoicing & Payment
                  </h3>
                  <p>
                    We provide official government VAT invoices for all corporate, institutional, and contractor purchases. Accepted payment channels include Cash, Fonepay QR (eSewa, Khalti, Mobile Banking), and authorized bank wire transfers.
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
