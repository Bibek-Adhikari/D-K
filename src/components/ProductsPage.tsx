import React, { useState } from 'react';
import {
  Check,
  Info,
  Phone,
  PackageCheck,
  X,
} from 'lucide-react';
import { FEATURED_PRODUCTS, BUSINESS_INFO } from '../data/products';
import { Product } from '../types';

interface ProductsPageProps {
  lang: 'en' | 'ne';
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  lang,
}) => {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Cards Grid */}
        {FEATURED_PRODUCTS.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
            <PackageCheck className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {lang === 'ne' ? 'कुनै सामान उपलब्ध छैन' : 'No products available'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {lang === 'ne'
                ? 'हामीसँग अन्य थुप्रै सामानहरू पसलमा उपलब्ध छन्। कृपया ९८५१०५६५२२ मा व्हाट्सएप गर्नुहोस्।'
                : 'We carry thousands of additional unlisted hardware and stationery lines. WhatsApp our sales desk directly!'}
            </p>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>9851056522</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 bg-gray-100 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {product.brand && (
                      <span className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {product.brand}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f97316]">
                        {product.category}
                      </span>
                      <h3 className="font-bold text-base text-gray-900 dark:text-white mt-1 line-clamp-2 leading-snug">
                        {lang === 'ne' && product.nepaliName ? product.nepaliName : product.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-mono">
                        {product.modelSpec}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {product.priceEstimate && (
                        <div className="mt-3 pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-gray-500 dark:text-slate-400 font-medium">
                            {lang === 'ne' ? 'अनुमानित दर:' : 'Est. Rate:'}
                          </span>
                          <span className="font-bold text-[#1e3a8a] dark:text-orange-400">
                            {product.priceEstimate}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center gap-2">
                      <button
                        onClick={() => setModalProduct(product)}
                        className="flex-1 py-2 px-3 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                        title="View Specifications"
                      >
                        <Info className="w-4 h-4" />
                        <span>{lang === 'ne' ? 'विवरण हेर्नुहोस्' : 'View Specs'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Bulk Procurement Callout */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#1e3a8a] to-blue-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="inline-block bg-[#f97316] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              {lang === 'ne' ? 'विशेष थोक सुविधा' : 'Bulk Contractor & School Accounts'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              {lang === 'ne'
                ? 'के तपाईंलाई ठूलो परिमाणमा हार्डवेयर वा स्टेसनरी सामग्री चाहिन्छ?'
                : 'Need Custom Quantities, Special Pipe Dimensions, or Office Supplies?'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
              {lang === 'ne'
                ? 'आफ्नो सामानको सूची सिधै पठाउनुहोस् वा कैलाश चोक शाखामा सम्पर्क गर्नुहोस्। हामी तुरुन्तै आधिकारिक दररेट उपलब्ध गराउँछौं।'
                : 'Send your material or stationery requirements for direct tier-discount pricing and doorstep delivery.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>9851056522</span>
            </a>
          </div>
        </div>

        {/* Specification Modal */}
        {modalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-800 flex flex-col max-h-[90vh]">
              <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-slate-800/50">
                <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
                  {modalProduct.category}
                </span>
                <button
                  onClick={() => setModalProduct(null)}
                  className="p-1 rounded-lg text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto space-y-4">
                <div className="h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800">
                  <img
                    src={modalProduct.imageUrl}
                    alt={modalProduct.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {lang === 'ne' && modalProduct.nepaliName ? modalProduct.nepaliName : modalProduct.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 font-mono mt-0.5">
                    {modalProduct.modelSpec}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {modalProduct.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-slate-300 mb-2">
                    {lang === 'ne' ? 'प्राविधिक विशेषताहरू (Features):' : 'Key Specifications & Features:'}
                  </h4>
                  <ul className="space-y-1.5">
                    {modalProduct.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-600 dark:text-slate-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {modalProduct.priceEstimate && (
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-700 dark:text-slate-300">
                      {lang === 'ne' ? 'थोक तथा खुद्रा अनुमानित दर:' : 'Wholesale / Retail Estimate:'}
                    </span>
                    <span className="font-bold text-[#1e3a8a] dark:text-orange-400">
                      {modalProduct.priceEstimate}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-gray-100 dark:border-slate-800 flex gap-2">
                <button
                  onClick={() => setModalProduct(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 font-semibold text-xs hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {lang === 'ne' ? 'बन्द गर्नुहोस्' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
