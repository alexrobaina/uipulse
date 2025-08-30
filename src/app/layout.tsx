import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLayout from "@/app/components/AppLayout";
import { SidebarNavItem } from "@/app/ui/molecules/Sidebar";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Home, Atom, Layers3, Eye } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIPulse - React Component Library",
  description:
    "A comprehensive UI component library built with React, TypeScript, and Tailwind CSS",
};

// Navigation configuration
const navigationItems: SidebarNavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "Demo",
    icon: <Eye className="w-5 h-5" />,
    items: [
      { title: "Layout", href: "/demo/layout" },
      { title: "Theme Test", href: "/demo/theme-test" },
    ],
  },
  {
    title: "Components",
    className: "text-foreground font-medium",
  },
  {
    title: "Atoms",
    icon: <Atom className="w-5 h-5" />,
    items: [
      { title: "Alert", href: "/atoms/alert" },
      { title: "Avatar", href: "/atoms/avatar" },
      { title: "Badge", href: "/atoms/badge" },
      { title: "Button", href: "/atoms/button" },
      { title: "Checkbox", href: "/atoms/checkbox" },
      { title: "Input", href: "/atoms/input" },
      { title: "Progress", href: "/atoms/progress" },
      { title: "Switch", href: "/atoms/switch" },
    ],
  },
  {
    title: "Molecules",
    icon: <Layers3 className="w-5 h-5" />,
    items: [
      { title: "ButtonGroup", href: "/molecules/button-group" },
      { title: "Card", href: "/molecules/card" },
      { title: "Modal", href: "/molecules/modal" },
      { title: "Navbar", href: "/molecules/navbar" },
      { title: "Sidebar", href: "/molecules/sidebar" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppLayout
            showNavbar
            user={{
              name: "John Doe",
              avatar:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              email: "john.doe@example.com",
            }}
            navigation={navigationItems}
            brand={
              <div className="flex items-center space-x-2 gap-4">
                <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">
                    UI
                  </span>
                </div>
                <span className="font-bold text-lg text-foreground">
                  UIPulse
                </span>
              </div>
            }
            sidebarVariant="default"
          >
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
