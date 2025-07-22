import { getWorldRates } from "./utils";

const TestButton = () => {
  return <button onClick={getWorldRates} className="w-40 h-10 bg-red-500 rounded-lg shrink-0">Test UI</button>;
};

export { TestButton };
