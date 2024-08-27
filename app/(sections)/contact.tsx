'use client';

import { Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

import { Box } from '@components/box';

import { EMAIL } from '@/constants';

export function Contact() {
  const links = [
    {
      name: 'Resume',
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
    >
      <h2 className='text-lg font-bold'>Contact & Media</h2>
      <p className='font-light text-sm'>Feel free to check my social media and contact me</p>
      <div className='flex flex-col mt-4'>
        <p
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            toast.success('Email copied to clipboard!');
          }}
          className='font-semibold underline underline-offset-4 hover:text-primary-500 flex gap-2 items-center w-fit cursor-pointer'
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
            className='font-semibold underline underline-offset-4 hover:text-primary-500 flex gap-2 items-center w-fit'
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
