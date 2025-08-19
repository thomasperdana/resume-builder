import type {SliderValue} from "@heroui/react";

import React from "react";
import {Slider} from "@heroui/react";

export default function App() {
  const [value, setValue] = React.useState<SliderValue>(25);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        aria-label="Volume"
        className="max-w-md"
        color="secondary"
        defaultValue={70}
        size="lg"
        onChangeEnd={setValue}
      />
      <p className="text-default-500 font-medium text-small">Current volume: {value}</p>
    </div>
  );
}
