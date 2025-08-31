export const tooltipImplementation = `import Tooltip from "@/app/ui/atoms/Tooltip";
import Button from "@/app/ui/atoms/Button";
import { HelpCircle, Info, Settings } from "lucide-react";

export default function TooltipExample() {
  return (
    <div className="space-y-8">
      {/* Basic tooltips with different positions */}
      <div className="flex items-center justify-center gap-8">
        <Tooltip content="Tooltip on top" position="top">
          <Button variant="outline">Top</Button>
        </Tooltip>
        
        <Tooltip content="Tooltip on bottom" position="bottom">
          <Button variant="outline">Bottom</Button>
        </Tooltip>
        
        <Tooltip content="Tooltip on left" position="left">
          <Button variant="outline">Left</Button>
        </Tooltip>
        
        <Tooltip content="Tooltip on right" position="right">
          <Button variant="outline">Right</Button>
        </Tooltip>
      </div>

      {/* Different triggers */}
      <div className="flex items-center gap-4">
        <Tooltip content="Hover to see this" trigger="hover">
          <Button variant="secondary">Hover Me</Button>
        </Tooltip>
        
        <Tooltip content="Click to see this" trigger="click">
          <Button variant="secondary">Click Me</Button>
        </Tooltip>
      </div>

      {/* Custom delay */}
      <div className="flex items-center gap-4">
        <Tooltip content="Fast tooltip (100ms)" delay={100}>
          <Button variant="outline">Fast</Button>
        </Tooltip>
        
        <Tooltip content="Slow tooltip (500ms)" delay={500}>
          <Button variant="outline">Slow</Button>
        </Tooltip>
      </div>

      {/* With icons */}
      <div className="flex items-center gap-4">
        <Tooltip content="Get help and support">
          <HelpCircle className="w-5 h-5 text-neutral-500 cursor-pointer" />
        </Tooltip>
        
        <Tooltip content="Additional information">
          <Info className="w-5 h-5 text-blue-500 cursor-pointer" />
        </Tooltip>
        
        <Tooltip content="Open settings">
          <Settings className="w-5 h-5 text-neutral-600 cursor-pointer" />
        </Tooltip>
      </div>

      {/* In form context */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Email Address
          </label>
          <Tooltip content="We'll never share your email with anyone">
            <HelpCircle className="w-4 h-4 text-neutral-400 cursor-pointer" />
          </Tooltip>
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
        />
      </div>
    </div>
  );
}`;
