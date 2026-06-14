/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Transformation from './components/Transformation';
import AboutFounder from './components/AboutFounder';
import YogaPrograms from './components/YogaPrograms';
import PricingYoga from './components/PricingYoga';
import CoachingPrograms from './components/CoachingPrograms';
import CorporateWellness from './components/CorporateWellness';
import DiscoveryForm from './components/DiscoveryForm';
import Footer from './components/Footer';
import SkillWave from './components/SkillWave';

const getInitialVenture = (): 'anandmay' | 'skillwave' => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'skillwave' || mode === 'anandmay') {
      return mode;
    }
  }
  return 'anandmay';
};

export default function App() {
  const [selectedProgramType, setSelectedProgramType] = useState<'yoga-online' | 'yoga-physical' | 'coaching' | 'corporate'>('yoga-online');
  const [selectedTierName, setSelectedTierName] = useState('');
  const [activeVenture, setActiveVenture] = useState<'anandmay' | 'skillwave'>(getInitialVenture);

  // Sync state if browser back/forward buttons are pressed
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get('mode');
      if (mode === 'skillwave' || mode === 'anandmay') {
        setActiveVenture(mode);
      } else {
        setActiveVenture('anandmay');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta description dynamically based on active venture
  useEffect(() => {
    if (activeVenture === 'skillwave') {
      document.title = "SkillWave — Youth Career Guidance | Abhishek Todkar Mali";
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', "SkillWave helps students aged 13–25 build career clarity, confidence, and discipline. 1:1 mentoring and school programs by Abhishek Todkar Mali. Book on WhatsApp.");
    } else {
      document.title = "Anandmay Yogshala";
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', "Anandmay Yogshala — yoga, wellness & life coaching guided by Abhishek Todkar Mali. Online & in-person programs rooted in Bhagavad Gita wisdom. Book a discovery call.");
    }
  }, [activeVenture]);

  // Set venture mode and update address bar without reloading
  const handleVentureChange = (venture: 'anandmay' | 'skillwave') => {
    setActiveVenture(venture);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('mode', venture);
      window.history.pushState({ venture }, '', url.pathname + url.search);
    }
  };

  // Handle program choice triggering smooth scroll to the Form
  const handleProgramSelection = (
    type: 'yoga-online' | 'yoga-physical' | 'coaching' | 'corporate',
    tierName: string
  ) => {
    setSelectedProgramType(type);
    setSelectedTierName(tierName);
    
    // Smooth scroll down to form
    const element = document.getElementById('booking');
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const targetPosition = (elementRect - bodyRect) - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGlobalBookClick = () => {
    // Simply scroll to booking with default selected values
    const element = document.getElementById('booking');
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: (elementRect - bodyRect) - offset,
        behavior: 'smooth'
      });
    }
  };

  const handlePhilosophyLearnMore = () => {
    const element = document.getElementById('philosophy');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: (elementRect - bodyRect) - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative min-h-screen antialiased overflow-x-hidden ${
      activeVenture === 'anandmay' ? 'bg-[#F5F2ED] text-[#1A3B32]' : 'bg-[#FAF9F6] text-[#0F1E36]'
    }`}>
      {/* Sticky Premium Header navigation */}
      <Header 
        onBookClick={handleGlobalBookClick} 
        activeVenture={activeVenture} 
        onVentureChange={handleVentureChange}
      />

      {/* Main Sections */}
      <main>
        {activeVenture === 'anandmay' ? (
          <>
            {/* Hero Banner Section */}
            <Hero 
              onLearnMoreClick={handlePhilosophyLearnMore} 
              onBookClick={handleGlobalBookClick} 
            />

            {/* Philosophy Area */}
            <Philosophy />

            {/* Transformation outcomes panels */}
            <Transformation />

            {/* About the Founder Narrative & Core Pillars */}
            <AboutFounder />

            {/* Practices Covered & Weekly Schedules */}
            <YogaPrograms />

            {/* Interactive Pricing table and calculators */}
            <PricingYoga onSelectProgram={(tier, sub) => handleProgramSelection(tier as any, sub)} />

            {/* 1:1 Life Coaching modules */}
            <CoachingPrograms onSelectProgram={(tier, sub) => handleProgramSelection(tier as any, sub)} />

            {/* Corporate Wellness workshops & Private CEO Plans */}
            <CorporateWellness 
              onApplyForCEO={() => handleProgramSelection('corporate', 'CEO & Founder 1:1 Masterclass (6 Months / Lifetime Reset)')}
              onApplyForWorkshop={(specs) => handleProgramSelection('corporate', specs)}
            />

            {/* Fully operational scheduling Form */}
            <DiscoveryForm 
              initialProgramType={selectedProgramType} 
              initialTierName={selectedTierName} 
            />
          </>
        ) : (
          <SkillWave onBookClick={handleGlobalBookClick} />
        )}
      </main>

      {/* FAQs & Brand Signature Footer */}
      <Footer activeVenture={activeVenture} />
    </div>
  );
}
