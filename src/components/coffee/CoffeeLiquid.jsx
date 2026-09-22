/**
 * CoffeeLiquid — The coffee inside the sini.
 * Rises from bottom based on fillLevel.
 * Has surface ripple effect when pouring.
 * Must be rendered inside Sini (which provides the clip path).
 */
import { motion, useTransform } from 'framer-motion';

const CoffeeLiquid = ({ fillLevel, isScrolling }) => {
  // Interior dimensions (matching siniInterior clipPath):
  // Top: y=335, Bottom: y=395, height range = 60px
  const topY = 335;
  const bottomY = 395;
  const range = bottomY - topY;

  // Liquid top position: moves from bottom (395) to top (335) as fill increases
  const liquidY = useTransform(fillLevel, [0, 1], [bottomY, topY]);

  return (
    <g>
      {/* Coffee gradient */}
      <defs>
        <linearGradient id="coffeeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A321D" />
          <stop offset="30%" stopColor="#3A2115" />
          <stop offset="100%" stopColor="#24140D" />
        </linearGradient>
      </defs>

      {/* Main liquid body */}
      <motion.rect
        x="205"
        style={{ y: liquidY }}
        width="90"
        height={range + 10}
        fill="url(#coffeeGradient)"
      />

      {/* Surface highlight — sits at the top of the liquid */}
      <motion.ellipse
        cx="250"
        style={{ cy: liquidY }}
        rx="30"
        ry="3"
        fill="rgba(107, 61, 34, 0.6)"
      />

      {/* Surface shine */}
      <motion.ellipse
        cx="245"
        style={{ cy: liquidY }}
        rx="15"
        ry="1.5"
        fill="rgba(197, 165, 114, 0.15)"
      />

      {/* Ripple effect when pouring */}
      {isScrolling && (
        <motion.ellipse
          cx="250"
          style={{ cy: liquidY }}
          rx="20"
          ry="2"
          fill="none"
          stroke="rgba(197, 165, 114, 0.2)"
          strokeWidth="0.5"
          animate={{
            rx: [20, 28, 20],
            ry: [2, 3.5, 2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </g>
  );
};

export default CoffeeLiquid;
