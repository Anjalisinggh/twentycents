"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ShortsSection() {
  const t = useTranslations('shorts');
  
  const features = [
    {
      title: t('features.oneStop.title'),
      subtitle: t('features.oneStop.subtitle'),
      desc: t('features.oneStop.desc')
    },
    {
      title: t('features.creators.title'),
      subtitle: t('features.creators.subtitle'),
      desc: t('features.creators.desc')
    },
    {
      title: t('features.followTheSun.title'),
      subtitle: t('features.followTheSun.subtitle'),
      desc: t('features.followTheSun.desc')
    },
    {
      title: t('features.aiHuman.title'),
      subtitle: t('features.aiHuman.subtitle'),
      desc: t('features.aiHuman.desc')
    }
  ];
  return (
    <section className="bg-black pt-16 pb-6 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-[1558px] mx-auto">

        {/* Section Header: Bridge between text and grid */}
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-white text-2xl md:text-3xl font-bold tracking-[0.3em]">
            {t('title')}
          </h4>
          <div className="w-5 h-[1px] bg-white mt-4 opacity-100"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

          {/* Central Logo Circle (Hidden on mobile for better flow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
  <div className="relative w-64 h-64 flex items-center justify-center">
    
    {/* High-Visibility Custom Dashed Circle */}
    <svg className="absolute inset-0 w-full h-full rotate-[-45deg]">
      <circle
        cx="50%"
        cy="50%"
        r="48%" 
        fill="none"
        stroke="white"
        strokeWidth="2.5" 
      
        strokeDasharray="15 12" 
        className="opacity-100"
      />
    </svg>

    {/* Center Logo Container */}
    <div className="w-52 h-52 rounded-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-10 shadow-2xl">
      <img 
        src="/logo2.png" 
        alt="logo" 
        className="w-24 h-auto opacity-90" 
      />
    </div>
    
  </div>
</div>
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-black/50  p-8 md:p-12 lg:p-16 rounded-2xl transition-all duration-500 hover:bg-black/50 group mt-10"
            >
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wider group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white text-lg font-bold mb-6 opacity-90 leading-snug">
                {item.subtitle}
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}