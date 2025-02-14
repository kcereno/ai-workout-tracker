import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import BottomNav from '@/components/BottomNav/BottomNav';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Optimize for mobile and prevent zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, user-scalable=no"
        />

        {/* Enable fullscreen mode on iOS when added to the Home Screen */}
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="My iOS Web App"
        />

        {/* Add an iOS Home Screen icon */}
        <link
          rel="apple-touch-icon"
          href="/icons/icon-192x192.png"
        />

        <link
          rel="manifest"
          href="/manifest.json"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {children}

        <BottomNav />
      </body>
    </html>
  );
}
