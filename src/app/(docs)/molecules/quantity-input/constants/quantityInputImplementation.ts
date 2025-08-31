export const quantityInputImplementation = `import QuantityInput from "@/app/ui/molecules/QuantityInput";
import { useState } from "react";

export default function QuantityInputExample() {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [stockQuantity, setStockQuantity] = useState(50);
  const [limitedQuantity, setLimitedQuantity] = useState(5);

  return (
    <div className="space-y-8">
      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <QuantityInput size="sm" value={1} />
            <p className="text-sm text-neutral-500 mt-1">Small</p>
          </div>
          <div className="text-center">
            <QuantityInput size="md" value={2} />
            <p className="text-sm text-neutral-500 mt-1">Medium</p>
          </div>
          <div className="text-center">
            <QuantityInput size="lg" value={3} />
            <p className="text-sm text-neutral-500 mt-1">Large</p>
          </div>
        </div>
      </div>

      {/* Shopping cart example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">Quantity:</span>
          <QuantityInput
            value={cartQuantity}
            min={1}
            max={10}
            onValueChange={setCartQuantity}
          />
          <span className="text-sm text-neutral-600">
            (max 10 items)
          </span>
        </div>
      </div>

      {/* Inventory management */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Inventory Management</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">Stock Level:</span>
          <QuantityInput
            value={stockQuantity}
            min={0}
            max={1000}
            step={10}
            onValueChange={setStockQuantity}
          />
          <span className="text-sm text-neutral-600">units</span>
        </div>
      </div>

      {/* Limited quantity with custom step */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Limited Range (2-10)</h3>
        <div className="flex items-center gap-4">
          <QuantityInput
            value={limitedQuantity}
            min={2}
            max={10}
            step={1}
            onValueChange={setLimitedQuantity}
          />
        </div>
      </div>

      {/* Disabled state */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <QuantityInput value={5} disabled />
      </div>
    </div>
  );
}`;
