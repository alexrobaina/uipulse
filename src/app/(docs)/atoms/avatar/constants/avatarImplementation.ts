export const avatarImplementation = `import Avatar from "@/app/ui/atoms/Avatar";

export default function AvatarExample() {
  return (
    <div className="space-y-6">
      {/* Basic Avatar with Image */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Image</h3>
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="John Doe"
          fallback="John Doe"
        />
      </div>

      {/* Fallback Avatar (Initials) */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Fallback with Initials</h3>
        <div className="flex items-center space-x-3">
          <Avatar fallback="John Doe" />
          <Avatar fallback="Jane Smith" />
          <Avatar fallback="Alex Johnson" />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="flex items-center space-x-4">
          <Avatar size="xs" fallback="XS" />
          <Avatar size="sm" fallback="SM" />
          <Avatar size="md" fallback="MD" />
          <Avatar size="lg" fallback="LG" />
          <Avatar size="xl" fallback="XL" />
          <Avatar size="2xl" fallback="2XL" />
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Variants</h3>
        <div className="flex items-center space-x-4">
          <Avatar variant="circle" fallback="Circle" />
          <Avatar variant="rounded" fallback="Rounded" />
          <Avatar variant="square" fallback="Square" />
        </div>
      </div>

      {/* With Status Indicators */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">With Status</h3>
        <div className="flex items-center space-x-4">
          <Avatar 
            fallback="Online User" 
            showStatus 
            status="online" 
            size="lg"
          />
          <Avatar 
            fallback="Away User" 
            showStatus 
            status="away" 
            size="lg"
          />
          <Avatar 
            fallback="Busy User" 
            showStatus 
            status="busy" 
            size="lg"
          />
          <Avatar 
            fallback="Offline User" 
            showStatus 
            status="offline" 
            size="lg"
          />
        </div>
      </div>

      {/* Team/User List Example */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Team Members</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Avatar 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              fallback="John Doe"
              showStatus
              status="online"
            />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-neutral-500">Product Manager</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Avatar 
              fallback="Jane Smith"
              showStatus
              status="away"
            />
            <div>
              <p className="text-sm font-medium">Jane Smith</p>
              <p className="text-xs text-neutral-500">UX Designer</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=100&h=100&fit=crop&crop=face"
              fallback="Sarah Wilson"
              showStatus
              status="busy"
            />
            <div>
              <p className="text-sm font-medium">Sarah Wilson</p>
              <p className="text-xs text-neutral-500">Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Avatar Group</h3>
        <div className="flex -space-x-2">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            fallback="User 1"
            className="ring-2 ring-white dark:ring-neutral-900"
          />
          <Avatar 
            fallback="User 2"
            className="ring-2 ring-white dark:ring-neutral-900"
          />
          <Avatar 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=100&h=100&fit=crop&crop=face"
            fallback="User 3"
            className="ring-2 ring-white dark:ring-neutral-900"
          />
          <Avatar 
            fallback="+2"
            className="ring-2 ring-white dark:ring-neutral-900 bg-neutral-300 dark:bg-neutral-600"
          />
        </div>
      </div>
    </div>
  );
}`;