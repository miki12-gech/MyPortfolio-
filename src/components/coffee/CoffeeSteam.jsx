/**
 * CoffeeSteam — Highly realistic volumetric smoke for the Etan (incense) and Cup.
 * Uses blurred, overlapping radial gradients to simulate real billowing smoke.
 */
import { useTransform, motion } from 'framer-motion';

// Generate random parameters for a realistic continuous smoke plume
const generateSmokeParticles = (count, startX, startY, spread, height) => {
  return Array.from({ length: count }).map((_, i) => {
    // Randomize destinations to create a billowing cloud effect
    const destX = startX + (Math.random() - 0.5) * spread;
    const destY = startY - height - Math.random() * (height * 0.5);
    const duration = 8 + Math.random() * 6; // 8s to 14s duration
    const delay = -(Math.random() * 15); // Start at random points in the animation
    const scale = 5 + Math.random() * 10; // Final scale (massive expansion)

    return {
      startX, startY, destX, destY, duration, delay, scale,
      id: i
    };
  });
};

// 30 particles for the massive Etan incense smoke
const etanParticles = generateSmokeParticles(30, 350, 380, 800, 600);
// 10 smaller particles for the cup steam
const cupParticles = generateSmokeParticles(10, 250, 325, 100, 150);

const CoffeeSteam = ({ fillLevel, isComplete }) => {
  // Cup steam opacity increases as coffee fills
  const cupSteamOpacity = useTransform(fillLevel, [0, 0.3, 0.7, 1], [0, 0.2, 0.6, 1]);

  return (
    <g>
      <defs>
        {/* Realistic Smoke Gradient (Soft, white/grey with feathering) */}
        <radialGradient id="realSmoke" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(230, 230, 230, 0.6)" />
          <stop offset="30%" stopColor="rgba(210, 210, 210, 0.3)" />
          <stop offset="70%" stopColor="rgba(200, 200, 200, 0.1)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
        
        {/* Blur filter to merge particles into a seamless cloud */}
        <filter id="smokeBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        </filter>
      </defs>

      {/* === REAL ETAN INCENSE SMOKE === */}
      <g filter="url(#smokeBlur)">
        {etanParticles.map((p) => (
          <circle
            key={`etan-${p.id}`}
            cx={p.startX}
            cy={p.startY}
            r="15"
            fill="url(#realSmoke)"
            style={{
              animation: `billow-${p.id} ${p.duration}s linear ${p.delay}s infinite`,
              transformOrigin: `${p.startX}px ${p.startY}px`,
            }}
          />
        ))}
      </g>

      {/* === REAL CUP STEAM === */}
      <motion.g style={{ opacity: cupSteamOpacity }} filter="url(#smokeBlur)">
        {cupParticles.map((p) => (
          <circle
            key={`cup-${p.id}`}
            cx={p.startX}
            cy={p.startY}
            r="10"
            fill="url(#realSmoke)"
            style={{
              animation: `billow-${p.id} ${p.duration}s linear ${p.delay}s infinite`,
              transformOrigin: `${p.startX}px ${p.startY}px`,
            }}
          />
        ))}

        {/* Extra steam surge when completed */}
        {isComplete && (
          <circle
            cx="250"
            cy="325"
            r="20"
            fill="url(#realSmoke)"
            style={{
              animation: `billow-surge 4s ease-out infinite`,
              transformOrigin: `250px 325px`,
            }}
          />
        )}
      </motion.g>

      {/* Dynamically inject keyframes for every particle so they move uniquely */}
      <style>{`
        ${etanParticles.concat(cupParticles).map(p => `
          @keyframes billow-${p.id} {
            0% {
              transform: translate(0px, 0px) scale(0.2) rotate(0deg);
              opacity: 0;
            }
            15% {
              opacity: 0.8;
            }
            80% {
              opacity: 0.4;
            }
            100% {
              transform: translate(${p.destX - p.startX}px, ${p.destY - p.startY}px) scale(${p.scale}) rotate(${Math.random() > 0.5 ? 90 : -90}deg);
              opacity: 0;
            }
          }
        `).join('')}

        @keyframes billow-surge {
          0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(0, -200px) scale(6); opacity: 0; }
        }
      `}</style>
    </g>
  );
};

export default CoffeeSteam;
