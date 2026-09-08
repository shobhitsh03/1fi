import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import ShopTabs from './components/ShopTabs';
import TopBrands from './components/TopBrands';
import NearbyStores from './components/NearbyStores';
import Marketplace from './components/Marketplace';
import { marketplaceApi } from './services/apiService';

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState('shop');
  const [activeShopTab, setActiveShopTab] = useState('marketplace');
  
  const [userPortfolio, setUserPortfolio] = useState({
    name: "Shobhit Shukla",
    totalPortfolioValue: 0,
    pledgedValue: 0,
    availableCreditLimit: 0,
    usedCreditLimit: 0,
    funds: []
  });

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await marketplaceApi.getUserPortfolio();
        setUserPortfolio(response.data);
      } catch (err) {
        console.error("Failed to load user portfolio:", err);
      }
    }
    loadPortfolio();
  }, []);

  const handleOrderSuccess = (orderAmount) => {
    setUserPortfolio(prev => ({
      ...prev,
      usedCreditLimit: prev.usedCreditLimit + orderAmount,
      availableCreditLimit: Math.max(0, prev.availableCreditLimit - orderAmount)
    }));
  };

  return (
    <div className="min-h-screen bg-[#f7f7fc] text-slate-800 flex flex-col selection:bg-purple-200 selection:text-[#5b21b6] font-sans antialiased">
      
      {/* App Container - Naturally responsive across all screen sizes */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">

        {/* Global Header */}
        <Header userPortfolio={userPortfolio} />

        {/* Main Content Body */}
        <main className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6 pb-24 sm:pb-28">

          {/* SHOP PAGE ROUTE */}
          {activeMainTab === 'shop' && (
            <div className="space-y-4 sm:space-y-6">
              
              {/* Shop Header & Option Tabs */}
              <ShopTabs 
                activeShopTab={activeShopTab} 
                setActiveShopTab={setActiveShopTab} 
              />

              {/* Option A: Top Brands (Blank page per requirements) */}
              {activeShopTab === 'top-brands' && (
                <TopBrands />
              )}

              {/* Option B: Nearby Stores (Blank page per requirements) */}
              {activeShopTab === 'nearby-stores' && (
                <NearbyStores />
              )}

              {/* Option C: 1Fi Marketplace (Fully designed and implemented with dynamic API layer) */}
              {activeShopTab === 'marketplace' && (
                <Marketplace 
                  userPortfolio={userPortfolio}
                  onOrderSuccess={handleOrderSuccess}
                />
              )}

            </div>
          )}

          {/* OTHER 1FI APP SECTIONS */}
          {activeMainTab === 'home' && (
            <div className="p-6 sm:p-8 text-center space-y-4 max-w-lg mx-auto py-8 sm:py-12 bg-white rounded-3xl border border-slate-100 shadow-sm my-4 sm:my-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-50 text-[#5b21b6] border border-purple-100 flex items-center justify-center mx-auto">
                <i className="bi bi-stars text-2xl text-[#6320ee]"></i>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Welcome to 1Fi App</h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Unlock instant affordability and zero-cost credit backed by your Mutual Fund portfolio.
              </p>
              <button 
                onClick={() => {
                  setActiveMainTab('shop');
                  setActiveShopTab('marketplace');
                }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#6320ee] hover:bg-[#521ad4] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-900/20"
              >
                Go to 1Fi Shop & Marketplace
              </button>
            </div>
          )}

          {activeMainTab === 'dues' && (
            <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto py-2 sm:py-4">
              <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Active EMI Dues</h3>
                    <p className="text-xs text-slate-500">Track and repay ongoing 1Fi shop installments</p>
                  </div>
                  <i className="bi bi-receipt text-2xl text-[#6320ee]"></i>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-purple-50/50 border border-purple-100 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-800 block">Apple iPhone 16 Pro Max</span>
                    <span className="text-slate-500 text-[11px]">Next installment due on 8th Oct, 2026</span>
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#5b21b6]">₹24,983/mo</span>
                </div>
              </div>
            </div>
          )}

          {activeMainTab === 'limit' && (
            <div className="p-6 sm:p-8 text-center space-y-4 max-w-lg mx-auto py-8 sm:py-12 bg-white rounded-3xl border border-slate-100 shadow-sm my-4 sm:my-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-50 text-[#5b21b6] border border-purple-100 flex items-center justify-center mx-auto">
                <i className="bi bi-graph-up-arrow text-2xl text-[#6320ee]"></i>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">1Fi Credit Line Limit</h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Your pre-approved Loan Against Mutual Funds overdraft limit is ready for 0% EMI shopping.
              </p>
              <div className="text-2xl sm:text-3xl font-black text-[#5b21b6]">
                ₹{userPortfolio.availableCreditLimit.toLocaleString('en-IN')}
              </div>
            </div>
          )}

          {activeMainTab === 'profile' && (
            <div className="p-6 sm:p-8 text-center space-y-4 max-w-lg mx-auto py-8 sm:py-12 bg-white rounded-3xl border border-slate-100 shadow-sm my-4 sm:my-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#6320ee] text-white font-black text-lg sm:text-xl flex items-center justify-center mx-auto shadow-md">
                SS
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Shobhit Shukla</h2>
              <p className="text-xs sm:text-sm text-slate-500">+91 98*** **410 • Verified 1Fi Investor</p>
            </div>
          )}

        </main>

        {/* Main App Navigation Bar */}
        <NavigationBar 
          activeMainTab={activeMainTab} 
          setActiveMainTab={setActiveMainTab} 
        />

      </div>

    </div>
  );
}
