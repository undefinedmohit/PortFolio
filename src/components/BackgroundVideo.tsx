import React, { useEffect, useRef } from 'react';

const getInitialVideoUrl = () => {
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}bg-video.mp4`;
};

const SENSITIVITY = 0.8;

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const prevXRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.pause();
    }

    const isMobile = () => window.innerWidth < 768;

    // Desktop: horizontal mouse movement scrub
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile()) return;

      const v = videoRef.current;
      if (!v) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const duration = v.duration;
      if (!duration || isNaN(duration)) return;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * duration;
      const newTarget = Math.min(Math.max(targetTimeRef.current + timeOffset, 0), duration);
      targetTimeRef.current = newTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        v.currentTime = newTarget;
      }
    };

    // Mobile: vertical scroll position scrub
    const handleScroll = () => {
      if (!isMobile()) return;

      const v = videoRef.current;
      if (!v) return;

      const duration = v.duration;
      if (!duration || isNaN(duration)) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      const newTarget = scrollProgress * duration;
      targetTimeRef.current = newTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        v.currentTime = newTarget;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) return;

    isSeekingRef.current = false;
    const diff = Math.abs(video.currentTime - targetTimeRef.current);
    if (diff > 0.01) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.pause();
      videoRef.current.currentTime = 0.001;
      targetTimeRef.current = 0.001;
    }
  };

  return (
    <video
      ref={videoRef}
      src={getInitialVideoUrl()}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
      onLoadedMetadata={handleLoadedMetadata}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '70% center',
      }}
    />
  );
};
