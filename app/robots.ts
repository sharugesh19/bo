import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/account/', '/checkout/', '/cart/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/account/', '/checkout/'],
      },
    ],
    sitemap: 'https://auraboutique.in/sitemap.xml',
    host: 'https://auraboutique.in',
  };
}
