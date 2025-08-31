import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { fileUploaderCode } from './constants/fileUploaderCode';
import { fileUploaderImplementation } from './constants/fileUploaderImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import FileUploaderDemo from './components/FileUploaderDemo';

export default function FileUploaderPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <FileUploaderDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={fileUploaderImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='File Uploader'
        description='A drag-and-drop file upload component with support for multiple files, file type filtering, and size validation'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={fileUploaderCode}
          title='FileUploader Component'
        />
      </div>
    </div>
  );
}
