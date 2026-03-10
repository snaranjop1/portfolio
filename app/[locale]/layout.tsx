import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inconsolata } from 'next/font/google';
import { Toaster } from 'sonner';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from '@/components/theme-provider';
import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';

import '../globals.css';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Sergio Naranjo | Senior Frontend Engineer',
    template: '%s | Sergio Naranjo',
  },
  description:
    'Senior Frontend Engineer specializing in React, Next.js, and TypeScript. UX & Product driven, building intuitive and performant web applications.',
  keywords: [
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'UX',
    'TailwindCSS',
    'Web Developer',
    'JavaScript',
  ],
  authors: [{ name: 'Sergio Naranjo', url: 'https://naranhack.dev' }],
  creator: 'Sergio Naranjo',
  metadataBase: new URL('https://naranhack.dev'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      es: '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://naranhack.dev',
    siteName: 'Sergio Naranjo Portfolio',
    title: 'Sergio Naranjo | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, and TypeScript. UX & Product driven, building intuitive and performant web applications.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Sergio Naranjo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sergio Naranjo | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, and TypeScript. UX & Product driven, building intuitive and performant web applications.',
    images: ['/opengraph-image.png'],
    creator: '@naranhack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sergio Naranjo',
  jobTitle: 'Senior Frontend Engineer',
  url: 'https://naranhack.dev',
  image: 'https://naranhack.dev/avatar.png',
  sameAs: [
    'https://github.com/snaranjop1',
    'https://www.linkedin.com/in/sergionaranjop/',
    'https://x.com/naranhack',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'TailwindCSS',
    'Node.js',
    'UX Design',
    'Frontend Development',
    'React Query',
    'Redux',
    'Zustand',
    'Firebase',
    'Supabase',
    'Material UI',
    'Figma',
  ],
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
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        <Toaster position='top-center' />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
