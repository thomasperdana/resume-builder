import {DateRangePicker} from "@heroui/react";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <DateRangePicker label="Stay duration" visibleMonths={2} />
    </div>
  );
}
