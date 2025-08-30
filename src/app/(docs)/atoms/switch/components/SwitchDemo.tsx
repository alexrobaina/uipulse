"use client";

import { useState } from "react";
import Switch from "@/app/ui/atoms/Switch";
import Preview from "@/app/components/Preview";

export default function SwitchDemo() {
  const [basicSwitch, setBasicSwitch] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Usage */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Basic Usage</h3>
          <div className="flex items-center space-x-4">
            <Switch 
              checked={basicSwitch}
              onCheckedChange={setBasicSwitch}
              aria-label="Basic switch"
            />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {basicSwitch ? "Enabled" : "Disabled"}
            </span>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sizes</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Switch size="sm" defaultChecked aria-label="Small switch" />
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Small</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch size="md" defaultChecked aria-label="Medium switch" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Medium (Default)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch size="lg" defaultChecked aria-label="Large switch" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Large</span>
            </div>
          </div>
        </div>

        {/* Different Variants */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Variants</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Switch variant="default" defaultChecked aria-label="Default variant" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Default</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch variant="success" defaultChecked aria-label="Success variant" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Success</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch variant="warning" defaultChecked aria-label="Warning variant" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Warning</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch variant="error" defaultChecked aria-label="Error variant" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Error</span>
            </div>
          </div>
        </div>

        {/* With Labels */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">With Labels</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Notifications</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Receive push notifications</p>
              </div>
              <Switch 
                checked={notifications}
                onCheckedChange={setNotifications}
                variant="success"
                aria-label="Toggle notifications"
              />
            </div>

            <div className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Dark Mode</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Switch to dark theme</p>
              </div>
              <Switch 
                checked={darkMode}
                onCheckedChange={setDarkMode}
                variant="default"
                aria-label="Toggle dark mode"
              />
            </div>

            <div className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Auto-save</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Automatically save changes</p>
              </div>
              <Switch 
                checked={autoSave}
                onCheckedChange={setAutoSave}
                variant="default"
                aria-label="Toggle auto-save"
              />
            </div>
          </div>
        </div>

        {/* Settings Panel Example */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Settings Panel</h3>
          <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg space-y-4">
            <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Preferences</h4>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Email Alerts</span>
              <Switch 
                checked={emailAlerts}
                onCheckedChange={setEmailAlerts}
                variant="default"
                size="sm"
                aria-label="Toggle email alerts"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Push Notifications</span>
              <Switch 
                checked={notifications}
                onCheckedChange={setNotifications}
                variant="success"
                size="sm"
                aria-label="Toggle push notifications"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Two-Factor Auth</span>
              <Switch 
                defaultChecked
                variant="error"
                size="sm"
                aria-label="Toggle two-factor authentication"
              />
            </div>
          </div>
        </div>

        {/* Disabled States */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Disabled States</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Switch disabled aria-label="Disabled switch off" />
              <span className="text-sm text-neutral-400">Disabled (Off)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch disabled defaultChecked aria-label="Disabled switch on" />
              <span className="text-sm text-neutral-400">Disabled (On)</span>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Interactive Example</h3>
          <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Feature Toggle</h4>
              <Switch 
                checked={basicSwitch}
                onCheckedChange={setBasicSwitch}
                variant="success"
                aria-label="Toggle feature"
              />
            </div>
            <div className={`text-sm p-3 rounded ${basicSwitch 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
              : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
            }`}>
              {basicSwitch 
                ? "✓ Feature is enabled and active" 
                : "○ Feature is disabled"
              }
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}