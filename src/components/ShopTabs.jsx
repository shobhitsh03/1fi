import React from 'react';
import { Store, MapPin, Sparkles } from 'lucide-react';

export default function ShopTabs({ activeShopTab, setActiveShopTab }) {
  const tabs = [
    { id: 'top-brands', label: 'Top Brands' },
    { id: 'nearby-stores', label: 'Nearby Stores' },
    { id: 'marketplace', label: '1Fi Marketplace', isSpecial: true }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto -mt-4 mb-6 px-4">
      {/* Pill Container as seen in 1Fi reference screenshot */}
      <div className="bg-[#ede9fe]/90 backdrop-blur-md p-1.5 rounded-full border border-purple-200/60 shadow-lg shadow-purple-900/5 flex items-center justify-between gap-1">
        {tabs.map((tab) => {
          const isActive = activeShopTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveShopTab(tab.id)}
              className={`relative flex-1 py-3 px-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 text-center flex items-center justify-center gap-1.5 ${
                isActive
                  ? 'bg-white text-[#5b21b6] shadow-md shadow-purple-900/10'
                  : 'text-slate-600 hover:text-purple-900 font-semibold'
              }`}
            >
              <span>{tab.label}</span>
              {tab.isSpecial && !isActive && (
                <span className="w-2 h-2 rounded-full bg-[#6320ee] animate-pulse"></span>
              )}

              {/* Active Tab Underline Indicator as in reference screen */}
              {isActive && (
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-0.5 bg-[#6320ee] rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
