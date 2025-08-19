import type {ButtonProps} from "@heroui/button";
import type {AlertSlots, AlertVariantProps, SlotsToClasses} from "@heroui/theme";
import type {HTMLHeroUIProps, PropGetter} from "@heroui/system";
import type {ReactRef} from "@heroui/react-utils";
import type {ReactNode} from "react";

import {mapPropsVariants} from "@heroui/system";
import {filterDOMProps, useDOMRef} from "@heroui/react-utils";
import {useCallback, useMemo} from "react";
import {alert} from "@heroui/theme";
import {useControlledState} from "@react-stately/utils";
import {clsx, dataAttr, isEmpty, objectToDeps, mergeProps} from "@heroui/shared-utils";

interface Props extends HTMLHeroUIProps<"div", "title"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * title of the alert message
   */
  title?: ReactNode;
  /**
   * description of the alert message
   */
  description?: ReactNode;
  /**
   * Icon to be displayed in the alert - overrides the default icon
   */
  icon?: ReactNode;
  /**
   * Content to be displayed in the end side of the alert
   */
  endContent?: ReactNode;
  /**
   * Content to be displayed in the start side of the alert
   */
  startContent?: ReactNode;
  /**
   * Whether the alert is visible.
   * @default false
   */
  isVisible?: boolean;
  /**
   * Whether the alert should be visible by default.
   * @default false
   */
  isDefaultVisible?: boolean;
  /**
   * The event handler for the alert visibility state.
   * @param isVisible boolean
   * @returns void
   */
  onVisibleChange?: (isVisible: boolean) => void;
  /**
   *  whether the alert can be closed by user
   */
  isClosable?: boolean;
  /**
   * Props for the close button
   */
  closeButtonProps?: Omit<ButtonProps, "children">;
  /**
   * function which is called when close button is clicked
   */
  onClose?: () => void;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Alert classNames={{
   *    base:"base-classes",
   *    mainWrapper: "mainWrapper-classes"
   *    description: "description-classes"
   *    title: "title-classes"
   *    closeButton: "closeButton-classes"
   *    closeIcon: "closeIcon-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<AlertSlots>;
}

export type UseAlertProps = Props & AlertVariantProps;

export function useAlert(originalProps: UseAlertProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, alert.variantKeys);

  const {
    as,
    title,
    children,
    description,
    onClose,
    isClosable,
    ref,
    icon,
    startContent,
    endContent,
    isVisible: isVisibleProp,
    isDefaultVisible,
    onVisibleChange,
    closeButtonProps = {
      size: "sm",
    },
    className,
    classNames,
    ...otherProps
  } = props;

  const [isVisible, setIsVisible] = useControlledState<boolean>(
    isVisibleProp,
    isDefaultVisible ?? true,
    onVisibleChange,
  );

  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose?.();
  }, [setIsVisible, onClose]);

  const baseStyles = clsx(classNames?.base, className);

  const slots = useMemo(
    () => alert({hasContent: !isEmpty(description) || !isEmpty(children), ...variantProps}),
    [description, objectToDeps(variantProps)],
  );

  const getBaseProps = useCallback<PropGetter>(() => {
    return {
      "data-visible": dataAttr(isVisible),
      "data-closeable": dataAttr(isClosable),
      "data-has-title": dataAttr(!isEmpty(title)),
      "data-has-description": dataAttr(!isEmpty(description)),
      ...mergeProps(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
        }),
        filterDOMProps(props),
      ),
      className: slots.base({class: baseStyles}),
    };
  }, [slots, baseStyles]);

  const getMainWrapperProps = useCallback<PropGetter>(() => {
    return {
      className: slots.mainWrapper({class: classNames?.mainWrapper}),
    };
  }, [slots, classNames?.mainWrapper]);

  const getDescriptionProps = useCallback<PropGetter>(() => {
    return {
      className: slots.description({class: classNames?.description}),
    };
  }, [slots, classNames?.description]);

  const getTitleProps = useCallback<PropGetter>(() => {
    return {
      className: slots.title({class: classNames?.title}),
    };
  }, [slots, classNames?.title]);

  const getCloseButtonProps = useCallback<PropGetter>(
    () => ({
      ...closeButtonProps,
      className: slots.closeButton({class: classNames?.closeButton}),
    }),
    [slots, classNames?.closeButton],
  );

  const getAlertIconProps = useCallback<PropGetter>(
    () => ({
      className: slots.alertIcon({class: classNames?.alertIcon}),
    }),
    [slots, classNames?.alertIcon],
  );

  const getIconWrapperProps = useCallback<PropGetter>(
    () => ({
      className: slots.iconWrapper({class: classNames?.iconWrapper}),
    }),
    [slots, classNames?.iconWrapper],
  );

  return {
    title,
    icon,
    children,
    description,
    isClosable,
    domRef,
    endContent,
    startContent,
    getBaseProps,
    getMainWrapperProps,
    getDescriptionProps,
    getTitleProps,
    color: variantProps["color"],
    getCloseButtonProps,
    handleClose,
    isVisible,
    onClose,
    getAlertIconProps,
    getIconWrapperProps,
  };
}
