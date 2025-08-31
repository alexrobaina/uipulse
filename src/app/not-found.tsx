'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] px-4 text-center'>
      <div className='space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-6xl font-bold text-muted-foreground'>404</h1>
          <h2 className='text-2xl font-semibold'>Page Not Found</h2>
          <p className='text-muted-foreground max-w-md mx-auto'>
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
          >
            <Home className='w-4 h-4' />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
