import type {TabsVariantProps, SlotsToClasses, TabsSlots, TabsReturnType} from "@heroui/theme";
import type {ReactRef} from "@heroui/react-utils";
import type {RefObject} from "react";
import type {TabListState, TabListStateOptions} from "@react-stately/tabs";
import type {AriaTabListProps} from "@react-aria/tabs";
import type {CollectionProps} from "@heroui/aria-utils";
import type {CollectionChildren} from "@react-types/shared";
import type {HTMLMotionProps} from "framer-motion";
import type {HTMLHeroUIProps, PropGetter} from "@heroui/system";

import {mapPropsVariants, useProviderContext} from "@heroui/system";
import {tabs} from "@heroui/theme";
import {useDOMRef} from "@heroui/react-utils";
import {clsx, objectToDeps, mergeProps} from "@heroui/shared-utils";
import {filterDOMProps} from "@heroui/react-utils";
import {useMemo, useCallback} from "react";
import {useTabListState} from "@react-stately/tabs";
import {useTabList} from "@react-aria/tabs";

export interface Props extends Omit<HTMLHeroUIProps, "children"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The props to modify the cursor motion animation. Use the `variants` API to create your own animation.
   */
  motionProps?: Omit<HTMLMotionProps<"span">, "ref">;
  /**
   * Whether the tabs selection should occur on press up instead of press down.
   * @default true
   */
  shouldSelectOnPressUp?: boolean;
  /**
   * Whether the cursor should be hidden.
   * @default false
   */
  disableCursorAnimation?: boolean;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Tabs classNames={{
   *    base:"base-classes", // main wrapper (tabs + panels)
   *    tabList: "tab-list-classes", // tabs wrapper
   *    tab: "tab-classes", // tab item
   *    panel: "panel-classes", // tab panel
   * }} />
   * ``
   */
  classNames?: SlotsToClasses<TabsSlots>;
  /**
   * The position of the tabs.
   * @default 'top'
   */
  placement?: "top" | "bottom" | "start" | "end";
  /**
   * Whether the tabs are vertical it will invalidate the placement prop when the value is true.
   * @default false
   */
  isVertical?: boolean;
  /**
   * Whether to destroy inactive tab panel when switching tabs. Inactive tab panels are inert and cannot be interacted with.
   * @default true
   */
  destroyInactiveTabPanel?: boolean;
}

export type UseTabsProps<T> = Props &
  TabsVariantProps &
  Omit<TabListStateOptions<T>, "children" | keyof AriaTabListProps<T>> &
  Omit<AriaTabListProps<T>, "children" | "orientation"> &
  CollectionProps<T>;

export type ValuesType<T = object> = {
  state: TabListState<T>;
  slots: TabsReturnType;
  disableCursorAnimation?: boolean;
  listRef?: RefObject<HTMLElement>;
  shouldSelectOnPressUp?: boolean;
  classNames?: SlotsToClasses<TabsSlots>;
  motionProps?: Omit<HTMLMotionProps<"span">, "ref">;
  disableAnimation?: boolean;
  isDisabled?: boolean;
};

export function useTabs<T extends object>(originalProps: UseTabsProps<T>) {
  const globalContext = useProviderContext();

  const [props, variantProps] = mapPropsVariants(originalProps, tabs.variantKeys);

  const {
    ref,
    as,
    className,
    classNames,
    children,
    disableCursorAnimation,
    motionProps,
    isVertical = false,
    shouldSelectOnPressUp = true,
    destroyInactiveTabPanel = true,
    ...otherProps
  } = props;

  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const disableAnimation =
    originalProps?.disableAnimation ?? globalContext?.disableAnimation ?? false;

  const state = useTabListState<T>({
    children: children as CollectionChildren<T>,
    ...otherProps,
  });
  const {tabListProps} = useTabList<T>(otherProps as AriaTabListProps<T>, state, domRef);

  const slots = useMemo(
    () =>
      tabs({
        ...variantProps,
        disableAnimation,
        ...(isVertical ? {placement: "start"} : {}),
      }),
    [objectToDeps(variantProps), disableAnimation, isVertical],
  );

  const baseStyles = clsx(classNames?.base, className);

  const values = useMemo<ValuesType<T>>(
    () => ({
      state,
      slots,
      classNames,
      motionProps,
      disableAnimation,
      listRef: domRef,
      shouldSelectOnPressUp,
      disableCursorAnimation,
      isDisabled: originalProps?.isDisabled,
    }),
    [
      state,
      slots,
      domRef,
      motionProps,
      disableAnimation,
      disableCursorAnimation,
      shouldSelectOnPressUp,
      originalProps?.isDisabled,
      classNames,
    ],
  );

  const getBaseProps: PropGetter = useCallback(
    (props) => ({
      "data-slot": "base",
      className: slots.base({class: clsx(baseStyles, props?.className)}),
      ...mergeProps(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
        }),
        props,
      ),
    }),
    [baseStyles, otherProps, slots],
  );

  const placement = (variantProps as Props).placement ?? (isVertical ? "start" : "top");
  const getWrapperProps: PropGetter = useCallback(
    (props) => ({
      "data-slot": "tabWrapper",
      className: slots.tabWrapper({class: clsx(classNames?.tabWrapper, props?.className)}),
      "data-placement": placement,
      "data-vertical":
        isVertical || placement === "start" || placement === "end" ? "vertical" : "horizontal",
    }),
    [classNames, slots, placement, isVertical],
  );

  const getTabListProps: PropGetter = useCallback(
    (props) => ({
      ref: domRef,
      "data-slot": "tabList",
      className: slots.tabList({class: clsx(classNames?.tabList, props?.className)}),
      ...mergeProps(tabListProps, props),
    }),
    [domRef, tabListProps, classNames, slots],
  );

  return {
    Component,
    domRef,
    state,
    values,
    destroyInactiveTabPanel,
    getBaseProps,
    getTabListProps,
    getWrapperProps,
  };
}

export type UseTabsReturn = ReturnType<typeof useTabs>;
