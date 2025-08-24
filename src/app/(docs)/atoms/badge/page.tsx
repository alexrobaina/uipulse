import Badge from "@/app/ui/atoms/Badge";
import CodeBlock from "@/app/components/CodeBlock";
import Preview from "@/app/components/Preview";
import Tabs from "@/app/components/Tabs";

const badgeCode = `import Badge from "@/app/ui/atoms/Badge";

export default function Example() {
  return (
    <div className="space-x-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  );
}`;

export default function BadgePage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: (
        <Preview>
          <div className="space-x-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </Preview>
      ),
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={badgeCode} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Badge</h1>
        <p className="text-gray-600">
          Small status indicators and labels with multiple color variants.
        </p>
      </div>

      <Tabs items={tabItems} defaultTab="preview" />
    </div>
  );
}
