// components/sections/FeaturesSection.js
export default function FeaturesSection() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #3F629D, #3F629D, #2F92B8, #9BB78C, #E5BD58, #F9A142, #F17442, #EA4841)'
  };

  return (
    <section className="bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1558px] mx-auto relative flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12">
        
        {/* Left: Heading with Gradient Text */}
        <div className="relative w-full md:w-auto">
          {/* Top Decorative Quote */}
          <span className="absolute -top-8 sm:-top-10 md:-top-12 -left-4 sm:-left-6 md:-left-8 text-white text-4xl sm:text-5xl md:text-6xl opacity-90 font-serif leading-none italic">
            &ldquo;
          </span>
          
          <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[84px] font-black leading-[0.9] tracking-tighter">
            <span 
              className="block bg-clip-text text-transparent"
              style={gradientStyle}
            >
              CRAZY ANGLE
            </span>
            <span 
              className="block bg-clip-text text-transparent"
              style={gradientStyle}
            >
              PROFESSIONAL
            </span>
            <span 
              className="block bg-clip-text text-transparent"
              style={gradientStyle}
            >
              QUALITY
            </span>
          </h2>
        </div>

        {/* Right: Japanese Description Text */}
        <div className="w-full md:max-w-[580px] pt-4 relative">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-wider">
            常識の外から創る、クリエイティブの物語。
          </h3>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-white text-xs sm:text-sm md:text-base leading-[1.7] sm:leading-[1.8] font-normal">
            <p>
              映像・デザイン・システム開発をワンストップで統合し最大限のマーケティングを。
            </p>
            <p>
              東京・パリ・ムンバイから24時間のグローバル制作体制で、企業の世界観を一貫したストーリーを構築する。
            </p>
            <p>
              単なる再生数ではなく、視聴者をあなたのビジネスへ導く導線設計が、20CENTのSNSマーケティングの本質だ。
            </p>
          </div>

          {/* Bottom Decorative Quote */}
          <span className="absolute -bottom-10 sm:-bottom-12 md:-bottom-16 right-0 text-white text-4xl sm:text-5xl md:text-6xl opacity-90 font-serif leading-none italic">
            &rdquo;
          </span>
        </div>
      </div>

      {/* Bottom Section Title: 特徴 */}
      <div className="max-w-[1558px] mx-auto mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 flex flex-col items-center">
        <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-normal tracking-wider">
          特徴
        </h4>
        <div className="w-10 sm:w-12 h-[1px] bg-white mt-2"></div>
      </div>
    </section>
  );
}
