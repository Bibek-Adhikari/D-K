import React, { useState } from 'react';
import { Plus, Check, Info, X, ShieldCheck, Wrench, Droplet, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem, translations } from '../constants/translations';

interface FeaturedProductsProps {
  onAddToBoq: (productName: string) => void;
  addedItems: string[];
  lang: 'en' | 'ne';
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onAddToBoq,
  addedItems,
  lang,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const t = translations[lang];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Plumbing':
      case 'प्लम्बिङ':
        return <Droplet size={20} className="text-blue-500" />;
      case 'Power Tools':
      case 'पावर टुल्स':
        return <Wrench size={20} className="text-[#f97316]" />;
      default:
        return <Sparkles size={20} className="text-amber-500" />;
    }
  };

  return (
    <section id="featured-products" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        
        {/* Section Header matching Binayak Suppliers */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
            {t.products.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 mb-4 tracking-tight">
            {t.products.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t.products.desc}
          </p>
        </div>

        {/* 4-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map((product) => {
            const isAdded = addedItems.includes(lang === 'ne' ? product.nameNe : product.nameEn);
            const categoryName = lang === 'ne' ? product.categoryNe : product.categoryEn;
            const productName = lang === 'ne' ? product.nameNe : product.nameEn;
            const modelSpec = lang === 'ne' ? product.modelSpecNe : product.modelSpecEn;
            const description = lang === 'ne' ? product.descriptionNe : product.descriptionEn;
            const stockStatus = lang === 'ne' ? product.stockStatusNe : product.stockStatusEn;

            return (
              <article
                key={product.id}
                id={`product-${product.id}`}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-slate-800 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Floating Badges */}
                <div className="h-60 overflow-hidden relative bg-gray-100 dark:bg-slate-800">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category icon badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-xs">
                    {getCategoryIcon(categoryName)}
                  </div>

                  {/* Stock Status Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-[#f97316] text-white shadow-md">
                    {stockStatus}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#f97316] uppercase tracking-wider mb-1.5">
                      <span>{categoryName}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-1 group-hover:text-[#f97316] transition-colors leading-snug">
                      {productName}
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-slate-400 font-mono mb-3">
                      {modelSpec}
                    </p>

                    <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onAddToBoq(productName)}
                      className={`flex-1 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                          : 'bg-[#f97316] hover:bg-orange-600 text-white shadow-orange-500/20 hover:scale-[1.02] active:scale-95'
                      }`}
                      aria-label={`Add ${productName} to BOQ`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>{t.products.added}</span>
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          <span>{t.products.addToBoq}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-3 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      title={t.products.specs}
                      aria-label={`View specs for ${productName}`}
                    >
                      <Info size={18} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Product Specs Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
            
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider block mb-1">
                  {lang === 'ne' ? selectedProduct.categoryNe : selectedProduct.categoryEn}
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                  {lang === 'ne' ? selectedProduct.nameNe : selectedProduct.nameEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="h-48 rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-800">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  {lang === 'ne' ? 'विस्तृत विवरण' : 'Model Specification'}
                </h4>
                <p className="text-sm font-mono text-gray-800 dark:text-slate-200">
                  {lang === 'ne' ? selectedProduct.modelSpecNe : selectedProduct.modelSpecEn}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  {t.products.techHighlights}
                </h4>
                <ul className="space-y-2">
                  {(lang === 'ne' ? selectedProduct.featuresNe : selectedProduct.featuresEn).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
                      <ShieldCheck size={16} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 flex gap-3">
              <button
                onClick={() => {
                  onAddToBoq(lang === 'ne' ? selectedProduct.nameNe : selectedProduct.nameEn);
                  setSelectedProduct(null);
                }}
                className="flex-1 bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                {t.products.addToBoq}
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                {t.products.close}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
