import React from "react";
import { Avatar as HeroAvatar } from "@heroui/react";
import { AvatarProps as HeroAvatarProps } from "@heroui/react";

// Avatar wrapper that collects children and maps them to heroui props
interface AvatarProps extends Omit<HeroAvatarProps, 'name' | 'src'> {
  children?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, children, ...props }, ref) => {
    // Extract src and fallback from children
    let src: string | undefined;
    let fallback: string | undefined;
    
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === AvatarImage) {
          src = child.props.src;
        } else if (child.type === AvatarFallback) {
          fallback = typeof child.props.children === 'string' ? child.props.children : undefined;
        }
      }
    });

    return (
      <HeroAvatar
        ref={ref}
        src={src}
        name={fallback}
        className={className}
        {...props}
      />
    );
  }
);
Avatar.displayName = "Avatar";

// AvatarImage component
interface AvatarImageProps {
  src?: string;
  alt?: string;
}

const AvatarImage = ({ src, alt }: AvatarImageProps) => {
  // This is handled by the Avatar wrapper
  return null;
};

// AvatarFallback component
interface AvatarFallbackProps {
  children?: React.ReactNode;
}

const AvatarFallback = ({ children }: AvatarFallbackProps) => {
  // This is handled by the Avatar wrapper
  return null;
};

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };