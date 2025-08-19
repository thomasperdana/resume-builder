import {Switch} from "@heroui/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Switch defaultSelected size="sm">
        Small
      </Switch>
      <Switch defaultSelected size="md">
        Medium
      </Switch>
      <Switch defaultSelected size="lg">
        Large
      </Switch>
    </div>
  );
}
