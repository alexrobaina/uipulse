import { Metadata } from 'next';
import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { buttonCode } from './contants/buttonCode';
import { buttonImplementation } from './contants/buttonImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ButtonDemo from './components/ButtonDemo';
import {
  generatePageMetadata,
  generateStructuredData,
  getComponentBreadcrumbs,
} from '@/app/lib/seo-utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Button Component - UIPulse',
  description:
    'Interactive button component with multiple variants including primary, secondary, outline, and ghost styles. Built with React and TypeScript.',
  path: '/atoms/button',
  type: 'component',
  component: {
    name: 'Button',
    description: 'Interactive buttons with variants',
    url: 'https://uipulse.com/atoms/button',
    category: 'Atom',
  },
  breadcrumbs: getComponentBreadcrumbs('atoms', 'Button'),
});

export default function ButtonPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ButtonDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={buttonImplementation} language='tsx' />,
    },
  ];

  const structuredData = generateStructuredData({
    title: 'Button Component - UIPulse',
    description:
      'Interactive button component with multiple variants including primary, secondary, outline, and ghost styles. Built with React and TypeScript.',
    path: '/atoms/button',
    type: 'component',
    component: {
      name: 'Button',
      description: 'Interactive buttons with variants',
      url: 'https://uipulse.com/atoms/button',
      category: 'Atom',
    },
    breadcrumbs: getComponentBreadcrumbs('atoms', 'Button'),
  });

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className='max-w-4xl mx-auto p-6'>
        <HeaderDescription
          title='Button'
          description='Implement the button component with the following variants:'
        />

        <Tab items={tabItems} defaultTab='preview' />

        <section className='mb-8 mt-8'>
          <CodeBlock
            maxLines={10}
            language='tsx'
            showLineNumbers
            code={buttonCode}
            title='Button Component'
          />
        </section>
      </main>
    </>
  );
}
