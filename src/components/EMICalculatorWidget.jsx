import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function EMICalculatorWidget({ 
  productPrice, 
  emiPlans, 
  selectedPlan, 
  setSelectedPlan, 
  userPortfolio,
  minMFCollateralRequired 
}) {
  const currentPlan = selectedPlan || emiPlans.find(p => p.recommended) || emiPlans[0];

  const calculateMonthlyInstallment = (plan) => {
    const tenure = plan.tenureMonths;
    if (plan.interestRate === 0) {
      return Math.round(productPrice / tenure);
    } else {
      const monthlyRate = (plan.interestRate / 12) / 100;
      const emi = (productPrice * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
      return Math.round(emi);
    }
  };

  const monthlyEMI = calculateMonthlyInstallment(currentPlan);
  const totalPayable = (monthlyEMI * currentPlan.tenureMonths) + currentPlan.processingFee - currentPlan.cashback;
  const isCoveredByMF = userPortfolio.availableCreditLimit >= productPrice;

  return (
    <div className="bg-white border border-purple-100 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
      
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#5b21b6] flex items-center justify-center font-black text-xs">
            1Fi
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Select EMI Plan</h4>
            <p className="text-[11px] text-slate-400">Backed by Mutual Fund Credit Line</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-purple-50 text-[#5b21b6] border border-purple-200 text-[11px] font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#6320ee]" /> No Liquidation
        </span>
      </div>

      {/* Tenure Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {emiPlans.map((plan) => {
          const emiVal = calculateMonthlyInstallment(plan);
          const isSelected = currentPlan.tenureMonths === plan.tenureMonths;

          return (
            <button
              key={plan.tenureMonths}
              onClick={() => setSelectedPlan(plan)}
              className={`relative p-3 rounded-xl border text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-purple-50/80 border-[#6320ee] ring-2 ring-[#6320ee] shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full bg-[#6320ee] text-[9px] font-black text-white uppercase tracking-wider shadow-sm">
                  BEST VALUE
                </span>
              )}

              <div className="text-xs font-semibold text-slate-500 mb-1">
                {plan.tenureMonths} Months
              </div>
              <div className={`text-base font-extrabold ${isSelected ? 'text-[#5b21b6]' : 'text-slate-900'}`}>
                ₹{emiVal.toLocaleString('en-IN')}
                <span className="text-[10px] font-normal text-slate-400">/mo</span>
              </div>

              <div className="mt-1 flex items-center justify-between text-[10px]">
                <span className={plan.interestRate === 0 ? 'text-emerald-600 font-bold' : 'text-slate-500'}>
                  {plan.interestRate === 0 ? '0% Interest' : `${plan.interestRate}% APR`}
                </span>
                {plan.cashback > 0 && (
                  <span className="text-amber-600 font-bold">₹{plan.cashback} OFF</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Breakdown Details */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
        <div className="flex justify-between text-slate-600">
          <span>Monthly Installment ({currentPlan.tenureMonths} Months)</span>
          <span className="font-bold text-slate-900">₹{monthlyEMI.toLocaleString('en-IN')} / mo</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Down Payment</span>
          <span className="font-bold text-emerald-600">₹{currentPlan.downPayment} (₹0 Upfront)</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Processing Fee</span>
          <span className="font-bold text-slate-900">
            {currentPlan.processingFee === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `₹${currentPlan.processingFee}`}
          </span>
        </div>
        {currentPlan.cashback > 0 && (
          <div className="flex justify-between text-amber-600 font-bold">
            <span>1Fi Cashback Discount</span>
            <span>- ₹{currentPlan.cashback}</span>
          </div>
        )}
        <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-extrabold">
          <span className="text-slate-800">Net Payable Amount</span>
          <span className="text-[#5b21b6]">₹{totalPayable.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Mutual Fund Collateral Coverage Banner */}
      <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#6320ee] shrink-0" />
          <div>
            <div className="font-bold text-purple-950">1Fi Credit Line Status</div>
            <div className="text-[11px] text-slate-500">
              {isCoveredByMF 
                ? `Covered by your ₹${userPortfolio.availableCreditLimit.toLocaleString('en-IN')} Mutual Fund limit`
                : `Requires lien marking on ₹${minMFCollateralRequired.toLocaleString('en-IN')} MF portfolio`
              }
            </div>
          </div>
        </div>
        <div className="px-2 py-1 rounded bg-purple-200 text-[#5b21b6] font-bold text-[10px] uppercase tracking-wide">
          {isCoveredByMF ? "Pre-Approved" : "Eligible"}
        </div>
      </div>

    </div>
  );
}
