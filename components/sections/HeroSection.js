"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const partners = [
    { name: 'avex', src: '/logos/avex.png' },
    { name: 'Samurai Partners', src: '/logos/samurai.png' },
    { name: 'Hakuhodo', src: '/logos/haku.png' },
    { name: 'Disney', src: '/logos/disney.png' },
    { name: 'Amazon', src: '/logos/amazon.png' },
    { name: 'Amateras', src: '/logos/amateras.png' },
    { name: 'F1', src: '/logos/f1.png' },
    { name: 'TCB', src: '/logos/tcb.png' },
    { name: 'Shake Shack', src: '/logos/shake-shack.png' },
  ];

  return (
    <section className="bg-black w-full flex flex-col items-end pt-10 pb-6">
      
      {/* Top Left Standalone Logo */}
      <div className="w-full max-w-[1558px] mb-5 pl-4 sm:pl-6 md:pl-10 flex justify-start">
         <img src="/logo2.png" alt="Logo" className="h-15 sm:h-17 md:h-19 w-auto object-contain" />
      </div>

      {/* Cinematic Visual Container */}
      <div className="relative w-[92%] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden mt-7">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/bg.png')` }}
        />

        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 gap-6 sm:gap-8 md:gap-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
             <img src="/twentylogo.png" alt="Twenty Cents" className="w-[330px] ml-0 md:ml-28 h-auto object-contain" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-base sm:text-lg md:text-xl lg:text-[30px] font-bold leading-[1.6] tracking-[0.08em] text-center md:text-left"
          >
            <p className="whitespace-nowrap">統合クリエイティブで、</p>
            <p className="whitespace-nowrap">ビジネスを加速させる。</p>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-[1558px] mt-12 md:mt-16 lg:mt-20 overflow-hidden"
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-scroll {
              display: flex;
              gap: 4.5rem; 
              width: fit-content;
              animation: marquee-scroll 45s linear infinite;
            }
            .marquee-scroll:hover {
              animation-play-state: paused;
            }
          `
        }} />
        <div className="opacity-80 grayscale contrast-125">
          <div className="marquee-scroll flex items-center">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <img 
                key={`first-${index}`}
                src={partner.src} 
                alt={partner.name}
                className={`
                  ${partner.name === 'Hakuhodo' 
                    ? 'h-2 sm:h-2 md:h-5 lg:h-6' 
                    : 'h-6 sm:h-8 md:h-10 lg:h-12'
                  } 
                  w-auto object-contain hover:grayscale-0 transition-all cursor-pointer flex-shrink-0
                `}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <img 
                key={`second-${index}`}
                src={partner.src} 
                alt={partner.name}
                className={`
                  ${partner.name === 'Hakuhodo' 
                    ? 'h-4 sm:h-5 md:h-7 lg:h-8' 
                    : 'h-6 sm:h-8 md:h-10 lg:h-12'
                  } 
                  w-auto object-contain hover:grayscale-0 transition-all cursor-pointer flex-shrink-0
                `}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}