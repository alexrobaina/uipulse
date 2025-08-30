export const badgeImplementation = `import Badge from "@/app/ui/atoms/Badge";

export default function BadgeExample() {
  return (
    <div className="space-y-6">
      {/* Basic Usage */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basic Badges</h3>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="purple">Purple</Badge>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Status Indicators</h3>
        <div className="flex gap-2">
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Inactive</Badge>
        </div>
      </div>

      {/* Notification Counts */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Notification Counts</h3>
        <div className="flex gap-2">
          <Badge variant="primary">3</Badge>
          <Badge variant="error">99+</Badge>
          <Badge variant="warning">!</Badge>
        </div>
      </div>

      {/* In Context Usage */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Contextual Usage</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span>User Account</span>
            <Badge variant="success">Verified</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Feature</span>
            <Badge variant="warning">Beta</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>API Status</span>
            <Badge variant="error">Down</Badge>
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <div className="flex gap-2">
          <Badge variant="purple">
            Purple Border
          </Badge>
          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400">
            Custom Pink
          </Badge>
        </div>
      </div>
    </div>
  );
}`;
