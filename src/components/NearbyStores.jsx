import React from 'react';

export default function NearbyStores() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-white rounded-3xl border border-slate-100 shadow-sm my-4">
      <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-[#5b21b6]">
        <i className="bi bi-geo-alt-fill text-3xl"></i>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Nearby Stores</h3>
      <p className="text-sm text-slate-400 max-w-sm">
        This section is reserved for offline physical store listings. No implementation is required.
      </p>
    </div>
  );
}
