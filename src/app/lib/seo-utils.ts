import { Metadata } from 'next';
import {
  generateComponentSchema,
  generateBreadcrumbSchema,
  generateTechArticleSchema,
  ComponentSchemaData,
} from './structured-data';

interface SEOPageData {
  title: string;
  description: string;
  path: string;
  type?: 'component' | 'demo' | 'home';
  component?: ComponentSchemaData;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function generatePageMetadata(data: SEOPageData): Metadata {
  const baseUrl = 'https://uipulse.com';
  const fullUrl = `${baseUrl}${data.path}`;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: fullUrl,
      siteName: 'UIPulse',
      images: [
        {
          url: `/images/og-${data.type || 'default'}.jpg`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [`/images/twitter-${data.type || 'default'}.jpg`],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function generateStructuredData(data: SEOPageData) {
  const schemas = [];

  // Always add breadcrumbs if available
  if (data.breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(data.breadcrumbs));
  }

  // Add component schema for component pages
  if (data.type === 'component' && data.component) {
    schemas.push(generateComponentSchema(data.component));
  }

  // Add tech article schema for documentation pages
  if (data.type === 'component' || data.type === 'demo') {
    schemas.push(
      generateTechArticleSchema(
        data.title,
        data.description,
        `https://uipulse.com${data.path}`
      )
    );
  }

  return schemas;
}

export function getComponentBreadcrumbs(
  type: 'atoms' | 'molecules',
  componentName: string
) {
  return [
    { name: 'Home', url: 'https://uipulse.com' },
    { name: 'Components', url: 'https://uipulse.com/#components' },
    {
      name: type === 'atoms' ? 'Atoms' : 'Molecules',
      url: `https://uipulse.com/#${type}`,
    },
    {
      name: componentName,
      url: `https://uipulse.com/${type}/${componentName.toLowerCase()}`,
    },
  ];
}

export function getDemoBreadcrumbs(demoName: string) {
  return [
    { name: 'Home', url: 'https://uipulse.com' },
    { name: 'Demo', url: 'https://uipulse.com/#demo' },
    {
      name: demoName,
      url: `https://uipulse.com/demo/${demoName.toLowerCase().replace(/\s+/g, '-')}`,
    },
  ];
}
