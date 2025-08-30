import CodeBlock from "@/app/components/CodeBlock";
import Tabs from "@/app/components/Tabs";
import { sidebarCode } from "./constants/sidebarCode";
import { sidebarImplementation } from "./constants/sidebarImplementation";
import HeaderDescription from "@/app/components/HeaderDescription";
import SidebarDemo from "./components/SidebarDemo";


export default function SidebarPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: <SidebarDemo />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={sidebarImplementation} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderDescription
        title="Sidebar"
        description="A flexible and responsive sidebar component with support for nested navigation, collapsible states, and multiple variants. Perfect for application layouts and navigation systems."
      />

      <Tabs items={tabItems} defaultTab="preview" />

      <div className="mb-8 mt-8">
        <CodeBlock
          maxLines={20}
          language="tsx"
          showLineNumbers
          code={sidebarCode}
          title="Sidebar Component Usage"
        />
      </div>
    </div>
  );
}
