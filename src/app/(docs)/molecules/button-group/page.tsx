import { Metadata } from "next";
import { ButtonGroupDemo } from "./components/ButtonGroupDemo";
import { buttonGroupCode } from "./constants/buttonGroupCode";
import { buttonGroupImplementation } from "./constants/buttonGroupImplementation";
import HeaderDescription from "@/app/components/HeaderDescription";
import Preview from "@/app/components/Preview";
import CodeBlock from "@/app/components/CodeBlock";

export const metadata: Metadata = {
  title: "ButtonGroup Component - UIPulse",
  description:
    "A flexible button group component with multiple variants, orientations, and styling options built with Tailwind CSS.",
};

export default function ButtonGroupPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <HeaderDescription
        title="ButtonGroup"
        description="A flexible button group component that allows you to group related buttons together. Supports multiple variants, orientations, and styling options."
      />

      <Preview>
        <ButtonGroupDemo />
      </Preview>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Usage</h2>
          <CodeBlock code={buttonGroupCode.usage} language="tsx" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">API Reference</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">ButtonGroup Props</h3>
              <CodeBlock code={buttonGroupCode.props} language="tsx" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
                ButtonGroupItem Props
              </h3>
              <CodeBlock code={buttonGroupCode.itemProps} language="tsx" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Basic Usage</h3>
              <CodeBlock code={buttonGroupCode.basic} language="tsx" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Variants</h3>
              <CodeBlock code={buttonGroupCode.variants} language="tsx" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">With Icons</h3>
              <CodeBlock code={buttonGroupCode.withIcons} language="tsx" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Vertical Orientation</h3>
              <CodeBlock code={buttonGroupCode.vertical} language="tsx" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Full Width</h3>
              <CodeBlock code={buttonGroupCode.fullWidth} language="tsx" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Implementation</h2>
          <CodeBlock
            code={buttonGroupImplementation}
            language="tsx"
            title="ButtonGroup.tsx"
          />
        </div>
      </div>
    </div>
  );
}
