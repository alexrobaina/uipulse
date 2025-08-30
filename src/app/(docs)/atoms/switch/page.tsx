import CodeBlock from "@/app/components/CodeBlock";
import Tabs from "@/app/components/Tabs";
import { switchCode } from "./constants/switchCode";
import { switchImplementation } from "./constants/switchImplementation";
import HeaderDescription from "@/app/components/HeaderDescription";
import SwitchDemo from "./components/SwitchDemo";

export default function SwitchPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: <SwitchDemo />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={switchImplementation} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderDescription
        title="Switch"
        description="A toggle switch component for binary choices. Perfect for settings, preferences, and feature toggles with multiple variants and sizes."
      />

      <Tabs items={tabItems} defaultTab="preview" />

      <div className="mb-8 mt-8">
        <CodeBlock
          maxLines={10}
          language="tsx"
          showLineNumbers
          code={switchCode}
          title="Switch Component"
        />
      </div>
    </div>
  );
}