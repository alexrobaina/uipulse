import { ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export default function Preview({
  children,
  className = "",
  centered = true,
}: PreviewProps) {
  return (
    <div
      className={`border border-border rounded-lg bg-card text-card-foreground p-8 ${className}`}
    >
      <div
        className={`w-full ${
          centered ? "flex items-center justify-center min-h-[200px]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
