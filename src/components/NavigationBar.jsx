import React from 'react';
import { Home, Store, Receipt, BarChart2, User } from 'lucide-react';

export default function NavigationBar({ activeMainTab, setActiveMainTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop', icon: Store, hasBadge: true },
    { id: 'dues', label: 'EMI Dues', icon: Receipt },
    { id: 'limit', label: 'Limit', icon: BarChart2 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="sticky bottom-3 z-30 px-4 py-1 pointer-events-none">
      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-[32px] px-3 py-2 shadow-xl shadow-purple-900/10 pointer-events-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMainTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveMainTab(item.id)}
              className={`relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-all duration-200 ${
                isActive 
                  ? 'text-[#6320ee] font-bold' 
                  : 'text-slate-400 hover:text-slate-600 font-medium'
              }`}
            >
              {/* Active purple indicator line on top as seen in reference image */}
              {isActive && (
                <div className="absolute -top-2 w-6 h-0.5 bg-[#6320ee] rounded-full"></div>
              )}

              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#6320ee]' : 'text-slate-400'}`} />
                {item.hasBadge && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6320ee] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6320ee]"></span>
                  </span>
                )}
              </div>
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
