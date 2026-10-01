/**
 * FlowDiagram — Renders a vertical architecture flow diagram.
 * Used in each chapter to visualize the system layer's internal architecture.
 * 
 * Props:
 *   nodes: string[] — labels for each node
 *   activeIndex: number — which node is currently active (-1 for none)
 *   className: string
 */
import { motion } from 'framer-motion';

const FlowDiagram = ({ nodes = [], activeIndex = -1, className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Node */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className={`flow-node ${i <= activeIndex ? 'flow-node-active' : ''}`}
          >
            {node}
          </motion.div>
          
          {/* Connector line */}
          {i < nodes.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 + 0.15 }}
              className="flow-connector origin-top"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FlowDiagram;
