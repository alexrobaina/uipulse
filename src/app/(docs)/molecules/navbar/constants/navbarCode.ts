export const navbarCode = `import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarLink,
  NavbarActions,
} from "@/app/ui/molecules/Navbar";
import Button from "@/app/ui/atoms/Button";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Example() {
  return (
    <Navbar
      brand="Your Brand"
      items={navItems}
      actions={
        <>
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </>
      }
      sticky
      variant="default"
    />
  );
}

// Or use individual components for more control
export function CustomNavbar() {
  return (
    <Navbar variant="floating" sticky maxWidth="2xl">
      <NavbarBrand href="/">
        <Logo />
        <span>Your Brand</span>
      </NavbarBrand>
      
      <NavbarMenu>
        <NavbarLink href="/" active>Home</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/products">Products</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarMenu>
      
      <NavbarActions>
        <ThemeToggle />
        <Button variant="ghost" size="sm">Sign In</Button>
        <Button size="sm">Get Started</Button>
      </NavbarActions>
    </Navbar>
  );
}`;
