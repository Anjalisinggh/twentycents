"use client";
import { useTranslations } from 'next-intl';

export default function ServiceLineup() {
  const t = useTranslations('services');
    return (
      <section className="bg-black py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-[1558px] mx-auto">
          {/* --- Title Section --- */}
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-wider">
              {t('title')}
            </h2>
            <div className="w-5 sm:w-6 h-[1px] bg-white"></div>
          </div>
  
          {/* --- Service Cards Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 ml-20">
            {/* Japan-Focused Column */}
            <div className="relative bg-[#111111] p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-400"></div>
            <div className="pl-4 sm:pl-5 md:pl-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{t('japanFocused.title')}</h3>
                <p className="text-white text-xs sm:text-sm mb-8 sm:mb-10 md:mb-5 opacity-80">{t('japanFocused.subtitle')}</p>
                <div className="w-5 sm:w-6 h-[1px] bg-white mb-10"></div>
                <div className="space-y-10 sm:space-y-12 md:space-y-16">
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <img src="/logos/hollywood.png" alt="HOLLYWOOD" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </div>
                    <p className="text-white text-base sm:text-lg  font-bold tracking-tight">{t('japanFocused.hollywood.name')}</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">{t('japanFocused.hollywood.tagline')}</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {t('japanFocused.hollywood.description')}
                    </p>
                  </div>
  
                  <div>
                    <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                      <span className="text-white text-3xl sm:text-4xl md:text-5xl font-black">PR</span>
                      <span className="text-white text-base sm:text-lg md:text-xl font-bold tracking-tighter">Short PR ADs</span>
                    </div>
                    <p className="text-white text-base sm:text-lg mb-2 font-bold tracking-tight">{t('japanFocused.prShort.name')}</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">
                      {t('japanFocused.prShort.tagline')}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {t('japanFocused.prShort.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* International-Focused Column */}
            <div className="relative bg-[#111111] p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-400"></div>
              <div className="pl-4 sm:pl-5 md:pl-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{t('internationalFocused.title')}</h3>
                <p className="text-white text-xs sm:text-sm mb-8 sm:mb-10 md:mb-5 opacity-80">{t('internationalFocused.subtitle')}</p>
                <div className="w-5 sm:w-6 h-[1px] bg-white mb-10"></div>
                <div className="space-y-10 sm:space-y-12 md:space-y-16">
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <img src="/logos/suite.png" alt="Localization Suite" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </div>
                    <p className="text-white text-base sm:text-lg  font-bold tracking-tight">{t('internationalFocused.localization.name')}</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">{t('internationalFocused.localization.tagline')}</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {t('internationalFocused.localization.description')}
                    </p>
                  </div>
  
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <img src="/logos/cheabook.png" alt="CheaBook" className="h-10 sm:h-12 md:h-14 w-auto" />
                    </div>
                    <p className="text-white text-base sm:text-lg  font-bold tracking-tight">{t('internationalFocused.cheabook.name')}</p>
                    <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-bold">{t('internationalFocused.cheabook.tagline')}</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {t('internationalFocused.cheabook.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* --- Creative Partners Section --- */}
          <div className="bg-[#111111] p-8 sm:p-12 md:p-16 rounded-sm relative overflow-hidden ml-20">
            {/* Subtle horizontal gradient line at the top to separate from service cards */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-400"></div>
            
            <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-widest">{t('creativePartners.title')}</h2>
              <p className="text-white text-xs opacity-60 tracking-widest">{t('creativePartners.subtitle')}</p>
              <div className="w-5 sm:w-6 h-[1px] bg-white mt-3 sm:mt-4"></div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 md:px-8 lg:px-12">
              {/* BIXEL Side */}
              <div className="flex flex-col items-start">
                <img src="/logos/b.png" alt="BIXEL" className="h-15 sm:h-17 md:h-19 w-auto  mb-6 " />
                <h4 className="text-white text-lg sm:text-xl font-bold ">{t('creativePartners.bixel.name')}</h4>
                <p className="text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">{t('creativePartners.bixel.tagline')}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  {t('creativePartners.bixel.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.raw('creativePartners.bixel.tags').map((tag) => (
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
                <h4 className="text-white text-lg sm:text-xl font-bold ">{t('creativePartners.twentyCents.name')}</h4>
                <p className="text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">{t('creativePartners.twentyCents.tagline')}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  {t('creativePartners.twentyCents.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.raw('creativePartners.twentyCents.tags').map((tag) => (
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