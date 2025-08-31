export const switchImplementation = `import { useState } from "react";
import Switch from "@/app/ui/atoms/Switch";

export default function SwitchExample() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Basic Switch */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Switch</h3>
        <Switch 
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
          aria-label="Enable feature"
        />
      </div>

      {/* Switch with Label */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Label</h3>
        <div className="flex items-center space-x-3">
          <Switch 
            checked={notifications}
            onCheckedChange={setNotifications}
            aria-label="Enable notifications"
          />
          <label className="text-sm text-neutral-700 dark:text-neutral-300">
            Enable notifications
          </label>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="flex items-center space-x-4">
          <Switch size="sm" defaultChecked />
          <Switch size="md" defaultChecked />
          <Switch size="lg" defaultChecked />
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Variants</h3>
        <div className="flex items-center space-x-4">
          <Switch variant="default" defaultChecked />
          <Switch variant="success" defaultChecked />
          <Switch variant="warning" defaultChecked />
          <Switch variant="error" defaultChecked />
        </div>
      </div>

      {/* Settings Example */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Settings Panel</h3>
        <div className="space-y-3 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Dark Mode</p>
              <p className="text-xs text-neutral-500">Switch to dark theme</p>
            </div>
            <Switch 
              checked={darkMode}
              onCheckedChange={setDarkMode}
              variant="default"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Push Notifications</p>
              <p className="text-xs text-neutral-500">Receive push notifications</p>
            </div>
            <Switch 
              checked={notifications}
              onCheckedChange={setNotifications}
              variant="success"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Auto-save</p>
              <p className="text-xs text-neutral-500">Automatically save changes</p>
            </div>
            <Switch defaultChecked variant="default" />
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Disabled States</h3>
        <div className="flex items-center space-x-4">
          <Switch disabled />
          <Switch disabled defaultChecked />
        </div>
      </div>
    </div>
  );
}`;
