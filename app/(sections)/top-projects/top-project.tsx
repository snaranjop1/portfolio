import { ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';

interface TopProjectProps {
  name: string;
  description: string;
  url?: string;
  github?: string;
  type: string;
}

export function TopProject({ name, description, url, github, type }: TopProjectProps) {
  const t = useTranslations('topProjects');
  return (
    <div className='border border-muted-foreground border-dashed rounded-md p-4 flex flex-col gap-4 lg:items-center lg:flex-row lg:justify-between'>
      <div>
        <a
          target='_blank'
          href={url ?? github ?? '#'}
          className='font-semibold items-center hover:cursor-pointer underline hover:text-primary'
        >
          {name}
        </a>
        <p className='text-sm font-light'>{description}</p>
        <Badge
          variant='secondary'
          className='text-xs font-light mt-1'
        >
          {type === 'personal' ? t('personal') : t('job')}
        </Badge>
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
              className='hover:stroke-primary'
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
              className='hover:stroke-primary'
            />
          </a>
        )}
      </div>
    </div>
  );
}
