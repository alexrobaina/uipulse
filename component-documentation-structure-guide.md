# Component Documentation Structure Guide

This guide explains the standardized pattern for documenting UI components in the UIpulse project. This pattern ensures consistency across all component documentation and provides a clear structure for developers to follow.

## Overview

Each component documentation follows a consistent folder structure and file organization pattern that separates concerns between the main page, demo components, and code examples.

## Folder Structure

Use this web page like a referece
@https://www.hyperui.dev/components/application

```
src/app/(docs)/atoms/{component-name}/
├── page.tsx                    # Main documentation page
├── components/
│   └── {ComponentName}Demo.tsx # Interactive demo component
└── constants/ (or contants/)   # Code examples as string constants
    ├── {componentName}Code.ts        # Component source code
    └── {componentName}Implementation.ts # Usage examples
```

### File Naming Conventions

- **Main page**: `page.tsx`
- **Demo component**: `{ComponentName}Demo.tsx` (PascalCase)
- **Constants folder**: `constants/` or `contants/` (note: button uses "contants" - typo but maintained for consistency)
- **Code constant**: `{componentName}Code.ts` (camelCase)
- **Implementation constant**: `{componentName}Implementation.ts` (camelCase)

## File Structure Breakdown

### 1. Main Page (`page.tsx`)

The main documentation page serves as the entry point and orchestrates all the components. It follows this structure:

```tsx
import CodeBlock from "@/app/components/CodeBlock";
import Tabs from "@/app/components/Tabs";
import { componentCode } from "./constants/componentCode";
import { componentImplementation } from "./constants/componentImplementation";
import HeaderDescription from "@/app/components/HeaderDescription";
import ComponentDemo from "./components/ComponentDemo";

export default function ComponentPage() {
  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: <ComponentDemo />,
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={componentImplementation} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderDescription
        title="Component Name"
        description="Brief description of the component and its purpose"
      />

      <Tabs items={tabItems} defaultTab="preview" />

      <div className="mb-8 mt-8">
        <CodeBlock
          maxLines={10}
          language="tsx"
          showLineNumbers
          code={componentCode}
          title="Component Name Component"
        />
      </div>
    </div>
  );
}
```

#### Key Elements:

- **Imports**: All necessary components and constants
- **Tab Structure**: Preview tab with demo, Code tab with implementation
- **HeaderDescription**: Component title and description
- **CodeBlock**: Shows the actual component source code with syntax highlighting

### 2. Demo Component (`components/{ComponentName}Demo.tsx`)

The demo component showcases all variants, states, and use cases of the component:

```tsx
import Component from "@/app/ui/atoms/Component";
import Preview from "@/app/components/Preview";

export default function ComponentDemo() {
  return (
    <Preview>
      {/* Organized sections showcasing different variants */}
      <div className="space-y-6 w-full">
        {/* Section 1: Basic usage */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">Basic Usage</h3>
          <Component />
        </div>

        {/* Section 2: Variants */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">Variants</h3>
          <div className="flex gap-4">
            <Component variant="default" />
            <Component variant="success" />
            <Component variant="outline" />
          </div>
        </div>

        {/* Additional sections for different states, sizes, etc. */}
      </div>
    </Preview>
  );
}
```

#### Key Patterns:

- **Preview Wrapper**: All content wrapped in `<Preview>` component
- **Sectioned Layout**: Organized by functionality with descriptive headings
- **Comprehensive Coverage**: Shows all variants, sizes, states, and edge cases
- **Responsive Design**: Uses Tailwind classes for responsive behavior

### 3. Code Constants

#### a) Component Code (`constants/{componentName}Code.ts`)

Contains the complete source code of the component as a string constant:

```tsx
export const componentCode = `
// Complete component source code here
// Including imports, interfaces, implementation, and exports
`;
```

**Purpose**:

- Shows developers the actual implementation
- Provides copy-paste ready code
- Demonstrates best practices and patterns

#### b) Implementation Examples (`constants/{componentName}Implementation.ts`)

Contains usage examples and implementation patterns:

```tsx
export const componentImplementation = `
import Component from "@/app/ui/atoms/Component";

export default function ComponentPage() {
  return (
    // Example usage patterns
    // Multiple scenarios and configurations
  );
}`;
```

**Purpose**:

- Shows practical usage examples
- Demonstrates different configurations
- Provides implementation guidance

## Content Guidelines

### Demo Component Best Practices

1. **Comprehensive Coverage**: Show all variants, sizes, states, and properties
2. **Logical Grouping**: Organize examples by functionality or use case
3. **Clear Labels**: Use descriptive headings for each section
4. **Responsive Design**: Ensure examples work on different screen sizes
5. **Error States**: Include error, disabled, and edge case scenarios

