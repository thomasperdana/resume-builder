import React from "react";
import { Card as HeroCard, CardBody, CardFooter, CardHeader as HeroCardHeader } from "@heroui/react";
import { CardProps as HeroCardProps } from "@heroui/react";

// Card wrapper
interface CardProps extends HeroCardProps {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <HeroCard
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </HeroCard>
    );
  }
);
Card.displayName = "Card";

// CardHeader component
interface CardHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <HeroCardHeader
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </HeroCardHeader>
    );
  }
);
CardHeader.displayName = "CardHeader";

// CardTitle component
interface CardTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-lg font-semibold ${className || ''}`}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = "CardTitle";

// CardContent component
interface CardContentProps {
  className?: string;
  children?: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CardBody
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </CardBody>
    );
  }
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardFooter, CardTitle, CardContent };
export type { CardProps, CardHeaderProps, CardTitleProps, CardContentProps };