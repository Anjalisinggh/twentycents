"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function ProcessSection() {
  const t = useTranslations('process');
  const locale = useLocale();
  
  const steps = [
    {
      id: "01",
      title: t('steps.step1.title'),
      desc: t('steps.step1.desc'),
    },
    {
      id: "02",
      title: t('steps.step2.title'),
      desc: t('steps.step2.desc'),
    },
    {
      id: "03",
      title: t('steps.step3.title'),
      desc: t('steps.step3.desc'),
    },
    {
      id: "04",
      title: t('steps.step4.title'),
      desc: t('steps.step4.desc'),
    },
  ];

  return (
    <section className="bg-black text-white py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-3">
            {t('title')}
          </h2>
          <div className="w-6 sm:w-8 h-[1px] bg-white mx-auto"></div>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-8 sm:mb-16 md:mb-24">
  
  {/* Adjusted Connecting Dashed Line */}
  <div className="hidden md:block absolute top-7 left-[12.5%] w-[75%] h-[2px] pointer-events-none">
    <svg width="100%" height="2" preserveAspectRatio="none">
      <line 
        x1="0" 
        y1="1" 
        x2="100%" 
        y2="1" 
        stroke="white" 
        strokeWidth="2" 
        strokeDasharray="4 8" 
        className="opacity-30"
      />
    </svg>
  </div>

  {steps.map((step) => (
    <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
      
      {/* Number Circle Container */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-8">
        <svg className="absolute inset-0 w-full h-full rotate-[-45deg]">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="black"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
        </svg>
        <span className="relative z-10 text-sm sm:text-base font-bold tracking-widest text-white">
          {step.id}
        </span>
      </div>

      {/* Text Content */}
      <h3 className="text-base sm:text-lg font-bold mb-4 tracking-[0.15em] text-white">
        {step.title}
      </h3>
      
      <p className="text-[11px] sm:text-xs md:text-[13px] text-white leading-7 font-medium max-w-[200px] text-justify md:text-left">
        {step.desc}
      </p>
    </div>
  ))}
</div>

        {/* Client Logos Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 sm:gap-10 md:gap-16 max-w-[1558px] mx-auto px-4 py-12 bg-black">

          {/* Left Side: Title with Vertical Separator */}
          <div className="flex items-start gap-6 md:gap-10 ml-20">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-[0.4em] whitespace-nowrap mb-15">
              {t('mainClients')}
            </h3>
            <div className="h-5 md:h-7 w-[1.5px] bg-white mb-15"></div>
          </div>

          {/* Right Side: Logos in Two Rows */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full">

            {/* First Row: Top 5 Logos */}
            <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-6 opacity-90 brightness-0 invert">
              <img src="/logos/avex.png" alt="avex" className="h-4 sm:h-5 md:h-6 lg:h-7 w-auto object-contain" />
              <img src="/logos/samurai.png" alt="Samurai Partners" className="h-3 sm:h-4 md:h-4.5 w-auto object-contain" />
              <img src="/logos/hakuhodo.png" alt="HAKUHODO" className="h-3 sm:h-4 md:h-4 w-auto object-contain" />
              <img src="/logos/disney.png" alt="Disney" className="h-5 sm:h-6 md:h-8 w-auto object-contain" />
              <img src="/logos/amazon.png" alt="Amazon" className="h-5 sm:h-6 md:h-8 w-auto object-contain" />
            </div>

            {/* Second Row: Bottom 4 Logos */}
            <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 md:gap-x-14 gap-y-6 opacity-90 brightness-0 invert">
              <img src="/logos/tcb.png" alt="TCB" className="h-5 sm:h-6 md:h-8 w-auto object-contain" />
              <img src="/logos/shake-shack.png" alt="Shake Shack" className="h-4 sm:h-5 md:h-6 w-auto object-contain" />
              <img src="/logos/amateras.png" alt="Amateras" className="h-3 sm:h-3.5 md:h-4 w-auto object-contain" />
              <img src="/logos/f1.png" alt="F1" className="h-4 sm:h-5 md:h-6 w-auto object-contain" />
            </div>

          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 text-center px-4">
          <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
            <button className="bg-[#222]  hover:bg-[#333] text-white px-6 sm:px-8 md:px-10 lg:px-16 py-3 sm:py-4 md:py-5 rounded-full text-bold  md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] transition-all inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[260px]">
              {t('cta')}
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}