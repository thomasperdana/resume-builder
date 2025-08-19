import type {UseCheckboxGroupProps} from "./use-checkbox-group";

import {forwardRef} from "@heroui/system";

import {CheckboxGroupProvider} from "./checkbox-group-context";
import {useCheckboxGroup} from "./use-checkbox-group";

export interface CheckboxGroupProps extends UseCheckboxGroupProps {}

const CheckboxGroup = forwardRef<"div", CheckboxGroupProps>((props, ref) => {
  const {
    children,
    context,
    label,
    description,
    isInvalid,
    errorMessage,
    getGroupProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
  } = useCheckboxGroup({...props, ref});

  return (
    <div {...getGroupProps()}>
      {label && <span {...getLabelProps()}>{label}</span>}
      <div {...getWrapperProps()}>
        <CheckboxGroupProvider value={context}>{children}</CheckboxGroupProvider>
      </div>
      {isInvalid && errorMessage ? (
        <div {...getErrorMessageProps()}>{errorMessage}</div>
      ) : description ? (
        <div {...getDescriptionProps()}>{description}</div>
      ) : null}
    </div>
  );
});

CheckboxGroup.displayName = "HeroUI.CheckboxGroup";

export default CheckboxGroup;
