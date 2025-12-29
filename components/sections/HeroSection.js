"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const partners = [
    { name: 'avex', src: '/logos/avex.png' },
    { name: 'Samurai Partners', src: '/logos/samurai.png' },
    { name: 'Hakuhodo', src: '/logos/hakuhodo.png' },
    { name: 'Disney', src: '/logos/disney.png' },
    { name: 'Amazon', src: '/logos/amazon.png' },
    { name: 'Amateras', src: '/logos/amateras.png' },
    { name: 'F1', src: '/logos/f1.png' },
    { name: 'TCB', src: '/logos/tcb.png' },
    { name: 'Shake Shack', src: '/logos/shake-shack.png' },
  ];

  return (
    <section className="bg-black w-full flex flex-col items-center pt-5 pb-12 px-4 sm:px-6">
      
      {/* Top Left Standalone Logo */}
      <div className="w-full max-w-[1558px] mb-5 pl-4 sm:pl-6 md:pl-10 flex justify-start">
         <img src="/logo2.png" alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
      </div>

      {/* Cinematic Visual Container */}
      <div className="relative w-full max-w-[1558px] h-[250px] sm:h-[300px] md:h-[496px] overflow-hidden rounded-[2px] shadow-2xl">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/bg.png')`}}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 gap-6 sm:gap-8 md:gap-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
             <img src="/twentylogo.png" alt="Twenty Cents" className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[420px] h-auto object-contain" />
          </motion.div>

          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block w-[1.5px] h-32 bg-white/40 origin-center" 
          />

          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-base sm:text-lg md:text-xl lg:text-[32px] font-bold leading-[1.6] tracking-[0.08em] text-center md:text-left"
          >
            <p className="whitespace-nowrap">統合クリエイティブで、</p>
            <p className="whitespace-nowrap">ビジネスを加速させる。</p>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-[1558px] mt-12 md:mt-16 lg:mt-20"
      >
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-6 px-2 opacity-80 grayscale contrast-150">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner.src} 
              alt={partner.name}
              className="h-3 sm:h-4 md:h-6 w-auto object-contain hover:grayscale-0 transition-all cursor-pointer"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}