export default function ServiceLineup() {
    return (
      <section className="bg-black py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-[1558px] mx-auto">
          {/* --- Title Section --- */}
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-white mb-2 tracking-wider">
              サービスラインナップ
            </h2>
            <div className="w-10 sm:w-12 h-[1px] bg-white"></div>
          </div>
  
          {/* --- Service Cards Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            {/* Japan-Focused Column */}
            <div className="relative bg-[#111111] p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-400"></div>
            <div className="pl-4 sm:pl-5 md:pl-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Japan-Focused</h3>
                <p className="text-white text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 opacity-80">国内向けサービス</p>
                
                <div className="space-y-10 sm:space-y-12 md:space-y-16">
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <img src="/logos/hollywood.png" alt="HOLLYWOOD" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </div>
                    <p className="text-white text-base sm:text-lg mb-2 font-bold tracking-tight">Hollywood Creative Partner</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">企業の"外部クリエイティブ部署"に。</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      映像関連の単発案件をまとめて扱う専用パートナー枠。1人月30万円〜で、企画・撮影・編集・納品まで柔軟にアサイン可能。
                    </p>
                  </div>
  
                  <div>
                    <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                      <span className="text-white text-3xl sm:text-4xl md:text-5xl font-black">PR</span>
                      <span className="text-white text-base sm:text-lg md:text-xl font-bold tracking-tighter">Short PR ADs</span>
                    </div>
                    <p className="text-white text-base sm:text-lg mb-2 font-bold tracking-tight">企業向けショートPR 広告</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">
                      ショートドラマで、企業の世界観を"連続コンテンツ化"する。
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      企業ブランドに基づいたショートドラマを毎月数本〜定期制作。ストーリー設計・脚本・キャスティング・撮影・編集まで一気通貫。
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* International-Focused Column */}
            <div className="relative bg-[#111111] p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-400"></div>
              <div className="pl-4 sm:pl-5 md:pl-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">International-Focused</h3>
                <p className="text-white text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 opacity-80">国内外向けサービス</p>
                
                <div className="space-y-10 sm:space-y-12 md:space-y-16">
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <img src="/logos/suite.png" alt="Localization Suite" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </div>
                    <p className="text-white text-base sm:text-lg mb-2 font-bold tracking-tight">Localization Suite</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">海外サービスを、「日本でちゃんと売れる」状態にする。</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      翻訳にとどまらない、文化・UX・マーケ・規制まで含む総合ローカライズ。日本市場向けのUI/UX再設計、コピー制作、LP・動画制作にも対応。
                    </p>
                  </div>
  
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <img src="/logos/cheabook.png" alt="CheaBook" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </div>
                    <p className="text-white text-base sm:text-lg mb-2 font-bold tracking-tight">CheaBook</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">新卒・多国籍社員のオンボーディングを、ゲームのように楽しく。</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      ゲーミフィケーション教材とミッションで業務知識・文化理解を効率学習。外国人向け／日本人新入社員向けの両方に対応。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* --- Creative Partners Section --- */}
          <div className="bg-[#111111] p-8 sm:p-12 md:p-16 rounded-sm relative overflow-hidden">
            {/* Subtle horizontal gradient line at the top to separate from service cards */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-400"></div>
            
            <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-widest">Creative Partners</h2>
              <p className="text-white text-xs opacity-60 tracking-widest">クリエイティブパートナー</p>
              <div className="w-10 sm:w-12 h-[1px] bg-white mt-3 sm:mt-4"></div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 md:px-8 lg:px-12">
              {/* BIXEL Side */}
              <div className="flex flex-col items-start">
                <img src="/logos/b.png" alt="BIXEL" className="h-12 sm:h-14 md:h-15 w-auto mb-6 sm:mb-8" />
                <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Contents Marketing</h4>
                <p className="text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">YouTube / TikTok で、「好き」と「信頼」を積み上げる。</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  企業公式YouTube・TikTokなどSNSコンテンツの制作〜運用代行。企画・台本・撮影・編集・サムネ・分析までワンストップ。
                </p>
                <div className="flex flex-wrap gap-2">
                  {['SNS マーケティング', '企画', '撮影', '編集'].map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
  
              {/* Twenty Cents Side */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 mb-6 sm:mb-8">
                  <img src="/twentylogo.png" alt="Twenty Cents." className="h-12 sm:h-14 md:h-15 w-auto" />
               
                </div>
                <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Creative Design</h4>
                <p className="text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">クリエイティブを"統合的に設計"するサービス。</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  映像制作、ブランドデザイン、UI/UX、アプリ開発まで、クリエイティブからテクノロジーまでフルスタックで提供。
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Dev 開発', 'CG, VFX', 'ブロックチェーン', 'AI'].map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }