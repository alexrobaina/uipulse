export const tabImplementation = `import Tab from "@/app/ui/molecules/Tab";
import { User, Settings, Bell, FileText, Image, Video } from "lucide-react";

export default function TabExample() {
  const profileTabs = [
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-4 h-4" />,
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Manage your profile settings and personal information.
          </p>
        </div>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Configure your account preferences and security options.
          </p>
        </div>
      ),
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="w-4 h-4" />,
      badge: "3",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Manage your notification preferences and alerts.
          </p>
        </div>
      ),
    },
  ];

  const mediaTabs = [
    {
      id: "documents",
      label: "Documents",
      icon: <FileText className="w-4 h-4" />,
      badge: 12,
      content: (
        <div className="p-4">
          <h3 className="font-semibold">Document Library</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Your uploaded documents and files.
          </p>
        </div>
      ),
    },
    {
      id: "images",
      label: "Images",
      icon: <Image className="w-4 h-4" />,
      badge: 24,
      content: (
        <div className="p-4">
          <h3 className="font-semibold">Image Gallery</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Browse and manage your images.
          </p>
        </div>
      ),
    },
    {
      id: "videos",
      label: "Videos",
      icon: <Video className="w-4 h-4" />,
      badge: 8,
      content: (
        <div className="p-4">
          <h3 className="font-semibold">Video Collection</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Your video files and media.
          </p>
        </div>
      ),
    },
  ];

  const simpleTabs = [
    {
      id: "tab1",
      label: "Overview",
      content: <div className="p-4">Overview content goes here...</div>,
    },
    {
      id: "tab2",
      label: "Details",
      content: <div className="p-4">Detailed information...</div>,
    },
    {
      id: "tab3",
      label: "Advanced",
      disabled: true,
      content: <div className="p-4">Advanced settings...</div>,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Default variant */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Tabs</h3>
        <Tab items={profileTabs} defaultTab="profile" />
      </div>

      {/* Pills variant */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Pills Variant</h3>
        <Tab items={mediaTabs} variant="pills" size="sm" />
      </div>

      {/* Underline variant */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Underline Variant</h3>
        <Tab items={simpleTabs} variant="underline" />
      </div>

      {/* Full width */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Full Width</h3>
        <Tab 
          items={profileTabs.slice(0, 2)} 
          variant="pills" 
          fullWidth 
          size="lg"
        />
      </div>
    </div>
  );
}`;
