import React, { useState } from 'react';
import { X, ShieldCheck, ArrowRight, CheckCircle2, Lock, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ 
  product, 
  selectedVariantColor, 
  selectedVariantStorage, 
  selectedPlan, 
  userPortfolio, 
  onClose,
  onOrderSuccess 
}) {
  const [step, setStep] = useState(1);
  const [otp] = useState(['1', '7', '4', '8', '9', '2']);
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateMonthlyEMI = () => {
    const tenure = selectedPlan.tenureMonths;
    if (selectedPlan.interestRate === 0) {
      return Math.round(product.price / tenure);
    } else {
      const monthlyRate = (selectedPlan.interestRate / 12) / 100;
      const emi = (product.price * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
      return Math.round(emi);
    }
  };

  const monthlyEMI = calculateMonthlyEMI();

  const handleProceedToLien = () => {
    setStep(2);
  };

  const handleProceedToOTP = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 1200);
  };

  const handleFinalSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      onOrderSuccess(product.price);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5 my-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Progress Bar */}
        <div className="flex items-center justify-between px-2 pt-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1.5 flex-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === i 
                  ? 'bg-[#6320ee] text-white shadow-md shadow-purple-900/20 ring-2 ring-purple-400' 
                  : step > i 
                  ? 'bg-purple-100 text-[#5b21b6] border border-purple-200' 
                  : 'bg-slate-100 text-slate-400'
              }`}>
                {step > i ? <CheckCircle2 className="w-4 h-4" /> : i}
              </div>
              {i < 4 && (
                <div className={`h-1 flex-1 rounded-full ${step > i ? 'bg-[#6320ee]' : 'bg-slate-200'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* STEP 1: REVIEW ORDER */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-extrabold text-slate-900">Review 1Fi EMI Plan</h3>
              <p className="text-xs text-slate-500">Zero Down Payment • Instant Lien Approval</p>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-xl bg-white" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{product.title}</h4>
                <div className="text-xs text-slate-500">
                  {selectedVariantColor?.name} • {selectedVariantStorage?.label}
                </div>
                <div className="text-sm font-extrabold text-[#5b21b6] mt-0.5">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Chosen Tenure</span>
                <span className="font-bold text-slate-900">{selectedPlan.tenureMonths} Months</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Monthly Installment</span>
                <span className="text-base font-black text-[#5b21b6]">₹{monthlyEMI.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">Interest Rate</span>
                <span className="font-bold text-emerald-600">
                  {selectedPlan.interestRate === 0 ? "0% No-Cost EMI" : `${selectedPlan.interestRate}% APR`}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600">First EMI Date</span>
                <span className="font-medium text-slate-800">8th October, 2026</span>
              </div>
            </div>

            <button
              onClick={handleProceedToLien}
              className="w-full py-3 px-4 rounded-xl bg-[#6320ee] hover:bg-[#521ad4] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 transition-all"
            >
              <span>Continue to Mutual Fund Lien Marking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: LIEN MARKING */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-extrabold text-slate-900">Pledge Mutual Funds for Credit</h3>
              <p className="text-xs text-slate-500">Your investments keep earning compounding returns while you enjoy 0% EMI</p>
            </div>

            <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
              {userPortfolio.funds.map((fund, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-800">{fund.name}</div>
                    <div className="text-[11px] text-slate-500">Units: {fund.units} • LTV: {fund.eligibleLTV}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-[#5b21b6]">₹{fund.val.toLocaleString('en-IN')}</div>
                    <span className="text-[10px] text-emerald-600 font-bold">Lien Approved</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 flex items-start gap-2 text-xs text-slate-600">
              <Lock className="w-4 h-4 text-[#6320ee] shrink-0 mt-0.5" />
              <span>
                1Fi uses RBI-regulated CAMS / KFintech lien marking. You remain 100% owner of all mutual fund units.
              </span>
            </div>

            <button
              onClick={handleProceedToOTP}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-[#6320ee] hover:bg-[#521ad4] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Lien Eligibility...</span>
                </>
              ) : (
                <>
                  <span>Authorize & E-Sign</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 3: OTP / E-SIGN */}
        {step === 3 && (
          <div className="space-y-4 text-center">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Verify E-Sign OTP</h3>
              <p className="text-xs text-slate-500">Enter the 6-digit OTP sent to +91 98*** **410</p>
            </div>

            <div className="flex justify-center gap-2 py-2">
              {otp.map((digit, idx) => (
                <div 
                  key={idx} 
                  className="w-10 h-12 rounded-xl bg-slate-50 border border-purple-300 flex items-center justify-center text-lg font-black text-[#5b21b6] shadow-inner"
                >
                  {digit}
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-[#5b21b6] font-bold">
              ⚡ Instant 1Fi Order Authorization & Automatic EMI mandate creation.
            </div>

            <button
              onClick={handleFinalSubmit}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-[#6320ee] hover:bg-[#521ad4] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Confirming Order & Mandate...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Purchase with 1Fi EMI</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 4: SUCCESS CONFIRMATION */}
        {step === 4 && (
          <div className="space-y-5 text-center py-2">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-[#6320ee] border border-purple-300 flex items-center justify-center mx-auto animate-bounce shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">Order Placed Successfully!</h3>
              <p className="text-xs text-[#6320ee] font-extrabold mt-1">1Fi Order ID: #1FI-89241</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Product</span>
                <span className="font-bold text-slate-900">{product.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Monthly EMI</span>
                <span className="font-extrabold text-[#5b21b6]">₹{monthlyEMI.toLocaleString('en-IN')} / mo ({selectedPlan.tenureMonths}m)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Delivery</span>
                <span className="font-medium text-slate-800">11th September, 2026</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            >
              Back to Marketplace
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
