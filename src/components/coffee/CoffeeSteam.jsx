/**
 * CoffeeSteam — Ambient steam and heavy Etan (incense) smoke.
 * Runs independently of scroll (CSS keyframe animation).
 */
import { useTransform, motion } from 'framer-motion';

// Steam from the coffee cup
const cupSteamPaths = [
  { d: 'M 240,325 C 238,310 242,295 237,278 C 233,265 238,250 235,235', delay: '0s', duration: '3.5s', animation: 'steamDrift1' },
  { d: 'M 250,325 C 252,308 248,292 252,275 C 255,260 250,245 253,228', delay: '1.2s', duration: '4s', animation: 'steamDrift2' },
  { d: 'M 260,325 C 263,312 258,298 262,282 C 265,268 261,255 264,240', delay: '0.6s', duration: '3.8s', animation: 'steamDrift3' },
  { d: 'M 245,325 C 241,305 246,288 242,270 C 239,255 243,240 240,222', delay: '2s', duration: '4.2s', animation: 'steamDrift1' },
];

// Massive heavy smoke spreading to the far left and right edges of the screen
const etanSmokePaths = [
  // Drift far left
  { d: 'M 350,380 C 200,300 -100,200 -300,50 C -500,-100 -200,-300 -400,-500', delay: '0s', duration: '8s', animation: 'steamDrift1', width: '20' },
  // Drift far right
  { d: 'M 350,380 C 500,300 800,200 1000,50 C 1200,-100 900,-300 1100,-500', delay: '1.5s', duration: '9s', animation: 'steamDrift2', width: '24' },
  // Drift up and left
  { d: 'M 350,380 C 250,250 50,100 -150,-100 C -350,-300 -100,-500 -250,-700', delay: '0.8s', duration: '8.5s', animation: 'steamDrift3', width: '22' },
  // Drift up and right
  { d: 'M 350,380 C 450,250 650,100 850,-100 C 1050,-300 800,-500 950,-700', delay: '2.5s', duration: '9.5s', animation: 'steamDrift1', width: '26' },
  // Drift straight up and wide
  { d: 'M 350,380 C 300,200 400,0 200,-200 C 0,-400 300,-600 100,-800', delay: '3.2s', duration: '8.8s', animation: 'steamDrift2', width: '24' },
  // Drift straight up and wide (opposite)
  { d: 'M 350,380 C 400,200 300,0 500,-200 C 700,-400 400,-600 600,-800', delay: '1.1s', duration: '7.8s', animation: 'steamDrift3', width: '20' },
];

const CoffeeSteam = ({ fillLevel, isComplete }) => {
  // Cup steam opacity increases as coffee fills
  const cupSteamOpacity = useTransform(fillLevel, [0, 0.3, 0.7, 1], [0.05, 0.15, 0.35, 0.55]);

  return (
    <g>
      {/* Etan Smoke (Always burning, heavy, traditional) */}
      <g opacity="0.65" filter="blur(2px)">
        {etanSmokePaths.map((steam, i) => (
          <path
            key={`etan-${i}`}
            d={steam.d}
            fill="none"
            stroke="rgba(245, 240, 232, 0.4)"
            strokeWidth={steam.width}
            strokeLinecap="round"
            opacity="0"
            style={{
              animation: `${steam.animation} ${steam.duration} ${steam.delay} infinite ease-in-out`,
            }}
          />
        ))}
      </g>

      {/* Coffee Cup Steam */}
      <motion.g style={{ opacity: cupSteamOpacity }}>
        {cupSteamPaths.map((steam, i) => (
          <path
            key={`cup-${i}`}
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
    </g>
  );
};

export default CoffeeSteam;
