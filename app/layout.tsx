// app/layout.tsx
import './globals.css'; // Add this import at the top
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Your description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}