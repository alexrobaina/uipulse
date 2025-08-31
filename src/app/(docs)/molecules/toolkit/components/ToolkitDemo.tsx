'use client';
import Toolkit from '@/app/ui/molecules/Toolkit';
import Preview from '@/app/components/Preview';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Image,
  Link,
  Code,
  Save,
  Download,
  Printer,
  Share,
  Copy,
  Scissors,
  ClipboardPaste,
  Undo,
  Redo,
  Search,
  Filter,
  ArrowUpDown,
  Grid3X3,
  Menu,
  Settings,
  Star,
  Heart,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
} from 'lucide-react';
import { useState } from 'react';

export default function ToolkitDemo() {
  const [activeFormatting, setActiveFormatting] = useState<string[]>(['bold']);
  const [activeAlignment, setActiveAlignment] = useState<string[]>(['left']);
  const [activeView, setActiveView] = useState<string[]>(['grid']);
  const [activeTools, setActiveTools] = useState<string[]>(['select']);

  const formattingItems = [
    { id: 'bold', label: 'Bold', icon: <Bold /> },
    { id: 'italic', label: 'Italic', icon: <Italic /> },
    { id: 'underline', label: 'Underline', icon: <Underline /> },
    { id: 'code', label: 'Code', icon: <Code /> },
  ];

  const alignmentItems = [
    { id: 'left', label: 'Left', icon: <AlignLeft /> },
    { id: 'center', label: 'Center', icon: <AlignCenter /> },
    { id: 'right', label: 'Right', icon: <AlignRight /> },
  ];

  const editorItems = [
    { id: 'save', label: 'Save', icon: <Save /> },
    { id: 'download', label: 'Download', icon: <Download /> },
    { id: 'print', label: 'Print', icon: <Printer />, disabled: true },
    { id: 'share', label: 'Share', icon: <Share /> },
  ];

  const clipboardItems = [
    { id: 'cut', label: 'Cut', icon: <Scissors /> },
    { id: 'copy', label: 'Copy', icon: <Copy /> },
    { id: 'paste', label: 'Paste', icon: <ClipboardPaste /> },
  ];

  const historyItems = [
    { id: 'undo', label: 'Undo', icon: <Undo /> },
    { id: 'redo', label: 'Redo', icon: <Redo /> },
  ];

  const viewItems = [
    { id: 'list', label: 'List', icon: <List /> },
    { id: 'grid', label: 'Grid', icon: <Grid3X3 /> },
    { id: 'card', label: 'Card', icon: <Menu /> },
  ];

  const filterItems = [
    { id: 'search', label: 'Search', icon: <Search /> },
    { id: 'filter', label: 'Filter', icon: <Filter /> },
    { id: 'sort', label: 'Sort', icon: <ArrowUpDown /> },
  ];

  const toolItems = [
    { id: 'select', label: 'Select', icon: <Eye /> },
    { id: 'edit', label: 'Edit', icon: <Edit /> },
    { id: 'delete', label: 'Delete', icon: <Trash2 /> },
    { id: 'add', label: 'Add', icon: <Plus /> },
  ];

  const socialItems = [
    { id: 'like', label: 'Like', icon: <Heart /> },
    { id: 'star', label: 'Star', icon: <Star /> },
    { id: 'share', label: 'Share', icon: <Share /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> },
  ];

  const mathItems = [
    { id: 'add', label: 'Add', icon: <Plus /> },
    { id: 'subtract', label: 'Subtract', icon: <Minus /> },
    { id: 'multiply', label: 'Multiply', icon: <Star /> },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Default Variant (Single Selection)
          </h3>
          <Toolkit
            items={alignmentItems}
            activeItems={activeAlignment}
            onItemsChange={setActiveAlignment}
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Multiple Selection (Formatting Tools)
          </h3>
          <Toolkit
            items={formattingItems}
            allowMultiple
            activeItems={activeFormatting}
            onItemsChange={setActiveFormatting}
          />
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            Active:{' '}
            {activeFormatting.length > 0 ? activeFormatting.join(', ') : 'none'}
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Outline Variant
          </h3>
          <Toolkit items={editorItems} variant='outline' spacing='sm' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Ghost Variant (with spacing)
          </h3>
          <Toolkit items={clipboardItems} variant='ghost' spacing='md' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Filled Variant
          </h3>
          <Toolkit items={historyItems} variant='filled' />
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
              <Toolkit
                items={mathItems}
                size='sm'
                variant='outline'
                spacing='sm'
              />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Medium (Default)
              </h4>
              <Toolkit
                items={mathItems}
                size='md'
                variant='outline'
                spacing='sm'
              />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Large
              </h4>
              <Toolkit
                items={mathItems}
                size='lg'
                variant='outline'
                spacing='sm'
              />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Vertical Orientation
          </h3>
          <div className='flex items-start gap-6'>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Default
              </h4>
              <Toolkit
                items={viewItems}
                orientation='vertical'
                activeItems={activeView}
                onItemsChange={setActiveView}
              />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Outline
              </h4>
              <Toolkit
                items={toolItems}
                orientation='vertical'
                variant='outline'
                spacing='sm'
              />
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                Ghost
              </h4>
              <Toolkit
                items={filterItems}
                orientation='vertical'
                variant='ghost'
                spacing='md'
              />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Disabled Items
          </h3>
          <Toolkit
            items={[
              { id: 'action1', label: 'Available', icon: <Edit /> },
              {
                id: 'action2',
                label: 'Disabled',
                icon: <Trash2 />,
                disabled: true,
              },
              { id: 'action3', label: 'Available', icon: <Copy /> },
              {
                id: 'action4',
                label: 'Disabled',
                icon: <Settings />,
                disabled: true,
              },
            ]}
            variant='outline'
            spacing='sm'
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Text Editor Toolbar (Complex Example)
          </h3>
          <div className='space-y-3'>
            <div className='flex flex-wrap gap-3 items-center'>
              <Toolkit
                items={formattingItems}
                allowMultiple
                variant='outline'
                spacing='none'
              />
              <div className='w-px h-8 bg-neutral-200 dark:bg-neutral-700'></div>
              <Toolkit
                items={alignmentItems}
                variant='outline'
                spacing='none'
              />
              <div className='w-px h-8 bg-neutral-200 dark:bg-neutral-700'></div>
              <Toolkit
                items={[
                  { id: 'list', label: 'List', icon: <List /> },
                  { id: 'link', label: 'Link', icon: <Link /> },
                  { id: 'image', label: 'Image', icon: <Image /> },
                ]}
                variant='outline'
                spacing='none'
              />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Social Actions (Multiple Selection)
          </h3>
          <Toolkit
            items={socialItems}
            variant='ghost'
            spacing='md'
            allowMultiple
            activeItems={activeTools}
            onItemsChange={setActiveTools}
          />
          <p className='text-xs text-neutral-600 dark:text-neutral-400'>
            Selected actions:{' '}
            {activeTools.length > 0 ? activeTools.join(', ') : 'none'}
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Card with Toolkit
          </h3>
          <div className='border border-neutral-200 dark:border-neutral-700 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-3'>
              <h4 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                Document Settings
              </h4>
              <Toolkit
                items={[
                  { id: 'save', label: 'Save', icon: <Save /> },
                  { id: 'share', label: 'Share', icon: <Share /> },
                  { id: 'settings', label: 'Settings', icon: <Settings /> },
                ]}
                variant='ghost'
                spacing='sm'
                size='sm'
              />
            </div>
            <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
              Configure your document preferences and formatting options using
              the toolbar above.
            </p>
          </div>
        </div>
      </div>
    </Preview>
  );
}
