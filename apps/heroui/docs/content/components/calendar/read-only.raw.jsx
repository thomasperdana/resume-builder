import {Calendar} from "@heroui/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return <Calendar isReadOnly aria-label="Date (Read Only)" value={today(getLocalTimeZone())} />;
}
