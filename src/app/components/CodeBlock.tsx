'use client';

import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  title?: string;
  maxLines?: number;
  showExpandButton?: boolean;
}

// VS Code Dark+ theme colors
const vscodeTheme = {
  plain: {
    color: '#D4D4D4',
    backgroundColor: '#1E1E1E',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#6A9955',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#CE9178',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#D4D4D4',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#B5CEA8',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#C586C0',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#DCDCAA',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#DCDCAA',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#569CD6',
      },
    },
    {
      types: ['builtin'],
      style: {
        color: '#4EC9B0',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#4EC9B0',
      },
    },
  ],
};

export default function CodeBlock({
  code,
  language = 'tsx',
  className = '',
  showLineNumbers = true,
  title,
  maxLines = 15,
  showExpandButton = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  // Split code into lines and determine if truncation is needed
  const codeLines = code.trim().split('\n');
  const shouldTruncate = showExpandButton && codeLines.length > maxLines;
  const displayCode =
    shouldTruncate && !isExpanded
      ? codeLines.slice(0, maxLines).join('\n')
      : code;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden border border-[#3C3C3C] shadow-lg ${className}`}
      style={{
        backgroundColor: '#1E1E1E',
      }}
    >
      {/* Header */}
      <div
        className='flex items-center justify-between px-4 py-2 border-b border-[#3C3C3C]'
        style={{ backgroundColor: '#2D2D30' }}
      >
        <div className='flex items-center gap-2'>
          {/* VS Code window controls */}
          <div className='flex items-center gap-1.5'>
            <div className='w-3 h-3 rounded-full bg-[#FF5F57]'></div>
            <div className='w-3 h-3 rounded-full bg-[#FFBD2E]'></div>
            <div className='w-3 h-3 rounded-full bg-[#28CA42]'></div>
          </div>
          {title && (
            <span className='text-sm text-[#CCCCCC] ml-2'>{title}</span>
          )}
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-[#CCCCCC] font-mono bg-[#3C3C3C] px-2 py-1 rounded'>
            {language}
          </span>
          <button
            onClick={copyToClipboard}
            className='flex items-center gap-1 text-xs text-[#CCCCCC] hover:text-white transition-colors duration-200 px-2 py-1 rounded bg-[#3C3C3C] hover:bg-[#505050]'
          >
            {copied ? (
              <>
                <Check size={12} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={12} />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className='relative'>
        <Highlight
          theme={vscodeTheme as any}
          code={displayCode.trim()}
          language={language as any}
        >
          {({
            className: highlightClassName,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <pre
              className={`${highlightClassName} p-4 overflow-x-auto text-sm font-mono leading-relaxed`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className='table-row'
                >
                  {showLineNumbers && (
                    <span className='table-cell text-right pr-4 select-none text-[#858585] w-8'>
                      {i + 1}
                    </span>
                  )}
                  <span className='table-cell'>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        {/* Expand/Collapse Button */}
        {shouldTruncate && (
          <div className='flex justify-center border-t border-[#3C3C3C]'>
            <button
              onClick={toggleExpanded}
              className='flex items-center gap-2 px-4 py-2 text-xs text-[#CCCCCC] hover:text-white transition-colors duration-200 hover:bg-[#2D2D30]'
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={14} />
                  Show Less ({codeLines.length - maxLines} lines hidden)
                </>
              ) : (
                <>
                  <ChevronDown size={14} />
                  Show More ({codeLines.length - maxLines} more lines)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
