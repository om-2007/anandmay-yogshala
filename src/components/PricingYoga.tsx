/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Shield, CircleHelp, Scale, Calculator, Info } from 'lucide-react';

interface PricingYogaProps {
  onSelectProgram: (programName: string, subType: string) => void;
}

export default function PricingYoga({ onSelectProgram }: PricingYogaProps) {
  const [billingPeriod, setBillingPeriod] = useState<'1m' | '3m' | '6m'>('1m');
  const [customSessions, setCustomSessions] = useState<number>(6);

  // Online Programs pricing mapping
  const onlinePrograms = [
    {
      name: 'Yoga Only',
      sub: 'Self-Discipline Pathway',
      prices: { '1m': 1199, '3m': 3299, '6m': 6199 },
      features: [
        'Structured Live Sessions',
        'Traditional Hatha & Ashtanga practices',
        'Step-by-step posture guidance on form',
        'Direct connection & coach\'s feedback',
        'Online batch access (6:30AM or 7:30PM)'
      ],
      isPopular: false
    },
    {
      name: 'Yoga + Diet Plan',
      sub: 'Complete Somatic Integration',
      prices: { '1m': 1499, '3m': 3499, '6m': 7599 },
      features: [
        'Everything in "Yoga Only"',
        'Personalized Plant-Based Diet Integration',
        'Weight Management & Metabolic support',
        'Weekly diet alignment checks',
        'Priority Coach WhatsApp support channels'
      ],
      isPopular: true
    },
    {
      name: 'Personal 1:1 Online Yoga',
      sub: 'Direct Guru Mentorship',
      prices: { '1m': 2499, '3m': 6749, '6m': 12699 },
      features: [
        'Exclusive Private 1:1 Live Session',
        'Yoga + Diet fully adapted and adjusted',
        '100% Flexible online scheduling',
        'Custom postures customized for your health conditions',
        'Permanent access to review video recordings'
      ],
      isPopular: false
    }
  ];

  // Helper to format currency
  const formatCurrency = (val: number | null) => {
    if (val === null) return 'N/A';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="pricing" className="py-24 bg-[#F5F2ED] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2 font-sans">Yoga Programs & Investment</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32]">
            Online & Physical Programs
          </h2>
          <div className="w-12 h-0.5 bg-[#D97706] mx-auto mt-4" />
        </div>

        {/* 1. Online Programs Title & Navigation Toggles */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-[#1A3B32]/10">
            <div className="max-w-lg">
              <h3 className="font-serif font-bold text-xl text-[#1A3B32]">Online Yoga Programs</h3>
              <p className="text-xs text-zinc-650 leading-relaxed font-sans mt-1">
                For those who travel frequently, work unconventional hours, or simply prefer the flexibility of home practice, the online programs cover the same structured content—live sessions, guidance on form, and access to coach's feedback. Diet integration is available at every tier.
              </p>
            </div>
            
            {/* Sliding Toggle Control */}
            <div className="flex bg-[#1A3B32]/5 p-1 rounded-full border border-[#1A3B32]/10 self-start md:self-auto">
              {(['1m', '3m', '6m'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setBillingPeriod(period)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase cursor-pointer transition-all duration-200 ${
                    billingPeriod === period
                      ? 'bg-[#1A3B32] text-white font-bold'
                      : 'text-zinc-600 hover:text-[#1A3B32]'
                  }`}
                >
                  {period === '1m' ? '1 Month' : period === '3m' ? '3 Months' : '6 Months'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onlinePrograms.map((program) => {
              const currentPrice = program.prices[billingPeriod];
              return (
                <div
                  key={program.name}
                  className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                    program.isPopular 
                      ? 'border-[#D97706] shadow-md ring-2 ring-[#D97706]/20 -translate-y-2' 
                      : 'border-[#1A3B32]/10 shadow-xs'
                  }`}
                >
                  {program.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[#D97706] text-white font-mono text-[9px] uppercase tracking-widest font-extrabold shadow-sm">
                      Most Recommended
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold">{program.sub}</p>
                      <h4 className="font-serif font-bold text-lg text-[#1A3B32] mt-1">{program.name}</h4>
                    </div>

                    <div className="pb-4 border-b border-[#1A3B32]/10">
                      {currentPrice !== null ? (
                        <div>
                          <span className="font-serif font-bold text-3xl md:text-4xl text-[#1A3B32]">
                            {formatCurrency(currentPrice)}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono ml-1">
                            / {billingPeriod === '1m' ? '1 mo' : billingPeriod === '3m' ? '3 mos' : '6 mos'}
                          </span>
                        </div>
                      ) : (
                        <span className="text-zinc-400 font-serif italic text-base">Custom timeline</span>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {program.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-650 font-sans">
                          <Check className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => onSelectProgram('yoga-online', `${program.name} (${billingPeriod === '1m' ? '1 Mo' : billingPeriod === '3m' ? '3 Mos' : '6 Mos'})`)}
                      className={`w-full py-3 rounded-xl font-semibold font-sans text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                        program.isPopular
                          ? 'bg-[#1A3B32] text-white hover:bg-[#255246]'
                          : 'bg-[#1A3B32]/5 text-[#1A3B32] hover:bg-[#1A3B32]/10'
                      }`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Physical Group Sessions Section Details */}
        <div className="mt-20 border-t border-[#1A3B32]/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Informational Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block">In-Person Sessions</span>
                <h3 className="font-serif font-bold text-2xl text-[#1A3B32]">Physical Group Sessions</h3>
                <p className="text-sm text-zinc-700 leading-relaxed font-sans font-light">
                  In-person sessions run in small batches of ten to thirty for private and corporates. The format is guided and structured—you are not figuring out what to do next. Each session is designed as a complete unit.
                </p>
                <p className="text-sm text-zinc-700 leading-relaxed font-sans font-light">
                  Every class involves dynamic correction of posture, deep resonance alignment, tactile alignment tips, and sound therapy variables.
                </p>
              </div>

              {/* Special Monthly Discount Offer callout */}
              <div className="p-5 rounded-2xl bg-[#D97706]/5 border border-[#D97706]/20 space-y-2">
                <div className="flex items-center gap-2 text-[#D97706]">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs uppercase font-mono font-bold text-[#1A3B32] tracking-wider">Member Privilege Included</span>
                </div>
                <p className="text-xs text-zinc-650 leading-normal font-sans">
                  The <span className="font-semibold text-zinc-800">sixth session</span> each month is completely complimentary for monthly members subscribing to a continuous package.
                </p>
              </div>
            </div>

            {/* Pricing Details & Dynamic Calculator */}
            <div className="lg:col-span-6 bg-white/80 backdrop-blur-md rounded-2xl border border-[#1A3B32]/10 shadow-xs p-8 flex flex-col justify-between space-y-6">
              
              {/* Static physical pricing grids */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#1A3B32]/10 bg-[#EFECE6]/50">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block mb-1">Standard Rate</span>
                  <span className="font-serif font-bold text-xl text-[#1A3B32] block">₹5,000</span>
                  <span className="text-xs text-zinc-500 font-sans block">Single Session Entry</span>
                </div>
                
                <div className="p-4 rounded-xl border border-[#D97706]/20 bg-[#D97706]/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] block mb-1">Monthly Package</span>
                  <span className="font-serif font-bold text-xl text-[#1A3B32] block">₹25,000</span>
                  <span className="text-xs text-zinc-500 font-sans block">5 + 1 Complimentary Sessions</span>
                </div>
              </div>

              {/* Dynamic physically grouped price estimator widget */}
              <div className="slate-calc p-5 border border-[#1A3B32]/10 rounded-xl bg-gradient-to-b from-white to-[#EFECE6]/30 space-y-4">
                <div className="flex items-center gap-2 text-[#1A3B32]">
                  <Calculator className="w-4 h-4 text-[#D97706]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Group Investment Estimator</span>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="physical_session_slider" className="flex items-center justify-between text-xs text-zinc-500">
                    <span>Number of Sessions:</span>
                    <span className="font-mono font-bold text-[#1A3B32]">{customSessions} Sessions</span>
                  </label>
                  <input 
                    id="physical_session_slider"
                    type="range" 
                    min="1" 
                    max="20" 
                    value={customSessions}
                    onChange={(e) => setCustomSessions(Number(e.target.value))}
                    className="w-full accent-[#D97706] cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>1 Session</span>
                    <span>10 Sessions</span>
                    <span>20 Sessions</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1A3B32]/10 flex justify-between items-center bg-[#1A3B32]/5 px-3 py-2.5 rounded-lg">
                  <div>
                    <span className="text-[9.5px] uppercase font-mono tracking-widest text-zinc-400 block">Estimated Cost</span>
                    <span className="text-xs italic text-zinc-500">
                      {customSessions >= 6 ? `${Math.floor(customSessions / 6)} Free included` : 'Standard Rate'}
                    </span>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-lg text-[#1A3B32]">
                      {(() => {
                        // Formula: If they buy 6 is 5 rate
                        const freebies = Math.floor(customSessions / 6);
                        const billable = customSessions - freebies;
                        return formatCurrency(billable * 5000);
                      })()}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onSelectProgram('yoga-physical', `Physical Batch (${customSessions} sessions)`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1A3B32] hover:bg-[#255246] text-white font-semibold font-sans text-xs tracking-widest uppercase transition-colors text-center cursor-pointer"
                >
                  Estimate with Specifics
                </button>
                <div className="flex items-center gap-2 text-[10px] uppercase font-mono text-zinc-400">
                  <Info className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>10 - 30 participants limit</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
