import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uipulse.com';
  const currentDate = new Date();

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];

  // Demo routes
  const demoRoutes = [
    'layout',
    'theme-test',
    'navbar-sidebar',
    'enhanced-sidebar',
  ].map(demo => ({
    url: `${baseUrl}/demo/${demo}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Atom component routes
  const atomComponents = [
    'alert',
    'avatar',
    'badge',
    'button',
    'checkbox',
    'divider',
    'input',
    'progress',
    'show-more',
    'spinner',
    'switch',
    'tooltip',
  ];

  const atomRoutes = atomComponents.map(component => ({
    url: `${baseUrl}/atoms/${component}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Molecule component routes
  const moleculeComponents = [
    'accordion',
    'breadcrumb',
    'button-group',
    'calendar',
    'card',
    'carousel',
    'currency-input',
    'dropdown',
    'file-uploader',
    'input-otp',
    'menu',
    'modal',
    'navbar',
    'navigation-menu',
    'pagination',
    'quantity-input',
    'sidebar',
    'slider-modal',
    'tab',
    'table',
    'toggle-group',
    'toolkit',
  ];

  const moleculeRoutes = moleculeComponents.map(component => ({
    url: `${baseUrl}/molecules/${component}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...demoRoutes, ...atomRoutes, ...moleculeRoutes];
}
