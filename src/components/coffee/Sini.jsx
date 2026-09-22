/**
 * Sini — Authentic traditional Ethiopian coffee cup SVG.
 * White porcelain cup with the iconic traditional Tibeb pattern band.
 * Contains CoffeeLiquid as a child (clipped to interior).
 */

const Sini = ({ children }) => {
  return (
    <g>
      {/* === SHADOW === */}
      <ellipse
        cx="250"
        cy="405"
        rx="42"
        ry="6"
        fill="rgba(0,0,0,0.5)"
        filter="url(#siniShadow)"
      />

      {/* === CUP BODY === */}
      <defs>
        {/* White porcelain gradient */}
        <linearGradient id="siniBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f0f0f0" />
          <stop offset="80%" stopColor="#d0d0d0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <linearGradient id="siniInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>

        {/* Interior clip path for the coffee liquid */}
        <clipPath id="siniInterior">
          <path d="M 218,335 C 215,355 220,385 232,395 L 268,395 C 280,385 285,355 282,335 Z" />
        </clipPath>

        <filter id="siniShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      {/* Outer cup shape */}
      <path
        d="M 210,330 C 206,358 216,394 230,400 L 270,400 C 284,394 294,358 290,330 Z"
        fill="url(#siniBody)"
      />

      {/* Cup highlight (left edge) */}
      <path
        d="M 214,334 C 211,355 218,385 230,396"
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* === TIBEB TRADITIONAL PATTERN (Green, Yellow, Red) === */}
      <g opacity="0.9">
        {/* Base pattern band */}
        <path
          d="M 211,350 C 220,352 240,354 250,354 C 260,354 280,352 289,350 L 287,362 C 280,364 260,366 250,366 C 240,366 220,364 213,362 Z"
          fill="#1A1A1A"
        />
        
        {/* Geometric shapes pattern simulating traditional weaving */}
        <g strokeWidth="1" fill="none">
          {/* Top trim line (Green) */}
          <path d="M 212,352 C 220,354 240,356 250,356 C 260,356 280,354 288,352" stroke="#10B981" strokeWidth="1.5" />
          
          {/* Middle zig-zag (Yellow) */}
          <path d="M 212,356 L 218,353 L 224,357 L 230,354 L 236,358 L 242,355 L 248,359 L 254,355 L 260,359 L 266,355 L 272,359 L 278,355 L 284,358" stroke="#FBBF24" strokeWidth="1.5" />
          
          {/* Bottom trim line (Red) */}
          <path d="M 213,360 C 220,362 240,364 250,364 C 260,364 280,362 287,360" stroke="#EF4444" strokeWidth="1.5" />
        </g>
      </g>

      {/* Inner white area (visible above liquid) */}
      <path
        d="M 218,335 C 215,355 220,385 232,395 L 268,395 C 280,385 285,355 282,335 Z"
        fill="url(#siniInner)"
      />

      {/* === RIM === */}
      <ellipse cx="250" cy="330" rx="40" ry="7" fill="#f0f0f0" />
      <ellipse cx="250" cy="330" rx="40" ry="7" fill="none" stroke="#d0d0d0" strokeWidth="1" />
      {/* Inner rim border */}
      <ellipse cx="250" cy="331" rx="36" ry="5" fill="#ffffff" />
      
      {/* The interior walls of the cup down to the liquid */}
      <path
        d="M 214,331 C 214,336 230,336 250,336 C 270,336 286,336 286,331"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="1"
      />

      {/* === CLIPPED CHILDREN (coffee liquid) === */}
      <g clipPath="url(#siniInterior)">
        {children}
      </g>

      {/* Rim top highlight */}
      <path
        d="M 215,328 C 230,324 270,324 285,328"
        fill="none"
        stroke="rgba(255,255,255,1)"
        strokeWidth="1.5"
      />
    </g>
  );
};

export default Sini;
