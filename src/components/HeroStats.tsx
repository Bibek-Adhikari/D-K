import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Layers, MapPin } from 'lucide-react';
import { translations } from '../constants/translations';

interface HeroStatsProps {
  lang: 'en' | 'ne';
}

export const HeroStats: React.FC<HeroStatsProps> = ({ lang }) => {
  const t = translations[lang];

  const stats = [
    {
      value: t.stats.stat1Value,
      label: t.stats.stat1Label,
      icon: ShieldCheck,
      color: 'text-amber-400'
    },
    {
      value: t.stats.stat2Value,
      label: t.stats.stat2Label,
      icon: Clock,
      color: 'text-emerald-400'
    },
    {
      value: t.stats.stat3Value,
      label: t.stats.stat3Label,
      icon: Layers,
      color: 'text-amber-400'
    },
    {
      value: t.stats.stat4Value,
      label: t.stats.stat4Label,
      icon: MapPin,
      color: 'text-cyan-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-800">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.08 }}
            className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/80 p-3.5 sm:p-4 rounded-xl transition-colors group"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Icon className={`w-4 h-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className="text-lg sm:text-xl font-black text-white font-mono tracking-tight">
                {stat.value}
              </div>
            </div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-300 line-clamp-1">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
