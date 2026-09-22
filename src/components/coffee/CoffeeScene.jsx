/**
 * CoffeeScene — Master component composing the full ceremony.
 * Receives scroll-derived values and orchestrates all sub-components.
 * Includes the authentic Rekebot (tray) and roasting pan (mitad) elements.
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
        className="w-full h-auto relative z-10"
        style={{
          opacity: sceneOpacity,
          scale: sceneScale,
          overflow: 'visible',
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* === REKEBOT (Traditional Wooden Tray) === */}
        {/* The Sini sits on this tray. Let's draw a nice wooden Rekebot base */}
        <g className="rekebot">
          {/* Rekebot shadow */}
          <ellipse cx="250" cy="415" rx="80" ry="15" fill="rgba(0,0,0,0.6)" filter="blur(4px)" />
          {/* Main top surface */}
          <ellipse cx="250" cy="405" rx="70" ry="15" fill="#3E2723" />
          {/* Side rim */}
          <path d="M 180,405 C 180,415 220,425 250,425 C 280,425 320,415 320,405 L 320,412 C 320,422 280,432 250,432 C 220,432 180,422 180,412 Z" fill="#2D1A11" />
          {/* Legs */}
          <path d="M 200,420 L 195,435 L 205,435 Z" fill="#1A0D08" />
          <path d="M 300,420 L 295,435 L 305,435 Z" fill="#1A0D08" />
        </g>

        {/* === ROASTING PAN (Mitad) WITH COFFEE BEANS === */}
        <g className="roasting-pan" transform="translate(-10, 0)">
          {/* Small roasting pan resting on the left behind/under the Jebena */}
          <ellipse cx="100" cy="400" rx="45" ry="12" fill="#111111" />
          <ellipse cx="100" cy="400" rx="43" ry="10" fill="none" stroke="#333333" strokeWidth="1" />
          <path d="M 55,400 C 55,410 80,415 100,415 C 120,415 145,410 145,400 L 140,405 C 140,412 120,416 100,416 C 80,416 60,412 60,405 Z" fill="#000000" />
          {/* Handle */}
          <path d="M 55,400 L 20,385 L 25,382 L 58,395 Z" fill="#2A1B12" />
          
          {/* A few green/brown coffee beans inside */}
          <ellipse cx="90" cy="398" rx="3" ry="1.5" fill="#5D4037" transform="rotate(30 90 398)" />
          <ellipse cx="98" cy="402" rx="3" ry="1.5" fill="#3E2723" transform="rotate(-15 98 402)" />
          <ellipse cx="110" cy="397" rx="3" ry="1.5" fill="#4E342E" transform="rotate(45 110 397)" />
          <ellipse cx="102" cy="394" rx="3" ry="1.5" fill="#5D4037" transform="rotate(10 102 394)" />
          <ellipse cx="85" cy="401" rx="3" ry="1.5" fill="#3E2723" transform="rotate(-40 85 401)" />
          <ellipse cx="115" cy="403" rx="3" ry="1.5" fill="#4E342E" transform="rotate(80 115 403)" />
        </g>

        {/* === ETAN (Traditional Incense Burner) === */}
        <g className="etan-burner" transform="translate(290, 355) scale(3)">
          {/* Small clay pot for incense */}
          <path d="M 10,25 C 5,25 0,15 5,10 C 10,5 30,5 35,10 C 40,15 35,25 30,25 Z" fill="#3E2723" />
          <path d="M 5,10 L 10,35 L 30,35 L 35,10" fill="#2A1B12" />
          <ellipse cx="20" cy="10" rx="16" ry="4" fill="#0d0d0d" />
          {/* Glowing coals */}
          <circle cx="15" cy="9" r="2" fill="#EF4444" opacity="0.8" />
          <circle cx="20" cy="10" r="2.5" fill="#F97316" opacity="0.9" />
          <circle cx="25" cy="8" r="1.5" fill="#EF4444" opacity="0.7" />
          {/* Base */}
          <path d="M 12,35 L 8,45 L 32,45 L 28,35 Z" fill="#1A0D08" />
        </g>

        {/* === MATOT (Woven base for Jebena) === */}
        {/* We place it statically on the ground beneath where the Jebena rests */}
        <g className="matot" transform="translate(0, -5)">
          <ellipse cx="140" cy="256" rx="35" ry="8" fill="rgba(0,0,0,0.5)" filter="blur(3px)" />
          <ellipse cx="140" cy="252" rx="30" ry="8" fill="#D4A373" />
          <ellipse cx="140" cy="252" rx="26" ry="6" fill="#FAEDCD" />
          <path d="M 110,252 C 110,260 125,264 140,264 C 155,264 170,260 170,252 L 168,256 C 168,262 155,266 140,266 C 125,266 112,262 112,256 Z" fill="#CCD5AE" />
        </g>

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
