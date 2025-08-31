'use client';
import FileUploader from '@/app/ui/molecules/FileUploader';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

export default function FileUploaderDemo() {
  const [singleFile, setSingleFile] = useState<File[]>([]);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Single File Upload
          </h3>
          <FileUploader
            multiple={false}
            maxSize={5 * 1024 * 1024} // 5MB
            onFilesChange={setSingleFile}
          />
          {singleFile.length > 0 && (
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Selected: {singleFile[0].name} (
              {(singleFile[0].size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Multiple Files Upload
          </h3>
          <FileUploader
            multiple
            maxFiles={5}
            maxSize={10 * 1024 * 1024} // 10MB
            onFilesChange={setMultipleFiles}
          />
          {multipleFiles.length > 0 && (
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              {multipleFiles.length} file(s) selected (
              {(
                multipleFiles.reduce((acc, file) => acc + file.size, 0) /
                1024 /
                1024
              ).toFixed(2)}{' '}
              MB total)
            </p>
          )}
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Images Only (PNG, JPG, GIF, WebP)
          </h3>
          <FileUploader
            multiple
            accept='image/*'
            maxFiles={3}
            maxSize={5 * 1024 * 1024} // 5MB per image
            onFilesChange={setImageFiles}
          />
          {imageFiles.length > 0 && (
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              <p>{imageFiles.length} image(s) selected:</p>
              <ul className='list-disc list-inside ml-2'>
                {imageFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Documents Only (PDF, DOC, TXT)
          </h3>
          <FileUploader
            multiple
            accept='.pdf,.doc,.docx,.txt'
            maxFiles={3}
            maxSize={20 * 1024 * 1024} // 20MB per document
            onFilesChange={setDocumentFiles}
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Small File Size Limit (1MB)
          </h3>
          <FileUploader
            multiple
            maxFiles={2}
            maxSize={1024 * 1024} // 1MB
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Disabled State
          </h3>
          <FileUploader disabled onFilesChange={() => {}} />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Compact Version
          </h3>
          <div className='max-w-md'>
            <FileUploader
              multiple
              maxFiles={2}
              maxSize={5 * 1024 * 1024}
              className='text-center'
            />
          </div>
        </div>
      </div>
    </Preview>
  );
}
