"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
  const t = useTranslations('features');
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom right, #3F629D, #2F92B8, #9BB78C, #E5BD58, #F9A142, #F17442, #EA4841)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (

    <section className="bg-black pt-8 pb-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-[1558px] mx-auto relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

        {/* Top-Left Quote - Positioned outside the main flex container */}
        <span className="absolute -top-8 left-0 text-white text-6xl md:text-8xl opacity-100 font-serif italic select-none">
          <img src="/top.png" alt="quote" className="w-[35px] mt-10" />
        </span>

        {/* Left: Large Gradient Heading */}
        <div className="relative w-full md:w-[55%] overflow-visible pt-14 pl-6">
          <h2 className="text-[30px] sm:text-[40px] md:text-[45px] lg:text-[66px] font-[600] leading-[70px]  ml-10"
            style={
              gradientStyle
            }>
            <span className="block">{t('heading.line1')}</span>
            <span className="block">{t('heading.line2')}</span>
            <span className="block">{t('heading.line3')}</span>
          </h2>
        </div>

        {/* Right: Japanese Description Text */}
        <div className="w-full md:w-[45%] md:max-w-[550px] pt-4 md:pt-14 relative pr-10">
          <h3 className="text-white text-xl sm:text-2xl md:text-[20.5px] font-bold mb-5 tracking-wider leading-snug ">
            {t('subtitle')}
          </h3>

          <div className="space-y-5 text-[#575757] text-sm md:text-base leading-[1.2] font-[10px]">
            <p>{t('description.p1')}</p>
            <p>{t('description.p2')}</p>
            <p>{t('description.p3')}</p>
          </div>

          {/* Bottom-Right Quote */}
          <span className="absolute -bottom-16 right-0 text-white text-6xl md:text-8xl opacity-100 font-serif italic select-none">
            <img src="/bottom.png" alt="quote" className="w-[35px] " />
          </span>
        </div>
      </div>
    </section>
  );
}