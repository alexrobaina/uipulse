import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { avatarCode } from './constants/avatarCode';
import { avatarImplementation } from './constants/avatarImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import AvatarDemo from './components/AvatarDemo';

export default function AvatarPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <AvatarDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={avatarImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Avatar'
        description='A versatile avatar component that displays user profile pictures with fallback initials, multiple variants, sizes, and status indicators.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={avatarCode}
          title='Avatar Component'
        />
      </div>
    </div>
  );
}
