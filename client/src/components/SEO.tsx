import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
    noindex?: boolean;
}

export function SEO({
    title,
    description,
    image = "/og-image.png", // Assuming a default OG image exists or will be added
    url = "https://www.maximizeconsulting.org", // Replace with actual domain
    type = "website",
    noindex = false
}: SEOProps) {
    useEffect(() => {
        // Set page title
        document.title = title;

        // Helper to set or create meta tag
        const setMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Standard Meta Tags
        setMetaTag('description', description);

        // Open Graph Meta Tags
        setMetaTag('og:title', title, 'property');
        setMetaTag('og:description', description, 'property');
        setMetaTag('og:type', type, 'property');
        setMetaTag('og:url', url, 'property');
        setMetaTag('og:image', image, 'property');
        setMetaTag('og:site_name', 'Maximize Consulting', 'property');

        // Twitter Card Meta Tags
        setMetaTag('twitter:card', 'summary_large_image', 'name');
        setMetaTag('twitter:title', title, 'name');
        setMetaTag('twitter:description', description, 'name');
        setMetaTag('twitter:image', image, 'name');

        // JSON-LD Structured Data
        const schemas: any[] = [
            {
                "@context": "https://schema.org",
                "@type": "ConsultingService",
                "name": "Maximize Consulting",
                "description": description,
                "url": "https://www.maximizeconsulting.org",
                "logo": "https://www.maximizeconsulting.org/logo.png",
                "sameAs": [
                    "https://www.linkedin.com/in/maxwellchan1/"
                ],
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
                },
                "founder": {
                    "@type": "Person",
                    "name": "Maxwell Chan",
                    "jobTitle": "Founder & Lead Engineer"
                }
            }
        ];

        // Add WebSite schema for homepage to help with Sitelinks
        if (url === "https://www.maximizeconsulting.org" || url === "https://www.maximizeconsulting.org/") {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Maximize Consulting",
                "url": "https://www.maximizeconsulting.org",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.maximizeconsulting.org/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            });
        }

        let script = document.querySelector('script[type="application/ld+json"]');
        if (!script) {
            script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schemas);

        // Robots Meta Tag
        const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
        setMetaTag('robots', robotsContent);

    }, [title, description, image, url, type, noindex]);

    return null;
}
