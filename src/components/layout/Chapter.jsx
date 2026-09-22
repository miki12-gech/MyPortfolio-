import { useRef } from 'react';
import useChapterProgress from '../../hooks/useChapterProgress';

/**
 * Reusable chapter wrapper with sticky viewport.
 * Provides scroll progress (0→1) to children via render props.
 *
 * Usage:
 *   <Chapter id="arrival" scrollHeight="250vh">
 *     {({ progress, progressValue }) => (
 *       <div>Content controlled by progress</div>
 *     )}
 *   </Chapter>
 */
const Chapter = ({ id, scrollHeight = '200vh', children, className = '' }) => {
  const containerRef = useRef(null);
  const { progress, progressValue } = useChapterProgress(containerRef);

  return (
    <section
      ref={containerRef}
      id={id}
      className={className}
      style={{ minHeight: scrollHeight, position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {typeof children === 'function'
          ? children({ progress, progressValue })
          : children}
      </div>
    </section>
  );
};

export default Chapter;
