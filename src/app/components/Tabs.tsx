"use client";

import { useState, ReactNode } from "react";

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export default function Tabs({ items, defaultTab, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      <div className="border-b border-border">
        <nav className="-mb-px flex space-x-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === item.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">{activeContent}</div>
    </div>
  );
}
