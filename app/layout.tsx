import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sergio Naranjo',
  description: 'Senior Frontend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inconsolata.className}>{children}</body>
      <Toaster
        position='top-center'
        richColors
      />
    </html>
  );
}
