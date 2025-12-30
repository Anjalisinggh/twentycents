"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ClientsSection() {
  const t = useTranslations('clients');
  const [activeVideoId, setActiveVideoId] = useState(null);

  const videoData = [
    { id: 1, src: '/bb.mp4', poster: '/v3.png' },
    { id: 2, src: '/bb.mp4', poster: '/v2.png' },
    { id: 3, src: '/bb.mp4', poster: '/v1.png' },
    { id: 4, src: '/bb.mp4', poster: '/v4.png' },
  ];

  return (
    <section className="pt-10 pb-32 bg-black text-center overflow-hidden">
      <div className="mb-16 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2">
          {t('title')}
        </h2>
        <div className="w-4 h-[2.5px] bg-white mx-auto"></div>
      </div>

      {/* Main Container: 
          Uses a flex layout that allows scaling on mobile so the cards 
          don't lose their specific 271x589 look.
      */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 max-w-full mx-auto">
        {videoData.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={activeVideoId === video.id}
            onPlay={() => setActiveVideoId(video.id)}
            onStop={() => setActiveVideoId(null)}
          />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video, isActive, onPlay, onStop }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load(); 
    }
  }, [isActive]);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (!isActive) {
        videoRef.current.play();
        onPlay();
      } else {
        videoRef.current.pause();
        videoRef.current.load();
        onStop();
      }
    }
  };

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden transition-all duration-500 
        
        w-[220px] h-[478px]       /* Mobile base */
        xs:w-[240px] xs:h-[522px]  /* Small devices */
        md:w-[200px] md:h-[489px]  /* Tablet/Desktop: Exact Match */
        rounded-[32px] md:rounded-[40px] shadow-2xl
        ${isActive ? 'ring-2 ring-white/50' : ''}`}
      onClick={handlePlayClick}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        className={`w-full h-full object-cover transition-transform duration-700 ${!isActive ? 'group-hover:scale-105' : ''}`}
        muted
        loop
        playsInline
      />

      {!isActive && (
        <>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                <path d="M5 3L19 12L5 21V3Z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {isActive && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-5 bg-white rounded-full"></div>
              <div className="w-1.5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}