export const buttonGroupCode = {
  usage: `import { ButtonGroup, ButtonGroupItem } from "@/app/ui/molecules/ButtonGroup";

// Basic usage
<ButtonGroup>
  <ButtonGroupItem>First</ButtonGroupItem>
  <ButtonGroupItem>Second</ButtonGroupItem>
  <ButtonGroupItem>Third</ButtonGroupItem>
</ButtonGroup>`,

  props: `interface ButtonGroupProps {
  /**
   * The buttons to render in the group. Each button will be automatically styled.
   */
  children: ReactNode;
  
  /**
   * The variant of the button group layout.
   * @default "default"
   */
  variant?: "default" | "attached" | "separated" | "pill";
  
  /**
   * The size of all buttons in the group.
   * @default "md"
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  
  /**
   * The orientation of the button group.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  
  /**
   * The button variant to apply to all buttons in the group.
   * @default "default"
   */
  buttonVariant?: "default" | "primary" | "secondary" | "outline";
  
  /**
   * If true, the group will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS classes to apply to the group container.
   */
  className?: string;
}`,

  itemProps: `interface ButtonGroupItemProps {
  /**
   * The content of the button.
   */
  children: ReactNode;
  
  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * If true, the button will be in an active/selected state.
   * @default false
   */
  active?: boolean;
  
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes to apply to the button.
   */
  className?: string;
}`,

  basic: `// Default button group
<ButtonGroup>
  <ButtonGroupItem>First</ButtonGroupItem>
  <ButtonGroupItem>Second</ButtonGroupItem>
  <ButtonGroupItem>Third</ButtonGroupItem>
</ButtonGroup>

// Attached buttons (no gaps)
<ButtonGroup variant="attached">
  <ButtonGroupItem>Copy</ButtonGroupItem>
  <ButtonGroupItem>Download</ButtonGroupItem>
  <ButtonGroupItem>Share</ButtonGroupItem>
</ButtonGroup>

// Separated buttons with gaps
<ButtonGroup variant="separated">
  <ButtonGroupItem>Like</ButtonGroupItem>
  <ButtonGroupItem>Star</ButtonGroupItem>
  <ButtonGroupItem>Save</ButtonGroupItem>
</ButtonGroup>

// Pill-shaped button group
<ButtonGroup variant="pill">
  <ButtonGroupItem>All</ButtonGroupItem>
  <ButtonGroupItem>Active</ButtonGroupItem>
  <ButtonGroupItem>Inactive</ButtonGroupItem>
</ButtonGroup>`,

  variants: `// Default variant (white background)
<ButtonGroup buttonVariant="default">
  <ButtonGroupItem>Copy</ButtonGroupItem>
  <ButtonGroupItem>Download</ButtonGroupItem>
  <ButtonGroupItem>Share</ButtonGroupItem>
</ButtonGroup>

// Primary variant (blue background)
<ButtonGroup buttonVariant="primary">
  <ButtonGroupItem>Save</ButtonGroupItem>
  <ButtonGroupItem>Cancel</ButtonGroupItem>
</ButtonGroup>

// Secondary variant (gray background)
<ButtonGroup buttonVariant="secondary">
  <ButtonGroupItem>Edit</ButtonGroupItem>
  <ButtonGroupItem>Delete</ButtonGroupItem>
</ButtonGroup>

// Outline variant (transparent with border)
<ButtonGroup buttonVariant="outline">
  <ButtonGroupItem>Filter</ButtonGroupItem>
  <ButtonGroupItem>Sort</ButtonGroupItem>
  <ButtonGroupItem>Export</ButtonGroupItem>
</ButtonGroup>`,

  withIcons: `import { Copy, Download, Share, Heart, Star, Bookmark } from "lucide-react";

// Icons only
<ButtonGroup>
  <ButtonGroupItem>
    <Copy className="w-4 h-4" />
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Download className="w-4 h-4" />
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Share className="w-4 h-4" />
  </ButtonGroupItem>
</ButtonGroup>

// Icons with text
<ButtonGroup>
  <ButtonGroupItem>
    <Copy className="w-4 h-4 mr-2" />
    Copy
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Download className="w-4 h-4 mr-2" />
    Download
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Share className="w-4 h-4 mr-2" />
    Share
  </ButtonGroupItem>
</ButtonGroup>

// Action buttons with icons
<ButtonGroup variant="separated">
  <ButtonGroupItem>
    <Heart className="w-4 h-4 mr-2" />
    Like
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Star className="w-4 h-4 mr-2" />
    Star
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Bookmark className="w-4 h-4 mr-2" />
    Save
  </ButtonGroupItem>
</ButtonGroup>`,

  vertical: `import { Home, User, Settings } from "lucide-react";

// Vertical orientation
<ButtonGroup orientation="vertical">
  <ButtonGroupItem>First</ButtonGroupItem>
  <ButtonGroupItem>Second</ButtonGroupItem>
  <ButtonGroupItem>Third</ButtonGroupItem>
</ButtonGroup>

// Vertical with icons
<ButtonGroup orientation="vertical" variant="separated">
  <ButtonGroupItem>
    <Home className="w-4 h-4 mr-2" />
    Home
  </ButtonGroupItem>
  <ButtonGroupItem>
    <User className="w-4 h-4 mr-2" />
    Profile
  </ButtonGroupItem>
  <ButtonGroupItem>
    <Settings className="w-4 h-4 mr-2" />
    Settings
  </ButtonGroupItem>
</ButtonGroup>`,

  fullWidth: `// Full width button group
<ButtonGroup fullWidth>
  <ButtonGroupItem>First</ButtonGroupItem>
  <ButtonGroupItem>Second</ButtonGroupItem>
  <ButtonGroupItem>Third</ButtonGroupItem>
</ButtonGroup>

// Full width vertical
<ButtonGroup orientation="vertical" fullWidth>
  <ButtonGroupItem>Home</ButtonGroupItem>
  <ButtonGroupItem>About</ButtonGroupItem>
  <ButtonGroupItem>Contact</ButtonGroupItem>
</ButtonGroup>`,

  interactive: `const [selectedFilter, setSelectedFilter] = useState("all");
const [selectedView, setSelectedView] = useState("grid");

// Interactive filter buttons
<ButtonGroup>
  <ButtonGroupItem 
    active={selectedFilter === "all"}
    onClick={() => setSelectedFilter("all")}
  >
    All
  </ButtonGroupItem>
  <ButtonGroupItem 
    active={selectedFilter === "active"}
    onClick={() => setSelectedFilter("active")}
  >
    Active
  </ButtonGroupItem>
  <ButtonGroupItem 
    active={selectedFilter === "inactive"}
    onClick={() => setSelectedFilter("inactive")}
  >
    Inactive
  </ButtonGroupItem>
</ButtonGroup>

// View toggle buttons
<ButtonGroup variant="attached">
  <ButtonGroupItem 
    active={selectedView === "grid"}
    onClick={() => setSelectedView("grid")}
  >
    <Grid className="w-4 h-4" />
  </ButtonGroupItem>
  <ButtonGroupItem 
    active={selectedView === "list"}
    onClick={() => setSelectedView("list")}
  >
    <List className="w-4 h-4" />
  </ButtonGroupItem>
</ButtonGroup>`,

  sizes: `// Extra small
<ButtonGroup size="xs">
  <ButtonGroupItem>XS</ButtonGroupItem>
  <ButtonGroupItem>Button</ButtonGroupItem>
</ButtonGroup>

// Small
<ButtonGroup size="sm">
  <ButtonGroupItem>Small</ButtonGroupItem>
  <ButtonGroupItem>Button</ButtonGroupItem>
</ButtonGroup>

// Medium (default)
<ButtonGroup size="md">
  <ButtonGroupItem>Medium</ButtonGroupItem>
  <ButtonGroupItem>Button</ButtonGroupItem>
</ButtonGroup>

// Large
<ButtonGroup size="lg">
  <ButtonGroupItem>Large</ButtonGroupItem>
  <ButtonGroupItem>Button</ButtonGroupItem>
</ButtonGroup>

// Extra large
<ButtonGroup size="xl">
  <ButtonGroupItem>XL</ButtonGroupItem>
  <ButtonGroupItem>Button</ButtonGroupItem>
</ButtonGroup>`,

  accessibility: `// Always include proper ARIA attributes
<ButtonGroup role="group" aria-label="Text formatting options">
  <ButtonGroupItem aria-pressed={isBold} onClick={toggleBold}>
    <Bold className="w-4 h-4" />
  </ButtonGroupItem>
  <ButtonGroupItem aria-pressed={isItalic} onClick={toggleItalic}>
    <Italic className="w-4 h-4" />
  </ButtonGroupItem>
  <ButtonGroupItem aria-pressed={isUnderline} onClick={toggleUnderline}>
    <Underline className="w-4 h-4" />
  </ButtonGroupItem>
</ButtonGroup>`,
};
