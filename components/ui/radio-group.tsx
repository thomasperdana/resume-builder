import React from "react";
import { RadioGroup as HeroRadioGroup, Radio } from "@heroui/react";
import { RadioGroupProps as HeroRadioGroupProps } from "@heroui/react";

// RadioGroup wrapper
interface RadioGroupProps extends Omit<HeroRadioGroupProps, 'children'> {
  className?: string;
  children?: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <HeroRadioGroup
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </HeroRadioGroup>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

// RadioGroupItem component
interface RadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const RadioGroupItem = React.forwardRef<HTMLLabelElement, RadioGroupItemProps>(
  ({ value, id, className, children, ...props }, ref) => {
    return (
      <Radio
        value={value}
        className={className}
        {...props}
      >
        {children}
      </Radio>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };