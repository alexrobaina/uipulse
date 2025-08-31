import React, { useState, useRef, DragEvent } from 'react';
import { Upload, File, X, Image, FileText } from 'lucide-react';
import { cn } from '@/lib/cn';

interface FileUploaderProps {
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in bytes
  maxFiles?: number;
  disabled?: boolean;
  onFilesChange?: (files: File[]) => void;
  className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  multiple = false,
  accept = '*/*',
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 5,
  disabled = false,
  onFilesChange,
  className,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image className='w-4 h-4' />;
    }
    return <FileText className='w-4 h-4' />;
  };

  const validateFile = (file: File): string | null => {
    if (file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    return null;
  };

  const addFiles = (newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles);
    const validFiles: File[] = [];
    let errorMessage = null;

    for (const file of fileArray) {
      const validation = validateFile(file);
      if (validation) {
        errorMessage = validation;
        break;
      }
      validFiles.push(file);
    }

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    let updatedFiles = multiple ? [...files, ...validFiles] : validFiles;

    if (multiple && updatedFiles.length > maxFiles) {
      updatedFiles = updatedFiles.slice(0, maxFiles);
      setError(`Maximum ${maxFiles} files allowed`);
    } else {
      setError(null);
    }

    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
    setError(null);
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setDragOver(true);
    }
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    if (disabled) return;

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      addFiles(droppedFiles);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(e.target.files);
    }
  };

  const openFileDialog = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Upload Area */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={openFileDialog}
        className={cn(
          'relative border-2 border-dashed rounded-lg p-6',
          'flex flex-col items-center justify-center text-center',
          'transition-colors duration-150 cursor-pointer',
          dragOver
            ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/10'
            : 'border-neutral-300 dark:border-neutral-700',
          !disabled &&
            'hover:border-blue-400 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/10',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <Upload className='w-8 h-8 text-neutral-400 dark:text-neutral-500 mb-3' />
        <p className='text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1'>
          {dragOver ? 'Drop files here' : 'Click to upload or drag and drop'}
        </p>
        <p className='text-xs text-neutral-500 dark:text-neutral-400'>
          {multiple ? `Up to ${maxFiles} files` : 'Single file'} • Max{' '}
          {formatFileSize(maxSize)}
        </p>

        <input
          ref={fileInputRef}
          type='file'
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          disabled={disabled}
          className='absolute inset-0 opacity-0 cursor-pointer'
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className='mt-2 text-sm text-red-600 dark:text-red-400'>
          {error}
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className='mt-4 space-y-2'>
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className='flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg'
            >
              <div className='flex items-center space-x-3 flex-1 min-w-0'>
                <div className='flex-shrink-0 text-neutral-500 dark:text-neutral-400'>
                  {getFileIcon(file)}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate'>
                    {file.name}
                  </p>
                  <p className='text-xs text-neutral-500 dark:text-neutral-400'>
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={e => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className='flex-shrink-0 ml-2 p-1 text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-150'
              >
                <X className='w-4 h-4' />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
