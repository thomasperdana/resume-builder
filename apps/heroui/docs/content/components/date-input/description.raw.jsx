import {DateInput} from "@heroui/react";
import {CalendarDate} from "@internationalized/date";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <DateInput
        description={"This is my birth date."}
        label={"Birth date"}
        placeholderValue={new CalendarDate(1995, 11, 6)}
      />
    </div>
  );
}
