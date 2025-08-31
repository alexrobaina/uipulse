import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { cardCode } from './constants/cardCode';
import { cardImplementation } from './constants/cardImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import CardDemo from './components/CardDemo';

export default function CardPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <CardDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={cardImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Card'
        description='A sophisticated card component with Vercel-inspired design. Features multiple variants, interactive states, and flexible layouts for content organization and visual hierarchy.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={cardCode}
          title='Card Component'
        />
      </div>
    </div>
  );
}
