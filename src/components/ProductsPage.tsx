import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Check, 
  Plus, 
  Info, 
  X, 
  FileText, 
  Phone, 
  Tag, 
  PackageCheck,
  Wrench,
  BookOpen,
  Droplets,
  Zap
} from 'lucide-react';
import { FEATURED_PRODUCTS, BUSINESS_INFO } from '../data/products';
import { Product, ProductCategory } from '../types';

interface ProductsPageProps {
  lang: 'en' | 'ne';
  onAddToBoq: (productName: string) => void;
  addedItems: string[];
  onNavigateToBoq: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  lang,
  onAddToBoq,
  addedItems,
  onNavigateToBoq,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [stockFilter, setStockFilter] = useState<'All' | 'In Stock' | 'Bulk Available'>('All');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const categories = [
    { key: 'All', labelEn: 'All Departments', labelNe: 'सबै सामान', icon: PackageCheck },
    { key: 'Hardware & Tools', labelEn: 'Hardware & Tools', labelNe: 'हार्डवेयर तथा औजार', icon: Wrench },
    { key: 'Plumbing & Sanitary', labelEn: 'Plumbing & Sanitary', labelNe: 'प्लम्बिङ र सेनेटरी', icon: Droplets },
    { key: 'Stationery & Paper', labelEn: 'Stationery & Paper', labelNe: 'स्टेसनरी तथा पेपर', icon: BookOpen },
    { key: 'Office & School', labelEn: 'Office & School', labelNe: 'कार्यालय र विद्यालय सामग्री', icon: Tag },
    { key: 'Electrical & Paint', labelEn: 'Electrical & Paint', labelNe: 'विद्युत तथा पेन्ट्स', icon: Zap },
  ];

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.nepaliName && product.nepaliName.toLowerCase().includes(query)) ||
        product.description.toLowerCase().includes(query) ||
        (product.brand && product.brand.toLowerCase().includes(query)) ||
        product.modelSpec.toLowerCase().includes(query) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(query));

      const matchesStock =
        stockFilter === 'All' ||
        (stockFilter === 'In Stock' && product.stockStatus === 'In Stock') ||
        (stockFilter === 'Bulk Available' && product.stockStatus === 'Bulk Available');

      return matchesCategory && matchesSearch && matchesStock;
    });
  }, [selectedCategory, searchQuery, stockFilter]);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-[#1e3a8a] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-xs">
            {lang === 'ne' ? 'सम्पूर्ण उत्पादन क्याटलग' : 'Full Products & Materials Catalog'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {lang === 'ne' ? 'हार्डवेयर, सेनेटरी तथा स्टेसनरी सामग्री' : 'Hardware, Plumbing & Stationery'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-slate-300">
            {lang === 'ne'
              ? 'निर्माण व्यवसायी, विद्यालय, कार्यालय तथा घरधनीहरूका लागि गुणस्तरीय सामग्रीहरू सुपथ थोक तथा खुद्रा मूल्यमा।'
              : 'Direct verified stock from top brands for contractors, schools, corporate offices, and homeowners in Kathmandu Valley.'}
          </p>
        </div>

        {/* Search and Filters Strip */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-gray-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Bar */}
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'ne'
                    ? 'पाइप, ड्रिल, A4 पेपर, रजिस्टर, धारा वा ब्राण्ड खोज्नुहोस्...'
                    : 'Search pipes, cordless drills, A4 paper, registers, faucets, or brands...'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Stock Filter Dropdown / Toggle */}
            <div className="md:col-span-4 flex items-center justify-between sm:justify-end gap-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                {lang === 'ne' ? 'स्टक अवस्था:' : 'Stock:'}
              </span>
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value as any)}
                className="py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              >
                <option value="All">{lang === 'ne' ? 'सबै देखाउनुहोस्' : 'All Stock Status'}</option>
                <option value="In Stock">{lang === 'ne' ? 'स्टकमा उपलब्ध' : 'In Stock'}</option>
                <option value="Bulk Available">{lang === 'ne' ? 'थोक अर्डर उपलब्ध' : 'Bulk Available'}</option>
              </select>
            </div>
          </div>

          {/* Department Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-gray-100 dark:border-slate-800 mt-4 pb-1 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1e3a8a] text-white shadow-sm'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{lang === 'ne' ? cat.labelNe : cat.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-slate-400 mb-4 px-1">
          <span>
            {lang === 'ne'
              ? `कूल ${filteredProducts.length} वटा सामग्री फेला पर्यो`
              : `Showing ${filteredProducts.length} verified products`}
          </span>
          {addedItems.length > 0 && (
            <button
              onClick={onNavigateToBoq}
              className="inline-flex items-center gap-1.5 font-bold text-[#f97316] hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>
                {lang === 'ne'
                  ? `${addedItems.length} सामग्री कोटेसनमा थपियो (हेर्नुहोस्)`
                  : `${addedItems.length} items in BOQ quote (View)`}
              </span>
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
            <PackageCheck className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {lang === 'ne' ? 'कुनै सामान फेला परेन' : 'No items match your search'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {lang === 'ne'
                ? 'हामीसँग अन्य थुप्रै सामानहरू पसलमा उपलब्ध छन्। कृपया ०१-५९२५७५७ मा सिधै सोधपुछ गर्नुहोस्।'
                : 'We carry thousands of additional unlisted hardware and stationery lines. Call our sales desk directly!'}
            </p>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="mt-4 inline-flex items-center gap-2 bg-[#f97316] text-white px-5 py-2.5 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>01-5925757</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = addedItems.includes(product.name);

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  {/* Image Container with Badge */}
                  <div className="relative h-48 sm:h-52 bg-gray-100 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                      {product.badge && (
                        <span className="bg-[#1e3a8a] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs">
                          {product.badge}
                        </span>
                      )}
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                        {product.stockStatus === 'In Stock'
                          ? lang === 'ne' ? 'स्टकमा उपलब्ध' : 'In Stock'
                          : lang === 'ne' ? 'थोक उपलब्ध' : 'Bulk Available'}
                      </span>
                    </div>

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
                        className="p-2 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        title="View Specifications"
                      >
                        <Info className="w-4 h-4" />
                        <span className="hidden xs:inline">{lang === 'ne' ? 'विवरण' : 'Specs'}</span>
                      </button>

                      <button
                        onClick={() => onAddToBoq(product.name)}
                        className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-[#1e3a8a] hover:bg-blue-900 text-white shadow-xs hover:shadow-sm'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{lang === 'ne' ? 'कोटेसनमा थपियो' : 'Added to Quote'}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{lang === 'ne' ? '+ कोटेसनमा थप्नुहोस्' : '+ Add to Quote'}</span>
                          </>
                        )}
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
                ? 'आफ्नो सामानको सूची सिधै पठाउनुहोस् वा कैलाश चोक शाखामा सम्पर्क गर्नुहोस्। हामी २ घण्टाभित्र आधिकारिक दररेट उपलब्ध गराउँछौं।'
                : 'Submit your architectural BOQ list or institutional stationery requirements for direct tier-discount pricing and doorstep delivery.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onNavigateToBoq}
              className="bg-[#f97316] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'ne' ? 'BOQ दररेट फारम खोल्नुहोस्' : 'Open BOQ Quote Builder'}</span>
            </button>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>01-5925757</span>
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
                <button
                  onClick={() => {
                    onAddToBoq(modalProduct.name);
                    setModalProduct(null);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{lang === 'ne' ? 'कोटेसनमा थप्नुहोस्' : 'Add to BOQ Quote'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
