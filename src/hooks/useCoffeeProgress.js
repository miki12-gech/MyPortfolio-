import { useState, useRef, useCallback } from 'react';
import { useTransform, useMotionValueEvent } from 'framer-motion';

/**
 * Specialized hook for coffee ceremony interaction.
 * Maps chapter progress to coffee-specific state values.
 *
 * Coffee fills during the first 80% of scroll.
 * Steam transition occupies the last 20%.
 *
 * @param {MotionValue<number>} progress - The chapter's scroll progress (0→1)
 * @returns {object} Coffee state
 */
export default function useCoffeeProgress(progress) {
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedRef = useRef(false);

  // Coffee fills from 0→1 during the first 80% of chapter scroll
  const fillLevel = useTransform(progress, [0, 0.75], [0, 1], { clamp: true });

  // Transition progress (steam → tech) during the last 25% of chapter scroll
  const transitionProgress = useTransform(progress, [0.75, 1], [0, 1], { clamp: true });

  // Track completion
  useMotionValueEvent(fillLevel, 'change', (latest) => {
    if (latest >= 0.98 && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      setIsComplete(true);
    }
    // Allow reverse scrolling to "uncomplete"
    if (latest < 0.9 && hasCompletedRef.current) {
      hasCompletedRef.current = false;
      setIsComplete(false);
    }
  });

  return {
    fillLevel,
    transitionProgress,
    isComplete,
  };
}
