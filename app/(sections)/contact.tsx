import { Contact2, ExternalLink } from 'lucide-react';

import { Box } from '@components/box';

import { EMAIL } from '@/constants';

export function Contact() {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergionaranjop/',
    },
    {
      name: 'Github',
      url: 'https://github.com/snaranjop1',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/naranhack',
    },
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1rJLfT9BpraVOwCzYMaIol3JhtDJ1EOH7/view',
    },
    {
      name: 'Email',
      url: `mailto:${EMAIL}`,
    },
  ];
  return (
    <Box
      className='col-span-2'
      icon={
        <Contact2
          size={16}
          color='gray'
        />
      }
    >
      <h2 className='text-lg font-bold'>Contact & Media</h2>
      <p className='font-light text-sm'>Feel free to check my social media and contact me</p>
      <div className='flex flex-col mt-4'>
        {links.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            className='font-semibold underline underline-offset-4 hover:text-primary-500 flex gap-2 items-center'
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
