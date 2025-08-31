export const navigationMenuImplementation = `import NavigationMenu, { NavigationMenuItem } from "@/app/ui/molecules/NavigationMenu";

export default function NavigationMenuExample() {
  const menuItems: NavigationMenuItem[] = [
    {
      id: "products",
      label: "Products",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      children: [
        {
          id: "uipulse-pro",
          label: "UIpulse Pro",
          description: "Professional component library with advanced features",
          badge: "Popular",
        },
        {
          id: "uipulse-enterprise",
          label: "UIpulse Enterprise",
          description: "Complete design system solution for large teams",
          badge: "New",
        },
        {
          id: "templates",
          label: "Templates",
          description: "Pre-built templates and starter kits",
        },
      ],
    },
    {
      id: "solutions",
      label: "Solutions",
      children: [
        {
          id: "startups",
          label: "For Startups",
          description: "Fast-track your MVP with our component library",
        },
        {
          id: "enterprise",
          label: "For Enterprise", 
          description: "Scalable design system for large organizations",
        },
        {
          id: "agencies",
          label: "For Agencies",
          description: "Streamline client projects with consistent components",
        },
      ],
    },
    {
      id: "pricing",
      label: "Pricing",
      href: "/pricing",
    },
    {
      id: "support",
      label: "Support",
      children: [
        {
          id: "help-center",
          label: "Help Center",
          description: "Find answers to common questions",
        },
        {
          id: "contact",
          label: "Contact Us",
          description: "Get in touch with our support team",
        },
      ],
    },
  ];

  const sidebarItems: NavigationMenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      ),
      active: true,
    },
    {
      id: "projects",
      label: "Projects",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badge: 12,
      children: [
        {
          id: "my-projects",
          label: "My Projects",
        },
        {
          id: "shared-projects",
          label: "Shared Projects",
        },
        {
          id: "archived-projects",
          label: "Archived Projects",
        },
      ],
    },
    {
      id: "team",
      label: "Team",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      children: [
        { id: "members", label: "Members", badge: "8" },
        { id: "invitations", label: "Invitations", badge: "2" },
        { id: "permissions", label: "Permissions" },
      ],
    },
  ];

  const handleItemClick = (item: NavigationMenuItem) => {
    console.log("Clicked item:", item.label);
    // Handle navigation or other actions
  };

  return (
    <div className="space-y-8">
      {/* Horizontal Navigation */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Horizontal Navigation</h3>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
          <NavigationMenu
            items={menuItems}
            orientation="horizontal"
            variant="modern"
            onItemClick={handleItemClick}
          />
        </div>
      </div>

      {/* Vertical Sidebar */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Vertical Sidebar</h3>
        <div className="flex">
          <div className="w-64 bg-white dark:bg-neutral-900 border rounded-lg p-4">
            <NavigationMenu
              items={sidebarItems}
              orientation="vertical"
              variant="modern"
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Different Variants</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-medium text-neutral-500 mb-2">Default</h4>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
              <NavigationMenu
                items={menuItems.slice(0, 3)}
                variant="default"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-neutral-500 mb-2">Modern</h4>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
              <NavigationMenu
                items={menuItems.slice(0, 3)}
                variant="modern"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-neutral-500 mb-2">Minimal</h4>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
              <NavigationMenu
                items={menuItems.slice(0, 3)}
                variant="minimal"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Click Trigger */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Click Trigger Mode</h3>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
          <NavigationMenu
            items={[
              {
                id: "file",
                label: "File",
                children: [
                  { id: "new", label: "New", badge: "Ctrl+N" },
                  { id: "open", label: "Open", badge: "Ctrl+O" },
                  { id: "save", label: "Save", badge: "Ctrl+S" },
                ],
              },
              {
                id: "edit",
                label: "Edit",
                children: [
                  { id: "undo", label: "Undo", badge: "Ctrl+Z" },
                  { id: "redo", label: "Redo", badge: "Ctrl+Y" },
                ],
              },
            ]}
            trigger="click"
            variant="minimal"
          />
        </div>
      </div>

      {/* Without Icons */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Without Icons</h3>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
          <NavigationMenu
            items={menuItems}
            variant="modern"
            showIcons={false}
          />
        </div>
      </div>

      {/* Custom Close Delay */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Custom Close Delay (500ms)</h3>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
          <NavigationMenu
            items={menuItems}
            variant="modern"
            closeDelay={500}
          />
        </div>
      </div>
    </div>
  );
}`;
