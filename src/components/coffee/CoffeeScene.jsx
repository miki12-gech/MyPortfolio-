/**
 * CoffeeScene — Master component composing the full ceremony.
 * Receives scroll-derived values and orchestrates all sub-components.
 */
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import Jebena from './Jebena';
import Sini from './Sini';
import CoffeeLiquid from './CoffeeLiquid';
import CoffeeStream from './CoffeeStream';
import CoffeeSteam from './CoffeeSteam';
import SteamTransition from './SteamTransition';

const CoffeeScene = ({
  fillLevel,
  transitionProgress,
  isComplete,
  isScrolling,
  intensity,
}) => {
  // Fade the coffee scene as the tech transition takes over
  const sceneOpacity = useTransform(transitionProgress, [0, 0.6, 1], [1, 0.6, 0.2]);
  const sceneScale = useTransform(transitionProgress, [0, 1], [1, 0.92]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Atmospheric background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[300px] h-[300px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(90,50,29,0.4) 0%, rgba(15,11,8,0) 70%)',
          }}
        />
      </div>

      {/* SVG Scene */}
      <motion.svg
        viewBox="0 0 400 480"
        className="w-full max-w-[400px] h-auto relative z-10"
        style={{
          opacity: sceneOpacity,
          scale: sceneScale,
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Jebena (coffee pot) */}
        <Jebena fillLevel={fillLevel} />

        {/* Coffee stream (pour) */}
        <CoffeeStream
          fillLevel={fillLevel}
          isScrolling={isScrolling}
          intensity={intensity}
          isComplete={isComplete}
        />

        {/* Sini (cup) with liquid inside */}
        <Sini>
          <CoffeeLiquid
            fillLevel={fillLevel}
            isScrolling={isScrolling}
          />
        </Sini>

        {/* Steam */}
        <CoffeeSteam
          fillLevel={fillLevel}
          isComplete={isComplete}
        />

        {/* Steam → Technology transition */}
        <SteamTransition transitionProgress={transitionProgress} />
      </motion.svg>
    </div>
  );
};

export default CoffeeScene;
