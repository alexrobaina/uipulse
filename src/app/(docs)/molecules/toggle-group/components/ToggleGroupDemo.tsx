'use client';
import ToggleGroup from '@/app/ui/molecules/ToggleGroup';
import Preview from '@/app/components/Preview';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Grid,
  Menu,
  Eye,
  Heart,
  Star,
  Share,
} from 'lucide-react';
import { useState } from 'react';

export default function ToggleGroupDemo() {
  const [textFormat, setTextFormat] = useState<string[]>(['bold']);
  const [alignment, setAlignment] = useState<string>('left');
  const [viewMode, setViewMode] = useState<string>('grid');
  const [actions, setActions] = useState<string[]>([]);

  const formattingItems = [
    { value: 'bold', label: 'Bold', icon: <Bold /> },
    { value: 'italic', label: 'Italic', icon: <Italic /> },
    { value: 'underline', label: 'Underline', icon: <Underline /> },
    { value: 'code', label: 'Code', icon: <Code /> },
  ];

  const alignmentItems = [
    { value: 'left', label: 'Left', icon: <AlignLeft /> },
    { value: 'center', label: 'Center', icon: <AlignCenter /> },
    { value: 'right', label: 'Right', icon: <AlignRight /> },
    { value: 'justify', label: 'Justify', icon: <AlignJustify /> },
  ];

  const listItems = [
    { value: 'bullet', label: 'Bullet List', icon: <List /> },
    { value: 'numbered', label: 'Numbered List', icon: <ListOrdered /> },
    { value: 'quote', label: 'Quote', icon: <Quote /> },
  ];

  const viewItems = [
    { value: 'grid', label: 'Grid', icon: <Grid /> },
    { value: 'list', label: 'List', icon: <Menu /> },
    { value: 'detail', label: 'Detail', icon: <Eye /> },
  ];

  const socialItems = [
    { value: 'like', label: 'Like', icon: <Heart /> },
    { value: 'star', label: 'Star', icon: <Star /> },
    { value: 'share', label: 'Share', icon: <Share /> },
  ];

  const textItems = [
    { value: 'bold', label: 'Bold' },
    { value: 'italic', label: 'Italic' },
    { value: 'underline', label: 'Underline' },
    { value: 'code', label: 'Code' },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Single Selection (Text Alignment)
          </h3>
          <ToggleGroup
            items={alignmentItems}
            type='single'
            value={alignment}
            onValueChange={value => setAlignment(value as string)}
          />
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            Selected: {alignment || 'none'}
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Multiple Selection (Text Formatting)
          </h3>
          <ToggleGroup
            items={formattingItems}
            type='multiple'
            value={textFormat}
            onValueChange={value => setTextFormat(value as string[])}
          />
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            Selected: {textFormat.length > 0 ? textFormat.join(', ') : 'none'}
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Outline Variant
          </h3>
          <ToggleGroup items={listItems} variant='outline' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Ghost Variant
          </h3>
          <ToggleGroup
            items={viewItems}
            variant='ghost'
            type='single'
            value={viewMode}
            onValueChange={value => setViewMode(value as string)}
          />
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            Current view: {viewMode}
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Size Variants
          </h3>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Small
              </h4>
              <ToggleGroup items={textItems} size='sm' variant='outline' />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Medium (Default)
              </h4>
              <ToggleGroup items={textItems} size='md' variant='outline' />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Large
              </h4>
              <ToggleGroup items={textItems} size='lg' variant='outline' />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Vertical Orientation
          </h3>
          <div className='flex items-start gap-8'>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Default
              </h4>
              <ToggleGroup
                items={alignmentItems}
                orientation='vertical'
                type='single'
              />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Outline
              </h4>
              <ToggleGroup
                items={viewItems}
                orientation='vertical'
                variant='outline'
                type='single'
              />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Ghost
              </h4>
              <ToggleGroup
                items={formattingItems.slice(0, 3)}
                orientation='vertical'
                variant='ghost'
                type='multiple'
              />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Disabled Items
          </h3>
          <ToggleGroup
            items={[
              { value: 'option1', label: 'Available' },
              { value: 'option2', label: 'Disabled', disabled: true },
              { value: 'option3', label: 'Available' },
              { value: 'option4', label: 'Disabled', disabled: true },
            ]}
            variant='outline'
            type='multiple'
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Social Actions (Multiple Selection)
          </h3>
          <ToggleGroup
            items={socialItems}
            variant='ghost'
            type='multiple'
            value={actions}
            onValueChange={value => setActions(value as string[])}
          />
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            Active: {actions.length > 0 ? actions.join(', ') : 'none'}
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Disabled State
          </h3>
          <ToggleGroup
            items={alignmentItems}
            variant='outline'
            disabled
            defaultValue='center'
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Text Editor Toolbar Example
          </h3>
          <div className='space-y-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
            <div className='flex flex-wrap gap-4 items-center'>
              <ToggleGroup items={formattingItems} type='multiple' size='sm' />
              <div className='w-px h-6 bg-neutral-200 dark:border-neutral-700'></div>
              <ToggleGroup items={alignmentItems} type='single' size='sm' />
              <div className='w-px h-6 bg-neutral-200 dark:border-neutral-700'></div>
              <ToggleGroup items={listItems} type='single' size='sm' />
            </div>
            <div className='min-h-32 p-3 border border-neutral-200 dark:border-neutral-700 rounded bg-white dark:bg-neutral-900'>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                Sample editor content would appear here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
