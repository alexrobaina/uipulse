# 🚀 UIPulse - React Component Library

<div align="center">

![UIPulse Logo](https://via.placeholder.com/150x150?text=UI+Pulse&color=3B82F6&background=F8FAFC)

**A comprehensive UI component library built with React, TypeScript, and Tailwind CSS**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

[🌟 View Live Demo](https://uipulse.com) • [📚 Documentation](https://uipulse.com/atoms/button) • [🐛 Report Bug](https://github.com/alexrobaina/uipulse/issues) • [💡 Request Feature](https://github.com/alexrobaina/uipulse/issues)

</div>

---

## ✨ What is UIPulse?

UIPulse is a modern, production-ready component library that follows **Atomic Design principles** and provides **35 carefully crafted components** for building beautiful, accessible, and responsive web applications. Inspired by the elegant designs of **Vercel UI** and **GitHub**, UIPulse combines best practices with developer experience.

### 🎯 Key Features

- 🎨 **35 Production-Ready Components** - Atoms and Molecules following atomic design
- 🔧 **Copy & Paste Ready** - No dependencies, just pure self-contained components
- 🌙 **Dark Mode Support** - Built-in theme switching with next-themes
- ♿ **Accessibility First** - WCAG compliant with proper ARIA attributes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔧 **TypeScript Native** - Full type safety and IntelliSense support
- 🎭 **Customizable** - Easy to customize and extend with your design system
- ⚡ **Performance Optimized** - Lightweight and fast with excellent Core Web Vitals

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- React 18+
- TypeScript (recommended)
- Tailwind CSS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexrobaina/uipulse.git
   cd uipulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Using Components

Simply copy the component folder into your project. Each component is self-contained with no external dependencies except for Tailwind CSS and Lucide React icons.

```typescript
import Button from '@/components/ui/atoms/Button';
import Card from '@/components/ui/molecules/Card';

function MyApp() {
  return (
    <Card className="p-6">
      <h1>Welcome to UIPulse</h1>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </Card>
  );
}
```

## 📦 Component Library

### 🔬 Atoms (12 Components)
Small, reusable building blocks that serve as the foundation of your UI.

| Component | Description | Status |
|-----------|-------------|--------|
| **Alert** | Status messages and notifications | ✅ Ready |
| **Avatar** | User profile pictures and placeholders | ✅ Ready |
| **Badge** | Status indicators and labels | ✅ Ready |
| **Button** | Interactive buttons with variants | ✅ Ready |
| **Checkbox** | Selection controls with states | ✅ Ready |
| **Divider** | Content separators and spacers | ✅ Ready |
| **Input** | Text input with validation | ✅ Ready |
| **Progress** | Progress indicators and loading bars | ✅ Ready |
| **Show More** | Expandable content sections | ✅ Ready |
| **Spinner** | Loading spinners and indicators | ✅ Ready |
| **Switch** | Toggle switches and controls | ✅ Ready |
| **Tooltip** | Contextual information popups | ✅ Ready |

### 🧬 Molecules (23 Components)
More complex components built by combining atoms together.

| Component | Description | Status |
|-----------|-------------|--------|
| **Accordion** | Collapsible content panels | ✅ Ready |
| **Breadcrumb** | Navigation breadcrumbs | ✅ Ready |
| **Button Group** | Grouped button controls | ✅ Ready |
| **Calendar** | Date selection and calendars | ✅ Ready |
| **Card** | Content containers | ✅ Ready |
| **Carousel** | Image and content carousels | ✅ Ready |
| **Currency Input** | Currency formatted inputs | ✅ Ready |
| **Dropdown** | Selection dropdowns with search | ✅ Ready |
| **File Uploader** | Drag & drop file uploads | ✅ Ready |
| **Input OTP** | One-time password inputs | ✅ Ready |
| **Menu** | Context menus and dropdowns | ✅ Ready |
| **Modal** | Dialog overlays | ✅ Ready |
| **Navbar** | Navigation headers | ✅ Ready |
| **Navigation Menu** | Complex navigation systems | ✅ Ready |
| **Pagination** | Page navigation controls | ✅ Ready |
| **Quantity Input** | Numeric quantity selectors | ✅ Ready |
| **Search Modal** | Full-screen search interfaces | ✅ Ready |
| **Sidebar** | Side navigation panels | ✅ Ready |
| **Slider Modal** | Sliding modal dialogs | ✅ Ready |
| **Tab** | Tabbed content interfaces | ✅ Ready |
| **Table** | Data tables with sorting | ✅ Ready |
| **Toggle Group** | Toggle button groups | ✅ Ready |
| **Toolkit** | Action toolbars | ✅ Ready |

## 🎨 Design System

### Color Palette
UIPulse uses a semantic color system based on neutral colors with accent variants:

- **Primary**: Blue (#3B82F6) - Main brand actions
- **Secondary**: Neutral (#6B7280) - Supporting actions  
- **Success**: Green (#10B981) - Success states
- **Warning**: Amber (#F59E0B) - Warning states
- **Error**: Red (#EF4444) - Error states
- **Neutral**: Gray scale - Text and backgrounds

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Scale**: 12px to 48px with consistent line heights
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
Consistent spacing using Tailwind's 4px base unit: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px.

## 🏗️ Architecture

### Atomic Design Pattern
UIPulse follows Brad Frost's Atomic Design methodology:

```
src/
├── app/
│   ├── ui/
│   │   ├── atoms/          # Basic building blocks
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   └── ...
│   │   ├── molecules/      # Groups of atoms
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── ...
│   │   └── organisms/      # Complex UI sections (coming soon)
│   ├── components/         # Shared components
│   ├── lib/               # Utilities and SEO
│   └── (docs)/            # Documentation pages
```

### SEO Optimization
UIPulse includes comprehensive SEO optimization:

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schemas for rich snippets
- **Sitemap**: Dynamic sitemap generation for all routes
- **Robots.txt**: Proper crawling configuration
- **Performance**: Optimized images, fonts, and core web vitals

## 🛠️ Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run typecheck` - Run TypeScript checks
- `npm run format` - Format code with Prettier

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Themes**: next-themes for dark mode
- **Code Highlighting**: Prism React Renderer

## 📱 Live Demos

Experience UIPulse components in action:

- [**Layout Demo**](https://uipulse.com/demo/layout) - Complete layout with sidebar
- [**Theme Test**](https://uipulse.com/demo/theme-test) - Dark/light mode switching
- [**Enhanced Sidebar**](https://uipulse.com/demo/enhanced-sidebar) - Advanced navigation
- [**Navbar + Sidebar**](https://uipulse.com/demo/navbar-sidebar) - Combined navigation

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-component`
3. **Make your changes** and add tests
4. **Follow the code style** with Prettier and ESLint
5. **Commit your changes**: `git commit -m 'Add amazing component'`
6. **Push to the branch**: `git push origin feature/amazing-component`
7. **Open a Pull Request**

### Development Guidelines
- Follow atomic design principles
- Include TypeScript types
- Add accessibility features (ARIA labels, keyboard navigation)
- Write clear documentation
- Test components thoroughly
- Maintain consistent styling patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Brad Frost** - For the Atomic Design methodology
- **Vercel** - For design inspiration and Next.js
- **GitHub** - For additional design inspiration
- **Tailwind Labs** - For the amazing Tailwind CSS
- **Lucide** - For beautiful icons

## 📞 Support

- **Documentation**: [uipulse.com](https://uipulse.com)
- **Issues**: [GitHub Issues](https://github.com/alexrobaina/uipulse/issues)
- **Discussions**: [GitHub Discussions](https://github.com/alexrobaina/uipulse/discussions)
- **Author**: [Alex Robaina](https://github.com/alexrobaina)

---

<div align="center">

**Made with ❤️ by [Alex Robaina](https://github.com/alexrobaina)**

⭐ **Star us on GitHub** if you find UIPulse helpful!

[⬆ Back to top](#-uipulse---react-component-library)

</div>