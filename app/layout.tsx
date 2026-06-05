import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DustTrace — AQI Intelligence',
  description: 'Hyperlocal air quality intelligence dashboard with backend APIs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
