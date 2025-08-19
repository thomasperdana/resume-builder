import type {DateValue} from "@internationalized/date";
import type {ForwardedRef, ReactElement} from "react";
import type {UseRangeCalendarProps} from "./use-range-calendar";

import {forwardRef} from "@heroui/system";

import {useRangeCalendar} from "./use-range-calendar";
import {CalendarProvider} from "./calendar-context";
import {CalendarBase} from "./calendar-base";

interface Props<T extends DateValue>
  extends Omit<
    UseRangeCalendarProps<T>,
    "isHeaderExpanded" | "onHeaderExpandedChange" | "isHeaderWrapperExpanded"
  > {}

export type RangeCalendarProps<T extends DateValue = DateValue> = Props<T>;

const RangeCalendar = forwardRef(function RangeCalendar<T extends DateValue>(
  props: RangeCalendarProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {context, getBaseCalendarProps} = useRangeCalendar<T>({...props, ref});

  return (
    <CalendarProvider value={context}>
      <CalendarBase {...getBaseCalendarProps()} />
    </CalendarProvider>
  );
}) as <T extends DateValue>(props: RangeCalendarProps<T>) => ReactElement;

export default RangeCalendar;
