"use client";
import React, { useRef } from 'react';

export default function ClientsSection() {
  // Replace these with your actual video and poster paths
  const videoData = [
    { id: 1, src: '/videos/promo1.mp4', poster: '/v3.png' },
    { id: 2, src: '/videos/promo2.mp4', poster: '/v2.png' },
    { id: 3, src: '/videos/promo3.mp4', poster: '/v1.png' },
    { id: 4, src: '/videos/promo4.mp4', poster: '/v4.png' },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-black text-center">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 md:mb-20 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-widest mb-3 sm:mb-4">
          ショートPR 広告 一覧
        </h2>
        <div className="w-8 sm:w-10 h-[2px] bg-white mx-auto"></div>
      </div>

      {/* Video Grid */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    // Optional: Auto-play on hover
    // videoRef.current.play();
  };

  const handleMouseLeave = () => {
    // Optional: Pause on leave
    // videoRef.current.pause();
  };

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-2xl transition-all duration-500 hover:-translate-y-2 w-[180px] h-[390px] sm:w-[220px] sm:h-[480px] md:w-[271px] md:h-[589px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Actual Video Element */}
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        muted
        loop
        playsInline
      />

      {/* Dark Overlay that fades in on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Play Icon Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
          {/* SVG Play Triangle */}
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="white" 
            xmlns="http://www.w3.org/2000/svg"
            className="ml-0.5 sm:ml-1 md:w-6 md:h-6"
          >
            <path d="M5 3L19 12L5 21V3Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}