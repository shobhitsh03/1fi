import React from 'react';

export default function SkeletonLoader({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, idx) => (
        <div 
          key={idx} 
          className="bg-white border border-slate-100 rounded-[24px] p-4 space-y-4 animate-pulse shadow-sm"
        >
          <div className="flex justify-between items-center">
            <div className="h-4 w-20 bg-slate-200 rounded-full"></div>
            <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
          </div>
          
          <div className="aspect-[4/3] w-full bg-slate-100 rounded-2xl"></div>

          <div className="space-y-2">
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-200 rounded"></div>
            <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
          </div>

          <div className="h-14 w-full bg-purple-50 rounded-2xl"></div>
          <div className="h-9 w-full bg-purple-100 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
}
