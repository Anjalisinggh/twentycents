export default function ProcessSection() {
    const steps = [
      {
        id: "01",
        title: "お問い合わせ",
        desc: "サイトのお問い合わせフォーム、またはメール、電話でお気軽にご連絡ください。",
      },
      {
        id: "02",
        title: "お見積り",
        desc: "お客様のご要望を詳細にお聞きした上で、最適なサービスプランとお見積りをご提案します。",
      },
      {
        id: "03",
        title: "簡易デモ",
        desc: "お客様のご要望をもとに、簡易デモ・絵コンテ・ストーリーボードなどの試作を一度制作し、次のステップをご提案します。",
      },
      {
        id: "04",
        title: "サービス開始",
        desc: "専門チームがお客様のプロジェクトを担当し、最高品質のサービスを提供いたします。",
      },
    ];
  
    return (
      <section className="bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-3">
              導入の流れ
            </h2>
            <div className="w-6 sm:w-8 h-[1px] bg-white mx-auto"></div>
          </div>
  
          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-24 md:mb-32">
            {/* Connecting Dashed Line (Desktop Only) */}
            <div className="hidden md:block absolute top-7 left-0 w-full h-[1px] border-t border-dashed border-gray-600 -z-0"></div>
  
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-dashed border-gray-400 bg-black flex items-center justify-center mb-6 sm:mb-8">
                  <span className="text-xs sm:text-sm font-bold tracking-tighter">{step.id}</span>
                </div>
                
                {/* Text Content */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 sm:mb-5 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
  
          {/* Client Logos Section */}
          <div >
            {/* Title with Vertical Separator - Centered */}
            <div className="flex items-center justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] whitespace-nowrap">
                主要取引先
              </h3>
              <div className="h-5 sm:h-6 w-[1px] bg-white"></div>
            </div>

            {/* Logos in Two Rows */}
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
              {/* First Row */}
              <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-5 md:gap-y-6 opacity-80 grayscale brightness-0 invert">
                <img src="/logos/avex.png" alt="avex" className="h-4 sm:h-5 md:h-6 w-auto" />
                <img src="/logos/samurai.png" alt="Samurai Partners" className="h-3.5 sm:h-4 md:h-5 w-auto" />
                <img src="/logos/hakuhodo.png" alt="HAKUHODO" className="h-3.5 sm:h-4 md:h-5 w-auto" />
                <img src="/logos/disney.png" alt="Disney" className="h-4 sm:h-5 md:h-6 w-auto" />
                <img src="/logos/amazon.png" alt="Amazon" className="h-4 sm:h-5 md:h-6 w-auto" />
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-5 md:gap-y-6 opacity-80 grayscale brightness-0 invert">
                <img src="/logos/tcb.png" alt="TCB" className="h-4 sm:h-5 md:h-6 w-auto" />
                <img src="/logos/shake-shack.png" alt="Shake Shack" className="h-3.5 sm:h-4 md:h-5 w-auto" />
                <img src="/logos/amateras.png" alt="Amateras" className="h-3.5 sm:h-4 md:h-5 w-auto" />
                <img src="/logos/f1.png" alt="F1" className="h-4 sm:h-5 md:h-6 w-auto" />
              </div>
            </div>
          </div>
  
          {/* CTA Button */}
          <div className="mt-12 sm:mt-16 md:mt-24 text-center px-4">
            <button className="bg-[#222] hover:bg-[#333] text-white px-6 sm:px-8 md:px-10 lg:px-16 py-3 sm:py-4 md:py-5 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] transition-all inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[260px]">
              お問い合わせはこちらまで
            </button>
          </div>
  
        </div>
      </section>
    );
  }