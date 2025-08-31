import { Metadata } from 'next';
import { InputOTPDemo } from './components/InputOTPDemo';
import { inputOTPCode } from './constants/inputOTPCode';
import { inputOTPImplementation } from './constants/inputOTPImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import Preview from '@/app/components/Preview';
import CodeBlock from '@/app/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Input OTP Component - UIPulse',
  description:
    'An accessible one-time password component with copy paste functionality. Built with React and Tailwind CSS.',
};

export default function InputOTPPage() {
  return (
    <div className='space-y-8 max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Input OTP'
        description='Accessible one-time password component with copy paste functionality. Perfect for phone verification, 2FA codes, and PIN inputs.'
      />

      <InputOTPDemo />

      <div className='space-y-6'>
        <div>
          <h2 className='text-2xl font-semibold mb-3'>Installation</h2>
          <p className='text-neutral-700 dark:text-neutral-300 mb-3'>
            No external dependencies required. This component is built using
            only Tailwind CSS and React.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Usage</h2>
          <CodeBlock code={inputOTPCode.usage} language='tsx' />
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>API Reference</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-medium mb-2'>InputOTP Props</h3>
              <CodeBlock code={inputOTPCode.props} language='tsx' />
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Examples</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-medium mb-2'>Basic Usage</h3>
              <CodeBlock code={inputOTPCode.basic} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>With Separator</h3>
              <CodeBlock code={inputOTPCode.withSeparator} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>4-Digit PIN</h3>
              <CodeBlock code={inputOTPCode.fourDigit} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>Masked Input</h3>
              <CodeBlock code={inputOTPCode.withMask} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>Size Variants</h3>
              <CodeBlock code={inputOTPCode.withSizes} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>Style Variants</h3>
              <CodeBlock code={inputOTPCode.withVariants} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>
                Phone Number Verification
              </h3>
              <CodeBlock code={inputOTPCode.phoneVerification} language='tsx' />
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>Disabled State</h3>
              <CodeBlock code={inputOTPCode.disabled} language='tsx' />
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Features</h2>
          <div className='space-y-3'>
            <ul className='list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300'>
              <li>
                <strong>Accessible</strong> - Built with ARIA support and
                keyboard navigation
              </li>
              <li>
                <strong>Copy & Paste</strong> - Supports copying and pasting OTP
                codes
              </li>
              <li>
                <strong>Multiple Variants</strong> - Default, outline, and
                filled styles
              </li>
              <li>
                <strong>Size Options</strong> - Small, medium, and large sizes
              </li>
              <li>
                <strong>Customizable</strong> - Flexible styling with Tailwind
                CSS
              </li>
              <li>
                <strong>Auto-focus</strong> - Automatically moves focus to the
                next input
              </li>
              <li>
                <strong>Masked Input</strong> - Option to hide entered digits
              </li>
              <li>
                <strong>Separators</strong> - Add custom separators between
                input groups
              </li>
              <li>
                <strong>Dark Mode</strong> - Built-in dark mode support
              </li>
              <li>
                <strong>TypeScript</strong> - Full TypeScript support with
                proper types
              </li>
              <li>
                <strong>No Dependencies</strong> - Built with only React and
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Implementation</h2>
          <CodeBlock
            code={inputOTPImplementation}
            language='tsx'
            title='InputOTP.tsx'
          />
        </div>
      </div>
    </div>
  );
}
