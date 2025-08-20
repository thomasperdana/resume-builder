import React from "react";
import { Button as HeroButton } from "@heroui/react";
import { ButtonProps as HeroButtonProps } from "@heroui/react";

// Map shadcn variants to heroui variants
interface ButtonProps extends Omit<HeroButtonProps, 'color' | 'variant' | 'size'> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const variantMap = {
  default: 'solid' as const,
  destructive: 'solid' as const,
  outline: 'bordered' as const,
  secondary: 'flat' as const,
  ghost: 'light' as const,
  link: 'light' as const,
};

const colorMap = {
  default: 'primary' as const,
  destructive: 'danger' as const,
  outline: 'default' as const,
  secondary: 'default' as const,
  ghost: 'default' as const,
  link: 'primary' as const,
};

const sizeMap = {
  default: 'md' as const,
  sm: 'sm' as const,
  lg: 'lg' as const,
  icon: 'sm' as const,
};

function Button({
  variant = 'default',
  size = 'default',
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const heroVariant = variantMap[variant];
  const heroColor = colorMap[variant];
  const heroSize = sizeMap[size];
  const isIcon = size === 'icon';

  return (
    <HeroButton
      variant={heroVariant}
      color={heroColor}
      size={heroSize}
      isIconOnly={isIcon}
      className={className}
      {...props}
    >
      {children}
    </HeroButton>
  );
}

export { Button };
export type { ButtonProps };