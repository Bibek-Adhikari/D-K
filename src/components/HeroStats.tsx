import React from 'react';
import { translations } from '../constants/translations';

interface HeroStatsProps {
  lang?: 'en' | 'ne';
}

export const HeroStats: React.FC<HeroStatsProps> = ({ lang = 'en' }) => {
  const t = translations[lang];

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16">
      {[
        { label: t.yearsTrust, value: '10+' },
        { label: t.happyClients, value: '5000+' },
        { label: t.qualityCheck, value: '100%' },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-sm border border-white/10 p-3 md:p-4 rounded-2xl text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
          <div className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold opacity-80">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
