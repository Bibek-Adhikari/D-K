import React from 'react';
import { ShieldCheck, Truck, Clock } from 'lucide-react';
import { translations } from '../constants/translations';

interface CommitmentSectionProps {
  lang: 'en' | 'ne';
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const pillars = [
    {
      icon: ShieldCheck,
      title: lang === 'ne' ? '१००% प्रमाणित गुणस्तर' : '100% Certified Genuine Brands',
      desc: lang === 'ne'
        ? 'हामी केवल उद्योग-मानक प्रमाणित सीपीभीसी/पीपीआर पाइप, उच्च गुणस्तरको ब्रास फिटिङ्स र भरपर्दो पावर टुल्स मात्र उपलब्ध गराउँछौं।'
        : 'We strictly stock pressure-tested CPVC/PPR pipes, lead-free certified brass faucets, and industry-grade hardware guaranteed for lasting safety.',
    },
    {
      icon: Truck,
      title: lang === 'ne' ? 'थोक दर र साइट डेलिभरी' : 'Wholesale Rates & Direct Supply',
      desc: lang === 'ne'
        ? 'ठेकेदार, प्लम्बर र नयाँ घर निर्माणकर्ताहरूलाई बजारकै उत्कृष्ट थोक मूल्य र थिमी तथा उपत्यकाभर साइट डेलिभरी सुविधा।'
        : 'Transparent, direct-from-manufacturer wholesale rates for contractors, builders, and homeowners with rapid job-site delivery.',
    },
    {
      icon: Clock,
      title: lang === 'ne' ? 'हप्ताको ७ दिन खुला' : 'Open 7 Days a Week',
      desc: lang === 'ne'
        ? 'तपाईंको निर्माण कार्य नरोकियोस् भनी हामी शनिबार र आइतबार समेत बिहानै ७:०० बजेदेखि बेलुकी ६:०० बजेसम्म खुला रहन्छौं।'
        : 'Construction never pauses. Our Kailash Chowk store opens every single day from 7:00 AM to 6:00 PM for urgent fittings and planned orders.',
    },
  ];

  return (
    <section id="commitment-section" className="py-24 bg-gray-50 dark:bg-slate-900/50 transition-colors">
      <div className="container mx-auto px-4">
        
        {/* Section Header matching Binayak Suppliers */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
            {t.commitment.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 mb-4 tracking-tight">
            {lang === 'ne' ? 'गुणस्तरमा कहिल्यै सम्झौता छैन' : 'No Compromise on Quality'}
          </h2>
          <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t.commitment.desc}
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-950/40 text-[#f97316] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 group-hover:text-[#f97316] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
