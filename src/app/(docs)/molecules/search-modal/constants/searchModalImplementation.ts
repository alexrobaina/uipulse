export const searchModalImplementation = `import { useState } from 'react';
import SearchModal from '@/app/ui/molecules/SearchModal';
import Button from '@/app/ui/atoms/Button';

const searchResults = [
  {
    id: '1',
    title: 'Button Component',
    description: 'Interactive button with multiple variants',
    type: 'component',
    url: '/docs/atoms/button',
  },
  {
    id: '2',
    title: 'Getting Started',
    description: 'Learn how to use the component library',
    type: 'page',
    url: '/docs/getting-started',
  },
];

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigate = (url: string) => {
    // Handle navigation to the selected result
    console.log('Navigating to:', url);
  };

  return (
    <div>
      <Button onClick={() => setIsSearchOpen(true)}>
        Open Search
      </Button>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        searchResults={searchResults}
        placeholder="Search documentation..."
      />
    </div>
  );
}`;
