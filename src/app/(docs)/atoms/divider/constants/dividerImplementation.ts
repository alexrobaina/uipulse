export const dividerImplementation = `import Divider from "@/app/ui/atoms/Divider";

export default function DividerExample() {
  return (
    <div className="space-y-6">
      {/* Basic horizontal divider */}
      <div>
        <h3>Section 1</h3>
        <Divider />
        <p>Content separated by a divider</p>
      </div>

      {/* Divider with label */}
      <div>
        <div>Login with email</div>
        <Divider label="OR" spacing="lg" />
        <div>Social login options</div>
      </div>

      {/* Different thicknesses */}
      <div className="space-y-4">
        <Divider thickness="thin" />
        <Divider thickness="medium" />
        <Divider thickness="thick" />
      </div>

      {/* Different styles */}
      <div className="space-y-4">
        <Divider variant="solid" thickness="medium" />
        <Divider variant="dashed" thickness="medium" />
        <Divider variant="dotted" thickness="medium" />
      </div>

      {/* Vertical dividers */}
      <div className="flex items-center gap-4 h-12">
        <span>Item 1</span>
        <Divider orientation="vertical" spacing="none" />
        <span>Item 2</span>
        <Divider orientation="vertical" thickness="medium" spacing="none" />
        <span>Item 3</span>
      </div>
    </div>
  );
}`;
