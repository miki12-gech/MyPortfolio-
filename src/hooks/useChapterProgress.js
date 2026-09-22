import { useRef, useCallback, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

/**
 * Hook for tracking chapter scroll progress.
 * Returns a normalized 0→1 progress value based on how far
 * the user has scrolled through a chapter's container.
 *
 * @param {React.RefObject} containerRef - Ref to the chapter container element
 * @param {object} options
 * @param {string[]} options.offset - Scroll offset configuration
 * @returns {{ progress: MotionValue<number>, progressValue: number }}
 */
export default function useChapterProgress(containerRef, options = {}) {
  const { offset = ['start start', 'end end'] } = options;
  const [progressValue, setProgressValue] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  // Apply a spring physics delay so the animation smoothly trails the physical scroll
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const progress = useTransform(springProgress, [0, 1], [0, 1]);

  useMotionValueEvent(progress, 'change', (latest) => {
    setProgressValue(latest);
  });

  return { progress, progressValue };
}
