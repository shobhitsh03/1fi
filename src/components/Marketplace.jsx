import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import CheckoutModal from './CheckoutModal';
import SkeletonLoader from './SkeletonLoader';
import { marketplaceApi } from '../services/apiService';

export default function Marketplace({ userPortfolio, onOrderSuccess }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [onlyZeroPercent, setOnlyZeroPercent] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);

  const categories = [
    "All",
    "Smartphones",
    "Laptops",
    "Audio",
    "Smartwatches",
    "Appliances",
    "Gaming"
  ];

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await marketplaceApi.getProducts({
        category: selectedCategory,
        searchQuery,
        sortBy,
        onlyZeroPercent
      });
      setProducts(response.data);
    } catch (err) {
      console.error("Failed to fetch products from API:", err);
      setError("Unable to load marketplace products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, searchQuery, sortBy, onlyZeroPercent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts();
    }, 200);

    return () => clearTimeout(timer);
  }, [loadProducts]);

  const handleProceedToCheckout = (data) => {
    setSelectedProduct(null);
    setCheckoutData(data);
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-16 sm:pb-12">
      
      {/* Marketplace Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#4c1d95] via-[#5b21b6] to-[#6320ee] text-white p-4 sm:p-6 md:p-8 shadow-xl shadow-purple-900/10">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <i className="bi bi-stars"></i>
            <span>1Fi Affordability Marketplace</span>
          </div>
          
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
            Shop Premium Tech on <span className="text-amber-300 underline decoration-amber-400">0% EMI</span>
          </h1>

          <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-medium">
            Use your Mutual Fund credit line to purchase top smartphones, laptops, audio & appliances. <strong className="text-white font-bold">₹0 Down Payment</strong> & no liquidation of your investments.
          </p>

          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-white">
            <div className="flex items-center gap-1.5 bg-white/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/20">
              <i className="bi bi-shield-check text-emerald-300 text-sm"></i>
              <span>Instant Lien Approval</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/20">
              <i className="bi bi-lightning-charge-fill text-amber-300 text-sm"></i>
              <span>0% Interest EMIs</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/20">
              <i className="bi bi-tag-fill text-cyan-300 text-sm"></i>
              <span>Up to ₹7,500 Cashback</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-3 sm:space-y-4">
        
        {/* Search Input Row matching 1Fi screenshot */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          
          <div className="relative flex-1">
            <i className="bi bi-search absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input 
              type="text"
              placeholder="Search online stores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 rounded-full bg-white border border-slate-200 focus:border-[#6320ee] text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 justify-between sm:justify-end overflow-x-auto">
            <button
              onClick={() => setOnlyZeroPercent(!onlyZeroPercent)}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                onlyZeroPercent 
                  ? 'bg-purple-100 border-[#6320ee] text-[#5b21b6] shadow-sm' 
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className={`bi bi-lightning-charge-fill ${onlyZeroPercent ? 'text-[#6320ee]' : 'text-slate-400'}`}></i>
              <span>0% EMI Only</span>
            </button>

            <div className="relative flex items-center">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 pr-7 sm:pr-8 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#6320ee] cursor-pointer shadow-sm"
              >
                <option value="recommended">Featured & Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <i className="bi bi-arrow-down-up text-slate-400 text-xs absolute right-2.5 sm:right-3 pointer-events-none"></i>
            </div>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1 -mx-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#6320ee] text-white shadow-md shadow-purple-900/15'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Dynamic API Product Grid */}
      {isLoading ? (
        <SkeletonLoader count={8} />
      ) : error ? (
        <div className="p-6 sm:p-8 text-center bg-white rounded-3xl border border-red-200 shadow-sm space-y-3">
          <i className="bi bi-exclamation-circle-fill text-2xl text-red-500 mx-auto block"></i>
          <h3 className="text-sm sm:text-base font-bold text-slate-800">{error}</h3>
          <button 
            onClick={loadProducts}
            className="px-4 py-2 rounded-full bg-purple-100 text-[#5b21b6] font-bold text-xs hover:bg-purple-200 flex items-center gap-1.5 mx-auto"
          >
            <i className="bi bi-arrow-clockwise text-sm"></i>
            <span>Retry Fetch</span>
          </button>
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={(p) => setSelectedProduct(p)} 
            />
          ))}
        </div>
      ) : (
        <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mx-auto text-[#6320ee]">
            <i className="bi bi-search text-xl"></i>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-800">No products found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or reset filters to browse all 1Fi marketplace items.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setOnlyZeroPercent(false);
            }}
            className="px-4 py-2 rounded-full bg-purple-50 text-[#6320ee] font-bold text-xs border border-purple-200 hover:bg-purple-100"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          userPortfolio={userPortfolio}
          onClose={() => setSelectedProduct(null)}
          onProceedToCheckout={handleProceedToCheckout}
        />
      )}

      {/* Checkout Modal */}
      {checkoutData && (
        <CheckoutModal 
          product={checkoutData.product}
          selectedVariantColor={checkoutData.selectedVariantColor}
          selectedVariantStorage={checkoutData.selectedVariantStorage}
          selectedPlan={checkoutData.selectedPlan}
          userPortfolio={userPortfolio}
          onClose={() => setCheckoutData(null)}
          onOrderSuccess={onOrderSuccess}
        />
      )}

    </div>
  );
}
