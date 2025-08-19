import {Calendar} from "@heroui/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return (
    <Calendar
      aria-label="Date (Max Date Value)"
      defaultValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone())}
    />
  );
}
