export interface ComponentSchemaData {
  name: string;
  description: string;
  url: string;
  category: string;
}

export function generateComponentSchema(component: ComponentSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: component.name,
    description: component.description,
    url: component.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    programmingLanguage: 'React',
    creator: {
      '@type': 'Person',
      name: 'Alex Robaina',
      url: 'https://github.com/alexrobaina',
    },
    isPartOf: {
      '@type': 'SoftwareApplication',
      name: 'UIPulse',
      url: 'https://uipulse.com',
      description:
        'A comprehensive UI component library built with React, TypeScript, and Tailwind CSS',
    },
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UIPulse',
    url: 'https://uipulse.com',
    logo: 'https://uipulse.com/images/logo.png',
    description:
      'A comprehensive UI component library built with React, TypeScript, and Tailwind CSS',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Alex Robaina',
      url: 'https://github.com/alexrobaina',
    },
    sameAs: ['https://github.com/alexrobaina/uipulse'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://github.com/alexrobaina/uipulse/issues',
    },
  };
}

export function generateTechArticleSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: description,
    url: url,
    author: {
      '@type': 'Person',
      name: 'Alex Robaina',
      url: 'https://github.com/alexrobaina',
    },
    publisher: {
      '@type': 'Organization',
      name: 'UIPulse',
      url: 'https://uipulse.com',
    },
    datePublished: '2024-08-31',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    proficiencyLevel: 'Beginner',
    dependencies: ['React', 'TypeScript', 'Tailwind CSS'],
    programmingLanguage: 'React',
  };
}
