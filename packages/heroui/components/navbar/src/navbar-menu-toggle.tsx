import type {HTMLHeroUIProps} from "@heroui/system";
import type {ReactNode} from "react";
import type {AriaToggleButtonProps} from "@react-aria/button";

import {useToggleButton as useAriaToggleButton} from "@react-aria/button";
import {forwardRef} from "@heroui/system";
import {useDOMRef} from "@heroui/react-utils";
import {clsx, dataAttr, mergeProps} from "@heroui/shared-utils";
import {useToggleState} from "@react-stately/toggle";
import {useFocusRing} from "@react-aria/focus";
import {useHover} from "@react-aria/interactions";
import {useMemo} from "react";

import {useNavbarContext} from "./navbar-context";

export interface Props extends Omit<HTMLHeroUIProps<"button">, keyof AriaToggleButtonProps> {
  /**
   * The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
   */
  value?: string;
  /**
   * Text to display for screen readers.
   * @default open/close navigation menu
   */
  srOnlyText?: string;
  /**
   * The icon to display.
   */
  icon?: ReactNode | ((isOpen: boolean) => ReactNode) | null;
}

export type NavbarMenuToggleProps = Props & AriaToggleButtonProps;

const NavbarMenuToggle = forwardRef<"button", NavbarMenuToggleProps>((props, ref) => {
  const {
    as,
    icon,
    className,
    onChange,
    autoFocus,
    srOnlyText: srOnlyTextProp,
    ...otherProps
  } = props;

  const Component = as || "button";
  const domRef = useDOMRef(ref);

  const {slots, classNames, isMenuOpen, setIsMenuOpen} = useNavbarContext();

  const handleChange = (isOpen: boolean) => {
    onChange?.(isOpen);
    setIsMenuOpen(isOpen);
  };

  const state = useToggleState({...otherProps, isSelected: isMenuOpen, onChange: handleChange});

  const {buttonProps, isPressed} = useAriaToggleButton(props, state, domRef);
  const {isFocusVisible, focusProps} = useFocusRing({autoFocus});
  const {isHovered, hoverProps} = useHover({});

  const toggleStyles = clsx(classNames?.toggle, className);

  const child = useMemo(() => {
    if (typeof icon === "function") {
      return icon(isMenuOpen ?? false);
    }

    return icon || <span className={slots.toggleIcon({class: classNames?.toggleIcon})} />;
  }, [icon, isMenuOpen, slots.toggleIcon, classNames?.toggleIcon]);

  const srOnlyText = useMemo(() => {
    if (srOnlyTextProp) {
      return srOnlyTextProp;
    }

    return state.isSelected ? "close navigation menu" : "open navigation menu";
  }, [srOnlyTextProp, isMenuOpen]);

  return (
    <Component
      ref={domRef}
      className={slots.toggle?.({class: toggleStyles})}
      data-focus-visible={dataAttr(isFocusVisible)}
      data-hover={dataAttr(isHovered)}
      data-open={dataAttr(isMenuOpen)}
      data-pressed={dataAttr(isPressed)}
      {...mergeProps(buttonProps, focusProps, hoverProps, otherProps)}
    >
      <span className={slots.srOnly()}>{srOnlyText}</span>
      {child}
    </Component>
  );
});

NavbarMenuToggle.displayName = "HeroUI.NavbarMenuToggle";

export default NavbarMenuToggle;
