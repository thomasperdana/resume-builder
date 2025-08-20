/**
 * Motion Modal Component with Enhanced Animations
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal as HeroUIModal, ModalProps as HeroUIModalProps } from '@heroui/react';

interface MotionModalProps extends HeroUIModalProps {
  animationPreset?: 'fade' | 'slideUp' | 'slideDown' | 'scale' | 'rotate';
  backdropBlur?: boolean;
}

const modalVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 }
  },
  slideDown: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 }
  },
  scale: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 }
  },
  rotate: {
    initial: { rotate: -180, scale: 0.5, opacity: 0 },
    animate: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: 180, scale: 0.5, opacity: 0 }
  }
};

export const MotionModal: React.FC<MotionModalProps> = ({
  children,
  isOpen,
  animationPreset = 'scale',
  backdropBlur = true,
  ...props
}) => {
  const variants = modalVariants[animationPreset];

  return (
    <AnimatePresence>
      {isOpen && (
        <HeroUIModal
          {...props}
          isOpen={isOpen}
          motionProps={{
            variants,
            initial: 'initial',
            animate: 'animate',
            exit: 'exit',
            transition: { duration: 0.4 }
          }}
          classNames={{
            backdrop: backdropBlur ? 'bg-black/50 backdrop-blur-md' : 'bg-black/50'
          }}
        >
          {children}
        </HeroUIModal>
      )}
    </AnimatePresence>
  );
};

export default MotionModal;