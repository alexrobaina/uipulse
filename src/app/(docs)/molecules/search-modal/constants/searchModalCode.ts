export const searchModalCode = `"use client";

import React, { useState, useEffect } from "react";
import { Search, FileText, Hash, ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const searchModalVariants = cva([
  "fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh]",
  "bg-black/80 backdrop-blur-sm",
  "transition-all duration-300 ease-out",
  "animate-in fade-in-0",
]);

const searchContentVariants = cva([
  "relative w-full max-w-2xl max-h-[80vh]",
  "bg-white dark:bg-neutral-900",
  "border border-neutral-200/50 dark:border-neutral-800/50",
  "rounded-xl shadow-2xl",
  "transition-all duration-300 ease-out",
  "animate-in zoom-in-95 fade-in-0 slide-in-from-top-4",
  "focus:outline-none",
  "overflow-hidden",
]);

const searchInputVariants = cva([
  "w-full border-0 bg-transparent px-6 py-4",
  "text-lg placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
  "focus:outline-none focus:ring-0",
  "text-neutral-900 dark:text-neutral-100",
]);

const searchListVariants = cva([
  "max-h-96 overflow-y-auto p-2",
  "border-t border-neutral-100 dark:border-neutral-800",
]);

const searchItemVariants = cva([
  "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer",
  "text-sm transition-colors duration-150",
  "hover:bg-neutral-100 dark:hover:bg-neutral-800",
  "focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none",
  "aria-selected:bg-blue-50 dark:aria-selected:bg-blue-950",
  "aria-selected:text-blue-900 dark:aria-selected:text-blue-100",
]);

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  type: "component" | "page" | "section";
  url: string;
  icon?: React.ReactNode;
}

interface SearchModalProps extends VariantProps<typeof searchContentVariants> {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (url: string) => void;
  placeholder?: string;
  searchResults?: SearchResult[];
  className?: string;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  placeholder = "Search documentation...",
  searchResults = [],
  className,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredResults(searchResults);
    } else {
      const filtered = searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    }
    setSelectedIndex(0);
  }, [searchQuery, searchResults]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredResults.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredResults[selectedIndex]) {
            handleSelect(filteredResults[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  const handleSelect = (result: SearchResult) => {
    onNavigate?.(result.url);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={searchModalVariants()} onClick={handleOverlayClick}>
      <div className={cn(searchContentVariants(), className)} {...props}>
        <div className="flex items-center border-b border-neutral-100 dark:border-neutral-800">
          <Search className="w-5 h-5 text-neutral-400 dark:text-neutral-500 ml-4" />
          <input
            className={searchInputVariants()}
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        <div className={searchListVariants()}>
          {filteredResults.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-neutral-500 dark:text-neutral-400">
              <Search className="w-8 h-8 mb-2 text-neutral-300 dark:text-neutral-600" />
              <p className="text-sm">No results found</p>
              <p className="text-xs mt-1">Try searching for components, pages, or sections</p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredResults.map((result, index) => (
                <div
                  key={result.id}
                  className={cn(
                    searchItemVariants(),
                    index === selectedIndex && "bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100"
                  )}
                  onClick={() => handleSelect(result)}
                  role="option"
                  aria-selected={index === selectedIndex}
                  tabIndex={-1}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {result.icon}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{result.title}</div>
                      {result.description && (
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                          {result.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;`;
