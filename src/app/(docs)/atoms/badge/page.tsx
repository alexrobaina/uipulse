import CodeBlock from "@/app/components/CodeBlock";
import Tabs from "@/app/components/Tabs";
import { badgeCode } from "./constants/badgeCode";
import { badgeImplementation } from "./constants/badgeImplementation";
import HeaderDescription from "@/app/components/HeaderDescription";
import BadgeDemo from "./components/BadgeDemo";

export default function BadgePage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: <BadgeDemo />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={badgeImplementation} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderDescription
        title="Badge"
        description="Small status indicators and labels for displaying notifications, statuses, and categories with multiple color variants."
      />

      <Tabs items={tabItems} defaultTab="preview" />

      <div className="mb-8 mt-8">
        <CodeBlock
          maxLines={10}
          language="tsx"
          showLineNumbers
          code={badgeCode}
          title="Badge Component"
        />
      </div>
    </div>
  );
}
