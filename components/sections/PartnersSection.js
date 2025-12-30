"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

export default function PartnersSection() {
  const t = useTranslations('partners');
  return (
    <section className="bg-black text-white py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-widest">
            {t('title')}
          </h2>
          <div className="w-6 sm:w-5 h-[2px] bg-white mx-auto mb-6 sm:mb-8 md:mb-10" />
          <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] px-4">
            {t('subtitle')}
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          
          {/* Left: Venn Diagram */}
          <div className="relative flex items-center justify-center w-full max-w-[520px]">
            
            {/* Left Circle - Using mix-blend-screen for the overlap effect */}
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-[#1f1f1f] rounded-full flex items-center justify-center text-center p-4 sm:p-5 md:p-6 mix-blend-screen">
              <p className="font-bold leading-relaxed text-white text-xs sm:text-sm md:text-base mr-10">
                {t('aiOptimization').split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
            
            {/* Right Circle - Using mix-blend-screen to create the brighter intersection */}
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-[#1f1f1f] rounded-full flex items-center justify-center text-center p-4 sm:p-5 md:p-6 -ml-12 sm:-ml-16 md:-ml-20 lg:-ml-24 mix-blend-screen">
              <p className="font-bold leading-relaxed text-white text-xs sm:text-sm md:text-base ml-10">
                {t('humanCreative').split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          {/* Right: Description Text */}
          <div className="w-full max-w-xl text-left">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold leading-tight mb-4 sm:mb-4">
              {t('heading').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-5 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                {t('description.p1')}
              </p>
              <p>
                {t('description.p2')}
              </p>
              <p>
                {t('description.p3')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}