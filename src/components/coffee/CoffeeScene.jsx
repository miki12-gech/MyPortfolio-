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
  pourProgress,
  drinkProgress,
  liquidLevel,
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
        </g>
          
        <g opacity="0.8">
          {/* Matot (base mat) */}
          <ellipse cx="200" cy="420" rx="150" ry="25" fill="#1A0D08" />
          <path d="M 50,420 C 50,440 350,440 350,420 C 350,430 200,455 50,420 Z" fill="#2A1B12" />

          {/* Rekebot (traditional coffee table tray) */}
          <path d="M 80,410 L 100,380 L 300,380 L 320,410 Z" fill="#3E2723" />
          <path d="M 100,380 L 300,380 L 300,385 L 100,385 Z" fill="#2A1B12" />
          
          {/* Rekebot base / legs */}
          <rect x="120" y="410" width="10" height="10" fill="#1A0D08" />
          <rect x="270" y="410" width="10" height="10" fill="#1A0D08" />
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

        {/* === MITAD (Coffee Roasting Pan) === */}
        <g className="mitad" transform="translate(100, 395) scale(1.1)">
          {/* Clay pan */}
          <ellipse cx="40" cy="10" rx="35" ry="8" fill="#1A0D08" />
          <path d="M 5,10 C 5,25 75,25 75,10 C 75,15 40,25 5,10 Z" fill="#2A1B12" />
          
          {/* Roasted coffee beans (scattered) */}
          <g fill="#1a0f0a">
            <ellipse cx="20" cy="10" rx="2.5" ry="1.5" transform="rotate(30 20 10)" />
            <ellipse cx="28" cy="8" rx="2.5" ry="1.5" transform="rotate(-20 28 8)" />
            <ellipse cx="35" cy="12" rx="2.5" ry="1.5" transform="rotate(45 35 12)" />
            <ellipse cx="42" cy="9" rx="2.5" ry="1.5" transform="rotate(10 42 9)" />
            <ellipse cx="50" cy="11" rx="2.5" ry="1.5" transform="rotate(-40 50 11)" />
            <ellipse cx="55" cy="8" rx="2.5" ry="1.5" transform="rotate(15 55 8)" />
            <ellipse cx="60" cy="10" rx="2.5" ry="1.5" transform="rotate(-60 60 10)" />
            <ellipse cx="32" cy="6" rx="2.5" ry="1.5" transform="rotate(75 32 6)" />
            <ellipse cx="45" cy="7" rx="2.5" ry="1.5" transform="rotate(-15 45 7)" />
          </g>
          
          {/* Subtle smoke from freshly roasted beans */}
          <path d="M 30,5 C 25,-10 40,-20 35,-35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" filter="blur(1px)" />
          <path d="M 50,6 C 55,-5 45,-15 50,-25" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" filter="blur(1px)" />
        </g>

        {/* Mukecha (Mortar) & Zenezena (Pestle) silhouette in background */}
        <g opacity="0.4">
          <rect x="135" y="220" width="10" height="40" fill="#3E2723" transform="rotate(15 140 240)" />
          <path d="M 120,250 L 160,250 L 155,300 L 125,300 Z" fill="#2A1B12" />
          <ellipse cx="140" cy="252" rx="26" ry="6" fill="#FAEDCD" />
          <path d="M 110,252 C 110,260 125,264 140,264 C 155,264 170,260 170,252 L 168,256 C 168,262 155,266 140,266 C 125,266 112,262 112,256 Z" fill="#CCD5AE" />
        </g>

        {/* Jebena (coffee pot) pours during Phase 1 */}
        <Jebena pourProgress={pourProgress} />

        {/* Coffee stream (pour) */}
        <CoffeeStream
          pourProgress={pourProgress}
          isScrolling={isScrolling}
          intensity={intensity}
          isComplete={isComplete}
        />

        {/* Sini (cup) with liquid inside that fills then empties */}
        <Sini>
          <CoffeeLiquid
            fillLevel={liquidLevel}
            isScrolling={isScrolling}
          />
        </Sini>

        {/* Steam */}
        <CoffeeSteam
          fillLevel={liquidLevel}
          isComplete={isComplete}
        />

        {/* Steam → Technology transition */}
        <SteamTransition transitionProgress={transitionProgress} />
      </motion.svg>
    </div>
  );
};

export default CoffeeScene;
