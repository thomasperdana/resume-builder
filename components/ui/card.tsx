import React from "react";
import { Card as HeroCard, CardBody, CardFooter, CardHeader as HeroCardHeader } from "@heroui/react";
import { CardProps as HeroCardProps } from "@heroui/react";
import { cn } from "@/lib/utils";

// Card wrapper
interface CardProps extends HeroCardProps {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <HeroCard
        ref={ref}
        className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
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
        className={cn("flex flex-col space-y-1.5 p-6", className)}
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
        className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = "CardTitle";

// CardDescription component
interface CardDescriptionProps {
  className?: string;
  children?: React.ReactNode;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
CardDescription.displayName = "CardDescription";

// CardContent component
interface CardContentProps {
  className?: string;
  children?: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <CardBody
        className={cn("p-6 pt-0", className)}
        {...props}
      >
        {children}
      </CardBody>
    );
  }
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
export type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps };