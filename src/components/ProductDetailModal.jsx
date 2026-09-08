import React, { useState } from 'react';
import { X, Star, ShieldCheck, Check, Sparkles, Truck, Zap } from 'lucide-react';
import EMICalculatorWidget from './EMICalculatorWidget';

export default function ProductDetailModal({ product, userPortfolio, onClose, onProceedToCheckout }) {
  const [selectedColor, setSelectedColor] = useState(product.variants?.colors?.[0] || null);
  const [selectedStorage, setSelectedStorage] = useState(product.variants?.storage?.[0] || null);
  const [selectedPlan, setSelectedPlan] = useState(
    product.emiPlans.find(p => p.recommended) || product.emiPlans[0]
  );

  const finalPrice = product.price + (selectedStorage?.priceDelta || 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: Image & Highlights */}
          <div className="space-y-4">
            
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-4 flex items-center justify-center">
              <img 
                src={selectedColor?.image || product.image} 
                alt={product.title} 
                className="w-full h-full object-cover object-center rounded-xl"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-100 text-[#5b21b6] text-xs font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#6320ee]" /> {product.badge}
              </span>
            </div>

            {/* Key Product Highlights */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2.5">
              <h5 className="font-bold text-purple-950 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#6320ee]" /> Key Features & Specs
              </h5>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#6320ee] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery & Warranty info */}
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#6320ee]" />
                <span>Delivery in 2-3 Days</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>1 Year Official Warranty</span>
              </div>
            </div>

          </div>

          {/* Right Column: Title, Variants & EMI Calculator */}
          <div className="space-y-5">
            
            {/* Title & Brand */}
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#6320ee] uppercase tracking-wider mb-1">
                <span>{product.brand}</span>
                <span>•</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {product.title}
              </h2>
            </div>

            {/* Price Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium">Total Price:</span>
                <div className="text-2xl font-black text-slate-900">
                  ₹{finalPrice.toLocaleString('en-IN')}
                </div>
              </div>
              {product.discountPercent > 0 && (
                <div className="text-right">
                  <span className="text-xs line-through text-slate-400">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <div className="text-xs font-bold text-emerald-600">Save {product.discountPercent}% OFF</div>
                </div>
              )}
            </div>

            {/* Variant Selector: Color */}
            {product.variants?.colors && product.variants.colors.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Select Color: <span className="text-[#6320ee] font-extrabold">{selectedColor?.name}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {product.variants.colors.map((color) => {
                    const isSelected = selectedColor?.id === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                          isSelected 
                            ? 'bg-purple-100 border-[#6320ee] text-[#5b21b6] shadow-sm' 
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-slate-300" 
                          style={{ backgroundColor: color.hex }}
                        ></span>
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Variant Selector: Storage / Spec */}
            {product.variants?.storage && product.variants.storage.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Select Specification:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.storage.map((opt) => {
                    const isSelected = selectedStorage?.id === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedStorage(opt)}
                        className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                          isSelected 
                            ? 'bg-purple-100 border-[#6320ee] text-[#5b21b6] shadow-sm' 
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {opt.label}
                        {opt.priceDelta > 0 && (
                          <span className="text-[10px] text-[#6320ee] block font-normal">+₹{opt.priceDelta.toLocaleString('en-IN')}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* EMI Plan Selector Widget */}
            <EMICalculatorWidget 
              productPrice={finalPrice}
              emiPlans={product.emiPlans}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              userPortfolio={userPortfolio}
              minMFCollateralRequired={product.minMFCollateralRequired}
            />

            {/* CTA Button */}
            <button
              onClick={() => onProceedToCheckout({
                product: { ...product, price: finalPrice },
                selectedVariantColor: selectedColor,
                selectedVariantStorage: selectedStorage,
                selectedPlan
              })}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#6320ee] to-[#7c3aed] hover:from-[#531ad6] hover:to-[#6d28d9] text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-purple-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Proceed with {selectedPlan.tenureMonths} Months EMI</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
