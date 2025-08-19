import type {CalendarDate} from "@internationalized/date";
import type {PressEvent} from "@react-types/shared";
import type {HTMLHeroUIProps} from "@heroui/system";

import {useDateFormatter} from "@react-aria/i18n";
import {useCallback, useRef, useEffect} from "react";
import {debounce} from "@heroui/shared-utils";
import scrollIntoView from "scroll-into-view-if-needed";

import {getMonthsInYear, getYearRange} from "./utils";
import {useCalendarContext} from "./calendar-context";

export type PickerValue = {
  value: string;
  label: string;
};
export interface CalendarPickerProps extends HTMLHeroUIProps<"div"> {
  date: CalendarDate;
  currentMonth: CalendarDate;
}

type ItemsRefMap = Map<number, HTMLElement>;
type CalendarPickerListType = "months" | "years";

const SCROLL_DEBOUNCE_TIME = 200;

export function useCalendarPicker(props: CalendarPickerProps) {
  const {date, currentMonth} = props;

  const {slots, state, headerRef, isHeaderExpanded, setIsHeaderExpanded, classNames} =
    useCalendarContext();

  const highlightRef = useRef<HTMLDivElement>(null);
  const yearsListRef = useRef<HTMLDivElement>(null);
  const monthsListRef = useRef<HTMLDivElement>(null);

  const monthsItemsRef = useRef<ItemsRefMap>();
  const yearsItemsRef = useRef<ItemsRefMap>();
  const focusedDateRef = useRef<CalendarDate>(state.focusedDate);

  const monthDateFormatter = useDateFormatter({
    month: "long",
    era:
      currentMonth.calendar.identifier === "gregory" && currentMonth.era === "BC"
        ? "short"
        : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
  });

  const yearDateFormatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone,
  });

  // Used for the year/month pickers
  const years = getYearRange(state.minValue, state.maxValue)?.map((y) => ({
    value: y.year,
    label: yearDateFormatter.format(y.toDate(state.timeZone)),
  }));

  const months = getMonthsInYear(date).map((m) => ({
    value: m.month,
    label: monthDateFormatter.format(m.toDate(state.timeZone)),
  }));

  function getItemsRefMap(itemsRef: React.MutableRefObject<ItemsRefMap | undefined>) {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  function getItemRef(node: HTMLElement | null, value: number, list: CalendarPickerListType) {
    const map = getItemsRefMap(list === "months" ? monthsItemsRef : yearsItemsRef);

    if (node) {
      map.set(value, node);
    } else {
      map.delete(value);
    }
  }

  const handleListScroll = useCallback(
    (e: Event, highlightEl: HTMLElement | null, list: CalendarPickerListType) => {
      if (!(e.target instanceof HTMLElement) || !highlightEl) return;

      const map = getItemsRefMap(list === "months" ? monthsItemsRef : yearsItemsRef);

      const items = Array.from(map.entries());

      const highlightRect = highlightEl.getBoundingClientRect();

      const highlightCenter = {
        x: highlightRect.left + highlightRect.width / 2,
        y: highlightRect.top + highlightRect.height / 2,
      };

      let closestItem: [number, HTMLElement] | null = null;

      let minDistance = Infinity;

      for (const [value, itemEl] of items) {
        const itemRect = itemEl.getBoundingClientRect();
        const itemCenter = {
          x: itemRect.left + itemRect.width / 2,
          y: itemRect.top + itemRect.height / 2,
        };

        // Calculate distance between centers
        const distance = Math.sqrt(
          Math.pow(highlightCenter.x - itemCenter.x, 2) +
            Math.pow(highlightCenter.y - itemCenter.y, 2),
        );

        if (distance < minDistance) {
          minDistance = distance;
          closestItem = [value, itemEl];
        }
      }

      if (!closestItem) return;

      const [itemValue] = closestItem;

      const updatedDate = focusedDateRef.current.set(
        list === "months" ? {month: itemValue} : {year: itemValue},
      );

      state.setFocusedDate(updatedDate);
    },
    [isHeaderExpanded],
  );

  useEffect(() => {
    focusedDateRef.current = state.focusedDate;
  }, [state.focusedDate]);

  // scroll to the selected month/year when the component is mounted/opened/closed
  useEffect(() => {
    if (!isHeaderExpanded) return;

    scrollTo(date.month, "months", false);
    scrollTo(date.year, "years", false);
  }, [isHeaderExpanded]);

  useEffect(() => {
    // add scroll event listener to monthsListRef
    const monthsList = monthsListRef.current;
    const yearsList = yearsListRef.current;
    const highlightEl = highlightRef.current;

    if (!highlightEl) return;

    const debouncedHandleMonthsScroll = debounce(
      (e: Event) => handleListScroll(e, highlightEl, "months"),
      SCROLL_DEBOUNCE_TIME,
    );
    const debouncedHandleYearsScroll = debounce(
      (e: Event) => handleListScroll(e, highlightEl, "years"),
      SCROLL_DEBOUNCE_TIME,
    );

    monthsList?.addEventListener("scroll", debouncedHandleMonthsScroll);
    yearsList?.addEventListener("scroll", debouncedHandleYearsScroll);

    return () => {
      if (debouncedHandleMonthsScroll) {
        monthsList?.removeEventListener("scroll", debouncedHandleMonthsScroll);
      }
      if (debouncedHandleYearsScroll) {
        yearsList?.removeEventListener("scroll", debouncedHandleYearsScroll);
      }
    };
  }, [handleListScroll]);

  function scrollTo(value: number, list: CalendarPickerListType, smooth = true) {
    const mapListRef = list === "months" ? monthsItemsRef : yearsItemsRef;
    const listRef = list === "months" ? monthsListRef : yearsListRef;

    const map = getItemsRefMap(mapListRef);

    const node = map.get(value);

    if (!node) return;

    // scroll picker list to the selected item
    scrollIntoView(node, {
      scrollMode: "always",
      behavior: smooth ? "smooth" : "auto",
      boundary: listRef.current,
    });
  }

  const onPickerItemPressed = useCallback(
    (e: PressEvent, list: CalendarPickerListType) => {
      const target = e.target as HTMLElement;
      const value = Number(target.getAttribute("data-value"));

      if (!value) return;

      scrollTo(value, list);
    },
    [state],
  );

  const onPickerItemKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>, value: number, list: CalendarPickerListType) => {
      const map = getItemsRefMap(list === "months" ? monthsItemsRef : yearsItemsRef);

      const node = map.get(value);

      if (!node) return;

      let nextValue = value;

      switch (e.key) {
        case "ArrowDown":
          nextValue = value + 1;
          break;
        case "ArrowUp":
          nextValue = value - 1;
          break;
        case "Home":
          nextValue = 0;
          break;
        case "End":
          nextValue = months.length - 1;
          break;
        case "PageUp":
          nextValue = value - 3;
          break;
        case "PageDown":
          nextValue = value + 3;
          break;
        case "Escape":
        case "Enter":
        case " ":
          setIsHeaderExpanded?.(false);
          headerRef?.current?.focus();

          return;
      }

      const nextItem = map.get(nextValue);

      nextItem?.focus();
    },
    [state],
  );

  return {
    state,
    slots,
    classNames,
    years,
    months,
    highlightRef,
    monthsListRef,
    yearsListRef,
    getItemRef,
    isHeaderExpanded,
    onPickerItemPressed,
    onPickerItemKeyDown,
  };
}

export type UseCalendarPickerReturn = ReturnType<typeof useCalendarPicker>;
