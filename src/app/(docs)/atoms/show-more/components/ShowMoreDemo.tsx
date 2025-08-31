'use client';
import ShowMore from '@/app/ui/atoms/ShowMore';
import Preview from '@/app/components/Preview';

export default function ShowMoreDemo() {
  const longContent = `
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
    sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  `;

  const codeExample = `function processData(items) {
  return items
    .filter(item => item.active)
    .map(item => ({
      id: item.id,
      name: item.name.toUpperCase(),
      value: calculateValue(item.rawValue),
      timestamp: new Date().toISOString(),
      metadata: {
        processed: true,
        version: '1.0',
        source: item.source || 'default'
      }
    }))
    .sort((a, b) => a.value - b.value);
}

const results = processData(rawData);
console.log('Processed items:', results.length);`;

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Basic Usage (150px max height)
          </h3>
          <div className='prose prose-neutral dark:prose-invert max-w-none'>
            <ShowMore maxHeight={150}>
              <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                {longContent}
              </p>
            </ShowMore>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Custom Button Text
          </h3>
          <ShowMore maxHeight={120} showText='Read more' hideText='Read less'>
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                Understanding Modern Web Development
              </h4>
              <p className='text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                {longContent}
              </p>
            </div>
          </ShowMore>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Without Gradient Overlay
          </h3>
          <ShowMore maxHeight={100} gradient={false}>
            <ul className='space-y-2 text-sm text-neutral-700 dark:text-neutral-300'>
              <li>• Advanced analytics and reporting</li>
              <li>• Real-time data monitoring</li>
              <li>• Custom dashboard creation</li>
              <li>• API integration capabilities</li>
              <li>• Team collaboration tools</li>
              <li>• Mobile-responsive design</li>
              <li>• Data export functionality</li>
              <li>• Advanced security features</li>
              <li>• 24/7 customer support</li>
              <li>• Automated backup systems</li>
              <li>• Multi-language support</li>
              <li>• Third-party integrations</li>
            </ul>
          </ShowMore>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Code Example (200px max height)
          </h3>
          <ShowMore maxHeight={200}>
            <div className='bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg'>
              <h4 className='font-medium mb-4 text-neutral-900 dark:text-neutral-100'>
                Data Processing Function
              </h4>
              <pre className='text-sm text-neutral-700 dark:text-neutral-300 overflow-x-auto'>
                <code>{codeExample}</code>
              </pre>
            </div>
          </ShowMore>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Small Content (80px max height)
          </h3>
          <ShowMore maxHeight={80}>
            <div className='space-y-2'>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                This component is perfect for displaying truncated content that
                users can expand to see more. It includes smooth animations and
                customizable appearance options.
              </p>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                The gradient overlay provides a nice visual cue that there's
                more content below. You can disable it if you prefer a clean
                cut-off instead.
              </p>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Use it for articles, descriptions, feature lists, code examples,
                or any content that might be too long for the initial view.
              </p>
            </div>
          </ShowMore>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Button Variants
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Default
              </h4>
              <ShowMore maxHeight={80} variant='default'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Outline
              </h4>
              <ShowMore maxHeight={80} variant='outline'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Ghost
              </h4>
              <ShowMore maxHeight={80} variant='ghost'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Button Positions
          </h3>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Left Aligned (Default)
              </h4>
              <ShowMore maxHeight={80} buttonPosition='left'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Center Aligned
              </h4>
              <ShowMore maxHeight={80} buttonPosition='center'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Right Aligned
              </h4>
              <ShowMore maxHeight={80} buttonPosition='right'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Button Sizes
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Small
              </h4>
              <ShowMore maxHeight={80} size='sm' variant='outline'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
                Medium (Default)
              </h4>
              <ShowMore maxHeight={80} size='md' variant='outline'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  {longContent}
                </p>
              </ShowMore>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Card with Show More
          </h3>
          <div className='border border-neutral-200 dark:border-neutral-700 rounded-lg p-6'>
            <h4 className='text-lg font-semibold mb-3 text-neutral-900 dark:text-neutral-100'>
              Product Description
            </h4>
            <ShowMore
              maxHeight={100}
              showText='See full description'
              hideText='Show less'
              buttonPosition='center'
              variant='outline'
            >
              <div className='space-y-3 text-neutral-600 dark:text-neutral-400'>
                <p>
                  This premium product offers exceptional quality and
                  performance. Crafted with attention to detail and built to
                  last, it represents the perfect balance of functionality and
                  aesthetics.
                </p>
                <p>
                  Features include advanced materials, innovative design, and
                  comprehensive warranty coverage. Each unit is thoroughly
                  tested to ensure it meets our high standards for quality and
                  reliability.
                </p>
                <p>
                  Perfect for both professional and personal use, this product
                  integrates seamlessly into any environment while providing
                  outstanding performance and value.
                </p>
              </div>
            </ShowMore>
          </div>
        </div>
      </div>
    </Preview>
  );
}
