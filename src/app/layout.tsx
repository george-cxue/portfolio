import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { openGraph } from './metadata';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.georgexue.me'),
  title: "Hi, I'm George Xue!",
  description:
    'Welcome to my personal website, an evolving collection of my projects, thoughts, and experiences.',
  openGraph: openGraph,
  alternates: {
    canonical: 'https://www.georgexue.me/about',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
