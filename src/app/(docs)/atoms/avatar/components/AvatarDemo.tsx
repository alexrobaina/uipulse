import Avatar from "@/app/ui/atoms/Avatar";
import Preview from "@/app/components/Preview";

export default function AvatarDemo() {
  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Usage */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Basic Usage</h3>
          <div className="flex items-center space-x-4">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="John Doe"
              fallback="John Doe"
            />
            <Avatar fallback="Jane Smith" />
            <Avatar fallback="Alex Johnson" />
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sizes</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar size="xs" fallback="John Doe" />
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Extra Small (xs)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar size="sm" fallback="Jane Smith" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Small (sm)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar size="md" fallback="Alex Johnson" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Medium (md) - Default</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar size="lg" fallback="Sarah Wilson" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Large (lg)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar size="xl" fallback="Mike Davis" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Extra Large (xl)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar size="2xl" fallback="Emma Brown" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">2X Large (2xl)</span>
            </div>
          </div>
        </div>

        {/* Different Variants */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Variants</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar 
                variant="circle" 
                fallback="Circle Avatar"
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Circle (Default)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar 
                variant="rounded" 
                fallback="Rounded Avatar"
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Rounded</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar 
                variant="square" 
                fallback="Square Avatar"
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Square</span>
            </div>
          </div>
        </div>

        {/* With Status Indicators */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Status Indicators</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar 
                fallback="Online User" 
                showStatus 
                status="online" 
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Online</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar 
                fallback="Away User" 
                showStatus 
                status="away" 
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Away</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar 
                fallback="Busy User" 
                showStatus 
                status="busy" 
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Busy</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar 
                fallback="Offline User" 
                showStatus 
                status="offline" 
                size="lg"
              />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Offline</span>
            </div>
          </div>
        </div>

        {/* With Images */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">With Images</h3>
          <div className="flex items-center space-x-4">
            <Avatar 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              fallback="John Doe"
              size="lg"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=100&h=100&fit=crop&crop=face"
              fallback="Sarah Wilson"
              size="lg"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
              fallback="Mike Johnson"
              size="lg"
            />
          </div>
        </div>

        {/* Team Members List */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Team Members</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
              <Avatar 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                fallback="John Doe"
                showStatus
                status="online"
              />
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">John Doe</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Product Manager</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
              <Avatar 
                fallback="Jane Smith"
                showStatus
                status="away"
              />
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Jane Smith</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">UX Designer</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
              <Avatar 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=100&h=100&fit=crop&crop=face"
                fallback="Sarah Wilson"
                showStatus
                status="busy"
              />
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sarah Wilson</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar Group */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Avatar Group</h3>
          <div className="flex -space-x-2">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              fallback="User 1"
              className="ring-2 ring-white dark:ring-neutral-900"
              size="md"
            />
            <Avatar 
              fallback="User 2"
              className="ring-2 ring-white dark:ring-neutral-900"
              size="md"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=100&h=100&fit=crop&crop=face"
              fallback="User 3"
              className="ring-2 ring-white dark:ring-neutral-900"
              size="md"
            />
            <Avatar 
              fallback="User 4"
              className="ring-2 ring-white dark:ring-neutral-900"
              size="md"
            />
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 ring-2 ring-white dark:ring-neutral-900 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              +5
            </div>
          </div>
        </div>

        {/* Different Variants with Status */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Variants with Status</h3>
          <div className="flex items-center space-x-4">
            <Avatar 
              variant="circle"
              fallback="Circle"
              showStatus
              status="online"
              size="lg"
            />
            <Avatar 
              variant="rounded"
              fallback="Rounded"
              showStatus
              status="away"
              size="lg"
            />
            <Avatar 
              variant="square"
              fallback="Square"
              showStatus
              status="busy"
              size="lg"
            />
          </div>
        </div>

        {/* Error Handling */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Error Handling</h3>
          <div className="flex items-center space-x-4">
            <Avatar 
              src="invalid-image-url.jpg"
              fallback="Broken Image"
              alt="This will fallback to initials"
            />
            <Avatar 
              fallback="No Image"
              alt="Just initials"
            />
            <Avatar 
              fallback=""
              alt="Empty fallback shows ?"
            />
          </div>
        </div>
      </div>
    </Preview>
  );
}