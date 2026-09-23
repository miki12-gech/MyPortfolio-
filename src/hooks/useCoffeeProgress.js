import { useState, useRef, useEffect } from 'react';
import { useTransform, useMotionValueEvent, useMotionValue, animate } from 'framer-motion';

/**
 * Specialized hook for coffee ceremony interaction.
 * Coffee fills automatically on page load.
 * Scrolling down "drinks" the coffee and transitions to the next chapter.
 *
 * @param {MotionValue<number>} progress - The chapter's scroll progress (0→1)
 * @returns {object} Coffee state
 */
export default function useCoffeeProgress(progress) {
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedRef = useRef(false);

  // Phase 1: Jebena pours coffee into the cup automatically on load
  const pourProgress = useMotionValue(0);

  useEffect(() => {
    // Start the pour animation shortly after load
    const controls = animate(pourProgress, 1, {
      duration: 3,
      delay: 0.8,
      ease: "easeInOut"
    });
    return () => controls.stop();
  }, [pourProgress]);

  // Phase 2: User "drinks" the coffee (cup empties) on scroll
  const drinkProgress = useTransform(progress, [0.1, 0.7], [0, 1], { clamp: true });

  // The actual liquid in the cup: goes UP when pouring, DOWN when drinking
  const liquidLevel = useTransform(() => {
    return Math.max(0, pourProgress.get() - drinkProgress.get());
  });

  // Transition to the next chapter only happens AFTER the coffee is completely drunk
  const transitionProgress = useTransform(progress, [0.85, 1], [0, 1], { clamp: true });

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
