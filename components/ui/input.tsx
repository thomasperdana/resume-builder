import React from "react";
import { Input as HeroInput } from "@heroui/react";
import { InputProps as HeroInputProps } from "@heroui/react";

// Create a shadcn-compatible Input wrapper
interface InputProps extends Omit<HeroInputProps, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", size = "md", ...props }, ref) => {
    return (
      <HeroInput
        ref={ref}
        type={type}
        size={size}
        variant="bordered"
        className={className}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
export type { InputProps };