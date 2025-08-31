export const spinnerImplementation = `import Spinner from "@/app/ui/atoms/Spinner";
import Button from "@/app/ui/atoms/Button";
import { useState } from "react";

export default function SpinnerExample() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Different sizes */}
      <div className="flex items-center gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>

      {/* Different variants */}
      <div className="flex items-center gap-4">
        <Spinner variant="default" />
        <Spinner variant="primary" />
        <div className="bg-neutral-900 p-3 rounded">
          <Spinner variant="white" />
        </div>
      </div>

      {/* Loading button example */}
      <div className="space-y-4">
        <Button
          onClick={simulateLoading}
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          {isLoading && <Spinner size="sm" variant="white" />}
          {isLoading ? "Loading..." : "Start Loading"}
        </Button>
      </div>

      {/* Centered in container */}
      <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg">
        <Spinner size="lg" variant="primary" />
      </div>
    </div>
  );
}`;
