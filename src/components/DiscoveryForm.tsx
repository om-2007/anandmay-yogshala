/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, CheckCircle2, Copy, Sparkles, 
  Send, User, Mail, Phone, MessageSquare, History, Check, Eye 
} from 'lucide-react';
import { BookingSubmission } from '../types';

interface DiscoveryFormProps {
  initialProgramType?: string;
  initialTierName?: string;
}

export default function DiscoveryForm({ initialProgramType = 'yoga-online', initialTierName = '' }: DiscoveryFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programType, setProgramType] = useState<'yoga-online' | 'yoga-physical' | 'coaching' | 'corporate'>(
    (initialProgramType as 'yoga-online' | 'yoga-physical' | 'coaching' | 'corporate') || 'yoga-online'
  );
  const [selectedTierName, setSelectedTierName] = useState(initialTierName);
  const [sessionPreference, setSessionPreference] = useState('Morning (6:30 - 7:30 AM)');
  const [message, setMessage] = useState('');
  const [copiedText, setCopiedText] = useState<'phone' | 'email' | null>(null);

  const [submissions, setSubmissions] = useState<BookingSubmission[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  // Sync initial values of props when changed by outside section click
  useEffect(() => {
    if (initialProgramType) {
      setProgramType(initialProgramType as 'yoga-online' | 'yoga-physical' | 'coaching' | 'corporate');
    }
    if (initialTierName) {
      setSelectedTierName(initialTierName);
    }
  }, [initialProgramType, initialTierName]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem('anandmay_submissions');
    if (cached) {
      try {
        setSubmissions(JSON.parse(cached));
      } catch (e) {
        console.error('Failed to parse cached submissions', e);
      }
    }
  }, []);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const programsMap = {
    'yoga-online': 'Online Yoga Program',
    'yoga-physical': 'Physical Group Sessions',
    'coaching': 'Life Coaching & Counselling',
    'corporate': 'Corporate Leadership / CEO 1:1'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    const newSubmission: BookingSubmission = {
      id: 'sub_' + Math.random().toString(36).substr(2, 9),
      fullName,
      email,
      phone,
      programType,
      selectedTierName: selectedTierName || programsMap[programType],
      sessionPreference,
      message,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Confirmed'
    };

    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('anandmay_submissions', JSON.stringify(updated));

    setLastSubmittedId(newSubmission.id);
    setIsSuccess(true);

    // Reset fields
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="booking" className="py-24 bg-[#FCFAF7] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual CTA Header text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Connect Now</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight">
            Begin Your Alignment
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-4 rounded-full" />
          <p className="font-serif italic text-base text-zinc-700 mt-4 max-w-xl mx-auto">
            &ldquo;Your clarity, your confidence, your transformation starts with one conversation.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-[24px] border border-[#1A3B32]/10 shadow-sm p-8">
            <h3 className="font-serif font-bold text-lg text-[#1A3B32] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D97706]" />
              Schedule Discovery Call
            </h3>

            {isSuccess && lastSubmittedId ? (
              <div id="booking_success_box" className="p-6 bg-[#D97706]/10 border border-[#D97706]/20 rounded-xl space-y-4 mb-6">
                <div className="flex items-center gap-3 text-[#D97706]">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="font-bold font-serif text-sm">Application Received Successfully!</span>
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  Namaste. Thank you for your application. Coach Abhishek Mali will personally review your specific situation alignment values. We will contact you at your submitted phone/email within 12 working hours to lock in your final onboarding slot.
                </p>
                <div className="pt-3 flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-[#D97706]/20">
                  <span>Application Reference ID</span>
                  <span className="font-semibold">{lastSubmittedId}</span>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="w-full py-2 bg-[#D97706]/20 hover:bg-[#D97706]/35 text-[#D97706] font-semibold font-sans text-xs uppercase rounded-lg transition-colors cursor-pointer"
                >
                  Book Another Program
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="fullname_input" className="text-xs font-mono font-bold text-[#1A3B32] flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#D97706]" />
                  Full Name *
                </label>
                <input 
                  id="fullname_input"
                  type="text" 
                  required
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B32]/10 bg-white/50 focus:outline-none focus:border-[#1A3B32] text-sm font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="email_input" className="text-xs font-mono font-bold text-[#1A3B32] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                    Email Address *
                </label>
                  <input 
                    id="email_input"
                    type="email" 
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B32]/10 bg-white/50 focus:outline-none focus:border-[#1A3B32] text-sm font-sans"
                  />
                </div>

                {/* Phone field */}
                <div className="space-y-1.5">
                  <label htmlFor="phone_input" className="text-xs font-mono font-bold text-[#1A3B32] flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                    WhatsApp/Phone Number *
                  </label>
                  <input 
                    id="phone_input"
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B32]/10 bg-white/50 focus:outline-none focus:border-[#1A3B32] text-sm font-sans"
                  />
                </div>
              </div>

              {/* Program Selector */}
              <div className="space-y-1.5">
                <label htmlFor="program_select" className="text-xs font-mono font-bold text-[#1A3B32] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                  Choose Selected Program *
                </label>
                <select 
                  id="program_select"
                  value={programType} 
                  onChange={(e) => {
                    const val = e.target.value as any;
                    setProgramType(val);
                    setSelectedTierName(programsMap[val]);
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B32]/10 focus:outline-none focus:border-[#1A3B32] bg-white bg-white/50 text-sm font-sans"
                >
                  <option value="yoga-online">Online Yoga Program (Diet optional)</option>
                  <option value="yoga-physical">Physical Group Sessions (10-30 participants)</option>
                  <option value="coaching">Life Coaching & Counselling Program</option>
                  <option value="corporate">Corporate Leadership / CEO 1:1 Plan</option>
                </select>
              </div>

              {/* Specific Sub Type / Tier Name input */}
              {selectedTierName && (
                <div className="p-3 bg-[#EFECE6]/40 rounded-lg border border-[#1A3B32]/10 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-zinc-400 font-mono text-[9.5px] uppercase block">Selected Tier Target</span>
                    <span className="font-serif font-bold text-[#1A3B32]">{selectedTierName}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setSelectedTierName('')}
                    className="text-[10px] text-[#D97706] border border-[#D97706]/20 px-2 py-0.5 rounded-md uppercase tracking-wider hover:bg-white"
                  >
                    Change Tier
                  </button>
                </div>
              )}

              {/* Batch Preference Option */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#1A3B32] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                  Preferred Batch Timing Preference
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Morning (6:30 - 7:30 AM)',
                    'Evening (7:30 - 8:30 PM)',
                    'Coaching (Custom Timing Schedule)'
                  ].map((timingOption) => (
                    <label 
                      key={timingOption}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                        sessionPreference === timingOption 
                          ? 'border-[#1A3B32] bg-[#1A3B32]/5 font-semibold text-[#1A3B32]' 
                          : 'border-[#1A3B32]/10 bg-white/50 text-zinc-650'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="timing_preference" 
                        value={timingOption}
                        checked={sessionPreference === timingOption}
                        onChange={() => setSessionPreference(timingOption)}
                        className="accent-[#1A3B32]"
                      />
                      <span className="text-xs font-sans">{timingOption}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message_input" className="text-xs font-mono font-bold text-[#1A3B32] flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D97706]" />
                  Your Situation Background (Optional Quote, Stress limits)
                </label>
                <textarea 
                  id="message_input"
                  rows={3}
                  placeholder="Share what you are looking to get out of the program..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B32]/10 bg-white/50 focus:outline-none focus:border-[#1A3B32] text-sm font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1A3B32] hover:bg-[#255246] text-white font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#D97706]" />
                Proceed with Onboarding Booking
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Box */}
            <div className="bg-[#1A3B32] p-8 rounded-[24px] text-white shadow-xl space-y-6 border border-[#D97706]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block">Contact Information</span>
                <h4 className="font-serif font-bold text-xl text-white mt-1">Anandmay Desk</h4>
              </div>

              <div className="space-y-4 border-t border-white/15 pt-4">
                {/* Phone Contact Block */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#D97706]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#D97706] block">WhatsApp / Call</p>
                      <a href="tel:+919096100461" className="text-xs hover:underline font-mono">+91 90961 00461</a>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCopy('+919096100461', 'phone')}
                    className="p-1 px-2.5 rounded bg-white/5 hover:bg-white/10 text-[10px] uppercase font-mono tracking-wider text-[#D97706] flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedText === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    Copy
                  </button>
                </div>

                {/* Email Contact Block */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#D97706]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#D97706] block">Email Desk</p>
                      <a href="mailto:anandmayyogshala@gmail.com" className="text-xs hover:underline font-sans">
                        anandmayyogshala@gmail.com
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCopy('anandmayyogshala@gmail.com', 'email')}
                    className="p-1 px-2.5 rounded bg-white/5 hover:bg-white/10 text-[10px] uppercase font-mono tracking-wider text-[#D97706] flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedText === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Submission History - Local State Persistence proof */}
            {submissions.length > 0 && (
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#1A3B32]/10 shadow-sm">
                <div className="flex items-center gap-2 mb-4 border-b border-[#1A3B32]/10 pb-3 text-[#1A3B32]">
                  <History className="w-4.5 h-4.5 text-[#D97706]" />
                  <span className="text-xs uppercase font-mono font-bold">Your Requested Bookings ({submissions.length})</span>
                </div>

                <div className="space-y-4 max-h-56 overflow-y-auto pr-1">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="p-3 bg-[#EFECE6]/50 rounded-xl border border-[#1A3B32]/10 text-[11px] space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-serif font-bold text-[#1A3B32]">{sub.fullName}</span>
                        <span className="text-[9px] uppercase font-mono text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded-full font-bold">
                          {sub.status}
                        </span>
                      </div>
                      <p className="text-zinc-650 font-mono">
                        {sub.selectedTierName}  •  {sub.sessionPreference}
                      </p>
                      <p className="text-[10px] text-zinc-450 font-mono text-right">{sub.submittedAt}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-3 border-t border-[#1A3B32]/10 text-center text-[10px] text-zinc-400 italic">
                  *Submissions are stored securely on this device's memory
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
