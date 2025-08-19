import type {UseChipProps} from "./use-chip";

import {CloseFilledIcon} from "@heroui/shared-icons";
import {forwardRef} from "@heroui/system";
import {useMemo} from "react";

import {useChip} from "./use-chip";

export interface ChipProps extends Omit<UseChipProps, "isOneChar" | "isCloseButtonFocusVisible"> {}

const Chip = forwardRef<"div", ChipProps>((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isDot,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps,
  } = useChip({
    ...props,
    ref,
  });

  const start = useMemo(() => {
    if (isDot && !startContent) {
      return <span className={slots.dot({class: classNames?.dot})} />;
    }

    return startContent;
  }, [slots, startContent, isDot]);

  const end = useMemo(() => {
    if (isCloseable) {
      return <span {...getCloseButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);

  return (
    <Component {...getChipProps()}>
      {start}
      <span className={slots.content({class: classNames?.content})}>{children}</span>
      {end}
    </Component>
  );
});

Chip.displayName = "HeroUI.Chip";

export default Chip;
