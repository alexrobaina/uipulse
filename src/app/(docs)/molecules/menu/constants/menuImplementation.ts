export const menuImplementation = `import Menu from "@/app/ui/molecules/Menu";
import Button from "@/app/ui/atoms/Button";
import { MoreHorizontal, Settings, User, LogOut, Bell, Edit, Trash2, Copy } from "lucide-react";

export default function MenuExample() {
  const profileMenuItems = [
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-4 h-4" />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
      shortcut: "⌘,",
      onClick: () => console.log("Settings clicked"),
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="w-4 h-4" />,
      onClick: () => console.log("Notifications clicked"),
    },
    {
      id: "divider1",
      type: "divider" as const,
    },
    {
      id: "logout",
      label: "Log out",
      icon: <LogOut className="w-4 h-4" />,
      shortcut: "⇧⌘Q",
      onClick: () => console.log("Logout clicked"),
    },
  ];

  const actionMenuItems = [
    {
      id: "edit",
      label: "Edit",
      icon: <Edit className="w-4 h-4" />,
      shortcut: "⌘E",
      onClick: () => console.log("Edit clicked"),
    },
    {
      id: "copy",
      label: "Copy",
      icon: <Copy className="w-4 h-4" />,
      shortcut: "⌘C",
      onClick: () => console.log("Copy clicked"),
    },
    {
      id: "divider1",
      type: "divider" as const,
    },
    {
      id: "delete",
      label: "Delete",
      icon: <Trash2 className="w-4 h-4" />,
      shortcut: "⌘⌫",
      onClick: () => console.log("Delete clicked"),
    },
  ];

  const contextMenuItems = [
    {
      id: "view",
      label: "View Options",
      type: "submenu" as const,
      children: [
        {
          id: "list",
          label: "List View",
          checked: true,
          onClick: () => console.log("List view"),
        },
        {
          id: "grid",
          label: "Grid View",
          onClick: () => console.log("Grid view"),
        },
        {
          id: "card",
          label: "Card View",
          onClick: () => console.log("Card view"),
        },
      ],
    },
    {
      id: "sort",
      label: "Sort By",
      type: "submenu" as const,
      children: [
        {
          id: "name",
          label: "Name",
          onClick: () => console.log("Sort by name"),
        },
        {
          id: "date",
          label: "Date Modified",
          checked: true,
          onClick: () => console.log("Sort by date"),
        },
        {
          id: "size",
          label: "Size",
          onClick: () => console.log("Sort by size"),
        },
      ],
    },
    {
      id: "divider1",
      type: "divider" as const,
    },
    {
      id: "refresh",
      label: "Refresh",
      shortcut: "⌘R",
      onClick: () => console.log("Refresh clicked"),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Profile menu */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Profile Menu</h3>
        <Menu
          items={profileMenuItems}
          trigger={
            <Button variant="outline" size="sm">
              Profile Menu
            </Button>
          }
        />
      </div>

      {/* Action menu with icons */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Action Menu</h3>
        <Menu
          items={actionMenuItems}
          trigger={
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          }
          placement="bottom-end"
        />
      </div>

      {/* Context menu with submenus */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Context Menu with Submenus</h3>
        <Menu
          items={contextMenuItems}
          trigger={
            <Button variant="secondary">
              Right-click Options
            </Button>
          }
        />
      </div>
    </div>
  );
}`;
