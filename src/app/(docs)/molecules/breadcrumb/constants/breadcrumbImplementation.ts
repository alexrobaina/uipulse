export const breadcrumbImplementation = `import Breadcrumb from "@/app/ui/molecules/Breadcrumb";
import { Home, Folder } from "lucide-react";

export default function BreadcrumbExample() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "Breadcrumb", current: true },
  ];

  return (
    <div className="space-y-6">
      {/* Basic breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* With home icon */}
      <Breadcrumb items={breadcrumbItems} showHomeIcon />

      {/* Custom separator */}
      <Breadcrumb
        items={breadcrumbItems}
        separator={<Folder className="w-3 h-3" />}
        showHomeIcon
      />

      {/* Read-only breadcrumb (no links) */}
      <Breadcrumb
        items={[
          { label: "Admin Panel" },
          { label: "Settings" },
          { label: "Security", current: true },
        ]}
      />
    </div>
  );
}`;
