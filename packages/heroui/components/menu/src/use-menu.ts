import type {HTMLHeroUIProps, PropGetter, SharedSelection} from "@heroui/system";
import type {AriaMenuProps} from "@react-types/menu";
import type {AriaMenuOptions} from "@react-aria/menu";
import type {MenuVariantProps, SlotsToClasses, MenuSlots} from "@heroui/theme";
import type {TreeState} from "@react-stately/tree";
import type {ReactRef} from "@heroui/react-utils";
import type {ReactNode} from "react";
import type {MenuItemProps} from "./menu-item";

import {useProviderContext} from "@heroui/system";
import {useMenu as useAriaMenu} from "@react-aria/menu";
import {menu} from "@heroui/theme";
import {useTreeState} from "@react-stately/tree";
import {filterDOMProps, useDOMRef} from "@heroui/react-utils";
import {useMemo} from "react";
import {clsx} from "@heroui/shared-utils";

interface Props<T> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The controlled state of the menu.
   */
  state?: TreeState<T>;
  /**
   * The menu aria props.
   */
  menuProps?: AriaMenuOptions<T>;
  /**
   * The menu items variant.
   */
  variant?: MenuItemProps["variant"];
  /**
   * The menu items color.
   */
  color?: MenuItemProps["color"];
  /**
   * Whether to hide the check icon when the items are selected.
   * @default false
   */
  hideSelectedIcon?: boolean;
  /**
   * Provides content to include a component in the top of the table.
   */
  topContent?: ReactNode;
  /**
   * Provides content to include a component in the bottom of the table.
   */
  bottomContent?: ReactNode;
  /**
   * Whether to not display the empty content when there are no items.
   * @default false
   */
  hideEmptyContent?: boolean;
  /**
   *  Provides content to display when there are no items.
   * @default "No items."
   */
  emptyContent?: React.ReactNode;
  /**
   * Whether to disable the items animation.
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Whether the menu should close when the menu item is selected.
   * @default true
   */
  closeOnSelect?: MenuItemProps["closeOnSelect"];
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Listbox classNames={{
   *    base:"base-classes",
   *    emptyContent: "empty-content-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<MenuSlots>;
  /**
   * The menu items classNames.
   */
  itemClasses?: MenuItemProps["classNames"];
  /**
   * Handler that is called when the selection changes.
   */
  onSelectionChange?: (keys: SharedSelection) => void;
}

export type UseMenuProps<T = object> = Props<T> &
  Omit<HTMLHeroUIProps<"ul">, keyof AriaMenuProps<T>> &
  Omit<AriaMenuProps<T>, "onSelectionChange"> &
  MenuVariantProps;

export function useMenu<T extends object>(props: UseMenuProps<T>) {
  const globalContext = useProviderContext();

  const {
    as,
    ref,
    variant,
    color,
    children,
    disableAnimation = globalContext?.disableAnimation ?? false,
    onAction,
    closeOnSelect,
    itemClasses,
    className,
    state: propState,
    topContent,
    bottomContent,
    hideEmptyContent = false,
    hideSelectedIcon = false,
    emptyContent = "No items.",
    menuProps: userMenuProps,
    onClose,
    classNames,
    ...otherProps
  } = props;

  const Component = as || "ul";

  const domRef = useDOMRef(ref);
  const shouldFilterDOMProps = typeof Component === "string";

  const innerState = useTreeState({...otherProps, ...userMenuProps, children});

  const state = propState || innerState;

  const {menuProps} = useAriaMenu({...otherProps, ...userMenuProps, onAction}, state, domRef);

  const slots = useMemo(() => menu({className}), [className]);
  const baseStyles = clsx(classNames?.base, className);

  const getBaseProps: PropGetter = (props = {}) => {
    return {
      ref: domRef,
      "data-slot": "base",
      className: slots.base({class: baseStyles}),
      ...filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps,
      }),
      ...props,
    };
  };

  const getListProps: PropGetter = (props = {}) => {
    return {
      "data-slot": "list",
      className: slots.list({class: classNames?.list}),
      ...menuProps,
      ...props,
    };
  };

  const getEmptyContentProps: PropGetter = (props = {}) => {
    return {
      children: emptyContent,
      className: slots.emptyContent({class: classNames?.emptyContent}),
      ...props,
    };
  };

  return {
    Component,
    state,
    variant,
    color,
    disableAnimation,
    onClose,
    topContent,
    bottomContent,
    closeOnSelect,
    className,
    itemClasses,
    getBaseProps,
    getListProps,
    hideEmptyContent,
    hideSelectedIcon,
    getEmptyContentProps,
  };
}

export type UseMenuReturn = ReturnType<typeof useMenu>;
