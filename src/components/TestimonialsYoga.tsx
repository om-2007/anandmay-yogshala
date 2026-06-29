/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  age?: number;
  location: string;
  duration: string;
  image: string;
  initials: string;
  rating: number;
  quote: string;
  experience: {
    physical: string;
    mental: string;
    classes: string;
  };
  summary: string;
}

export default function TestimonialsYoga() {
  const testimonials: Testimonial[] = [
    {
      id: 'samadhan',
      name: 'Mr. Samadhan Wadalkar',
      age: 43,
      location: 'Nashik',
      duration: '1+ Year Member',
      image: '/Samadhan_Wadalkar.jpeg',
      initials: 'SW',
      rating: 5,
      summary: 'Waking up early, eating on time, and staying active throughout the day has now become effortless.',
      quote: 'Joining Anandmay Yogshala a year ago was one of the most positive decisions of my life. Under Coach Abhishek’s guidance, I have experienced a complete lifestyle transformation.',
      experience: {
        physical: 'I used to wake up with a stiff body, but now my flexibility and energy levels have soared. My back pain has also significantly reduced.',
        mental: 'The guided pranayama and meditation sessions have dramatically reduced my stress, while improving my focus and patience.',
        classes: 'I love how Abhishek ji explains every asana in detail and provides personalized posture corrections. The environment is always supportive and positive.'
      }
    },
    {
      id: 'natvarbhai',
      name: 'Mr. Natvarbhai',
      age: 79,
      location: 'Yogshala Member',
      duration: 'Active Member',
      image: '/Natvarbhai.jpeg',
      initials: 'NB',
      rating: 5,
      summary: 'Since joining, we feel more energetic, our minds are calmer, and our bodies feel lighter.',
      quote: 'We are grateful to Abhishek Ji, our yoga guru, for the positive changes he has brought into our lives. We have experienced a significant improvement in our overall well-being under his dedicated guidance.',
      experience: {
        physical: 'We feel more energetic, our bodies are lighter and more responsive, with a noticeable reduction in chronic knee pain.',
        mental: 'Our minds are significantly calmer and more relaxed after every yoga practice session.',
        classes: "Abhishek Ji's sincere dedication and structured guidance make every session highly approachable and beneficial."
      }
    },
    {
      id: 'sonal',
      name: 'Dr. Sonal',
      location: 'Yogshala Member',
      duration: 'Active Member',
      image: '/Dr_Sonal.jpeg',
      initials: 'DS',
      rating: 5,
      summary: 'Yoga here is not just about asanas; Abhishek Sir teaches valuable life lessons too.',
      quote: 'Grateful to be a part of Anandmay Yogshala. Since joining, my energy levels have improved, and I feel more connected to myself. I truly appreciate the personal attention and guidance Coach Abhishek gives to every student.',
      experience: {
        physical: 'My overall energy levels have improved significantly, helping me stay active and vibrant throughout the day.',
        mental: 'I feel much more connected to myself, experiencing true growth physically, mentally, and emotionally.',
        classes: 'Abhishek Sir teaches valuable life lessons alongside traditional asanas, offering personal attention to each student.'
      }
    },
    {
      id: 'vaishali',
      name: 'Mrs. Vaishali Mali',
      location: 'Online Class Member',
      duration: '1+ Year Member',
      image: '',
      initials: 'VM',
      rating: 5,
      summary: 'Anandmay Yogshala has greatly helped in improving my physical and mental health.',
      quote: 'Yoga Guru Abhishek Todkar teaches yoga postures exceptionally well. I have been learning from him for nearly a year through online classes. The breathing exercises and postures have brought immense clarity and peace to my mind.',
      experience: {
        physical: 'My daily energy has increased significantly, and I have noticed a major improvement in my physical posture.',
        mental: 'The breathing exercises (Pranayama) and meditation have brought immense clarity and peace of mind.',
        classes: 'Abhishek Sir teaches yoga postures exceptionally well through his structured and engaging online classes.'
      }
    },
    {
      id: 'sn_parekh',
      name: 'Mrs. S. N. Parekh',
      age: 70,
      location: 'Yogshala Member',
      duration: 'Active Member',
      image: '/SN_Parekh.jpeg',
      initials: 'SP',
      rating: 5,
      summary: 'At age 70, my mobility and posture have improved, and I feel a deep sense of peace.',
      quote: 'Abhishek Ji’s guidance and online classes are a blessing for seniors. The breathing exercises and daily asanas have brought immense energy and clarity to my life, helping me stay active and pain-free.',
      experience: {
        physical: 'Significant improvements in overall posture, breathing capacity, and physical balance at age 70.',
        mental: 'Felt a deep sense of mental clarity, relaxation, and overall emotional well-being.',
        classes: 'The personalized support and careful modifications for older adults make his training exceptionally safe and beneficial.'
      }
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating || testimonials.length <= 1) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating || testimonials.length <= 1) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Keyboard navigation support for arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only navigate if testimonials are in view or general interaction
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, isAnimating]);

  const activeTestimonial = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-[#FAF8F5] border-t border-[#1A3B32]/10 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A3B32]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Student Journeys</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight">
            Real Voices. Real Transformation.
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto my-4 rounded-full" />
          <p className="text-zinc-650 font-sans text-base">
            Read inspiring stories of healing, discipline, and alignment from the students of Anandmay Yogshala.
          </p>
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-12">

          {/* Main Card Viewport */}
          <div className="overflow-hidden min-h-[550px] md:min-h-[450px]">
            <div
              className={`w-full bg-white/70 backdrop-blur-md border border-[#1A3B32]/10 rounded-[2rem] p-8 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300 transform relative ${isAnimating
                  ? direction === 'next'
                    ? 'opacity-0 translate-x-12 scale-98'
                    : 'opacity-0 -translate-x-12 scale-98'
                  : 'opacity-100 translate-x-0 scale-100'
                }`}
            >
              {/* Quote icon background ornament */}
              <Quote className="absolute top-8 right-8 w-24 h-24 text-[#D97706]/5 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left Column: Image and Profile Info */}
                <div className="lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start lg:border-r lg:border-[#1A3B32]/10 lg:pr-8">
                  <div className="relative mb-4 group">
                    <div className="absolute inset-0 bg-[#D97706] rounded-2xl rotate-3 hover:rotate-1 scale-105 transition-all opacity-15"></div>
                    {activeTestimonial.image ? (
                      <img
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl object-cover border-2 border-[#1A3B32]/15 shadow-md z-10"
                      />
                    ) : (
                      <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl border-2 border-[#1A3B32]/15 shadow-md z-10 bg-[#1A3B32]/5 flex items-center justify-center text-[#1A3B32] text-4xl font-extrabold font-serif">
                        {activeTestimonial.initials}
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1A3B32] mt-2 leading-tight">
                    {activeTestimonial.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-zinc-550 text-xs mt-1.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{activeTestimonial.location}{activeTestimonial.age ? ` • Age ${activeTestimonial.age}` : ''}</span>
                  </div>

                  <span className="mt-3 inline-block px-3 py-1 bg-[#1A3B32]/5 text-[#1A3B32] text-[10px] font-mono font-bold uppercase rounded-full tracking-wider">
                    {activeTestimonial.duration}
                  </span>
                </div>

                {/* Right Column: Review Details */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  {/* Star Rating & Summary */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
                      ))}
                    </div>
                    <p className="text-base sm:text-lg font-serif font-bold text-[#1A3B32] leading-tight italic">
                      "{activeTestimonial.summary}"
                    </p>
                  </div>

                  {/* Quote content */}
                  <p className="text-zinc-650 text-sm font-sans leading-relaxed font-light">
                    {activeTestimonial.quote}
                  </p>

                  {/* Bulleted details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#1A3B32]/10">
                    <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#1A3B32]/5">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-1">Physical Shift</span>
                      <p className="text-[11px] text-zinc-600 leading-relaxed font-sans font-light">
                        {activeTestimonial.experience.physical}
                      </p>
                    </div>

                    <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#1A3B32]/5">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-1">Mental Shift</span>
                      <p className="text-[11px] text-zinc-600 leading-relaxed font-sans font-light">
                        {activeTestimonial.experience.mental}
                      </p>
                    </div>

                    <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#1A3B32]/5">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-1">The Sessions</span>
                      <p className="text-[11px] text-zinc-600 leading-relaxed font-sans font-light">
                        {activeTestimonial.experience.classes}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Navigation Chevron Buttons */}
          {testimonials.length > 1 && (
            <>
              {/* Left Chevron */}
              <button
                onClick={prevSlide}
                className="absolute left-[-16px] sm:left-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-[#1A3B32] hover:bg-[#255246] text-[#FAF8F5] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-[#D97706]/15 hover:scale-105 active:scale-95 cursor-pointer z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>

              {/* Right Chevron */}
              <button
                onClick={nextSlide}
                className="absolute right-[-16px] sm:right-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-[#1A3B32] hover:bg-[#255246] text-[#FAF8F5] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-[#D97706]/15 hover:scale-105 active:scale-95 cursor-pointer z-20"
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
                    if (isAnimating) return;
                    setDirection(idx > activeIdx ? 'next' : 'prev');
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIdx(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIdx === idx
                      ? 'bg-[#D97706] w-6'
                      : 'bg-[#1A3B32]/20 hover:bg-[#1A3B32]/45'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Tips for keyboard navigation helper */}
          <div className="text-center mt-3 text-[10px] text-zinc-400 font-mono">
            Tip: Use your keyboard's <span className="font-semibold text-zinc-500">←</span> and <span className="font-semibold text-zinc-500">→</span> keys to navigate slides.
          </div>

        </div>
      </div>
    </section>
  );
}
