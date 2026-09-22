import { useRef, useEffect, useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';

/**
 * Tracks scroll velocity to control stream thickness and ripple intensity.
 * Returns a normalized 0→1 intensity value and an isScrolling boolean.
 *
 * @param {MotionValue<number>} progress - Chapter scroll progress
 * @returns {{ intensity: number, isScrolling: boolean }}
 */
export default function useScrollVelocity(progress) {
  const [intensity, setIntensity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastValueRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const timeoutRef = useRef(null);

  useMotionValueEvent(progress, 'change', (latest) => {
    const now = Date.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const dv = Math.abs(latest - lastValueRef.current);
    const velocity = dv / dt * 1000; // Per second

    // Normalize velocity to 0→1 range
    const normalized = Math.min(velocity / 2, 1);
    setIntensity(normalized);
    setIsScrolling(true);

    lastValueRef.current = latest;
    lastTimeRef.current = now;

    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Set scrolling to false after 150ms of no scroll
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      setIntensity(0);
    }, 150);
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { intensity, isScrolling };
}
