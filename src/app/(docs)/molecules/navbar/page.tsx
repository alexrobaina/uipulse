import Navbar from "@/app/ui/molecules/Navbar";
import CodeBlock from "@/app/components/CodeBlock";
import Preview from "@/app/components/Preview";
import Tabs from "@/app/components/Tabs";

const navbarCode = `import Navbar from "@/app/ui/molecules/Navbar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Example() {
  return (
    <Navbar 
      brand="Brand"
      items={navItems}
    />
  );
}`;

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: (
        <Preview centered={false}>
          <Navbar brand="Brand" items={navItems} />
        </Preview>
      ),
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={navbarCode} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Navbar</h1>
        <p className="text-gray-600">
          A responsive navigation bar component with brand and navigation items.
        </p>
      </div>

      <Tabs items={tabItems} defaultTab="preview" />
    </div>
  );
}
