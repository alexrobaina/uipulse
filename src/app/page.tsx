import Link from "next/link";
import Button from "@/app/ui/atoms/Button";
import Card from "@/app/ui/molecules/Card";
import Badge from "@/app/ui/atoms/Badge";

export default function Home() {
  const components = [
    {
      name: "Button",
      description: "Versatile button component with multiple variants",
      href: "/atoms/button",
      type: "Atom",
    },
    {
      name: "Input",
      description: "Flexible input with labels and error states",
      href: "/atoms/input",
      type: "Atom",
    },
    {
      name: "Badge",
      description: "Status indicators and labels with color variants",
      href: "/atoms/badge",
      type: "Atom",
    },
    {
      name: "Checkbox",
      description: "Interactive checkbox with variants and indeterminate state",
      href: "/atoms/checkbox",
      type: "Atom",
    },
    {
      name: "Card",
      description: "Container for structured content display",
      href: "/molecules/card",
      type: "Molecule",
    },
    {
      name: "Modal",
      description: "Dialog component with backdrop and keyboard support",
      href: "/molecules/modal",
      type: "Molecule",
    },
    {
      name: "Navbar",
      description: "Responsive navigation with mobile menu",
      href: "/molecules/navbar",
      type: "Molecule",
    },
    {
      name: "Sidebar",
      description: "Flexible sidebar with nested navigation",
      href: "/molecules/sidebar",
      type: "Molecule",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50  ">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">UI</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground">UIPulse</h1>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive UI component library built with React, TypeScript,
            and Tailwind CSS. Copy, paste, and customize components for your
            next project.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="primary">React</Badge>
            <Badge variant="success">TypeScript</Badge>
            <Badge variant="default">Tailwind CSS</Badge>
            <Badge variant="default">Copy & Paste</Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo/layout">
              <Button variant="primary">View Live Demo</Button>
            </Link>
            <Link href="/atoms/button">
              <Button variant="outline">Browse Components</Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fast Development
            </h3>
            <p className="text-gray-600">
              Pre-built components that speed up your development process with
              consistent design patterns.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Highly Customizable
            </h3>
            <p className="text-gray-600">
              Easy to customize with Tailwind CSS classes and built-in variant
              support for different use cases.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Accessible
            </h3>
            <p className="text-gray-600">
              Built with accessibility in mind, including keyboard navigation,
              focus management, and ARIA attributes.
            </p>
          </Card>
        </div>

        {/* Components Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Available Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="block group"
              >
                <Card className="p-6 h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {component.name}
                    </h3>
                    <Badge
                      variant={
                        component.type === "Atom" ? "default" : "primary"
                      }
                    >
                      {component.type}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {component.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                    View Documentation
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our component library and see how easy it is to build
              beautiful UIs with UIPulse.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo/layout">
                <Button variant="primary">Try Live Demo</Button>
              </Link>
              <Link href="/atoms/button">
                <Button variant="outline">View Documentation</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
