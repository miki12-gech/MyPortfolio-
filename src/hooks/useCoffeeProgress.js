import { useState, useRef } from 'react';
import { useTransform, useMotionValueEvent } from 'framer-motion';

/**
 * Specialized hook for coffee ceremony interaction.
 * Scrolling down pours the coffee and fills the cup.
 * Once full, it directly transitions to the next chapter.
 *
 * @param {MotionValue<number>} progress - The chapter's scroll progress (0→1)
 * @returns {object} Coffee state
 */
export default function useCoffeeProgress(progress) {
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedRef = useRef(false);

  // Jebena pours coffee into the cup based on scroll
  const pourProgress = useTransform(progress, [0.1, 0.6], [0, 1], { clamp: true });

  // No drinking phase anymore; drinkProgress stays 0 to satisfy props
  const drinkProgress = useTransform(progress, [0, 1], [0, 0]);

  // The actual liquid in the cup is directly equal to the pour progress
  const liquidLevel = pourProgress;

  // Transition to the next chapter starts right after the cup is full
  const transitionProgress = useTransform(progress, [0.7, 1], [0, 1], { clamp: true });

  // Track completion when transition is fully done
  useMotionValueEvent(transitionProgress, 'change', (latest) => {
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
