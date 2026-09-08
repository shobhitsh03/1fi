import React from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const recommendedEMIPlan = product.emiPlans.find(p => p.recommended) || product.emiPlans[0];
  const monthlyEMI = Math.round(product.price / recommendedEMIPlan.tenureMonths);

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="group relative bg-white hover:bg-slate-50/80 border border-slate-100 hover:border-purple-200 rounded-[24px] p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(99,32,238,0.12)] hover:-translate-y-1"
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="px-2.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold text-[#6320ee] flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#6320ee]" /> {product.badge}
        </span>
        {product.isBestSeller && (
          <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-700">
            BEST SELLER
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50 mb-3 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center rounded-xl"
          loading="lazy"
        />
      </div>

      {/* Brand & Title */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6320ee]">{product.brand}</span>
          <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
          </div>
        </div>
        <h4 className="font-bold text-slate-800 text-sm sm:text-base line-clamp-2 mb-2 group-hover:text-[#6320ee] transition-colors">
          {product.title}
        </h4>
      </div>

      {/* Price & EMI Highlight Box */}
      <div className="mt-2 pt-3 border-t border-slate-100 space-y-2">
        {/* Full Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-400">Full Price: </span>
            <span className="text-sm font-bold text-slate-800">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          {product.discountPercent > 0 && (
            <span className="text-[10px] line-through text-slate-400">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>

        {/* EMI Box */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-50 via-slate-50 to-purple-50/50 border border-purple-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">1Fi EMI Starts From</div>
            <div className="text-base font-black text-[#5b21b6]">
              ₹{monthlyEMI.toLocaleString('en-IN')}
              <span className="text-xs font-normal text-slate-500">/mo</span>
            </div>
          </div>
          <div className="text-right text-[10px] text-purple-700 font-bold">
            <span>{recommendedEMIPlan.tenureMonths} Months</span>
            <div className="text-emerald-600 text-[10px] font-bold">{recommendedEMIPlan.interestRate === 0 ? "0% Interest" : `${recommendedEMIPlan.interestRate}% APR`}</div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
          className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#6320ee] hover:bg-[#521ad4] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md shadow-purple-900/10"
        >
          <span>Select EMI Plan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
