import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IsoFlip Barcelona',
  description: 'A semi-open isometric city mirror world.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
