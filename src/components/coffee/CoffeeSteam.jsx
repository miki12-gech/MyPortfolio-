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

// Heavy smoke from the Etan (incense burner) at x=370, y=380
const etanSmokePaths = [
  { d: 'M 370,380 C 350,330 390,260 360,190 C 330,120 380,50 350,-20', delay: '0s', duration: '5s', animation: 'steamDrift1', width: '6' },
  { d: 'M 370,380 C 390,320 350,240 380,170 C 410,100 360,30 390,-40', delay: '1.5s', duration: '6s', animation: 'steamDrift2', width: '8' },
  { d: 'M 370,380 C 340,340 380,270 340,200 C 300,130 360,60 320,-10', delay: '0.8s', duration: '5.5s', animation: 'steamDrift3', width: '7' },
  { d: 'M 370,380 C 390,330 340,250 380,180 C 420,110 350,40 390,-30', delay: '2.5s', duration: '6.5s', animation: 'steamDrift1', width: '9' },
  { d: 'M 370,380 C 360,325 380,255 350,185 C 320,115 390,45 360,-25', delay: '3.2s', duration: '5.8s', animation: 'steamDrift2', width: '8' },
  { d: 'M 370,380 C 380,310 330,230 360,160 C 390,90 340,20 370,-50', delay: '1.1s', duration: '4.8s', animation: 'steamDrift3', width: '6' },
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
