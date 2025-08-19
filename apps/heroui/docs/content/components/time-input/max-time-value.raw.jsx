import {TimeInput} from "@heroui/react";
import {Time} from "@internationalized/date";

export default function App() {
  return <TimeInput defaultValue={new Time(18)} maxValue={new Time(17)} />;
}
