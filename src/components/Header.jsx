import React from 'react';
import { ShieldCheck, Smartphone, Monitor } from 'lucide-react';

export default function Header({ 
  userPortfolio, 
  deviceFrame, 
  setDeviceFrame 
}) {
  return (
    <header className="relative bg-gradient-to-r from-[#4c1d95] via-[#5b21b6] to-[#6320ee] text-white px-4 pt-4 pb-6 shadow-md rounded-b-[28px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md p-1 border border-white/30 flex items-center justify-center font-extrabold text-xl text-white shadow-inner">
            1Fi
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-extrabold text-lg tracking-tight text-white">
              1Fi <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30 font-semibold uppercase">Shop & EMI</span>
            </div>
            <p className="text-[11px] text-purple-200 font-medium">Loans Against Mutual Funds</p>
          </div>
        </div>

        {/* Mutual Fund Limit Pill */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-sm">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </div>
          <div className="text-xs font-medium">
            <span className="text-purple-200">MF Credit Line: </span>
            <span className="font-extrabold text-white">₹{userPortfolio.availableCreditLimit.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full text-emerald-200 font-bold border border-emerald-400/30">
            <ShieldCheck className="w-3 h-3" /> Pre-Approved
          </div>
        </div>

        {/* View Controls & Profile Avatar */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDeviceFrame(!deviceFrame)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-xs text-white border border-white/20 transition-all shadow-sm font-medium"
            title="Toggle Mobile Frame / Full Screen view"
          >
            {deviceFrame ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{deviceFrame ? "Full Screen" : "Mobile View"}</span>
          </button>

          <div className="w-9 h-9 rounded-full bg-white text-[#5b21b6] font-black text-xs flex items-center justify-center shadow-md border-2 border-purple-300">
            SS
          </div>
        </div>

      </div>
    </header>
  );
}
