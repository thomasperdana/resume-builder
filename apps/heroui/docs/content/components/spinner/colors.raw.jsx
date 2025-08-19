import {Spinner} from "@heroui/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Spinner color="default" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
    </div>
  );
}
