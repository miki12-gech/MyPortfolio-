import { useSyncExternalStore } from 'react';

/**
 * Detects whether the user prefers reduced motion.
 * Returns true if prefers-reduced-motion is 'reduce'.
 * Uses useSyncExternalStore for React 19 purity compliance.
 */

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export default function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
