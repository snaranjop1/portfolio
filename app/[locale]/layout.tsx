import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inconsolata } from 'next/font/google';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';
import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';

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
                  Made with ❤️ by{' '}
                  <Button
                    variant='link'
                    asChild
                    className='p-0 text-sm text-primary'
                  >
                    <a
                      href='https://github.com/snaranjop1'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      @naranhack
                    </a>
                  </Button>
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
