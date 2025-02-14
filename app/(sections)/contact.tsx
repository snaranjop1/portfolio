'use client';

import { Copy, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Box } from '@/components/box';
import { EMAIL } from '@/constants';

export function Contact() {
  const t = useTranslations('contact');
  const links = [
    {
      name: t('resume'),
      url: 'https://drive.google.com/file/d/1rJLfT9BpraVOwCzYMaIol3JhtDJ1EOH7/view',
    },
    {
      name: 'Github',
      url: 'https://github.com/snaranjop1',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergionaranjop/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/naranhack',
    },
  ];
  return (
    <Box
      className='col-span-2'
      icon='Contact'
      title={t('title')}
      description={t('description')}
    >
      <div className='flex flex-col'>
        <p
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            toast.success(t('emailCopied'));
          }}
          className='font-semibold underline underline-offset-4 hover:text-primary flex gap-2 items-center w-fit cursor-pointer'
        >
          Email
          <Copy
            size={12}
            className='text-inherit'
          />
        </p>
        {links.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            className='font-semibold underline underline-offset-4 hover:text-primary flex gap-2 items-center w-fit'
          >
            {name}{' '}
            <ExternalLink
              size={12}
              className='text-inherit'
            />
          </a>
        ))}
      </div>
    </Box>
  );
}
