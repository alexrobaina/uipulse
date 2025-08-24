"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "tsx",
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div
      className={`relative bg-neutral-900 dark:bg-neutral-800 rounded-lg overflow-hidden border border-border ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 dark:bg-neutral-700 border-b border-border">
        <span className="text-sm text-neutral-300 dark:text-neutral-200 font-mono">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="text-sm text-neutral-300 dark:text-neutral-200 hover:text-neutral-100 transition-colors duration-200 px-2 py-1 rounded bg-neutral-700 dark:bg-neutral-600 hover:bg-neutral-600 dark:hover:bg-neutral-500"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-neutral-100 dark:text-neutral-50 font-mono whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
