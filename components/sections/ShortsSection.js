"use client";
import React from 'react';

const features = [
  {
    title: "ワンストップ体制",
    subtitle: "映像・デザイン・開発を、一つの物語として統合。",
    desc: "映像・デザイン・開発を一つのラインでMV・CM・ショートドラマからUI/UX・システム開発まで一貫対応。世界観がブレない、統合クリエイティブを実現。"
  },
  {
    title: "世界水準のクリエイター",
    subtitle: "ILM / DNEG 出身メンバーによるハイエンド品質。",
    desc: "ILM / DNEG / Wetaなどで経験を積んだメンバーが集結。VFXからSNSアドまで、最高峰の品質を。"
  },
  {
    title: "Follow-the-Sun 体制",
    subtitle: "東京・パリ・ムンバイが連動する、24時間稼働体制",
    desc: "東京・パリ・インドの3拠点が連動し、時差を活かした24時間稼働フローを。制作スピードの向上。世界をまたぐ、クリエイティブを実現。"
  },
  {
    title: "AI × Human の最適分業",
    subtitle: "人間の創造力とAIの生産性を、最高効率で融合。",
    desc: "企画・演出など創造領域は人が、素材生成や差分出しなど大量処理はAIが担当。コストを抑えつつ、制作速度と品質の双方を高める。"
  }
];

export default function ShortsSection() {
  return (
    <section className="bg-black pt-16 pb-6 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-[1558px] mx-auto">

        {/* Section Header: Bridge between text and grid */}
        <div className="flex flex-col items-center mb-10">
          <h4 className="text-white text-2xl md:text-3xl font-bold tracking-[0.3em]">
            特徴
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