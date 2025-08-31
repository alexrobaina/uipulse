export const toolkitImplementation = `import Toolkit from "@/app/ui/molecules/Toolkit";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Save, Share, Settings } from "lucide-react";
import { useState } from "react";

export default function ToolkitExample() {
  const [activeFormatting, setActiveFormatting] = useState<string[]>(["bold"]);
  const [activeAlignment, setActiveAlignment] = useState<string[]>(["left"]);

  const formattingTools = [
    { id: "bold", label: "Bold", icon: <Bold /> },
    { id: "italic", label: "Italic", icon: <Italic /> },
    { id: "underline", label: "Underline", icon: <Underline /> },
  ];

  const alignmentTools = [
    { id: "left", label: "Left", icon: <AlignLeft /> },
    { id: "center", label: "Center", icon: <AlignCenter /> },
    { id: "right", label: "Right", icon: <AlignRight /> },
  ];

  const actionTools = [
    { id: "save", label: "Save", icon: <Save /> },
    { id: "share", label: "Share", icon: <Share /> },
    { id: "settings", label: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="space-y-6">
      {/* Text formatting (multiple selection) */}
      <div>
        <h3 className="mb-3 font-medium">Text Formatting</h3>
        <Toolkit 
          items={formattingTools}
          allowMultiple
          activeItems={activeFormatting}
          onItemsChange={setActiveFormatting}
        />
      </div>

      {/* Alignment (single selection) */}
      <div>
        <h3 className="mb-3 font-medium">Text Alignment</h3>
        <Toolkit 
          items={alignmentTools}
          variant="outline"
          activeItems={activeAlignment}
          onItemsChange={setActiveAlignment}
        />
      </div>

      {/* Different variants */}
      <div className="space-y-4">
        <h3 className="font-medium">Variants</h3>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Default</p>
          <Toolkit items={actionTools} />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Outline</p>
          <Toolkit items={actionTools} variant="outline" spacing="sm" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Ghost</p>
          <Toolkit items={actionTools} variant="ghost" spacing="md" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Filled</p>
          <Toolkit items={actionTools} variant="filled" />
        </div>
      </div>

      {/* Vertical orientation */}
      <div>
        <h3 className="mb-3 font-medium">Vertical Toolkit</h3>
        <Toolkit 
          items={actionTools}
          orientation="vertical"
          variant="outline"
          spacing="sm"
        />
      </div>

      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="font-medium">Sizes</h3>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Small</p>
          <Toolkit items={actionTools} size="sm" variant="outline" spacing="sm" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Medium (default)</p>
          <Toolkit items={actionTools} size="md" variant="outline" spacing="sm" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-600 mb-2">Large</p>
          <Toolkit items={actionTools} size="lg" variant="outline" spacing="sm" />
        </div>
      </div>
    </div>
  );
}`;
