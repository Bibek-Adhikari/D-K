import React from 'react';
import { 
  Building2, 
  BookOpenCheck, 
  Wrench, 
  Truck, 
  CheckCircle2, 
  Phone, 
  FileText, 
  MessageCircle,
  Clock,
  MapPin,
  ShieldAlert
} from 'lucide-react';
import { STORE_SERVICES, BUSINESS_INFO } from '../data/products';
import { FaqSection } from './FaqSection';

interface ServicesPageProps {
  lang: 'en' | 'ne';
  onNavigateToBoq: () => void;
  onNavigateToContact: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onNavigateToBoq,
  onNavigateToContact,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-white" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-white" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-white" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-white" />;
      default:
        return <Building2 className="w-6 h-6 text-white" />;
    }
  };

  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Requirement',
      titleEn: 'Submit Your Requirement',
      titleNe: 'सामग्रीको विवरण पठाउनुहोस्',
      descEn: 'Send us your architectural BOQ, photo list, or paper carton count via our web form or WhatsApp.',
      descNe: 'आफ्नो सामानको सूची, BOQ वा आवश्यक स्टेसनरीको परिमाण हाम्रो वेबसाइट फारम वा ह्वाट्सएपमा पठाउनुहोस्।',
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
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#1e3a8a] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-xs">
            {lang === 'ne' ? 'हाम्रा सेवाहरू' : 'Commercial & Technical Services'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {lang === 'ne'
              ? 'निर्माणकर्ता, विद्यालय तथा कार्यालयका लागि समर्पित सेवाहरू'
              : 'Services Built for Builders, Schools & Offices'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-slate-300">
            {lang === 'ne'
              ? 'हार्डवेयर र स्टेसनरी केवल पसलमा किन्ने वस्तु मात्र होइन; हामी प्राविधिक परामर्श र भरपर्दो ढुवानी समेत प्रदान गर्दछौं।'
              : 'From complex multi-floor plumbing calculations to recurring paper deliveries, D&K delivers total supply reliability.'}
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {STORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#1e3a8a] flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f97316]">
                      {service.targetAudience}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug mt-0.5">
                      {lang === 'ne' ? service.titleNe : service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  {lang === 'ne' ? service.descriptionNe : service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-gray-100 dark:border-slate-800">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNavigateToBoq}
                  className="bg-[#1e3a8a] hover:bg-blue-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === 'ne' ? 'कोटेसन अनुरोध' : 'Request Quotation'}</span>
                </button>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

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
