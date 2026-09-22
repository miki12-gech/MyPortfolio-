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

  // Phase 1: Jebena pours coffee into the cup
  const pourProgress = useTransform(progress, [0.1, 0.4], [0, 1], { clamp: true });

  // Phase 2: User "drinks" the coffee (cup empties)
  const drinkProgress = useTransform(progress, [0.6, 0.9], [0, 1], { clamp: true });

  // The actual liquid in the cup: goes UP when pouring, stays FULL, goes DOWN when drinking
  const liquidLevel = useTransform(progress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0], { clamp: true });

  // Transition to the next chapter only happens AFTER the coffee is completely drunk
  const transitionProgress = useTransform(progress, [0.95, 1], [0, 1], { clamp: true });

  // Track completion when fully drunk
  useMotionValueEvent(drinkProgress, 'change', (latest) => {
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
    pourProgress,
    drinkProgress,
    liquidLevel,
    transitionProgress,
    isComplete,
  };
}
