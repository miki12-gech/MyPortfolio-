/**
 * Sini — Traditional Ethiopian coffee cup SVG.
 * Handleless ceramic cup with gold band detail.
 * Contains CoffeeLiquid as a child (clipped to interior).
 */

const Sini = ({ children }) => {
  return (
    <g>
      {/* === SHADOW === */}
      <ellipse
        cx="250"
        cy="405"
        rx="48"
        ry="6"
        fill="rgba(0,0,0,0.4)"
        filter="url(#siniShadow)"
      />

      {/* === CUP BODY === */}
      <defs>
        <linearGradient id="siniBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4A882" />
          <stop offset="40%" stopColor="#A8896A" />
          <stop offset="100%" stopColor="#8B7058" />
        </linearGradient>
        <linearGradient id="siniInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A3628" />
          <stop offset="100%" stopColor="#2A1E14" />
        </linearGradient>

        {/* Interior clip path for the coffee liquid */}
        <clipPath id="siniInterior">
          <path d="M 218,335 C 215,355 220,385 232,395 L 268,395 C 280,385 285,355 282,335 Z" />
        </clipPath>

        {/* Shadow filter */}
        <filter id="siniShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      {/* Outer cup shape */}
      <path
        d="M 210,330 C 206,358 214,392 228,400 L 272,400 C 286,392 294,358 290,330 Z"
        fill="url(#siniBody)"
      />

      {/* Cup highlight (left edge) */}
      <path
        d="M 214,334 C 211,355 216,385 228,396"
        fill="none"
        stroke="rgba(222,201,168,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Gold decorative band */}
      <path
        d="M 212,345 C 210,345 212,345 215,345 C 240,342 260,342 285,345 C 288,345 290,345 288,345"
        fill="none"
        stroke="#C5A572"
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Inner dark area (visible above liquid) */}
      <path
        d="M 218,335 C 215,355 220,385 232,395 L 268,395 C 280,385 285,355 282,335 Z"
        fill="url(#siniInner)"
      />

      {/* === RIM === */}
      <ellipse cx="250" cy="330" rx="40" ry="7" fill="#B09474" />
      <ellipse cx="250" cy="330" rx="40" ry="7" fill="none" stroke="#C5A572" strokeWidth="0.8" opacity="0.6" />
      {/* Inner rim */}
      <ellipse cx="250" cy="331" rx="33" ry="5" fill="#4A3628" />

      {/* === CLIPPED CHILDREN (coffee liquid) === */}
      <g clipPath="url(#siniInterior)">
        {children}
      </g>

      {/* Rim top highlight */}
      <path
        d="M 215,328 C 230,324 270,324 285,328"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.5"
      />
    </g>
  );
};

export default Sini;
