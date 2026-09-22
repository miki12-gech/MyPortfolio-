/**
 * CoffeeStream — The pour from jebena spout to sini.
 * Width varies based on scroll intensity.
 * Has organic wobble animation.
 * Fades when not scrolling, disappears when cup is complete.
 */
import { motion, useTransform } from 'framer-motion';

const CoffeeStream = ({ fillLevel, isScrolling, intensity, isComplete }) => {
  // Stream opacity: visible when pouring, fades when stopped
  const baseOpacity = useTransform(fillLevel, [0, 0.02, 0.95, 1], [0, 1, 1, 0]);

  // Stream width based on scroll velocity
  const streamWidth = isScrolling ? 2 + intensity * 3 : 0.5;
  const streamOpacity = isScrolling ? 1 : 0.15;

  if (isComplete) return null;

  return (
    <g>
      <defs>
        <linearGradient id="streamGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A321D" />
          <stop offset="50%" stopColor="#3A2115" />
          <stop offset="100%" stopColor="#24140D" />
        </linearGradient>
      </defs>

      {/* Main stream */}
      <motion.path
        d="M 204,112 C 210,160 240,250 250,330"
        fill="none"
        stroke="url(#streamGradient)"
        strokeWidth={streamWidth}
        strokeLinecap="round"
        style={{ opacity: baseOpacity }}
        animate={{
          d: isScrolling
            ? [
                'M 204,112 C 208,160 242,250 250,330',
                'M 204,112 C 212,160 238,250 250,330',
                'M 204,112 C 208,160 242,250 250,330',
              ]
            : 'M 204,112 C 210,160 240,250 250,330',
        }}
        transition={
          isScrolling
            ? { duration: 0.6, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.3 }
        }
      />

      {/* Stream glow */}
      <motion.path
        d="M 204,112 C 210,160 240,250 250,330"
        fill="none"
        stroke="#5A321D"
        strokeWidth={streamWidth + 4}
        strokeLinecap="round"
        opacity={streamOpacity * 0.15}
        style={{ opacity: baseOpacity }}
        filter="url(#streamGlow)"
      />

      <defs>
        <filter id="streamGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* Impact splash at the cup */}
      {isScrolling && (
        <motion.circle
          cx="250"
          cy="332"
          r="4"
          fill="rgba(90, 50, 29, 0.4)"
          animate={{
            r: [3, 6, 3],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </g>
  );
};

export default CoffeeStream;
