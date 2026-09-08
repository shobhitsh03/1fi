import React from 'react';
import { Store } from 'lucide-react';

export default function TopBrands() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-white rounded-3xl border border-slate-100 shadow-sm my-4">
      <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-[#5b21b6]">
        <Store className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Top Brands</h3>
      <p className="text-sm text-slate-400 max-w-sm">
        This section is reserved for brand partner listings. No implementation is required.
      </p>
    </div>
  );
}
