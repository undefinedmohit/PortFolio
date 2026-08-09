import React, { useEffect, useRef, useState } from 'react';

const getInitialVideoUrl = () => {
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}bg-video.mp4`;
};

const FALLBACK_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';
const SENSITIVITY = 0.8;

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const prevXRef = useRef<number | null>(null);
  const [videoSrc, setVideoSrc] = useState<string>(getInitialVideoUrl);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current;
      if (!video) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * duration;
      const newTarget = Math.min(Math.max(targetTimeRef.current + timeOffset, 0), duration);
      targetTimeRef.current = newTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      // Force initial frame render
      videoRef.current.currentTime = 0.001;
      targetTimeRef.current = 0.001;
    }
  };

  const handleError = () => {
    if (videoSrc !== FALLBACK_VIDEO_URL) {
      console.warn('Local background video failed to load, switching to CloudFront fallback URL');
      setVideoSrc(FALLBACK_VIDEO_URL);
    }
  };

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
      onLoadedMetadata={handleLoadedMetadata}
      onError={handleError}
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
