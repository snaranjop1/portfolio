import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inconsolata } from 'next/font/google';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';
import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import '../globals.css';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sergio Naranjo',
  description: 'Senior Frontend Developer',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body className={`${inconsolata.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='p-5 md:p-10 max-w-screen-lg container mx-auto flex flex-col'>
              <div className='flex gap-2 self-end'>
                <ToggleLang />
                <ToggleTheme />
              </div>
              {children}
              <footer className='mt-10'>
                <p className='text-sm text-center text-muted-foreground'>
                  naranhack &copy; {new Date().getFullYear()}
                </p>
              </footer>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <Toaster
        position='top-center'
        richColors
      />
    </html>
  );
}
