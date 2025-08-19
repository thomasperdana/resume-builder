import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as HeroDropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@heroui/react";

// DropdownMenu wrapper - this is the root component
interface DropdownMenuProps {
  children?: React.ReactNode;
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return (
    <Dropdown>
      {children}
    </Dropdown>
  );
};

// DropdownMenuTrigger component
interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children?: React.ReactNode;
}

const DropdownMenuTrigger = ({ asChild, children }: DropdownMenuTriggerProps) => {
  return (
    <DropdownTrigger>
      {children}
    </DropdownTrigger>
  );
};

// DropdownMenuContent component
interface DropdownMenuContentProps {
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
  children?: React.ReactNode;
}

const DropdownMenuContent = ({ 
  align = 'center', 
  sideOffset, 
  className, 
  children 
}: DropdownMenuContentProps) => {
  return (
    <HeroDropdownMenu
      className={className}
    >
      {children}
    </HeroDropdownMenu>
  );
};

// DropdownMenuItem component
interface DropdownMenuItemProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const DropdownMenuItem = ({ className, children, onClick }: DropdownMenuItemProps) => {
  return (
    <DropdownItem
      className={className}
      onPress={onClick}
    >
      {children}
    </DropdownItem>
  );
};

// DropdownMenuLabel component
interface DropdownMenuLabelProps {
  children?: React.ReactNode;
}

const DropdownMenuLabel = ({ children }: DropdownMenuLabelProps) => {
  return (
    <DropdownSection title={typeof children === 'string' ? children : undefined}>
    </DropdownSection>
  );
};

// DropdownMenuSeparator component
const DropdownMenuSeparator = () => {
  // HeroUI handles separators automatically between sections
  return null;
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};
export type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
};