import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { currencyInputCode } from './constants/currencyInputCode';
import { currencyInputImplementation } from './constants/currencyInputImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import CurrencyInputDemo from './components/CurrencyInputDemo';

export default function CurrencyInputPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <CurrencyInputDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={currencyInputImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Currency Input'
        description='A specialized input component for monetary values with automatic currency formatting and locale support'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={currencyInputCode}
          title='CurrencyInput Component'
        />
      </div>
    </div>
  );
}
