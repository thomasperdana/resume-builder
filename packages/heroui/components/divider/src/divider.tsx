import type {UseDividerProps} from "./use-divider";

import {forwardRef} from "@heroui/system-rsc";

import {useDivider} from "./use-divider";

export interface DividerProps extends Omit<UseDividerProps, "children"> {}

const Divider = forwardRef<"div", DividerProps>((props, ref) => {
  const {Component, getDividerProps} = useDivider({...props});

  return <Component ref={ref} {...getDividerProps()} />;
});

Divider.displayName = "HeroUI.Divider";

export default Divider;
