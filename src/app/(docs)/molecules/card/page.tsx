import Card from "@/app/ui/molecules/Card";
import CodeBlock from "@/app/components/CodeBlock";
import Preview from "@/app/components/Preview";
import Tabs from "@/app/components/Tabs";

const cardCode = `import Card from "@/app/ui/molecules/Card";

export default function Example() {
  return (
    <div className="space-y-4 max-w-md">
      <Card title="Basic Card" description="A simple card with title and description" />
      
      <Card 
        title="Card with Content"
        description="This card has custom content"
      >
        <div className="pt-4">
          <p className="text-gray-600">Custom content goes here</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Action
          </button>
        </div>
      </Card>
    </div>
  );
}`;

export default function CardPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: (
        <Preview>
          <div className="space-y-4 max-w-md">
            <Card
              title="Basic Card"
              description="A simple card with title and description"
            />

            <Card
              title="Card with Content"
              description="This card has custom content"
            >
              <div className="pt-4">
                <p className="text-gray-600">Custom content goes here</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                  Action
                </button>
              </div>
            </Card>
          </div>
        </Preview>
      ),
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={cardCode} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Card</h1>
        <p className="text-gray-600">
          A flexible container component for displaying content in a structured
          format.
        </p>
      </div>

      <Tabs items={tabItems} defaultTab="preview" />
    </div>
  );
}
