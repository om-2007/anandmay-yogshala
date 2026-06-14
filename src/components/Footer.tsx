/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, ChevronUp, Check } from 'lucide-react';
import { AnandmayLogo, SkillWaveLogo } from './Logos';

interface FooterProps {
  activeVenture: 'anandmay' | 'skillwave';
}

export default function Footer({ activeVenture }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: (elRect - bodyRect) - offset,
        behavior: 'smooth'
      });
    }
  };

  const anandmayFaqs = [
    {
      q: 'Do I need previous yoga experience to join the programs?',
      a: 'Not at all. Every session is structured systematically so that both beginners and advanced practitioners are challenged appropriately. Coach Abhishek guides every posture on form.'
    },
    {
      q: 'How does the Diet Integration work with Online Yoga?',
      a: 'We evaluate your somatic constitution (Prakriti) and current health challenges to frame a customized plan. It is updated weekly based on progress.'
    },
    {
      q: 'Why are batch sizes kept is small (10 to 20)?',
      a: 'Most wellness platforms are huge where students disappear in the back row. We restrict size to maintain active posture correction, ensuring clinical alignment precision.'
    }
  ];

  const skillWaveFaqs = [
    {
      q: 'Who is SkillWave mentoring for?',
      a: 'It is designed for students (ages 13–25) facing career confusion, parents seeking teenagers behavioural alignment, and schools aiming to implement holistic development blueprints.'
    },
    {
      q: 'How are the 1:1 guided roadmaps structured?',
      a: 'We evaluate personality temperaments, perform interactive SWOT mappings, and construct customized milestone actions bypassing standard textbook-style theory.'
    },
    {
      q: 'Do you provide institutional group workshops?',
      a: 'Yes. We conduct Student Development training, Parenting awareness sessions, and Teacher Empowerment programmes across schools and academies.'
    }
  ];

  if (activeVenture === 'anandmay') {
    return (
      <footer className="bg-[#1A3B32] text-white pt-20 pb-8 border-t border-[#D97706]/20 relative overflow-hidden">
        {/* Sun glow design footer backdrop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D97706]/7 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* FAQs Board Grid */}
          <div className="border-b border-white/10 pb-16 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Common Inquiries</span>
              <h4 className="font-serif font-bold text-2xl text-white">Frequently Asked Questions</h4>
              <div className="w-8 h-0.5 bg-[#D97706] mt-3 mb-6" />
              <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
                Any deeper custom questions or corporate leadership alignment inquiry? Initiate an onboarding application to secure a discovery briefing.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {anandmayFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/5 border border-white/5 rounded-xl hover:border-white/15 transition-all">
                  <span className="text-[9.5px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-3">FAQ 0{idx + 1}</span>
                  <h5 className="font-serif font-bold text-xs text-white leading-tight mb-2">
                    {faq.q}
                  </h5>
                  <p className="text-[11px] text-stone-350 leading-normal font-sans">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Information Column Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6 md:border-r md:border-white/10 md:pr-6">
              {/* Anandmay Yogshala Brand block */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex-shrink-0">
                    <AnandmayLogo className="w-full h-full" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm tracking-wider block leading-tight text-[#FAF8F5]">
                      ANANDMAY YOGSHALA
                    </span>
                    <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#D97706] block">
                      योग से आनंद तक
                    </span>
                  </div>
                </div>
                <p className="text-stone-300 text-xs leading-relaxed font-sans font-light">
                  Body, mind, vital breath, and purpose alignment down to the deepest cellular levels. Based on classical lineages.
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-4">Quick Navigation</span>
              <ul className="space-y-2 text-xs text-stone-300">
                {[
                  { name: 'Philosophy', id: 'philosophy' },
                  { name: 'Founder', id: 'founder' },
                  { name: 'Practices', id: 'practices' },
                  { name: 'Programs', id: 'programs' },
                  { name: 'Coaching', id: 'coaching' },
                  { name: 'Corporate', id: 'corporate' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleScrollToSection(link.id)}
                      className="hover:text-[#D97706] transition-colors cursor-pointer text-left font-sans"
                    >
                      Our {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-4">Legal Standards</span>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-1.5 font-sans">
                  <Check className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                  <span>Certified Hatha & Ashtanga</span>
                </li>
                <li className="flex items-center gap-1.5 font-sans">
                  <Check className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                  <span>Bhagavad Gita Wisdom</span>
                </li>
                <li className="flex items-center gap-1.5 font-sans">
                  <Check className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                  <span>International Key Speaker</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-4">Primary Desk Contact</span>
              
              <div className="space-y-2 text-xs text-stone-300">
                <a href="tel:+919096100461" className="flex items-center gap-2 hover:text-[#D97706] transition-colors leading-none">
                  <Phone className="w-4 h-4 text-[#D97706]" />
                  <span className="font-mono text-[11px]">+91 90961 00461</span>
                </a>
                <a href="mailto:anandmayyogshala@gmail.com" className="flex items-center gap-2 hover:text-[#D97706] transition-colors leading-none pt-1">
                  <Mail className="w-4 h-4 text-[#D97706]" />
                  <span className="font-sans text-[11px]">anandmayyogshala@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Signature details on bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[10px] text-stone-400 font-mono">
              &copy; {currentYear} ANANDMAY YOGSHALA. Built with absolute integrity. <span className="text-white/20">|</span> योग से आनंद तक
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#D97706] border border-white/10 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>
    );
  }

  // SkillWave Footers
  return (
    <footer className="bg-[#0F1E36] text-[#E6F0FA] pt-20 pb-8 border-t border-blue-500/20 relative overflow-hidden">
      {/* Wave glow design footer backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* FAQs Board Grid */}
        <div className="border-b border-white/10 pb-16 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-2">Frequently Asked</span>
            <h4 className="font-sans font-extrabold text-2xl text-white">SkillWave Inquiries</h4>
            <div className="w-8 h-0.5 bg-[#3A90E3] mt-3 mb-6" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Have questions regarding student profiles or institutional schedules? Reach out directly via WhatsApp for a quick mentorship guidance lock.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillWaveFaqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/20 transition-all">
                <span className="text-[9.5px] uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-3">FAQ 0{idx + 1}</span>
                <h5 className="font-sans font-bold text-xs text-white leading-tight mb-2">
                  {faq.q}
                </h5>
                <p className="text-[11px] text-zinc-400 leading-normal font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Information Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 md:border-r md:border-white/10 md:pr-6">
            {/* SkillWave Brand block */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                  <SkillWaveLogo className="w-full h-full" />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-sm tracking-wide block leading-tight text-white">
                    Skill<span className="text-[#3A90E3]">Wave</span>
                  </span>
                  <span className="text-[9px] font-semibold text-emerald-450 uppercase tracking-wider block">
                    Step Up. Stand Out.
                  </span>
                </div>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans font-light">
                Soft skills training, technical scaling platforms, and progressive upskilling roadmaps engineered to accelerate professional youth growth.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-4">Quick Navigation</span>
            <ul className="space-y-2 text-xs text-zinc-400">
              {[
                { name: 'Philosophy', id: 'sw-philosophy' },
                { name: 'Framework', id: 'sw-vision' },
                { name: 'Mentor', id: 'sw-founder' },
                { name: 'Programs', id: 'sw-programs' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="hover:text-[#3A90E3] transition-colors cursor-pointer text-left font-sans"
                  >
                    Our {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-4">Core Deliverables</span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex items-center gap-1.5 font-sans">
                <Check className="w-3.5 h-3.5 text-[#3A90E3] flex-shrink-0" />
                <span>Mindset Upgrades</span>
              </li>
              <li className="flex items-center gap-1.5 font-sans">
                <Check className="w-3.5 h-3.5 text-[#3A90E3] flex-shrink-0" />
                <span>Career Engineering</span>
              </li>
              <li className="flex items-center gap-1.5 font-sans">
                <Check className="w-3.5 h-3.5 text-[#3A90E3] flex-shrink-0" />
                <span>Integrated Life Skills</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-4">Primary Contact Desk</span>
            
            <div className="space-y-2 text-xs text-zinc-400">
              <a href="tel:+919096100461" className="flex items-center gap-2 hover:text-[#3A90E3] transition-colors leading-none">
                <Phone className="w-4 h-4 text-[#3A90E3]" />
                <span className="font-mono text-[11px]">+91 90961 00461</span>
              </a>
              <a href="mailto:anandmayyogshala@gmail.com" className="flex items-center gap-2 hover:text-[#3A90E3] transition-colors leading-none pt-1">
                <Mail className="w-4 h-4 text-[#3A90E3]" />
                <span className="font-sans text-[11px]">anandmayyogshala@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Signature details on bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] text-zinc-500 font-mono">
            &copy; {currentYear} SKILLWAVE. All Rights Reserved. <span className="text-white/10">|</span> Step Up. Stand Out. Succeed.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#3A90E3] border border-white/10 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
