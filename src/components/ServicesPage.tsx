import React from 'react';
import {
  Clock,
  MapPin,
  ShieldAlert
} from 'lucide-react';
import { FaqSection } from './FaqSection';

interface ServicesPageProps {
  lang: 'en' | 'ne';
  onNavigateToContact: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
}: ServicesPageProps) => {

  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Requirement',
      titleEn: 'Submit Your Requirement',
      titleNe: 'सामग्रीको विवरण पठाउनुहोस्',
      descEn: 'Send us your material list, photo list, or paper carton count via our web form or WhatsApp.',
      descNe: 'आफ्नो सामानको सूची वा आवश्यक स्टेसनरीको परिमाण हाम्रो वेबसाइट फारम वा ह्वाट्सएपमा पठाउनुहोस्।',
    },
    {
      step: '02',
      title: 'Itemized Wholesale Quote',
      titleEn: 'Itemized Wholesale Quote',
      titleNe: 'आधिकारिक थोक कोटेसन',
      descEn: 'Our experienced staff at Kailash Chowk prepares a transparent, discounted quote with VAT breakdown in 2 hours.',
      descNe: 'हाम्रा कर्मचारीले २ घण्टाभित्र उचित छुट तथा भ्याट बिल सहितको स्पष्ट कोटेसन तयार गर्दछन्।',
    },
    {
      step: '03',
      title: 'Dispatch & On-Site Delivery',
      titleEn: 'Dispatch & On-Site Delivery',
      titleNe: 'सुरक्षित ढुवानी तथा हस्तान्तरण',
      descEn: 'Packed securely and transported via dedicated vehicles directly to your construction site, school, or office.',
      descNe: 'सामान सुरक्षित प्याकिङ गरी तपाईंको कार्यस्थल, विद्यालय वा कार्यालयसम्म सिधै पुर्याइन्छ।',
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How Procurement Works Workflow */}
        <div className="bg-gray-100 dark:bg-slate-800/50 rounded-3xl p-6 sm:p-10 mb-16 border border-gray-200 dark:border-slate-700">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {lang === 'ne' ? 'हाम्रो अर्डर तथा ढुवानी प्रक्रिया' : 'How Order Fulfillment Works'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-2">
              {lang === 'ne'
                ? 'समयमै सुरक्षित र सही सामान कार्यस्थलमै पुर्याउने हाम्रो ३-चरणको प्रणाली।'
                : 'A seamless 3-step procurement pipeline from blueprint submission to on-site delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#1e3a8a]/20 dark:text-blue-400/20">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1">
                    {lang === 'ne' ? step.titleNe : step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {lang === 'ne' ? step.descNe : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Logistics Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-200 dark:border-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#f97316]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                {lang === 'ne' ? 'द्रुत डेलिभरी सेवा' : 'Same-Day Local Dispatch'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                {lang === 'ne'
                  ? 'थिमी, भक्तपुर, राधे राधे र सल्लाघारी क्षेत्रमा बिहान अर्डर गर्दा सोही दिन ढुवानी।'
                  : 'Orders placed before 1:00 PM dispatched same afternoon in Thimi and Bhaktapur core.'}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-200 dark:border-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#1e3a8a] dark:text-blue-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                {lang === 'ne' ? 'फराकिलो लोडिङ सुविधा' : 'Wide Loading Frontage'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                {lang === 'ne'
                  ? 'कैलाश चोकमा टिपर, पिकअप र ट्रक रोक्न सक्ने सहज सडक पहुँच।'
                  : 'Direct road frontage at Kailash Chowk for fast truck, tipper, and pickup loading.'}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-200 dark:border-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                {lang === 'ne' ? '१००% सक्कली सामग्री' : 'NS & ISO Certified'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                {lang === 'ne'
                  ? 'हरेक पाइप र फिटिङ्स आधिकारिक उत्पादकबाट सिधै आयातित।'
                  : 'Zero duplicate batches. Direct manufacturer supply channels for plumbing and paper.'}
              </p>
            </div>
          </div>
        </div>

        {/* Services FAQ Section */}
        <FaqSection lang={lang} categoryFilter="Delivery & Orders" />
      </div>
    </div>
  );
};
