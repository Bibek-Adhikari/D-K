import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Tag, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  FileText, 
  Share2, 
  CheckCircle2, 
  UserCheck 
} from 'lucide-react';
import { BLOG_POSTS, BUSINESS_INFO } from '../data/products';
import { BlogPost } from '../types';

interface BlogResourcesProps {
  lang: 'en' | 'ne';
  onNavigateToBoq: () => void;
}

export const BlogResources: React.FC<BlogResourcesProps> = ({
  lang,
  onNavigateToBoq,
}) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Plumbing', 'Stationery', 'Tools', 'Office Supplies', 'Home Improvement'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedTag === 'All') return true;
    return post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());
  });

  if (activePost) {
    return (
      <div className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => setActivePost(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1e3a8a] dark:text-orange-400 hover:underline mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'ne' ? 'सबै लेखहरूमा फर्कनुहोस्' : 'Back to All Guides & Articles'}</span>
          </button>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-[#1e3a8a] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {activePost.category}
              </span>
              <span className="text-xs text-gray-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
              <span className="text-xs text-gray-400 dark:text-slate-500">•</span>
              <span className="text-xs text-gray-500 dark:text-slate-400">
                {activePost.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              {lang === 'ne' ? activePost.titleNe : activePost.title}
            </h1>

            <div className="mt-4 pb-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-gray-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#f97316]" />
                <span>By {activePost.author}</span>
              </div>
              <div className="flex items-center gap-1">
                {activePost.tags.map((t, idx) => (
                  <span key={idx} className="bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="mt-6 text-gray-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              <p className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                {lang === 'ne' ? activePost.excerptNe : activePost.excerpt}
              </p>
              <div className="pt-2">
                {activePost.content}
              </div>
            </div>

            {/* In-Article Callout */}
            <div className="mt-10 p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-[#1e3a8a] dark:text-blue-200">
                  {lang === 'ne' ? 'यस लेखमा उल्लेखित सामग्री पसलमा उपलब्ध छन्' : 'Materials Mentioned in this Guide Available in Store'}
                </h4>
                <p className="text-xs text-gray-600 dark:text-slate-300 mt-0.5">
                  {lang === 'ne'
                    ? 'कैलाश चोक, मध्यपुर थिमी शाखामा तत्काल स्टक प्रमाणित गरी उठाउन वा मगाउन सक्नुहुन्छ।'
                    : 'Call 01-5925757 or request a quick BOQ estimate directly.'}
                </p>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={onNavigateToBoq}
                  className="flex-1 sm:flex-initial bg-[#1e3a8a] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === 'ne' ? 'कोटेसन' : 'BOQ'}</span>
                </button>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 sm:flex-initial bg-[#f97316] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-[#1e3a8a] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-xs">
            {lang === 'ne' ? 'ज्ञान केन्द्र तथा ब्लग' : 'Practical Knowledge & DIY Guides'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {lang === 'ne'
              ? 'हार्डवेयर, प्लम्बिङ र स्टेसनरी सम्बन्धी उपयोगी सल्लाहहरू'
              : 'Hardware, Plumbing & Stationery Guides'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-slate-300">
            {lang === 'ne'
              ? 'काठमाडौँ उपत्यकाको मौसम, निर्माण शैली र विद्यालय-कार्यालयको व्यवस्थापनलाई उपयोगी हुने प्राविधिक सामग्रीहरू।'
              : 'Expert tips on plumbing standards, office budget savings, and essential home maintenance in Nepal.'}
          </p>

          {/* Tag filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTag === t
                    ? 'bg-[#1e3a8a] text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-slate-400 mb-3">
                  <span className="font-bold text-[#f97316] uppercase text-[10px] tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#1e3a8a] dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {lang === 'ne' ? post.titleNe : post.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {lang === 'ne' ? post.excerptNe : post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex gap-1">
                  {post.tags.slice(0, 2).map((tg, idx) => (
                    <span key={idx} className="bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded">
                      #{tg}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1e3a8a] dark:text-orange-400 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>{lang === 'ne' ? 'पूरा पढ्नुहोस्' : 'Read Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
