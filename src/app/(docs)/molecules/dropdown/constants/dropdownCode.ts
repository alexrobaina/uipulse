export const dropdownCode = `import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";

interface DropdownItem {
  id: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface DropdownProps {
  items: DropdownItem[];
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  onSelectionChange?: (value: string | number, item: DropdownItem) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  value,
  placeholder = "Select an option",
  disabled = false,
  searchable = false,
  onSelectionChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find(item => item.value === selectedValue);
  
  const filteredItems = searchable
    ? items.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: DropdownItem) => {
    if (item.disabled) return;
    
    setSelectedValue(item.value);
    setIsOpen(false);
    setSearchTerm("");
    onSelectionChange?.(item.value, item);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={cn("relative w-full", className)} ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 text-left bg-white border border-neutral-300 rounded-lg shadow-sm",
          "flex items-center justify-between",
          "text-sm text-neutral-900",
          "hover:border-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "transition-colors duration-150",
          "dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100",
          "dark:hover:border-neutral-600 dark:focus:border-blue-400 dark:focus:ring-blue-400/20",
          disabled && "opacity-50 cursor-not-allowed",
          isOpen && "border-blue-500 ring-2 ring-blue-500/20 dark:border-blue-400 dark:ring-blue-400/20"
        )}
      >
        <div className="flex items-center gap-2">
          {selectedItem?.icon}
          <span className={cn(
            selectedItem ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400"
          )}>
            {selectedItem ? selectedItem.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-neutral-500 transition-transform duration-150",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={cn(
          "absolute z-50 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg",
          "dark:bg-neutral-900 dark:border-neutral-700",
          "max-h-60 overflow-auto"
        )}>
          {searchable && (
            <div className="p-2 border-b border-neutral-200 dark:border-neutral-700">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={cn(
                  "w-full px-2 py-1 text-sm bg-transparent",
                  "border border-neutral-300 dark:border-neutral-600 rounded",
                  "focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20",
                  "dark:focus:border-blue-400 dark:focus:ring-blue-400/20",
                  "text-neutral-900 dark:text-neutral-100",
                  "placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
                )}
              />
            </div>
          )}
          
          <div className="py-1">
            {filteredItems.length === 0 ? (
              <div className="px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400">
                No options found
              </div>
            ) : (
              filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  disabled={item.disabled}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm",
                    "flex items-center justify-between",
                    "hover:bg-neutral-50 dark:hover:bg-neutral-800",
                    "text-neutral-900 dark:text-neutral-100",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    selectedValue === item.value && "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {selectedValue === item.value && (
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;`;
