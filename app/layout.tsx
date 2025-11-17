import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Akın Öztorun · Senior Frontend Engineer',
    description:
        'Senior Frontend Engineer focused on product-minded frontend architecture, reliability, and quality.',
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