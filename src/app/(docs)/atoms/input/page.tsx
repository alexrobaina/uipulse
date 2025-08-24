import Input from "@/app/ui/atoms/Input";
import CodeBlock from "@/app/components/CodeBlock";
import Preview from "@/app/components/Preview";
import Tabs from "@/app/components/Tabs";

const inputCode = `import Input from "@/app/ui/atoms/Input";

export default function Example() {
  return (
    <div className="space-y-4 max-w-md">
      <Input placeholder="Default input" />
      <Input placeholder="With label" label="Email" />
      <Input placeholder="Error state" error="This field is required" />
      <Input placeholder="Disabled" disabled />
    </div>
  );
}`;

export default function InputPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: (
        <Preview>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Default input" />
            <Input placeholder="With label" label="Email" />
            <Input placeholder="Error state" error="This field is required" />
            <Input placeholder="Disabled" disabled />
          </div>
        </Preview>
      ),
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={inputCode} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Input</h1>
        <p className="text-gray-600">
          A flexible input component with support for labels, errors, and
          various states.
        </p>
      </div>

      <Tabs items={tabItems} defaultTab="preview" />
    </div>
  );
}
