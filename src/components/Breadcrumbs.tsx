import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { ActiveView } from '../types';

export interface BreadcrumbCrumb {
  label: string;
  view?: ActiveView;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  onNavigate: (view: ActiveView) => void;
  lang: 'en' | 'ne';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, lang }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full flex items-center text-xs sm:text-sm text-gray-500 dark:text-slate-400"
    >
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center flex-wrap gap-1.5 sm:gap-2"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="inline-flex items-center"
        >
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 hover:text-[#1e3a8a] dark:hover:text-orange-400 transition-colors font-medium cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name">{lang === 'ne' ? 'गृहपृष्ठ' : 'Home'}</span>
          </button>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1 || item.active;

          return (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="inline-flex items-center gap-1.5 sm:gap-2"
            >
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 dark:text-slate-600 flex-shrink-0" />
              {isLast || !item.view ? (
                <span
                  itemProp="name"
                  className="font-semibold text-[#1e3a8a] dark:text-orange-400 truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.view && onNavigate(item.view)}
                  className="hover:text-[#1e3a8a] dark:hover:text-orange-400 transition-colors font-medium cursor-pointer truncate max-w-[160px] sm:max-w-none"
                >
                  <span itemProp="name">{item.label}</span>
                </button>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
