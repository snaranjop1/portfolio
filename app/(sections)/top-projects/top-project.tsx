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
    <div className='border border-muted shadow-sm rounded-md bg-muted p-4 flex flex-col gap-4 lg:items-center lg:flex-row lg:justify-between'>
      <div className='space-y-2'>
        <a
          target='_blank'
          href={url ?? github ?? '#'}
          className='font-semibold items-center hover:cursor-pointer underline hover:text-primary'
        >
          {name}
        </a>
        <p className='text-sm font-light'>{description}</p>
        <Badge className='text-xs font-light mt-1'>
          {type === 'personal' ? t('personal') : t('job')}
        </Badge>
      </div>
    </div>
  );
}
