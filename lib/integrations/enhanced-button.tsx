/**
 * Enhanced Button Component with Motion Integration
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Button as HeroUIButton, ButtonProps as HeroUIButtonProps } from '../../packages/heroui/components/button/src';
import { motionPresets } from './motion';

interface EnhancedButtonProps extends HeroUIButtonProps {
  motionPreset?: keyof typeof motionPresets;
  customMotion?: any;
  enableHover?: boolean;
  enableTap?: boolean;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  motionPreset = 'fadeIn',
  customMotion,
  enableHover = true,
  enableTap = true,
  ...props
}) => {
  const motionProps = customMotion || motionPresets[motionPreset];
  
  const hoverProps = enableHover ? {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } }
  } : {};
  
  const tapProps = enableTap ? {
    whileTap: { scale: 0.95 }
  } : {};

  return (
    <motion.div
      {...motionProps}
      {...hoverProps}
      {...tapProps}
    >
      <HeroUIButton {...props}>
        {children}
      </HeroUIButton>
    </motion.div>
  );
};

export default EnhancedButton;