### Code Examples Best Practices

1. **Complete Code**: Include all necessary imports and dependencies
2. **Realistic Examples**: Use practical, real-world scenarios
3. **Multiple Variants**: Show different ways to use the component
4. **Clean Formatting**: Maintain consistent indentation and structure
5. **Comments**: Include helpful comments for complex implementations

## Implementation Checklist

When creating a new component documentation, ensure:

- [ ] Main `page.tsx` follows the standard structure
- [ ] Demo component is comprehensive and well-organized
- [ ] Component code constant includes complete source
- [ ] Implementation constant shows practical usage
- [ ] All imports are correct and functional
- [ ] Responsive design is considered
- [ ] Error states and edge cases are covered
- [ ] File naming follows conventions
- [ ] Folder structure matches the pattern

## Examples

### Button Component Structure

```
src/app/(docs)/atoms/button/
├── page.tsx
├── components/
│   └── ButtonDemo.tsx
└── contants/  # Note: typo maintained for consistency
    ├── buttonCode.ts
    └── buttonImplementation.ts
```

### Input Component Structure

```
src/app/(docs)/atoms/input/
├── page.tsx
├── components/
│   └── InputDemo.tsx
└── constants/
    ├── inputCode.ts
    └── inputImplementation.ts
```

## Key Benefits of This Pattern

1. **Consistency**: Uniform structure across all components
2. **Maintainability**: Clear separation of concerns
3. **Developer Experience**: Easy to understand and navigate
4. **Reusability**: Standardized components can be easily copied
5. **Documentation**: Self-documenting code with examples
6. **Testing**: Clear demo components for visual testing

## Notes

- The button component uses "contants" (with typo) instead of "constants" - maintain this for consistency if following the exact pattern
- All components should be wrapped in the `<Preview>` component for consistent styling
- Use the `HeaderDescription` component for consistent page headers
- The `CodeBlock` component handles syntax highlighting and formatting automatically
- Tab structure allows users to switch between preview and implementation easily

This structure ensures that every component documentation is comprehensive, consistent, and developer-friendly.

## Color Palette Guidelines

### Preferred Color System

UIpulse components should use specific Tailwind color palette values rather than semantic tokens like `primary`, `secondary`, `background`, or `foreground`. This approach provides:

1. **Clarity**: Developers know exactly which colors are being used
2. **Consistency**: No ambiguity about color meanings across themes
3. **Flexibility**: Easy to modify specific color values without affecting semantic meaning
4. **Transparency**: Clear understanding of the design system

### Recommended Color Palette

**Neutrals (Main UI Colors)**:

- `neutral-50` to `neutral-950` for backgrounds, text, and borders
- Use `neutral-100/800` for light/dark backgrounds
- Use `neutral-800/200` for light/dark text
- Use `neutral-300/700` for borders

**Semantic Colors**:

- **Blue**: `blue-100/800` and `blue-600/400` for informational elements
- **Green**: `green-100/900` and `green-600/400` for success states
- **Yellow**: `yellow-100/900` and `yellow-600/400` for warning states
- **Red**: `red-100/900` and `red-600/400` for error/destructive states

### Color Implementation Examples

**Instead of this**:

```tsx
// ❌ Avoid semantic tokens
className = "bg-primary text-primary-foreground";
className = "bg-secondary text-secondary-foreground";
className = "border-border text-muted-foreground";
```

**Use this**:

```tsx
// ✅ Use specific Tailwind colors
className = "bg-blue-600 text-white";
className =
  "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200";
className =
  "border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400";
```

### Dark Mode Considerations

Always provide dark mode variants using the `dark:` prefix:

```tsx
// Light mode: neutral-100 background, neutral-800 text
// Dark mode: neutral-800 background, neutral-200 text
className =
  "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200";

// Light mode: blue-100 background, blue-800 text
// Dark mode: blue-900/20 background, blue-400 text
className = "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
```

### Component Variant Naming

When creating component variants, use descriptive names that indicate the visual style or use case:

**For Badges**:

- `default` - neutral styling
- `info` or `blue` - informational (blue colors)
- `success` - success states (green colors)
- `warning` - warning states (yellow colors)
- `error` or `danger` - error states (red colors)

**For Buttons**:

- `default` or `solid` - main action button
- `outline` - secondary action button
- `ghost` - subtle action button
- `destructive` - dangerous action button

### Migration from Primary/Secondary

If migrating from primary/secondary tokens:

1. **Primary** typically becomes:
   - `blue-600` for solid elements
   - `blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400` for badges
2. **Secondary** typically becomes:
   - `neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200` for badges
   - `neutral-100` backgrounds with `neutral-900` text for buttons
