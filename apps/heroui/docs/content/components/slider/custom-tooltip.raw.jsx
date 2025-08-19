import {Slider} from "@heroui/react";

export default function App() {
  const formatMillisecondsToHHMMSS = (milliseconds) => {
    if (typeof milliseconds !== "number") {
      // Handle cases where value might be an array for multi-thumb
      milliseconds = Array.isArray(milliseconds) ? milliseconds[0] : milliseconds;
    }
    if (isNaN(milliseconds) || milliseconds < 0) {
      // Default for invalid input
      return "00:00:00";
    }

    let totalSeconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor(totalSeconds / 3600);

    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <Slider
      hideValue
      showTooltip
      defaultValue={3665000} // Example: 1 hour, 1 minute, 5 seconds in ms
      getTooltipValue={(value) => formatMillisecondsToHHMMSS(value)} //Single thumb, SliderValue is a number.
      label="Video Duration (hh:mm:ss)"
      maxValue={7200000} // Example: 2 hours in ms
      step={1000} // 1-second steps
      // The slider's main value will be formatted using default or formatOptions
      // The tooltip will use the hh:mm:ss format from getTooltipValue
    />
  );
}
