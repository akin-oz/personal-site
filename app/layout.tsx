import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Akın Öztorun · Senior Frontend Engineer',
    description:
        'Senior Frontend Engineer focused on product-minded frontend architecture, reliability, and quality.',
    openGraph: {
        type: "website",
        url: "https://akinoztorun.dev",
        title: "Akın Öztorun – Senior Frontend Engineer",
        description:
            'Senior Frontend Engineer focused on product-minded frontend architecture, reliability, and quality.',
        images: [
            {
                url: "https://akinoztorun.dev/og-akinoztorun-dev.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Akın Öztorun – Senior Frontend Engineer",
        description:
            'Senior Frontend Engineer focused on product-minded frontend architecture, reliability, and quality.',
        images: ["https://akinoztorun.dev/og-akinoztorun-dev.jpg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="page-body">
        {children}
        </body>
        </html>
    );
}