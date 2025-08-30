import CodeBlock from "@/app/components/CodeBlock";
import Tabs from "@/app/components/Tabs";
import { alertCode } from "./constants/alertCode";
import { alertImplementation } from "./constants/alertImplementation";
import HeaderDescription from "@/app/components/HeaderDescription";
import AlertDemo from "./components/AlertDemo";

export default function AlertPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: <AlertDemo />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={alertImplementation} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderDescription
        title="Alert"
        description="Display important messages, notifications, and feedback to users with various severity levels and interactive features."
      />

      <Tabs items={tabItems} defaultTab="preview" />

      <div className="mb-8 mt-8">
        <CodeBlock
          maxLines={10}
          language="tsx"
          showLineNumbers
          code={alertCode}
          title="Alert Component"
        />
      </div>
    </div>
  );
}
