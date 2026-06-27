/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, Compass, Target, 
  TrendingUp, Award, HelpCircle, Users, BookOpen, 
  MessageSquare, Send, ChevronRight, ChevronLeft, GraduationCap,
  ShieldCheck, Smartphone, Check, Briefcase, Star, Quote
} from 'lucide-react';
import { SkillWaveLogo } from './Logos';

interface SkillWaveProps {
  onBookClick: () => void;
}

export default function SkillWave({ onBookClick }: SkillWaveProps) {
  const [selectedDuration, setSelectedDuration] = useState<'3m' | '6m'>('3m');
  const [whatsappMessage, setWhatsappMessage] = useState('Hello, I would like to book a Career Guidance session with SkillWave.');

  const testimonials = [
    {
      id: 'om_karande',
      name: 'Om Karande',
      location: 'Co-founder & CEO, Imergene',
      duration: 'Business Mentorship',
      image: '/Om_Karande.png',
      initials: 'OK',
      rating: 5,
      summary: 'Choosing Abhishek Sir as my guide and business consultant was the best decision of my life.',
      quote: "Abhishek Sir's teachings on balancing life, financial discipline, and taking small steps every day helped me a lot in changing my life. Learning from him didn't feel like 'Learning'—it felt like a 'Game'.",
      experience: {
        life: "Abhishek Sir's teachings on daily habits and financial discipline helped me balance my life and make small, consistent progress every single day.",
        confidence: "He guided me to become confident, independent, and clear about my values, showing me exactly how to conduct myself as a balanced human.",
        business: "He personally mentored me in growing my business, making him the best choice as my guide and business consultant."
      }
    },
    {
      id: 'shlok_khobare',
      name: 'Shlok Khobare',
      location: 'Student',
      duration: 'Career Mentorship',
      initials: 'SK',
      rating: 5,
      summary: 'Learning from him was easy and enjoyable. He makes difficult topics simple to understand.',
      quote: 'Abhishek Sir is the best listener, he understands things so quick and nice. I gained confidence and learned a lot, choosing my career path under his guidance.',
      experience: {
        life: 'His sessions are deeply patient, helping me clarify my daily goals and balance my academic schedule.',
        confidence: 'I gained immense confidence and learned to express myself clearly and without hesitation.',
        business: 'He made difficult career concepts simple to understand, guiding me to make the right stream choices.'
      }
    },
    {
      id: 'sanket_shaha',
      name: 'Sanket Shaha',
      location: 'Parent of Student',
      duration: 'Parent Consultation',
      initials: 'SS',
      rating: 5,
      summary: 'I have seen a positive change in my child’s confidence and overall nature.',
      quote: "Abhishek Sir's consultation style is friendly, supportive, and easy to follow. I truly appreciate the care and attention he gives to everyone.",
      experience: {
        life: "My child's daily habits, routine discipline, and screen time balance have improved significantly.",
        confidence: "I've witnessed a major boost in my child's self-confidence and their way of talking to people.",
        business: 'The friendly, personalized support provided in each mentorship session is truly exceptional.'
      }
    },
    {
      id: 'soham_phatak',
      name: 'Soham Phatak',
      location: 'Co-founder & CTO, Imergene',
      duration: 'Business Mentorship',
      image: '/Soham.png',
      initials: 'SP',
      rating: 5,
      summary: 'Transitioned from an overwhelmed graduate to a highly focused, balanced professional.',
      quote: "Before meeting Abhishek Sir, I was constantly anxious about my career path and struggled with screen distractions. His 1:1 guidance taught me how to channel my energy, build daily habits, and approach difficult challenges with confidence.",
      experience: {
        life: 'Taught me custom daily habit routines that completely bypassed procrastination and returned focus to my core goals.',
        confidence: 'His patient listening style made me feel understood and built the confidence I needed to ace my job interviews.',
        business: 'Helped me map out a practical 3-year professional roadmap, showing me how to maintain focus in high-pressure roles.'
      }
    }
  ];

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isTestimonialAnimating, setIsTestimonialAnimating] = useState(false);
  const [testimonialDirection, setTestimonialDirection] = useState<'next' | 'prev'>('next');

  const nextTestimonial = () => {
    if (isTestimonialAnimating || testimonials.length <= 1) return;
    setTestimonialDirection('next');
    setIsTestimonialAnimating(true);
    setTimeout(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
      setIsTestimonialAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isTestimonialAnimating || testimonials.length <= 1) return;
    setTestimonialDirection('prev');
    setIsTestimonialAnimating(true);
    setTimeout(() => {
      setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTestimonialAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTestimonialIdx, isTestimonialAnimating]);

  const beforeAfterData = [
    { before: 'Confused & lost about career choices', after: 'Clear direction & personalized roadmap' },
    { before: 'Low self-confidence & hesitant to speak', after: 'Strong, expressive, and radiant personality' },
    { before: 'Distracted, procrastinating & unfocused', after: 'Disciplined, consistent, and action-driven' },
    { before: 'No defined sense of purpose or vision', after: 'A structured, high-conviction plan for life' },
  ];

  const individualPrograms = [
    {
      title: 'Basic Clarity Session',
      duration: '45 - 60 mins',
      price: '₹700 - 1,000',
      description: 'One-on-one personal session to address immediate confusion and find initial direction.',
      gains: [
        'Identify core strengths & interests',
        'Initial mapping of potential paths',
        'Action steps for immediate clarity'
      ],
      tag: 'Starter'
    },
    {
      title: 'Advanced Roadmap Session',
      duration: '1.5 Hours',
      price: '₹1,500',
      description: 'Comprehensive evaluation of profile matching career goals to deep psychological insights.',
      gains: [
        'Advanced profiling and strength analysis',
        'Customized academic & career milestone map',
        'Detailed personal action blueprints'
      ],
      tag: 'Best Value',
      popular: true
    },
    {
      title: 'Follow-up Alignment Session',
      duration: '30 mins',
      price: '₹500',
      description: 'Check-in and revision session to keep your progression trajectory on active track.',
      gains: [
        'Progress review with mentor',
        'Course corrections and hurdle removal',
        'Accountability maintenance'
      ],
      tag: 'Ongoing Support'
    }
  ];

  const groupPrograms = [
    {
      icon: GraduationCap,
      title: 'Student Development Sessions',
      subtitle: 'Focus • Discipline • Confidence • Career Awareness',
      invest: '₹3,000 - ₹5,000',
      groupSize: '30 - 100 Students',
      features: [
        'Interactive SWOT analysis & profile mappings',
        'Core 3C Framework & Career Decision Matrix',
        'Goal setting and daily habit building systems',
        'Expressive communication and confidence drills'
      ],
      bg: 'bg-gradient-to-br from-indigo-50/50 to-blue-50/30 border-blue-100'
    },
    {
      icon: Users,
      title: 'Teacher Empowerment Training',
      subtitle: 'Student Handling • Stress Management • Communication',
      invest: '₹5,000 - ₹8,000',
      groupSize: '15 - 50 Teachers',
      features: [
        'Modern child psychology & diverse behavioral tools',
        'Stress release & burn-out prevention tactics',
        'Impactful empathetic classroom communication techniques',
        'Constructive feedback mechanisms for maximum growth'
      ],
      bg: 'bg-gradient-to-br from-emerald-50/50 to-teal-50/30 border-emerald-100'
    },
    {
      icon: ShieldCheck,
      title: 'Parenting Awareness Sessions',
      subtitle: 'Modern Parenting • Child Psychology • Digital Balance',
      invest: '₹5,000 - ₹8,000',
      groupSize: '20 - 100 Parents',
      features: [
        'Deconstruct teenage psychology & developmental steps',
        'Balancing screen time & social media addiction issues',
        'Techniques to guide career and life without pressuring',
        'Cultivating deep parent-child trust channels'
      ],
      bg: 'bg-gradient-to-br from-amber-50/50 to-orange-50/30 border-amber-100'
    }
  ];

  const handleWhatsAppClick = (programName?: string) => {
    const text = programName
      ? `Hello Abhishek Sir, I want to inquire about the SkillWave program: "${programName}". Please share details.`
      : whatsappMessage;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919096100461?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#FAF9F6] text-[#0F1E36] font-sans">

      {/* SkillWave Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-[#E6F0FA]/80 via-[#FAF9F6] to-[#FAF9F6]">
        {/* Abstract background shapes representing progress waves */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-150 rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-35 -ml-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Flag Badge */}
              <div id="skillwave-badge" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-105/10 border border-blue-200 text-xs font-semibold text-[#0F1E36]">
                <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="tracking-wide uppercase">Youth Development & Future Readiness</span>
              </div>

              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#0F1E36] tracking-tight leading-tight">
                Step Up.<br className="hidden sm:inline" /> Stand Out.<br /> <span className="text-[#3A90E3]">Succeed.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-650 font-light leading-relaxed max-w-xl">
                The world has never had more information, yet students have never been more confused. We guide today’s youth to clear the noise and build real-life clarity, absolute confidence, and solid discipline.
              </p>

              {/* Bold pain queries */}
              <div className="p-4 bg-white/70 backdrop-blur-xs rounded-2xl border border-blue-100/60 max-w-lg space-y-2">
                <p className="text-xs font-bold font-mono tracking-wider text-blue-800 uppercase">Are you facing these struggles?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <span className="text-red-500 font-bold">❌</span> Confused about your career?
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <span className="text-red-500 font-bold">❌</span> No confidence to speak?
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <span className="text-red-500 font-bold">❌</span> Distracted & unfocused?
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <span className="text-red-500 font-bold">❌</span> Anxious about the future?
                  </div>
                </div>
              </div>

              {/* Action Rows */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="px-8 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#1f9f4c] text-white font-bold tracking-wide uppercase shadow-lg shadow-emerald-500/20 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  WhatsApp Direct Booking
                </button>
                <a
                  href="#sw-programs"
                  className="px-6 py-3.5 rounded-xl border border-blue-200 hover:border-blue-400 bg-white/80 text-center font-bold text-sm tracking-wide text-[#0F1E36] transition-all flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="text-[10px] sm:text-xs text-[#5A6E85] font-mono italic">
                * Personalized Roadmaps • 100% Practical & Real-world • Global Exposure
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-7 sm:p-9 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-50/80 space-y-6 relative">

                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                  <SkillWaveLogo className="h-9" />
                  <span className="text-[10px] font-mono font-bold bg-[#3A90E3]/15 text-[#3A90E3] px-2.5 py-1 rounded-full border border-[#3A90E3]/20">
                    Active Mission
                  </span>
                </div>

                {/* Main Quote Card */}
                <div className="space-y-4">
                  <div className="text-4xl text-blue-200 font-serif leading-none h-4">“</div>
                  <p className="text-sm font-sans italic text-zinc-700 font-light leading-relaxed pl-4">
                    Success is not about finding the perfect career. It is about becoming the person worthy of it.
                  </p>
                  <div className="text-right pr-4">
                    <span className="text-xs font-semibold text-[#0F1E36] block">— Abhishek Todkar Mali</span>
                    <span className="text-[9px] text-[#5A6E85] font-mono tracking-wider block uppercase">Career Mentor & founder</span>
                  </div>
                </div>

                {/* Small call to action form shortcut */}
                <div className="pt-4 border-t border-zinc-100 space-y-3">
                  <label className="text-xs font-semibold text-zinc-700 block text-left">Request Call Back on WhatsApp:</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full text-xs bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-400 text-zinc-800"
                      value={whatsappMessage}
                      onChange={(e) => setWhatsappMessage(e.target.value)}
                    />
                    <button
                      onClick={() => handleWhatsAppClick()}
                      className="absolute right-2 top-1.5 p-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      aria-label="Send message"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[9.5px] text-[#5A6E85] font-mono block text-left">
                    Immediate WhatsApp redirect • 1-on-1 response guaranteed
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section - Timeless Bhagavad Gita Roots */}
      <section id="sw-philosophy" className="py-20 bg-white border-y border-zinc-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">

          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold border border-emerald-100">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Wisdom Philosophy</span>
          </div>

          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F1E36] tracking-tight">
            The Unique Bhagavad Gita Inspired Way
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-zinc-700 font-serif italic leading-relaxed">
              &ldquo;In the Bhagavad Gita, Lord Krishna doesn&rsquo;t tell Arjuna which path to choose. He helps him see who he truly is &mdash; and from that clarity, the right path becomes obvious.&rdquo;
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
            That is the absolute heart of SkillWave. We believe the greatest challenge today&rsquo;s youth faces isn&rsquo;t a lack of career opportunities &mdash; it&rsquo;s the endless noise that drowns out their own inner voice. We don&rsquo;t push options. We give you the compass.
          </p>

          {/* Three timeless principles bento line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto">

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-blue-50 relative group hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 mx-auto font-serif font-bold text-lg select-none">
                01
              </div>
              <h3 className="font-bold text-base text-[#0F1E36]">Clarity</h3>
              <p className="text-xs text-zinc-650 mt-2 leading-relaxed">
                Know yourself before you choose your career. Understand your temperament and core strengths first.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-emerald-50 relative group hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 mx-auto font-serif font-bold text-lg select-none">
                02
              </div>
              <h3 className="font-bold text-base text-[#0F1E36]">Action</h3>
              <p className="text-xs text-zinc-650 mt-2 leading-relaxed">
                Stop overthinking. Start doing. Action creates momentum and clears mental fog far faster than thought.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-amber-50 relative group hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 mx-auto font-serif font-bold text-lg select-none">
                03
              </div>
              <h3 className="font-bold text-base text-[#0F1E36]">Discipline</h3>
              <p className="text-xs text-zinc-650 mt-2 leading-relaxed">
                Small, consistent steps build extraordinary lives. Habit routines bypass motivation, creating true power.
              </p>
            </div>

          </div>

          <div className="pt-6">
            <p className="text-xs font-mono text-[#5A6E85] bg-zinc-50 border border-zinc-150 rounded-2xl inline-block px-5 py-2.5">
              <span className="font-bold text-[#0F1E36]">Understand:</span> You don’t need all the answers. You just need the right direction — and the courage to begin.
            </p>
          </div>

        </div>
      </section>

      {/* Vision & Realities bento section */}
      <section id="sw-vision" className="py-20 bg-[#FAF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#3A90E3] font-extrabold block">Addressing the Gap</span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F1E36] tracking-tight">
              A Complete Transformation Framework
            </h2>
            <p className="text-sm text-zinc-650 font-light">
              Today&rsquo;s competitive climate is overflowing with certificates but impoverished in direction. We reverse the cycle.
            </p>
          </div>

          {/* Transformation Outcomes Grid before vs after */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

            {/* Visual breakdown left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-lg shadow-zinc-100 space-y-5">
                <span className="text-[10px] font-mono text-emerald-600 font-bold tracking-wider uppercase block">CORE COMPETENCIES</span>
                <h3 className="text-lg font-bold text-[#0F1E36]">Our Triple-Wheel Framework</h3>
                <p className="text-xs text-zinc-650 leading-relaxed font-light">
                  SkillWave departs from typical &quot;classroom-style&quot; lectures by executing heavily personalized mentors across three intersection vectors:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">⚙️</div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-800">Mindset Upgrades</h4>
                      <p className="text-[11px] text-zinc-550">Eliminate stage-fear, cultivate high confidence, and harness emotional focus.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs flex-shrink-0">📈</div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-800">Career Engineering</h4>
                      <p className="text-[11px] text-zinc-550">SWOT mappings, corporate path selection, and 3C decision matrix alignment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs flex-shrink-0">🌱</div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-800">Integrated Life Skills</h4>
                      <p className="text-[11px] text-zinc-550">Empowerment, daily structural systems, and deep personal discipline matrices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before vs After Grid Right */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-lg overflow-hidden">
                <div className="bg-[#0F1E36] p-5 text-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#3A90E3] uppercase font-extrabold">SkillWave Metric Progression</span>
                  <p className="text-xs text-stone-200 mt-1">Real psychological shift in students before vs. after guidance</p>
                </div>

                <div className="divide-y divide-zinc-100">
                  <div className="grid grid-cols-2 bg-zinc-50 py-3 px-6 text-xs font-bold text-zinc-700 tracking-wider">
                    <div>BEFORE SKILLWAVE</div>
                    <div className="text-emerald-700 pl-4 border-l border-zinc-200">AFTER SKILLWAVE</div>
                  </div>

                  {beforeAfterData.map((row, i) => (
                    <div key={i} className="grid grid-cols-2 py-4 px-6 text-xs sm:text-sm items-center hover:bg-zinc-50/50 transition-colors">
                      <div className="text-zinc-500 font-light flex items-center gap-2">
                        <span className="text-xs text-zinc-450">❌</span>
                        {row.before}
                      </div>
                      <div className="text-emerald-800 font-semibold pl-4 border-l border-zinc-200 flex items-center gap-2">
                        <span className="text-xs text-emerald-500">✅</span>
                        {row.after}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* SkillWave Journey Images Gallery */}
          <div className="mt-20 pt-16 border-t border-zinc-200">
            <div className="text-center mb-12">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#3A90E3] font-extrabold block">Real Coaching Moments</span>
              <h3 className="text-2xl font-bold text-[#0F1E36] mt-2">SkillWave in Action</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Image 1 - Mentoring */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-zinc-200/60 group">
                <img
                  src="/mentoring-1.jpg"
                  alt="One-on-one mentoring session"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold tracking-wider uppercase">Mentoring</p>
                  <p className="text-[10px] text-zinc-200">1:1 Guidance</p>
                </div>
              </div>

              {/* Image 2 - Focus */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-zinc-200/60 group">
                <img
                  src="/focus-2.jpg"
                  alt="Deep focus and concentration coaching"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold tracking-wider uppercase">Focus</p>
                  <p className="text-[10px] text-zinc-200">Concentration</p>
                </div>
              </div>

              {/* Image 3 - Coaching */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-zinc-200/60 group">
                <img
                  src="/coaching-3.jpg"
                  alt="Interactive coaching session"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold tracking-wider uppercase">Coaching</p>
                  <p className="text-[10px] text-zinc-200">Engagement</p>
                </div>
              </div>

              {/* Image 4 - Session */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-zinc-200/60 group">
                <img
                  src="/session-4.jpg"
                  alt="Professional development session"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold tracking-wider uppercase">Session</p>
                  <p className="text-[10px] text-zinc-200">Development</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Who is this for Cards */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest">Audience Mappings</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F1E36] mt-1">Who Is This Specifically For?</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

              <div className="p-6 bg-white rounded-2xl border border-zinc-200/50 space-y-3 shadow-xs hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-55/10 flex items-center justify-center text-blue-600 font-bold text-sm">🎓</div>
                <h4 className="font-bold text-sm text-[#0F1E36]">Students (Ages 13–25)</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Feeling confused, anxious, or lost about stream selection, exams, and career futures.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200/50 space-y-3 shadow-xs hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-55/10 flex items-center justify-center text-emerald-600 font-bold text-sm">👩‍👩‍👦</div>
                <h4 className="font-bold text-sm text-[#0F1E36]">Parents of Teens</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Seeking structured professional guides to resolve digital addiction, child motivation and direction.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200/50 space-y-3 shadow-xs hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-55/10 flex items-center justify-center text-amber-600 font-bold text-sm">🏫</div>
                <h4 className="font-bold text-sm text-[#0F1E36]">Schools & Academies</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Committed to building modern, future-ready, holistic skills rather than just mugging up textbooks.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-zinc-200/50 space-y-3 shadow-xs hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-55/10 flex items-center justify-center text-indigo-600 font-bold text-sm">✨</div>
                <h4 className="font-bold text-sm text-[#0F1E36]">Aspirants Lacking Focus</h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Struggling with exam focus, screen distraction, stage-fear, or loss of consistent energy rhythm.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Founder Abhishek Todkar Mali Profile Area (Specific to SkillWave Lens) */}
      <section id="sw-founder" className="py-20 bg-white border-y border-zinc-150 relative overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/skillwave-bg.jpg"
            alt="Professional coaching environment"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }}
          />
          {/* Multiple layered overlays - darker for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/15"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column Profile text */}
            <div className="lg:col-span-7 text-left space-y-6">

              <div className="inline-flex items-center gap-1.5 bg-zinc-50 text-zinc-700 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold border border-zinc-200">
                <Award className="w-3.5 h-3.5 text-blue-500" />
                <span>Meet the Mentor</span>
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#0F1E36] tracking-tight leading-tight">
                Abhishek Todkar Mali
              </h2>

              <p className="text-xs sm:text-sm font-mono text-zinc-500 font-bold -mt-3 uppercase tracking-wider">
                Career Mentor | Life Coach | International Speaker
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                <p>
                  Abhishek built an exceptional, high-impact corporate career working across business, technology, and human development in **India and Germany**. Traveling to <span className="font-bold text-[#0F1E36] bg-[#3A90E3]/10 px-1 py-0.5 rounded">35+ countries</span>, he witnessed firsthand the global exposure and modern soft-skills that modern corporate structures value.
                </p>
                <p>
                  Yet beneath the executive success, a foundational realization emerged: <em>&ldquo;Most students and young minds don&rsquo;t struggle due to a lack of talent. They struggle because no one helps them find actual direction inside.&rdquo;</em> This sparked his deep return to Indian wisdom lineages, particularly the Bhagavad Gita, to formulate structured coaching metrics.
                </p>
                <p>
                  He is also the founder of **Anandmay Yogshala**, proving his integrated belief that mental, physical, career and purpose alignment are fundamentally interconnected modules of human progress.
                </p>
              </div>

              {/* Achievements row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full pt-4 border-t border-zinc-100">
                <div className="p-3 bg-zinc-50/50 rounded-xl text-center">
                  <span className="text-xl font-bold text-blue-600 block">35+</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wide">Countries Explored</span>
                </div>
                <div className="p-3 bg-zinc-50/50 rounded-xl text-center">
                  <span className="text-xl font-bold text-emerald-600 block">15+</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wide">Years Experience</span>
                </div>
                <div className="p-3 bg-zinc-50/50 rounded-xl text-center col-span-2 sm:col-span-1">
                  <span className="text-xl font-bold text-purple-600 block">100%</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wide">Practical & Custom</span>
                </div>
              </div>

              <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-100/60">
                <p className="text-xs text-blue-900 leading-relaxed italic">
                  &ldquo;A degree shows you learned what was in a book. SkillWave teaches you how to navigate what is outside the book—how to speak, choose, persist, and win.&rdquo;
                </p>
              </div>

            </div>

            {/* Right Column visual box */}
            <div className="lg:col-span-5">
              <div className="relative group mx-auto max-w-sm">
                {/* Backdrop border */}
                <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 hover:rotate-1 scale-105 transition-all opacity-15"></div>

                {/* Modern vector illustration frame representing path guidance */}
                <div className="relative bg-[#0F1E36] p-8 sm:p-10 rounded-[2.5rem] border border-zinc-800 text-stone-200 space-y-6 shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-3xl mx-auto">
                    🧭
                  </div>

                  <div className="text-center space-y-2">
                    <span className="text-[10.5px] font-mono text-[#3A90E3] uppercase tracking-widest font-extrabold">Career Mentorship</span>
                    <h3 className="font-sans font-bold text-lg text-white">Personal Career Alignment</h3>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      Get direct, personalized coaching from Abhishek to build your confidence, improve soft skills, select your career path, and successfully prepare for modern industry interviews.
                    </p>
                  </div>

                  <div className="border-t border-zinc-800 pt-4 text-center">
                    <button
                      onClick={() => handleWhatsAppClick('General Mentorship Consultation')}
                      className="text-xs font-bold text-white bg-blue-500 hover:bg-blue-650 px-4 py-2 rounded-xl transition-all w-full flex items-center justify-center gap-2"
                    >
                      <span>Inquire directly on WhatsApp</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing and Programs Interactive Grid */}
      <section id="sw-programs" className="py-20 bg-[#FAF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#22C55E] font-extrabold block">TRANSFORMATION PACKS</span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F1E36] tracking-tight">
              Our Professional Programs
            </h2>
            <p className="text-sm text-zinc-650 font-light">
              Select the appropriate tier constructed for individual scaling or institutional level deployments.
            </p>
          </div>

          {/* Subsection 1: Individual Sessions 1:1 Guidance */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-zinc-200">
              <div>
                <h3 className="text-lg font-bold text-[#0F1E36] flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-md flex items-center justify-center text-xs">🧑🏻💼</span>
                  Individual 1:1 Guided Sessions
                </h3>
                <p className="text-xs text-zinc-550">Find your vector under precise interactive mentorship</p>
              </div>
              <span className="text-[10px] font-mono text-blue-600 bg-blue-105/10 px-2.5 py-1 rounded border border-blue-200 mt-2 sm:mt-0 uppercase">
                🎁 Includes Lifetime Youth Community Access
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {individualPrograms.map((prog, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 sm:p-8 border min-h-[400px] flex flex-col justify-between transition-all duration-300 relative ${prog.popular
                      ? 'border-[#3A90E3] shadow-md ring-1 ring-[#3A90E3]/20 shadow-blue-50'
                      : 'border-zinc-200/60 hover:shadow-sm'
                    }`}
                >
                  {prog.popular && (
                    <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#3A90E3] text-white text-[9px] uppercase font-mono tracking-widest font-extrabold py-1 px-3 rounded-full">
                      Highly Recommended
                    </span>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] font-mono text-[#5A6E85] font-bold uppercase tracking-wider bg-zinc-50 border border-zinc-150 px-2 py-0.5 rounded">
                        {prog.tag}
                      </span>
                      <span className="text-xs text-zinc-450 font-mono italic">{prog.duration}</span>
                    </div>

                    <h4 className="font-bold text-base sm:text-lg text-[#0F1E36] text-left leading-tight">
                      {prog.title}
                    </h4>

                    <div className="py-2 text-left">
                      <span className="text-2xl font-extrabold text-[#0F1E36] tracking-tight">{prog.price}</span>
                      <span className="text-[10px] text-[#5A6E85] font-mono block">Investment Amount (INR)</span>
                    </div>

                    <p className="text-xs text-zinc-650 leading-relaxed font-light text-left">
                      {prog.description}
                    </p>

                    <div className="border-t border-zinc-100 pt-4 space-y-2 text-left">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-850 font-bold">Key Deliverables:</p>
                      {prog.gains.map((gain, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{gain}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => handleWhatsAppClick(prog.title)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${prog.popular
                          ? 'bg-[#3A90E3] text-white hover:bg-blue-600 shadow-sm'
                          : 'bg-white hover:bg-zinc-50 text-[#0F1E36] border-zinc-200'
                        }`}
                    >
                      Book over WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection 2: Long Term 1:1 Mentorship Success Plan */}
          <div className="mb-20">
            <div className="bg-[#0F1E36] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              {/* Dynamic decorative backdrop circles */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-2xl -mt-20 -mr-20"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                {/* Text specifics */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-mono tracking-wider font-extrabold text-blue-200 uppercase">
                    🔥 PREMIUM INDIVIDUAL PLAN
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
                    Student Success Plan (Ages 13–25)
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    A rigorous, prolonged milestone mentorship program constructed specifically to target long-term habits, professional career blueprints, and speaking clarity. No boring lectures—simply high-impact accountable frameworks.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
                      <span className="font-bold text-[#4ADE80] block">⚡ Timeline Tools Includes:</span>
                      <span className="text-stone-300 text-[11px] block">
                        • SWOT Analysis, 3C Matrix & Career Decisions
                      </span>
                      <span className="text-stone-300 text-[11px] block">
                        • Regular tracking & accountability checks
                      </span>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
                      <span className="font-bold text-[#4ADE80] block">📈 Target Milestones:</span>
                      <span className="text-stone-300 text-[11px] block">
                        • Personalized Academic & Growth route maps
                      </span>
                      <span className="text-stone-300 text-[11px] block">
                        • Sustainable screen balance habit systems
                      </span>
                    </div>
                  </div>
                </div>

                {/* Switcher & Price visual side */}
                <div className="lg:col-span-5 bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-4">
                  <span className="text-[10px] font-mono tracking-wider text-blue-300 font-extrabold block uppercase">Select Program Span:</span>

                  {/* Switcher Tabs */}
                  <div className="grid grid-cols-2 bg-white/5 p-1 rounded-xl gap-2 border border-white/10">
                    <button
                      onClick={() => setSelectedDuration('3m')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${selectedDuration === '3m' ? 'bg-[#3A90E3] text-white shadow-sm' : 'text-stone-300 hover:text-white'
                        }`}
                    >
                      3 Months Mentorship
                    </button>
                    <button
                      onClick={() => setSelectedDuration('6m')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${selectedDuration === '6m' ? 'bg-[#3A90E3] text-white shadow-sm' : 'text-stone-300 hover:text-white'
                        }`}
                    >
                      6 Months Mentorship
                    </button>
                  </div>

                  {/* Financial visualization based on selection */}
                  <div className="text-center py-4">
                    {selectedDuration === '3m' ? (
                      <div className="space-y-1">
                        <span className="text-4xl font-extrabold text-white tracking-tight">₹3,000</span>
                        <p className="text-stone-405 text-xs">Total Investment • 3 Sessions + 1 Custom Follow-up</p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <span className="text-4xl font-extrabold text-white tracking-tight">₹5,000</span>
                        <p className="text-stone-405 text-xs">Total Investment • 6 Sessions + 2 Custom Follow-up</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(`Success Plan Mentorship (${selectedDuration === '3m' ? '3 Months' : '6 Months'})`)}
                    className="w-full bg-[#22C55E] hover:bg-[#1f9f4c] text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Lock Selection & WhatsApp Abhishek
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Subsection 3: Institutions & School programs */}
          <div className="bg-gradient-to-br from-emerald-50/45 via-white to-teal-50/15 p-6 sm:p-10 rounded-[2.5rem] border border-emerald-500/20 shadow-xs mt-16 relative">
            {/* Main Program Ribbon Badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-600 text-white font-mono text-[9px] uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full shadow-md border border-white/10">
              ⭐ Main Program Initiative
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-emerald-100">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F1E36] flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-xs">🏫</span>
                  School & Academy Transformation Programs
                </h3>
                <p className="text-xs sm:text-sm text-zinc-650 mt-1 font-light">Empowering Students, Supporting Teachers, Guiding Parents</p>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-700 bg-emerald-100/60 px-3 py-1.5 rounded-full border border-emerald-200 mt-2 sm:mt-0 uppercase font-extrabold tracking-wider">
                Designed for institutional scale
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {groupPrograms.map((grp, i) => {
                const IconComp = grp.icon;
                return (
                  <div key={i} className={`p-6 sm:p-8 rounded-3xl border bg-white shadow-xs ${grp.bg} flex flex-col justify-between`}>
                    <div className="space-y-4">

                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-[#0F1E36]/5 flex items-center justify-center text-xl">
                          <IconComp className="w-5.5 h-5.5 text-[#0F1E36]" />
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-zinc-500 block">Invest Metric</span>
                          <span className="text-base font-bold text-zinc-800">{grp.invest}</span>
                        </div>
                      </div>

                      <div className="space-y-1 text-left">
                        <h4 className="font-bold text-base text-[#0F1E36] leading-tight">{grp.title}</h4>
                        <p className="text-[11px] font-semibold text-blue-700 font-sans tracking-wide italic">{grp.subtitle}</p>
                      </div>

                      <p className="text-[11px] text-zinc-500 font-mono inline-block bg-white/70 px-2 py-0.5 rounded border border-zinc-150">
                        👥 Ideal Group Size: {grp.groupSize}
                      </p>

                      <div className="space-y-2 pt-2 text-left">
                        <span className="text-[10px] tracking-wider uppercase font-mono text-zinc-650 font-bold block">Deliverables gained:</span>
                        {grp.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed">
                            <span className="text-xs text-[#22C55E] mt-0.5">✔</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => handleWhatsAppClick(`School Program: ${grp.title}`)}
                        className="w-full bg-[#0F1E36] hover:bg-zinc-800 text-stone-100 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Inquire Institutional Rate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Real Voices Testimonials Carousel */}
      <section id="sw-testimonials" className="py-20 bg-white border-t border-zinc-150">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-10">

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#3A90E3] uppercase font-extrabold block">Impact metrics</span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0F1E36] tracking-tight">
              Real Voices. Real Transformation.
            </h2>
          </div>

          {/* Carousel Outer Wrapper */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
            
            {/* Main Card Viewport */}
            <div className="overflow-hidden min-h-[500px] md:min-h-[420px]">
              {testimonials.map((t, idx) => {
                if (idx !== activeTestimonialIdx) return null;
                return (
                  <div 
                    key={t.id} 
                    className={`w-full bg-white/70 backdrop-blur-md border border-blue-100 rounded-[2rem] p-8 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300 transform relative text-left ${
                      isTestimonialAnimating 
                        ? testimonialDirection === 'next' 
                          ? 'opacity-0 translate-x-12 scale-98' 
                          : 'opacity-0 -translate-x-12 scale-98'
                        : 'opacity-100 translate-x-0 scale-100'
                    }`}
                  >
                    {/* Quote icon background ornament */}
                    <Quote className="absolute top-8 right-8 w-24 h-24 text-blue-500/5 pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      
                      {/* Left Column: Image and Profile Info */}
                      <div className="lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start lg:border-r lg:border-blue-100 lg:pr-8">
                        <div className="relative mb-4 group">
                          <div className="absolute inset-0 bg-[#3A90E3] rounded-2xl rotate-3 hover:rotate-1 scale-105 transition-all opacity-15"></div>
                          {t.image ? (
                            <img 
                              src={t.image} 
                              alt={t.name}
                              className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl object-cover border-2 border-blue-100 shadow-md z-10"
                            />
                          ) : (
                            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl border-2 border-blue-100 bg-[#FAF9F6] flex items-center justify-center shadow-md z-10 text-[#3A90E3] font-bold text-3xl sm:text-4xl select-none font-sans">
                              {t.initials}
                            </div>
                          )}
                        </div>
                        
                        <h3 className="font-sans font-bold text-lg text-[#0F1E36] mt-2 leading-tight">
                          {t.name}
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-zinc-550 text-xs mt-1.5 font-sans">
                          <Briefcase className="w-3.5 h-3.5 text-[#3A90E3]" />
                          <span>{t.location}</span>
                        </div>

                        <span className="mt-3 inline-block px-3 py-1 bg-blue-500/5 text-[#3A90E3] text-[10px] font-mono font-bold uppercase rounded-full tracking-wider">
                          {t.duration}
                        </span>
                      </div>

                      {/* Right Column: Review Details */}
                      <div className="lg:col-span-8 space-y-6 text-left">
                        {/* Star Rating & Summary */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#3A90E3] text-[#3A90E3]" />
                            ))}
                          </div>
                          <p className="text-base sm:text-lg font-sans font-bold text-[#0F1E36] leading-tight italic">
                            "{t.summary}"
                          </p>
                        </div>

                        {/* Quote content */}
                        <p className="text-zinc-650 text-sm font-sans leading-relaxed font-light">
                          {t.quote}
                        </p>

                        {/* Bulleted details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-blue-100">
                          <div className="bg-blue-50/10 p-4 rounded-xl border border-blue-100/30">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-1">Life Balance</span>
                            <p className="text-[11px] text-zinc-600 leading-relaxed font-sans font-light">
                              {t.experience.life}
                            </p>
                          </div>

                          <div className="bg-blue-50/10 p-4 rounded-xl border border-blue-100/30">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-1">Confidence</span>
                            <p className="text-[11px] text-zinc-600 leading-relaxed font-sans font-light">
                              {t.experience.confidence}
                            </p>
                          </div>

                          <div className="bg-blue-50/10 p-4 rounded-xl border border-blue-100/30">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#3A90E3] font-bold block mb-1">Business Growth</span>
                            <p className="text-[11px] text-zinc-600 leading-relaxed font-sans font-light">
                              {t.experience.business}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Chevron Buttons */}
            {testimonials.length > 1 && (
              <>
                {/* Left Chevron */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-[-16px] sm:left-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-[#0F1E36] hover:bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-blue-100/35 hover:scale-105 active:scale-95 cursor-pointer z-20"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>

                {/* Right Chevron */}
                <button
                  onClick={nextTestimonial}
                  className="absolute right-[-16px] sm:right-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-[#0F1E36] hover:bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-blue-100/35 hover:scale-105 active:scale-95 cursor-pointer z-20"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              </>
            )}

            {/* Pagination dots */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (isTestimonialAnimating) return;
                      setTestimonialDirection(idx > activeTestimonialIdx ? 'next' : 'prev');
                      setIsTestimonialAnimating(true);
                      setTimeout(() => {
                        setActiveTestimonialIdx(idx);
                        setIsTestimonialAnimating(false);
                      }, 300);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonialIdx === idx 
                        ? 'bg-[#3A90E3] w-6' 
                        : 'bg-blue-100 hover:bg-blue-205'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Keyboard navigation helper */}
            {testimonials.length > 1 && (
              <div className="text-center mt-3 text-[10px] text-zinc-400 font-mono">
                Tip: Use your keyboard's <span className="font-semibold text-zinc-500">←</span> and <span className="font-semibold text-zinc-500">→</span> keys to navigate slides.
              </div>
            )}

          </div>

          {/* Call to action card */}
          <div className="bg-[#FAF9F6] rounded-3xl p-8 sm:p-10 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-left gap-6 max-w-3xl mx-auto">
            <div className="space-y-1">
              <span className="text-[9.5px] font-mono tracking-wider font-extrabold text-[#3A90E3] uppercase block">No Slots to Waste</span>
              <h4 className="font-bold text-lg text-[#0F1E36]">Secure your First Career Discovery Session Today</h4>
              <p className="text-xs text-zinc-650 leading-relaxed font-light max-w-md">
                Our individual discovery slots are limited and processed on a first-come, first-served schedule. Contact directly via WhatsApp.
              </p>
            </div>

            <button
              onClick={() => handleWhatsAppClick('I want to schedule my first career/youth program discovery consultation.')}
              className="px-6 py-3 bg-[#22C55E] text-white hover:bg-emerald-600 font-bold rounded-xl text-xs uppercase tracking-wider whitespace-nowrap"
            >
              🚀 WhatsApp Inquire (+91 90961 00461)
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
