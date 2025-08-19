/**
 * Integrated Mono Repo - Motion Integration
 * This module provides enhanced motion capabilities combining Framer Motion and Motion One
 */

import { motion } from 'framer-motion';
import { animate, stagger, timeline } from '../packages/motion/motion/src';

// Enhanced motion presets
export const motionPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: { duration: 0.4 }
  },
  slideDown: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    transition: { duration: 0.4 }
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.3 }
  },
  rotateIn: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
    transition: { duration: 0.5 }
  }
};

// Enhanced motion utilities
export const motionUtils = {
  createStagger: (delay = 0.1) => ({
    animate: {
      transition: {
        staggerChildren: delay
      }
    }
  }),
  
  createBounce: (intensity = 1.2) => ({
    animate: {
      scale: [1, intensity, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.5, 1]
      }
    }
  }),
  
  createShake: () => ({
    animate: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.4
      }
    }
  })
};

// Re-export motion libraries
export { motion, AnimatePresence } from 'framer-motion';
export { animate, stagger, timeline } from '../packages/motion/motion/src';
export * from '../packages/motion/framer-motion/src';