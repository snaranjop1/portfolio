import { ExternalLink, Github } from 'lucide-react';

interface TopProjectProps {
  name: string;
  description: string;
  url?: string;
  github?: string;
  type: string;
}

export function TopProject({ name, description, url, github, type }: TopProjectProps) {
  return (
    <div className='border shadow-sm rounded-md p-4 flex flex-col gap-4 lg:items-center lg:flex-row lg:justify-between'>
      <div>
        <a
          target='_blank'
          href={url ?? github ?? '#'}
          className='font-semibold items-center hover:cursor-pointer underline hover:text-primary-500'
        >
          {name}
        </a>
        <p className='text-sm font-light'>{description}</p>
        <p className='text-xs font-thin'>{type === 'personal' ? 'Personal' : 'Work'}</p>
      </div>
      <div className='flex gap-2'>
        {url && (
          <a
            href={url}
            aria-label='Visit project'
            target='_blank'
          >
            <ExternalLink
              size={20}
              className='hover:stroke-primary-500'
            />
          </a>
        )}
        {github && (
          <a
            href={github}
            aria-label='Visit project repository'
            target='_blank'
          >
            <Github
              size={20}
              className='hover:stroke-primary-500'
            />
          </a>
        )}
      </div>
    </div>
  );
}
