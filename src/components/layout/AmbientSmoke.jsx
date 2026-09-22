import { useEffect, useState } from 'react';

/**
 * AmbientSmoke — Subtle, persistent background smoke for all chapters.
 * Simulates the lingering smell/smoke of Etan (incense) throughout the website.
 */
const AmbientSmoke = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
        {[...Array(6)].map((_, i) => {
          const size = 300 + Math.random() * 400;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 20 + Math.random() * 20;
          const delay = Math.random() * -20;
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gold/5"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                animation: `float-smoke ${duration}s ease-in-out ${delay}s infinite alternate`,
                transformOrigin: 'center center',
              }}
            />
          );
        })}
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
