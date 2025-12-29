export default function PartnersSection() {
  return (
    <section className="bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-widest">
            導入効果
          </h2>
          <div className="w-6 sm:w-8 h-[2px] bg-white mx-auto mb-6 sm:mb-8 md:mb-10" />
          <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] px-4">
            AI × Human で最適化された "統合クリエイティブスタジオ"
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 md:gap-20">
          
          {/* Left: Venn Diagram */}
          <div className="relative flex items-center justify-center w-full max-w-[520px]">
            {/* Left Circle */}
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-[#1f1f1f] rounded-full flex items-center justify-center text-center p-4 sm:p-5 md:p-6">
              <p className="font-bold leading-relaxed text-white text-xs sm:text-sm md:text-base">
                AI活用<br />による最適化
              </p>
            </div>
            
            {/* Right Circle (Overlapping) */}
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-[#1f1f1f] rounded-full flex items-center justify-center text-center p-4 sm:p-5 md:p-6 -ml-12 sm:-ml-16 md:-ml-20 lg:-ml-24 opacity-80">
              <p className="font-bold leading-relaxed text-white text-xs sm:text-sm md:text-base">
                人が担う<br />クリエイティブ
              </p>
            </div>
          </div>

          {/* Right: Description Text */}
          <div className="w-full max-w-xl text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6 sm:mb-7 md:mb-8">
              創造に集中し、<br />
              無駄を削ぎ落とす独自ワークフロー。
            </h3>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                AIで省力化できる領域と、人が担うべき創造領域を明確に線引きする独自ルールを採用。
              </p>
              <p>
                反復作業や差分生成などはAIが高速処理し、企画・演出・デザインなど本質的な判断は人が担当。
              </p>
              <p>
                無駄な作業を徹底的に削減しながら、お客様の目的に最適化された高品質なクリエイティブを実現。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}