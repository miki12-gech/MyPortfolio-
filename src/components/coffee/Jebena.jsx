/**
 * Jebena — Authentic traditional Ethiopian coffee pot SVG.
 * Black clay (shikla) with spherical base, long neck, side handle, and matot (woven base).
 * Tilts based on pour progress.
 */
import { motion, useTransform } from 'framer-motion';

const Jebena = ({ pourProgress }) => {
  // Tilt increases (spout goes down) as coffee pours, then returns upright when pouring is done
  const tilt = useTransform(pourProgress, [0, 0.5, 0.9, 1], [0, 25, 30, 0]);

  return (
    <motion.g
      style={{ rotate: tilt, transformOrigin: '140px 200px' }}
    >
      {/* === MATOT (Woven grass base) === */}
      {/* Kept static relative to the pot so it tilts with it, or maybe it should stay on the ground? 
          Usually, you pick up the Jebena off the matot to pour. Let's leave it attached for visual simplicity, 
          or just draw a small rim base on the pot. I'll draw it as a built-in base so it doesn't look weird tilting. */}
      
      <defs>
        {/* Black clay body gradient */}
        <radialGradient id="jebenaClay" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#3d3d3d" /> {/* Highlight */}
          <stop offset="40%" stopColor="#1a1a1a" /> {/* Base black clay */}
          <stop offset="80%" stopColor="#0d0d0d" /> {/* Shadow */}
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        
        {/* Clay highlight to make it look round */}
        <radialGradient id="jebenaClayHighlight" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* === BODY (spherical black clay pot) === */}
      <path
        d="M 100,230 C 80,195 85,150 115,140 C 130,125 150,125 165,140 C 195,150 200,195 180,230 C 160,255 120,255 100,230 Z"
        fill="url(#jebenaClay)"
      />
      {/* Highlight */}
      <path
        d="M 100,230 C 80,195 85,150 115,140 C 130,125 150,125 165,140 C 195,150 200,195 180,230 C 160,255 120,255 100,230 Z"
        fill="url(#jebenaClayHighlight)"
      />

      {/* === NECK (long, elegant) === */}
      <path
        d="M 125,142 C 122,110 125,80 132,55 L 148,55 C 155,80 158,110 155,142 Z"
        fill="#1a1a1a"
      />
      <path
        d="M 125,142 C 122,110 125,80 132,55 L 148,55 C 155,80 158,110 155,142 Z"
        fill="url(#jebenaClayHighlight)"
      />

      {/* === RIM & LID (usually a woven stopper or clay lid) === */}
      <ellipse cx="140" cy="55" rx="16" ry="6" fill="#0d0d0d" />
      <ellipse cx="140" cy="55" rx="16" ry="6" fill="none" stroke="#3d3d3d" strokeWidth="1" />
      {/* Small straw/cloth stopper often placed in the top */}
      <path d="M 134,50 C 132,40 148,40 146,50" fill="#C4A882" />
      <ellipse cx="140" cy="50" rx="6" ry="2" fill="#A8896A" />

      {/* === SPOUT (extends right) === */}
      <path
        d="M 158,125 C 175,115 190,105 205,108 L 202,116 C 185,112 170,125 162,135 Z"
        fill="#1a1a1a"
      />
      {/* Spout tip highlight */}
      <path
        d="M 205,108 L 202,116"
        stroke="#3d3d3d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* === HANDLE (traditional curved handle on left) === */}
      <path
        d="M 105,170 C 80,165 65,190 70,215 C 75,235 90,240 105,235"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 105,170 C 80,165 65,190 70,215 C 75,235 90,240 105,235"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* === BASE (small clay foot) === */}
      <path d="M 120,246 L 160,246 L 165,252 L 115,252 Z" fill="#0d0d0d" />
    </motion.g>
  );
};

export default Jebena;
