"use client";

import Navbar from "@/app/ui/molecules/Navbar";
import Button from "@/app/ui/atoms/Button";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarDemo() {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <Navbar
        brand="Your Brand"
        items={navItems}
        actions={
          <>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </>
        }
        variant="default"
        size="md"
      />
      <div className="p-6 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          This is the content below the navbar. The navbar is responsive and includes mobile menu support.
        </p>
      </div>
    </div>
  );
}