import { useState } from 'react';

/**
 * AmbientSmoke — Subtle, persistent background smoke for all chapters.
 * Simulates the lingering smell/smoke of Etan (incense) throughout the website.
 */
const AmbientSmoke = () => {
  const [blobs] = useState(() => 
    [...Array(6)].map(() => ({
      size: 300 + Math.random() * 400,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 60 + Math.random() * 40,
      delay: Math.random() * -30,
    }))
  );

  if (blobs.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {/* SVG filter for organic smoke distortion */}
      <svg width="0" height="0" className="absolute">
        <filter id="smoke-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
        </filter>
      </svg>

      <div className="w-full h-full relative" style={{ filter: 'url(#smoke-blur)' }}>
        {/* Render several drifting smoke blobs */}
        {blobs.map((blob, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold/5"
              style={{
                width: blob.size,
                height: blob.size,
                left: `${blob.left}%`,
                top: `${blob.top}%`,
                animation: `float-smoke ${blob.duration}s ease-in-out ${blob.delay}s infinite alternate`,
                transformOrigin: 'center center',
              }}
            />
          ))}
      </div>

      <style>{`
        @keyframes float-smoke {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translate(10%, -15%) scale(1.1) rotate(45deg);
            opacity: 0.6;
          }
          66% {
            transform: translate(-5%, -25%) scale(0.9) rotate(90deg);
            opacity: 0.4;
          }
          100% {
            transform: translate(15%, 5%) scale(1.2) rotate(135deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default AmbientSmoke;
