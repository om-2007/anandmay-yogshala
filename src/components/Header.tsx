/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { AnandmayLogo, SkillWaveLogo } from './Logos';

interface HeaderProps {
  onBookClick: () => void;
  activeVenture: 'anandmay' | 'skillwave';
  onVentureChange: (venture: 'anandmay' | 'skillwave') => void;
}

export default function Header({ onBookClick, activeVenture, onVentureChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set brand specific navigation items
  const navItems = activeVenture === 'anandmay' ? [
    { label: 'Philosophy', targetId: 'philosophy' },
    { label: 'Founder', targetId: 'founder' },
    { label: 'Practices', targetId: 'practices' },
    { label: 'Yoga Programs', targetId: 'programs' },
    { label: 'Life Coaching', targetId: 'coaching' },
    { label: 'Corporate Wellness', targetId: 'corporate' },
  ] : [
    { label: 'Philosophy', targetId: 'sw-philosophy' },
    { label: 'Framework', targetId: 'sw-vision' },
    { label: 'Mentor', targetId: 'sw-founder' },
    { label: 'Programs & Prices', targetId: 'sw-programs' },
  ];

  const handleNavClick = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 120; // height with ecosystem topbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? activeVenture === 'anandmay'
            ? 'bg-[#F5F2ED]/95 backdrop-blur-md shadow-sm border-b border-[#1A3B32]/10'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100/45'
          : activeVenture === 'anandmay'
            ? 'bg-[#F5F2ED]/40 backdrop-blur-xs'
            : 'bg-white/40 backdrop-blur-xs'
      }`}
    >
      {/* Slim Premium Ecosystem Topbar */}
      <div className="bg-[#0F1E36] text-stone-200 py-2 border-b border-white/5 select-none text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Anandmay Venture Badge */}
            <button
              onClick={() => onVentureChange('anandmay')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition-all cursor-pointer font-bold ${
                activeVenture === 'anandmay'
                  ? 'bg-[#D97706] text-white shadow-xs border border-[#D97706]'
                  : 'bg-white/5 text-stone-300 hover:text-white border border-white/10'
              }`}
            >
              <AnandmayLogo className="h-5 w-auto" />
              <span>Anandmay Yogshala</span>
            </button>
            
            <span className="text-zinc-650 font-light font-sans">|</span>
            
            {/* SkillWave Venture Badge */}
            <button
              onClick={() => onVentureChange('skillwave')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition-all cursor-pointer font-bold ${
                activeVenture === 'skillwave'
                  ? 'bg-blue-600 text-white shadow-xs border border-blue-500'
                  : 'bg-white/5 text-stone-300 hover:text-white border border-white/10'
              }`}
            >
              <div className="w-3.5 h-3.5 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" className="w-3.5 h-3.5">
                  <rect x="12" y="58" width="12" height="26" fill={activeVenture === 'skillwave' ? '#FFF' : '#4ADE80'} />
                  <rect x="30" y="44" width="12" height="40" fill={activeVenture === 'skillwave' ? '#FFF' : '#22C55E'} />
                  <rect x="48" y="28" width="12" height="56" fill={activeVenture === 'skillwave' ? '#FFF' : '#16A34A'} />
                  <rect x="66" y="12" width="12" height="72" fill={activeVenture === 'skillwave' ? '#FFF' : '#15803D'} />
                </svg>
              </div>
              <span>SkillWave</span>
              <span className={`text-[8px] font-mono tracking-tight px-1 rounded hidden sm:inline uppercase ${
                activeVenture === 'skillwave' ? 'bg-white/20 text-white' : 'bg-[#22C55E]/15 text-[#4ADE80]'
              }`}>
                Active Mode
              </span>
            </button>
          </div>
          
          <div className="hidden lg:flex items-center gap-1.5 text-[9.5px] text-zinc-400 font-mono italic">
            <span>Guiding Youth & Holistic Alignment</span>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            {activeVenture === 'anandmay' ? (
              <>
                <div className={`transition-all duration-300 group-hover:scale-105 flex items-center justify-center ${
                  isScrolled ? 'h-12 sm:h-14' : 'h-16 sm:h-18'
                }`}>
                  <AnandmayLogo className="h-full w-auto object-contain" />
                </div>
                <div>
                  <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-[#1A3B32] block leading-tight">
                    ANANDMAY YOGSHALA
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D97706] block -mt-0.5">
                    योग से आनंद तक
                  </span>
                </div>
              </>
            ) : (
              <SkillWaveLogo className="h-9 sm:h-10" />
            )}
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {activeVenture === 'anandmay' ? (
              <>
                {/* About Dropdown */}
                <div className="relative group py-2">
                  <button
                    className="text-sm font-semibold tracking-tight cursor-pointer transition-colors duration-200 py-1 font-sans flex items-center gap-1 text-[#1A3B32] hover:text-[#D97706] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:bg-[#D97706] hov_line"
                  >
                    About
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-44 rounded-xl shadow-lg bg-white border border-stone-200/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1.5">
                    <button
                      onClick={() => handleNavClick('philosophy')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-[#F5F2ED] hover:text-[#D97706] transition-colors"
                    >
                      Philosophy
                    </button>
                    <button
                      onClick={() => handleNavClick('founder')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-[#F5F2ED] hover:text-[#D97706] transition-colors"
                    >
                      Founder
                    </button>
                    <button
                      onClick={() => handleNavClick('practices')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-[#F5F2ED] hover:text-[#D97706] transition-colors"
                    >
                      Practices
                    </button>
                  </div>
                </div>

                {/* Programs Dropdown */}
                <div className="relative group py-2">
                  <button
                    className="text-sm font-semibold tracking-tight cursor-pointer transition-colors duration-200 py-1 font-sans flex items-center gap-1 text-[#1A3B32] hover:text-[#D97706] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:bg-[#D97706] hov_line"
                  >
                    Programs
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-44 rounded-xl shadow-lg bg-white border border-stone-200/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1.5">
                    <button
                      onClick={() => handleNavClick('programs')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-[#F5F2ED] hover:text-[#D97706] transition-colors"
                    >
                      Yoga Programs
                    </button>
                    <button
                      onClick={() => handleNavClick('coaching')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-[#F5F2ED] hover:text-[#D97706] transition-colors"
                    >
                      Life Coaching
                    </button>
                  </div>
                </div>

                {/* Corporate Wellness */}
                <button
                  onClick={() => handleNavClick('corporate')}
                  className="text-sm font-semibold tracking-tight cursor-pointer transition-colors duration-200 py-1 font-sans text-[#1A3B32] hover:text-[#D97706] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:bg-[#D97706] hov_line"
                >
                  Corporate Wellness
                </button>

                {/* Contact */}
                <button
                  onClick={() => handleNavClick('booking')}
                  className="text-sm font-semibold tracking-tight cursor-pointer transition-colors duration-200 py-1 font-sans text-[#1A3B32] hover:text-[#D97706] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:bg-[#D97706] hov_line"
                >
                  Contact
                </button>
              </>
            ) : (
              // SkillWave Menu Items
              navItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => handleNavClick(item.targetId)}
                  className="text-sm font-semibold tracking-tight cursor-pointer transition-colors duration-200 py-1 font-sans relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 text-[#0F1E36] hover:text-blue-600 after:bg-blue-600 hov_line"
                >
                  {item.label}
                </button>
              ))
            )}
          </nav>

          {/* CTA Button with integrated contact details */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookClick}
              id="cta_book_session"
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-3 ${
                activeVenture === 'anandmay'
                  ? 'bg-[#1A3B32] hover:bg-[#255246] text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <span>{activeVenture === 'anandmay' ? 'Book a Session' : 'Book SkillWave'}</span>
              <span className="opacity-30">|</span>
              <a 
                href="tel:+919096100461" 
                onClick={(e) => e.stopPropagation()} 
                className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 font-mono text-[11px] tracking-normal lowercase"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                +91 90961 00461
              </a>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onBookClick}
              className={`px-3 py-1.5 rounded-full text-white text-[11px] font-semibold tracking-wide uppercase sm:hidden cursor-pointer ${
                activeVenture === 'anandmay' ? 'bg-[#D97706]' : 'bg-blue-600'
              }`}
            >
              Book
            </button>
            <button
              onClick={() => {
                const nextState = !isMobileMenuOpen;
                setIsMobileMenuOpen(nextState);
                if (!nextState) {
                  setIsMobileAboutOpen(false);
                  setIsMobileProgramsOpen(false);
                }
              }}
              className="p-2 text-[#1A3B32] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t absolute top-full left-0 right-0 py-4 px-6 shadow-lg ${
          activeVenture === 'anandmay' ? 'bg-[#F5F2ED] border-[#1A3B32]/10' : 'bg-white border-blue-100'
        }`}>
          <div className="flex flex-col gap-4">
            {activeVenture === 'anandmay' ? (
              <>
                {/* About Accordion */}
                <div className="border-b border-stone-200/60 py-2">
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="w-full flex items-center justify-between font-semibold text-left text-[#1A3B32] hover:text-[#D97706]"
                  >
                    <span>About</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''} text-zinc-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileAboutOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2.5 pb-1">
                      <button
                        onClick={() => handleNavClick('philosophy')}
                        className="text-left text-sm font-semibold text-zinc-600 hover:text-[#D97706] py-1"
                      >
                        Philosophy
                      </button>
                      <button
                        onClick={() => handleNavClick('founder')}
                        className="text-left text-sm font-semibold text-zinc-600 hover:text-[#D97706] py-1"
                      >
                        Founder
                      </button>
                      <button
                        onClick={() => handleNavClick('practices')}
                        className="text-left text-sm font-semibold text-zinc-600 hover:text-[#D97706] py-1"
                      >
                        Practices
                      </button>
                    </div>
                  )}
                </div>

                {/* Programs Accordion */}
                <div className="border-b border-stone-200/60 py-2">
                  <button
                    onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                    className="w-full flex items-center justify-between font-semibold text-left text-[#1A3B32] hover:text-[#D97706]"
                  >
                    <span>Programs</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''} text-zinc-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileProgramsOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2.5 pb-1">
                      <button
                        onClick={() => handleNavClick('programs')}
                        className="text-left text-sm font-semibold text-zinc-600 hover:text-[#D97706] py-1"
                      >
                        Yoga Programs
                      </button>
                      <button
                        onClick={() => handleNavClick('coaching')}
                        className="text-left text-sm font-semibold text-zinc-600 hover:text-[#D97706] py-1"
                      >
                        Life Coaching
                      </button>
                    </div>
                  )}
                </div>

                {/* Corporate Wellness */}
                <button
                  onClick={() => handleNavClick('corporate')}
                  className="font-semibold text-left py-2 border-b transition-all duration-200 text-[#1A3B32] hover:text-[#D97706] border-stone-200"
                >
                  Corporate Wellness
                </button>

                {/* Contact */}
                <button
                  onClick={() => handleNavClick('booking')}
                  className="font-semibold text-left py-2 border-b transition-all duration-200 text-[#1A3B32] hover:text-[#D97706] border-stone-200"
                >
                  Contact
                </button>
              </>
            ) : (
              // SkillWave Mobile Menu Items
              navItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => handleNavClick(item.targetId)}
                  className="font-semibold text-left py-2 border-b transition-all duration-200 text-[#0F1E36] hover:text-blue-600 border-zinc-100"
                >
                  {item.label}
                </button>
              ))
            )}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className={`w-full py-3 rounded-xl font-semibold font-sans text-xs tracking-wider uppercase transition-colors flex flex-col items-center justify-center gap-1 ${
                  activeVenture === 'anandmay'
                    ? 'bg-[#1A3B32] hover:bg-[#255246] text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <span>{activeVenture === 'anandmay' ? 'Book a Discovery Session' : 'Book SkillWave Session'}</span>
                <span className="text-[10px] font-mono tracking-normal opacity-90 flex items-center gap-1 text-[#D97706]">
                  <PhoneCall className="w-2.5 h-2.5" />
                  +91 90961 00461
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
