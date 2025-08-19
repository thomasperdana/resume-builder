/**
 * Integrated Mono Repo - Main Integration Index
 * Exports all integrated functionality from SaaS Starter, HeroUI, Motion, and ERPNext
 */

// SaaS Starter exports (existing functionality)
export * from '../lib/db';
export * from '../lib/auth';
export * from '../lib/stripe';

// HeroUI Integration
export * from './heroui';
export { EnhancedButton, AnimatedCard, MotionModal } from './heroui';

// Motion Integration
export * from './motion';
export { motionPresets, motionUtils } from './motion';

// ERPNext Integration
export * from './erpnext';
export { erpUtils, ERPNextClient, erpnextConfig } from './erpnext';

// Enhanced UI Components
export { EnhancedButton } from './enhanced-button';
export { AnimatedCard } from './animated-card';
export { MotionModal } from './motion-modal';

// Integration utilities
export const integrationUtils = {
  // Combine HeroUI with Motion
  createAnimatedComponent: (Component: any, motionProps: any) => {
    return (props: any) => (
      <motion.div {...motionProps}>
        <Component {...props} />
      </motion.div>
    );
  },
  
  // ERP data formatters
  formatERPData: (data: any, type: string) => {
    switch (type) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: data.currency || 'USD'
        }).format(data.amount);
      case 'date':
        return new Date(data).toLocaleDateString();
      case 'percentage':
        return `${(data * 100).toFixed(2)}%`;
      default:
        return data;
    }
  },
  
  // Theme integration
  createIntegratedTheme: (heroUITheme: any, motionSettings: any) => {
    return {
      ...heroUITheme,
      motion: motionSettings,
      erp: {
        primaryColor: heroUITheme.colors.primary,
        accentColor: heroUITheme.colors.secondary
      }
    };
  }
};

// Version information
export const version = {
  saasStarter: '1.0.0',
  heroui: '2.0.0',
  motion: '0.0.0',
  erpnext: '15.0.0',
  integrated: '1.0.0'
};