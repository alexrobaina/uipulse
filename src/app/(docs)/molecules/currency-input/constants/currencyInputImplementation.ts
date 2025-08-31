export const currencyInputImplementation = `import CurrencyInput from "@/app/ui/molecules/CurrencyInput";
import { useState } from "react";

export default function CurrencyInputExample() {
  const [price, setPrice] = useState(29.99);
  const [budget, setBudget] = useState(1000);
  const [euroPrice, setEuroPrice] = useState(25.50);

  return (
    <div className="space-y-8 max-w-md">
      {/* Basic USD input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Price (USD)
        </label>
        <CurrencyInput
          value={price}
          currency="USD"
          locale="en-US"
          onValueChange={setPrice}
        />
      </div>

      {/* Budget with higher precision */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Budget (Max $10,000)
        </label>
        <CurrencyInput
          value={budget}
          currency="USD"
          locale="en-US"
          min={0}
          max={10000}
          onValueChange={setBudget}
        />
      </div>

      {/* Euro currency */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Price (EUR)
        </label>
        <CurrencyInput
          value={euroPrice}
          currency="EUR"
          locale="de-DE"
          onValueChange={setEuroPrice}
        />
      </div>

      {/* Japanese Yen (no decimal places) */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Price (JPY)
        </label>
        <CurrencyInput
          value={2999}
          currency="JPY"
          locale="ja-JP"
          precision={0}
        />
      </div>

      {/* Disabled state */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Fixed Price (Disabled)
        </label>
        <CurrencyInput
          value={49.99}
          currency="USD"
          disabled
        />
      </div>
    </div>
  );
}`;
