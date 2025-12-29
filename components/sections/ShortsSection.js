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
    subtitle: "ILM / DNEG / 出身メンバーによるハイエンド品質。",
    desc: "ILM / DNEG / Wetaなどで経験を積んだメンバーがメンバー集結。VFXからSNSのまで、SNSアドに。最高峰の品質を。"
  },
  {
    title: "Follow-the-Sun 体制",
    subtitle: "東京・パリ・バンバイが連動する、24時間稼働体制",
    desc: "東京・パリ・インドの3拠点が連動し、時差を活かした24時間稼働フローを。制作スピードの向上。世界をまたぐ、クリエイティブを実現。"
  },
  {
    title: "AI × Human の最適分業",
    subtitle: "人間の創造力とAIの生産性を、最高効率で融合。",
    desc: "企画・演出など創造領域は人が、素材生成やルーチンワークはAIが。品質を維持しながらコストを削減。"
  }
];

export default function ShortsSection() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1558px] mx-auto relative">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 relative">
          
          {/* Central Logo Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="w-40 md:w-48 h-40 md:h-48 rounded-full border border-dashed border-gray-600 flex items-center justify-center bg-black">
              <div> <img src="/logo2.png" alt="logo" className="w-16 md:w-20 h-16 md:h-20" />
               
              </div>
            </div>
          </div>

          {features.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-950/50 p-6 sm:p-8 md:p-10 lg:p-16 rounded-xl sm:rounded-2xl transition-all duration-500 hover:bg-zinc-900 group"
            >
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 tracking-wider group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-5 md:mb-6 opacity-90">
                {item.subtitle}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}