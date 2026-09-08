import React from 'react';

export default function Header({ userPortfolio }) {
  return (
    <header className="relative bg-gradient-to-r from-[#4c1d95] via-[#5b21b6] to-[#6320ee] text-white px-3 sm:px-6 pt-3 sm:pt-4 pb-5 sm:pb-6 shadow-md rounded-b-[24px] sm:rounded-b-[32px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white/20 backdrop-blur-md p-1 border border-white/30 flex items-center justify-center font-black text-lg sm:text-xl text-white shadow-inner shrink-0">
            1Fi
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-1.5 font-extrabold text-base sm:text-lg tracking-tight text-white">
              1Fi <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30 font-semibold uppercase">Shop</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-purple-200 font-medium line-clamp-1">Loans Against Mutual Funds</p>
          </div>
        </div>

        {/* Mutual Fund Available Limit Bar - Responsive Desktop/Tablet */}
        <div className="hidden sm:flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-sm shrink-0">
          <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-emerald-400"></span>
          </div>
          <div className="text-xs font-medium">
            <span className="text-purple-200">MF Credit: </span>
            <span className="font-extrabold text-white">₹{userPortfolio.availableCreditLimit.toLocaleString('en-IN')}</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full text-emerald-200 font-bold border border-emerald-400/30">
            <i className="bi bi-shield-check text-xs"></i>
            <span>Pre-Approved</span>
          </div>
        </div>

        {/* Mobile Mini MF Limit Badge */}
        <div className="flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px] shrink-0">
          <span className="text-purple-200">Credit:</span>
          <span className="font-extrabold text-white">₹{(userPortfolio.availableCreditLimit / 100000).toFixed(1)}L</span>
        </div>

        {/* User Profile Avatar */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#5b21b6] font-black text-xs flex items-center justify-center shadow-md border-2 border-purple-300 shrink-0">
            HR
          </div>
        </div>

      </div>
    </header>
  );
}
