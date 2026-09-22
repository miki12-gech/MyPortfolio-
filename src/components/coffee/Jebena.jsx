/**
 * Jebena — Traditional Ethiopian coffee pot SVG.
 * Stylized silhouette with ceramic appearance and gold details.
 * Tilts based on pour progress.
 */
import { motion, useTransform } from 'framer-motion';

const Jebena = ({ fillLevel }) => {
  // Tilt increases as coffee pours, then returns slightly when complete
  const tilt = useTransform(fillLevel, [0, 0.5, 0.95, 1], [-8, -22, -25, -15]);

  return (
    <motion.g
      style={{ rotate: tilt, transformOrigin: '140px 200px' }}
    >
      {/* === BODY (bulbous clay pot) === */}
      <defs>
        <radialGradient id="jebenaBody" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#8B7058" />
          <stop offset="60%" stopColor="#6B5240" />
          <stop offset="100%" stopColor="#4A3628" />
        </radialGradient>
        <radialGradient id="jebenaHighlight" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(222,201,168,0.3)" />
          <stop offset="100%" stopColor="rgba(222,201,168,0)" />
        </radialGradient>
      </defs>

      {/* Body */}
      <path
        d="M 100,225 C 88,200 90,160 110,140 C 125,125 155,120 170,128 C 188,138 195,165 190,195 C 185,225 165,242 145,245 C 125,248 108,240 100,225 Z"
        fill="url(#jebenaBody)"
      />
      {/* Body highlight */}
      <path
        d="M 100,225 C 88,200 90,160 110,140 C 125,125 155,120 170,128 C 188,138 195,165 190,195 C 185,225 165,242 145,245 C 125,248 108,240 100,225 Z"
        fill="url(#jebenaHighlight)"
      />

      {/* === NECK === */}
      <path
        d="M 128,138 C 125,120 126,100 130,82 L 155,82 C 159,100 160,120 157,138"
        fill="#6B5240"
      />
      {/* Neck highlight */}
      <path
        d="M 132,138 C 130,120 131,102 134,86 L 142,86 C 140,102 139,120 138,138"
        fill="rgba(222,201,168,0.15)"
      />

      {/* === RIM === */}
      <ellipse cx="142" cy="82" rx="14" ry="5" fill="#7A614A" />
      <ellipse cx="142" cy="82" rx="14" ry="5" fill="none" stroke="#C5A572" strokeWidth="0.8" opacity="0.5" />

      {/* === SPOUT (extends right toward sini) === */}
      <path
        d="M 157,108 C 170,100 188,98 205,105 L 203,112 C 187,106 172,108 160,114"
        fill="#6B5240"
      />
      {/* Spout rim gold accent */}
      <path
        d="M 205,105 L 203,112"
        stroke="#C5A572"
        strokeWidth="1"
        opacity="0.6"
        strokeLinecap="round"
      />

      {/* === HANDLE (left side) === */}
      <path
        d="M 100,168 C 82,162 74,180 74,200 C 74,220 82,238 100,232"
        fill="none"
        stroke="#6B5240"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Handle highlight */}
      <path
        d="M 100,172 C 86,167 80,182 80,200 C 80,218 86,233 100,228"
        fill="none"
        stroke="rgba(222,201,168,0.12)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* === GOLD DECORATIVE BAND === */}
      <path
        d="M 102,190 C 95,175 98,155 115,145"
        fill="none"
        stroke="#C5A572"
        strokeWidth="0.6"
        opacity="0.4"
      />
      <path
        d="M 185,190 C 192,175 189,155 172,145"
        fill="none"
        stroke="#C5A572"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </motion.g>
  );
};

export default Jebena;
