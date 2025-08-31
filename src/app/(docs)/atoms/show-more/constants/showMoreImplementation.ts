export const showMoreImplementation = `import ShowMore from "@/app/ui/atoms/ShowMore";

export default function ShowMoreExample() {
  const longContent = \`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur.
    
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
    omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
    architecto beatae vitae dicta sunt explicabo.
    
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
    sit amet, consectetur, adipisci velit.
  \`;

  return (
    <div className="space-y-8">
      {/* Basic usage with text */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ShowMore maxHeight={100}>
          <p>{longContent}</p>
        </ShowMore>
      </div>

      {/* Different button variants */}
      <div className="grid grid-cols-3 gap-4">
        <ShowMore maxHeight={80} variant="default">
          <p className="text-sm">{longContent}</p>
        </ShowMore>
        <ShowMore maxHeight={80} variant="outline">
          <p className="text-sm">{longContent}</p>
        </ShowMore>
        <ShowMore maxHeight={80} variant="ghost">
          <p className="text-sm">{longContent}</p>
        </ShowMore>
      </div>

      {/* Button positions */}
      <ShowMore 
        maxHeight={100} 
        buttonPosition="center"
        variant="outline"
      >
        <p className="text-center">{longContent}</p>
      </ShowMore>

      {/* Small size with right alignment */}
      <ShowMore 
        maxHeight={80} 
        size="sm"
        buttonPosition="right"
        showText="More"
        hideText="Less"
      >
        <p className="text-sm">{longContent}</p>
      </ShowMore>

      {/* Without gradient */}
      <ShowMore maxHeight={80} gradient={false}>
        <ul className="space-y-2 text-sm">
          <li>• Advanced analytics and reporting</li>
          <li>• Real-time data monitoring</li>
          <li>• Custom dashboard creation</li>
          <li>• API integration capabilities</li>
          <li>• Team collaboration tools</li>
          <li>• Mobile-responsive design</li>
          <li>• Data export functionality</li>
          <li>• Advanced security features</li>
        </ul>
      </ShowMore>

      {/* In a card with custom styling */}
      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-3">Product Description</h4>
        <ShowMore 
          maxHeight={100} 
          showText="See full description" 
          hideText="Show less"
          buttonPosition="center"
          variant="outline"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            {longContent}
          </p>
        </ShowMore>
      </div>
    </div>
  );
}`;
