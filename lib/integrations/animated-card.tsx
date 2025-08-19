/**
 * Animated Card Component with Motion Integration
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Card as HeroUICard, CardProps as HeroUICardProps } from '../../packages/heroui/components/card/src';
import { motionPresets } from './motion';

interface AnimatedCardProps extends HeroUICardProps {
  motionPreset?: keyof typeof motionPresets;
  customMotion?: any;
  enableHover?: boolean;
  hoverScale?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  motionPreset = 'slideUp',
  customMotion,
  enableHover = true,
  hoverScale = 1.02,
  ...props
}) => {
  const motionProps = customMotion || motionPresets[motionPreset];
  
  const hoverProps = enableHover ? {
    whileHover: { 
      scale: hoverScale, 
      y: -5,
      transition: { duration: 0.3 } 
    }
  } : {};

  return (
    <motion.div
      {...motionProps}
      {...hoverProps}
    >
      <HeroUICard {...props}>
        {children}
      </HeroUICard>
    </motion.div>
  );
};

export default AnimatedCard;