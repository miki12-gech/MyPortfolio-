/**
 * CoffeeSteam — Ambient steam rising from the sini.
 * Runs independently of scroll (CSS keyframe animation).
 * Opacity increases as coffee fills.
 */
import { useTransform, motion } from 'framer-motion';

const steamPaths = [
  {
    d: 'M 240,325 C 238,310 242,295 237,278 C 233,265 238,250 235,235',
    delay: '0s',
    duration: '3.5s',
    animation: 'steamDrift1',
  },
  {
    d: 'M 250,325 C 252,308 248,292 252,275 C 255,260 250,245 253,228',
    delay: '1.2s',
    duration: '4s',
    animation: 'steamDrift2',
  },
  {
    d: 'M 260,325 C 263,312 258,298 262,282 C 265,268 261,255 264,240',
    delay: '0.6s',
    duration: '3.8s',
    animation: 'steamDrift3',
  },
  {
    d: 'M 245,325 C 241,305 246,288 242,270 C 239,255 243,240 240,222',
    delay: '2s',
    duration: '4.2s',
    animation: 'steamDrift1',
  },
  {
    d: 'M 255,325 C 258,310 254,295 258,278 C 261,262 257,248 260,232',
    delay: '1.8s',
    duration: '3.6s',
    animation: 'steamDrift2',
  },
];

const CoffeeSteam = ({ fillLevel, isComplete }) => {
  // Steam opacity increases as coffee fills
  const steamOpacity = useTransform(fillLevel, [0, 0.3, 0.7, 1], [0.05, 0.15, 0.35, 0.55]);

  return (
    <motion.g style={{ opacity: steamOpacity }}>
      {steamPaths.map((steam, i) => (
        <path
          key={i}
          d={steam.d}
          fill="none"
          stroke="rgba(245, 240, 232, 0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
          style={{
            animation: `${steam.animation} ${steam.duration} ${steam.delay} infinite ease-in-out`,
          }}
        />
      ))}

      {/* Extra intense steam when complete */}
      {isComplete && (
        <>
          <path
            d="M 235,325 C 230,300 238,275 232,248"
            fill="none"
            stroke="rgba(245, 240, 232, 0.4)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              animation: 'steamDrift3 3s 0.3s infinite ease-in-out',
            }}
          />
          <path
            d="M 265,325 C 270,298 262,272 268,245"
            fill="none"
            stroke="rgba(245, 240, 232, 0.35)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              animation: 'steamDrift1 3.4s 0.8s infinite ease-in-out',
            }}
          />
        </>
      )}
    </motion.g>
  );
};

export default CoffeeSteam;
