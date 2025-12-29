"use client";
import React from 'react';

export default function FeaturesSection() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #3F629D, #3F629D, #2F92B8, #9BB78C, #E5BD58, #F9A142, #F17442, #EA4841)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    // Reduced padding-bottom (pb-12) to prevent the "black void" before the next section
    <section className="bg-black pt-20 pb-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-[1558px] mx-auto relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        
        {/* Top-Left Quote - Positioned outside the main flex container */}
        <span className="absolute -top-12 left-0 text-white text-6xl md:text-8xl opacity-100 font-serif italic select-none">
          &ldquo;
        </span>

        {/* Left: Large Gradient Heading */}
        <div className="relative w-full md:w-1/2 overflow-visible">
          <h2 className="text-[42px] sm:text-[60px] md:text-[75px] lg:text-[90px] font-black leading-[1.05] tracking-tighter">
            <span className="block" style={gradientStyle}>CRAZY ANGLE</span>
            <span className="block" style={gradientStyle}>PROFESSIONAL</span>
            <span className="block" style={gradientStyle}>QUALITY</span>
          </h2>
        </div>

        {/* Right: Japanese Description Text */}
        <div className="w-full md:w-1/2 md:max-w-[550px] pt-4 md:pt-10 relative">
          <h3 className="text-white text-xl sm:text-2xl md:text-[28px] font-bold mb-8 tracking-wider leading-snug">
            常識の外から創る、クリエイティブの物語。
          </h3>
          
          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-[1.9] font-medium">
            <p>映像・デザイン・システム開発をワンストップで統合し最大限のマーケティングを。</p>
            <p>東京・パリ・ムンバイから24時間のグローバル制作体制で、企業の世界観を一貫したストーリーを構築する。</p>
            <p>単なる再生数ではなく、視聴者をあなたのビジネスへ導く導線設計が、20CENTのSNSマーケティングの本質だ。</p>
          </div>

          {/* Bottom-Right Quote */}
          <span className="absolute -bottom-16 right-0 text-white text-6xl md:text-8xl opacity-100 font-serif italic select-none">
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}