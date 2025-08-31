export const toggleGroupImplementation = `import ToggleGroup from "@/app/ui/molecules/ToggleGroup";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { useState } from "react";

export default function ToggleGroupExample() {
  const [formatting, setFormatting] = useState<string[]>(["bold"]);
  const [alignment, setAlignment] = useState<string>("left");

  const formattingItems = [
    { value: "bold", label: "Bold", icon: <Bold /> },
    { value: "italic", label: "Italic", icon: <Italic /> },
    { value: "underline", label: "Underline", icon: <Underline /> },
  ];

  const alignmentItems = [
    { value: "left", label: "Left", icon: <AlignLeft /> },
    { value: "center", label: "Center", icon: <AlignCenter /> },
    { value: "right", label: "Right", icon: <AlignRight /> },
  ];

  return (
    <div className="space-y-6">
      {/* Multiple selection formatting */}
      <div>
        <h3 className="mb-3 font-medium">Text Formatting</h3>
        <ToggleGroup 
          items={formattingItems}
          type="multiple"
          value={formatting}
          onValueChange={setFormatting}
        />
        <p className="text-sm text-neutral-600 mt-2">
          Active: {formatting.join(", ") || "none"}
        </p>
      </div>

      {/* Single selection alignment */}
      <div>
        <h3 className="mb-3 font-medium">Text Alignment</h3>
        <ToggleGroup 
          items={alignmentItems}
          type="single"
          value={alignment}
          onValueChange={setAlignment}
          variant="outline"
        />
        <p className="text-sm text-neutral-600 mt-2">
          Selected: {alignment}
        </p>
      </div>

      {/* Different variants */}
      <div className="space-y-4">
        <h3 className="font-medium">Variants</h3>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Default</p>
          <ToggleGroup items={formattingItems} type="multiple" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Outline</p>
          <ToggleGroup items={formattingItems} type="multiple" variant="outline" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Ghost</p>
          <ToggleGroup items={formattingItems} type="multiple" variant="ghost" />
        </div>
      </div>

      {/* Vertical orientation */}
      <div>
        <h3 className="mb-3 font-medium">Vertical Layout</h3>
        <ToggleGroup 
          items={alignmentItems}
          orientation="vertical"
          variant="outline"
        />
      </div>

      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="font-medium">Sizes</h3>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Small</p>
          <ToggleGroup items={formattingItems} size="sm" variant="outline" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Medium (default)</p>
          <ToggleGroup items={formattingItems} size="md" variant="outline" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Large</p>
          <ToggleGroup items={formattingItems} size="lg" variant="outline" />
        </div>
      </div>
    </div>
  );
}`;
