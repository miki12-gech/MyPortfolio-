/**
 * SteamTransition — Steam transforms into engineering/system visuals.
 * This is the critical bridge between the coffee ceremony and the portfolio.
 * 
 * Steam wisps → geometric lines → nodes → system architecture
 *
 * Controlled by transitionProgress (0→1):
 * - 0: pure steam
 * - 0.5: blend of organic and geometric
 * - 1: fully geometric, coffee scene faded
 */
import { motion, useTransform } from 'framer-motion';

const techNodes = [
  { x: 200, y: 200, label: 'API' },
  { x: 120, y: 260, label: 'Frontend' },
  { x: 280, y: 260, label: 'Backend' },
  { x: 140, y: 160, label: 'Security' },
  { x: 260, y: 160, label: 'AI' },
  { x: 200, y: 300, label: 'Database' },
  { x: 100, y: 200, label: 'Cloud' },
  { x: 300, y: 200, label: 'DevOps' },
];

const techConnections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 6], [2, 7], [3, 4], [1, 2], [5, 2],
];

const SteamTransition = ({ transitionProgress }) => {
  // Fade in the tech layer
  const techOpacity = useTransform(transitionProgress, [0, 0.3, 0.8], [0, 0.3, 1]);
  // Scale up from center
  const techScale = useTransform(transitionProgress, [0, 0.5, 1], [0.6, 0.85, 1]);

  return (
    <motion.g style={{ opacity: techOpacity }}>
      <motion.g style={{ scale: techScale, transformOrigin: '200px 230px' }}>
        {/* Connection lines */}
        {techConnections.map(([from, to], i) => {
          const fromNode = techNodes[from];
          const toNode = techNodes[to];
          return (
            <motion.line
              key={`conn-${i}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#C5A572"
              strokeWidth="0.5"
              opacity="0.3"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Nodes */}
        {techNodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Node glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="rgba(197, 165, 114, 0.05)"
            />
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#1A1410"
              stroke="#C5A572"
              strokeWidth="1"
              opacity="0.8"
            />
            {/* Node label */}
            <text
              x={node.x}
              y={node.y + 18}
              textAnchor="middle"
              fill="#8A7E72"
              fontSize="8"
              fontFamily="Outfit, sans-serif"
              fontWeight="500"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Central system label */}
        <text
          x="200"
          y="130"
          textAnchor="middle"
          fill="#C5A572"
          fontSize="9"
          fontFamily="Syncopate, sans-serif"
          fontWeight="700"
          letterSpacing="3"
          opacity="0.6"
        >
          SYSTEM
        </text>
      </motion.g>
    </motion.g>
  );
};

export default SteamTransition;
