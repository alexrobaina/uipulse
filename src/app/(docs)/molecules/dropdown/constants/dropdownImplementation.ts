export const dropdownImplementation = `import Dropdown from "@/app/ui/molecules/Dropdown";
import { User, Settings, Mail, Globe, Star } from "lucide-react";
import { useState } from "react";

export default function DropdownExample() {
  const [selectedCountry, setSelectedCountry] = useState<string | number>("");
  const [selectedUser, setSelectedUser] = useState<string | number>("");

  const countries = [
    { id: 1, label: "United States", value: "us", icon: <Globe className="w-4 h-4" /> },
    { id: 2, label: "Canada", value: "ca", icon: <Globe className="w-4 h-4" /> },
    { id: 3, label: "United Kingdom", value: "uk", icon: <Globe className="w-4 h-4" /> },
    { id: 4, label: "Germany", value: "de", icon: <Globe className="w-4 h-4" /> },
    { id: 5, label: "France", value: "fr", icon: <Globe className="w-4 h-4" /> },
    { id: 6, label: "Japan", value: "jp", icon: <Globe className="w-4 h-4" /> },
  ];

  const users = [
    { id: 1, label: "John Smith", value: "john", icon: <User className="w-4 h-4" /> },
    { id: 2, label: "Sarah Johnson", value: "sarah", icon: <User className="w-4 h-4" /> },
    { id: 3, label: "Mike Wilson", value: "mike", disabled: true, icon: <User className="w-4 h-4" /> },
    { id: 4, label: "Emma Davis", value: "emma", icon: <User className="w-4 h-4" /> },
    { id: 5, label: "Alex Brown", value: "alex", icon: <User className="w-4 h-4" /> },
  ];

  const categories = [
    { id: 1, label: "Technology", value: "tech" },
    { id: 2, label: "Design", value: "design" },
    { id: 3, label: "Marketing", value: "marketing" },
    { id: 4, label: "Sales", value: "sales" },
    { id: 5, label: "Support", value: "support" },
  ];

  return (
    <div className="space-y-8 max-w-md">
      {/* Basic dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Select Country
        </label>
        <Dropdown
          items={countries}
          value={selectedCountry}
          placeholder="Choose a country"
          onSelectionChange={setSelectedCountry}
        />
      </div>

      {/* Searchable dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Select User (Searchable)
        </label>
        <Dropdown
          items={users}
          value={selectedUser}
          placeholder="Choose a user"
          searchable
          onSelectionChange={setSelectedUser}
        />
      </div>

      {/* Simple dropdown without icons */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Select Category
        </label>
        <Dropdown
          items={categories}
          placeholder="Choose a category"
        />
      </div>

      {/* Disabled dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Disabled Dropdown
        </label>
        <Dropdown
          items={categories}
          placeholder="This is disabled"
          disabled
        />
      </div>

      {/* Pre-selected value */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Pre-selected Value
        </label>
        <Dropdown
          items={countries}
          value="us"
          placeholder="Select country"
        />
      </div>
    </div>
  );
}`;
