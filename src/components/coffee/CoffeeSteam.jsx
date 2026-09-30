/**
 * CoffeeSteam — Optimized volumetric smoke for the Etan (incense) and Cup.
 * Reduced particle count and reuses a small set of shared keyframes
 * instead of generating unique keyframes per particle.
 */
 
import { useTransform, motion } from 'framer-motion';

/**
 * 5 shared smoke keyframe patterns — particles randomly pick one.
 * Much cheaper than 40 unique keyframes.
 */
const SMOKE_PATTERNS = [
  { dx: -40, dy: -180, scale: 4, rot: 60 },
  { dx: 30, dy: -220, scale: 5, rot: -45 },
  { dx: -20, dy: -160, scale: 3.5, rot: 90 },
  { dx: 50, dy: -200, scale: 4.5, rot: -90 },
  { dx: -10, dy: -240, scale: 5.5, rot: 45 },
];

const generateParticles = (count, startX, startY, spread) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    startX: startX + (Math.random() - 0.5) * spread * 0.3,
    startY: startY + (Math.random() - 0.5) * 10,
    patternIndex: i % SMOKE_PATTERNS.length,
    duration: 8 + Math.random() * 6,
    delay: -(Math.random() * 12),
  }));
};

// 12 particles for Etan (down from 30), 6 for cup (down from 10)
const etanParticles = generateParticles(12, 350, 380, 120);
const cupParticles = generateParticles(6, 250, 325, 60);

const CoffeeSteam = ({ fillLevel, isComplete }) => {
  const cupSteamOpacity = useTransform(fillLevel, [0, 0.3, 0.7, 1], [0, 0.2, 0.6, 1]);

  return (
    <g>
      <defs>
        <radialGradient id="realSmoke" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(230, 230, 230, 0.5)" />
          <stop offset="40%" stopColor="rgba(210, 210, 210, 0.2)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>

        <filter id="smokeBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>

      {/* Etan incense smoke */}
      <g filter="url(#smokeBlur)">
        {etanParticles.map((p) => (
          <circle
            key={`etan-${p.id}`}
            cx={p.startX}
            cy={p.startY}
            r="12"
            fill="url(#realSmoke)"
            style={{
              animation: `smoke-${p.patternIndex} ${p.duration}s linear ${p.delay}s infinite`,
              transformOrigin: `${p.startX}px ${p.startY}px`,
            }}
          />
        ))}
      </g>

      {/* Cup steam */}
      <motion.g style={{ opacity: cupSteamOpacity }} filter="url(#smokeBlur)">
        {cupParticles.map((p) => (
          <circle
            key={`cup-${p.id}`}
            cx={p.startX}
            cy={p.startY}
            r="8"
            fill="url(#realSmoke)"
            style={{
              animation: `smoke-${p.patternIndex} ${p.duration}s linear ${p.delay}s infinite`,
              transformOrigin: `${p.startX}px ${p.startY}px`,
            }}
          />
        ))}

        {isComplete && (
          <circle
            cx="250"
            cy="325"
            r="15"
            fill="url(#realSmoke)"
            style={{
              animation: 'smoke-surge 4s ease-out infinite',
              transformOrigin: '250px 325px',
            }}
          />
        )}
      </motion.g>

      {/* 5 shared keyframes instead of 40 unique ones */}
      <style>{`
        ${SMOKE_PATTERNS.map((p, i) => `
          @keyframes smoke-${i} {
            0% {
              transform: translate(0px, 0px) scale(0.2) rotate(0deg);
              opacity: 0;
            }
            15% { opacity: 0.6; }
            75% { opacity: 0.3; }
            100% {
              transform: translate(${p.dx}px, ${p.dy}px) scale(${p.scale}) rotate(${p.rot}deg);
              opacity: 0;
            }
          }
        `).join('')}

        @keyframes smoke-surge {
          0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(0, -150px) scale(5); opacity: 0; }
        }
      `}</style>
    </g>
  );
};

export default CoffeeSteam;
