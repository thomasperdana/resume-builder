import type {DateValue} from "@internationalized/date";
import type {ForwardedRef, ReactElement} from "react";
import type {UseCalendarProps} from "./use-calendar";

import {forwardRef} from "@heroui/system";

import {useCalendar} from "./use-calendar";
import {CalendarProvider} from "./calendar-context";
import {CalendarBase} from "./calendar-base";

interface Props<T extends DateValue> extends Omit<UseCalendarProps<T>, "isHeaderWrapperExpanded"> {}

export type CalendarProps<T extends DateValue = DateValue> = Props<T>;

const Calendar = forwardRef(function Calendar<T extends DateValue>(
  props: CalendarProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {context, getBaseCalendarProps} = useCalendar<T>({...props, ref});

  return (
    <CalendarProvider value={context}>
      <CalendarBase {...getBaseCalendarProps()} />
    </CalendarProvider>
  );
}) as <T extends DateValue>(props: CalendarProps<T>) => ReactElement;

export default Calendar;
