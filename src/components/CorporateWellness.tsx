/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building, Users, Sparkles, CheckSquare, 
  HelpCircle, ChevronRight, Calculator, Laptop 
} from 'lucide-react';

interface CorporateWellnessProps {
  onApplyForCEO: () => void;
  onApplyForWorkshop: (details: string) => void;
}

export default function CorporateWellness({ onApplyForCEO, onApplyForWorkshop }: CorporateWellnessProps) {
  const [memberSize, setMemberSize] = useState<'50' | '150'>('50');
  const [duration, setDuration] = useState<'half' | 'full'>('half');

  // Matrix Pricing
  // 15-50 Members: 15,000 (Half-day) | 25,000 (Full-day)
  // 50-150 Members: 30,000 (Half-day) | 60,000 (Full-day)
  const workshopRates = {
    '50': { half: 15000, full: 25000, label: '15 - 50 Members' },
    '150': { half: 30000, full: 60000, label: '50 - 150 Members' }
  };

  const currentRate = workshopRates[memberSize][duration];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const outcomes = [
    'Stress and energy management',
    'Improved focus and productivity',
    'Emotional resilience at work',
    'Better communication and teamwork',
    'Clear decision-making and problem-solving',
    'Leadership mindset and ownership'
  ];

  return (
    <section id="corporate" className="py-24 bg-[#EFECE6] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block">Sustainable Performance</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight">
            Corporate Wellness & Leadership
          </h2>
          <p className="text-xs font-mono text-[#D97706] uppercase tracking-wider block mt-1">
            Clear Minds. Strong Leaders. High-Performing Teams.
          </p>
          <div className="w-12 h-0.5 bg-[#D97706] mx-auto mt-4" />
          <p className="text-sm text-zinc-700 leading-relaxed font-sans font-light max-w-2xl mx-auto font-sans">
            Today's workplace challenges are not only operational—they are mental and emotional as well. Our programmes help professionals manage stress, improve focus, strengthen leadership, and perform sustainably without burnout.
          </p>
        </div>

        {/* Column Split: Left: Workshops | Right: CEO Private Masterclass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* 1. Employee Wellness Workshops Column */}
          <div className="lg:col-span-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1A3B32]/10 shadow-xs flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1A3B32]/10 text-[#1A3B32] flex items-center justify-center">
                  <Building className="w-5.5 h-5.5 text-[#1A3B32]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#D97706] font-bold block">Internal Workshop Series</span>
                  <h3 className="font-serif font-bold text-xl text-[#1A3B32]">Employee Wellness Workshop</h3>
                </div>
              </div>

              <p className="text-xs text-zinc-505 leading-relaxed font-sans">
                Practical tools to reduce stress, improve focus, and build workplace resilience. Highly custom formats are available tailored to unique corporate cultures or digital team alignments.
              </p>

              {/* Outcomes list */}
              <div className="space-y-3 pt-3 border-t border-[#1A3B32]/10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block">Key Workshop Outcomes</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {outcomes.map((out, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-750 font-sans">
                      <CheckSquare className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope audience info */}
              <div className="p-4 rounded-xl bg-[#1A3B32]/5 border border-[#1A3B32]/10 flex flex-col gap-1.5 justify-start text-xs text-[#1A3B32]">
                <span className="font-mono uppercase text-[9.5px] font-bold">Suitable For:</span>
                <p className="font-sans font-medium">Employees  ·  Team Leads  ·  Managers  ·  Department Heads</p>
              </div>
            </div>

            {/* Dynamic Workshop Calculator inside Workshop Card */}
            <div className="space-y-6 pt-6 border-t border-[#1A3B32]/10">
              <div className="flex items-center gap-2 text-zinc-600">
                <Calculator className="w-4 h-4 text-[#D97706]" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Investment Estimations</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Switcher 1: Members group */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-450 font-mono uppercase">Member Limit Range</span>
                  <div className="flex bg-[#1A3B32]/5 p-0.5 rounded-lg border border-[#1A3B32]/10">
                    <button 
                      onClick={() => setMemberSize('50')}
                      className={`flex-1 py-1.5 text-[10px] font-mono rounded-md uppercase cursor-pointer ${memberSize === '50' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-550 hover:text-[#1A3B32]'}`}
                    >
                      15 - 50 List
                    </button>
                    <button 
                      onClick={() => setMemberSize('150')}
                      className={`flex-1 py-1.5 text-[10px] font-mono rounded-md uppercase cursor-pointer ${memberSize === '150' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-550 hover:text-[#1A3B32]'}`}
                    >
                      50 - 150 List
                    </button>
                  </div>
                </div>

                {/* Switcher 2: Format Duration */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-450 font-mono uppercase">Format Duration</span>
                  <div className="flex bg-[#1A3B32]/5 p-0.5 rounded-lg border border-[#1A3B32]/10">
                    <button 
                      onClick={() => setDuration('half')}
                      className={`flex-1 py-1.5 text-[10px] font-mono rounded-md uppercase cursor-pointer ${duration === 'half' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-550 hover:text-[#1A3B32]'}`}
                    >
                      Half-Day
                    </button>
                    <button 
                      onClick={() => setDuration('full')}
                      className={`flex-1 py-1.5 text-[10px] font-mono rounded-md uppercase cursor-pointer ${duration === 'full' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-550 hover:text-[#1A3B32]'}`}
                    >
                      Full-Day
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary workshop price */}
              <div className="flex justify-between items-center p-4 rounded-xl bg-[#FAF8F5]/80 border border-[#1A3B32]/10">
                <div>
                  <p className="text-[9.5px] uppercase font-mono tracking-widest text-[#D97706] font-bold">Standard Estimate</p>
                  <p className="text-[10px] text-zinc-500 italic font-mono">
                    {duration === 'half' ? 'Half-Day Session (3-4 Hrs)' : 'Full-Day Session (6-7 Hrs)'}
                  </p>
                </div>
                <div>
                  <span className="font-serif font-bold text-xl text-[#1A3B32]">
                    {formatCurrency(currentRate)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onApplyForWorkshop(`Employee Wellness Workshop Estimation: ${workshopRates[memberSize].label} | ${duration === 'half' ? 'Half-Day' : 'Full-Day'} (Est. ${formatCurrency(currentRate)})`)}
                className="w-full py-3 rounded-xl bg-[#1A3B32] hover:bg-[#255246] text-white font-sans text-xs font-semibold tracking-widest uppercase transition-colors text-center cursor-pointer"
              >
                Book Workshop Consultation
              </button>
            </div>
          </div>

          {/* 2. Premium VIP Card Option: CEO & Founder 1:1 Programme */}
          <div className="lg:col-span-6 bg-[#1A3B32] text-white p-8 rounded-[24px] border-2 border-[#D97706]/60 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Artistic gold background circular glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D97706]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D97706]/20 text-[#D97706] flex items-center justify-center border border-[#D97706]/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#D97706] font-bold block">Premium Private Coaching</span>
                    <h3 className="font-serif font-bold text-xl text-white">CEO & Founder 1:1 Programme</h3>
                  </div>
                </div>
                <span className="text-[9px] uppercase font-mono bg-[#D97706]/20 text-[#D97706] py-1 px-2.5 rounded-full border border-[#D97706]/20 font-extrabold tracking-widest">
                  VIP ONLY
                </span>
              </div>

              {/* Private Intro lines */}
              <div className="border-l-2 border-[#D97706] pl-4 py-1 italic text-stone-250 font-serif text-sm">
                &ldquo;You have built something. You carry everything. And sometimes, in the silence between decisions, you wonder — am I leading from the right place?&rdquo;
              </div>

              <p className="text-xs text-stone-300 leading-relaxed font-sans font-light">
                This programme is not for everyone. It is for those who are ready to do the deepest work — to align their inner world so their outer leadership becomes effortless, intentional, and truly impactful.
              </p>

              {/* Specific features checklist */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block">Programme Objective & Framework</span>
                <p className="text-[11px] text-stone-300 select-all leading-normal font-sans">
                  A deeply personalised, high-trust coaching engagement for founders and C-suite leaders combining yogic wisdom, life philosophy, and strategic clarity to help them lead at their highest level without losing themselves in the process.
                </p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-1.5 text-[#D97706]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5" />
                    <span className="text-stone-300 font-sans">12 private sessions (2/month)</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[#D97706]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5" />
                    <span className="text-stone-300 font-sans">Quarterly options: ₹65,000</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[#D97706]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5" />
                    <span className="text-stone-300 font-sans">Includes WhatsApp/Voice support</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[#D97706]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5" />
                    <span className="text-stone-300 font-sans">Legacy & value architecture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Investment & CTA */}
            <div className="space-y-4 pt-6 border-t border-white/10 relative z-10">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[9.5px] uppercase font-mono tracking-widest text-stone-400 block">6-Month Engagement</span>
                  <span className="text-[10px] text-gray-400 italic">Exclusive 1:1, 90-120 min / session</span>
                </div>
                <div className="text-right">
                  <span className="font-serif font-bold text-xl text-[#D97706]">₹1,20,000</span>
                  <span className="text-[10px] font-mono text-stone-400 block -mt-1">total investment</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onApplyForCEO}
                  className="w-full py-3 rounded-xl bg-[#D97706] hover:bg-[#b86100] text-white font-semibold font-sans text-xs tracking-wider uppercase transition-colors text-center cursor-pointer"
                >
                  Request Application & Call
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[9.5px] text-stone-400 font-mono">
                  <span>*Note: Programme is by application only. Discover Call required.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
