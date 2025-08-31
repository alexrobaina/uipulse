import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { carouselCode } from './constants/carouselCode';
import { carouselImplementation } from './constants/carouselImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import CarouselDemo from './components/CarouselDemo';

export default function CarouselPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <CarouselDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={carouselImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Carousel'
        description='A fully-featured image and content carousel component with navigation arrows, dot indicators, auto-play functionality, responsive design, and accessibility support. Perfect for showcasing images, testimonials, and featured content.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={carouselCode}
          title='Carousel Component'
        />
      </div>
    </div>
  );
}
