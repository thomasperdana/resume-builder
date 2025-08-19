import type {ReactElement} from "react";
import type {UseCheckboxProps} from "./use-checkbox";

import {forwardRef} from "@heroui/system";
import {cloneElement} from "react";

import {useCheckbox} from "./use-checkbox";
import {CheckboxIcon} from "./checkbox-icon";

export interface CheckboxProps extends UseCheckboxProps {}

const Checkbox = forwardRef<"input", CheckboxProps>((props, ref) => {
  const {
    Component,
    children,
    icon = <CheckboxIcon />,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getIconProps,
    getLabelProps,
  } = useCheckbox({...props, ref});

  const clonedIcon =
    typeof icon === "function"
      ? icon(getIconProps())
      : cloneElement(icon as ReactElement, getIconProps());

  return (
    <Component {...getBaseProps()}>
      <input {...getInputProps()} />
      <span {...getWrapperProps()}>{clonedIcon}</span>
      {children && <span {...getLabelProps()}>{children}</span>}
    </Component>
  );
});

Checkbox.displayName = "HeroUI.Checkbox";

export default Checkbox;
