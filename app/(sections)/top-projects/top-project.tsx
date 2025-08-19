import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';

interface TopProjectProps {
  name: string;
  description: string;
  url?: string;
  github?: string;
  type: string;
  isInProgress?: boolean;
}

export function TopProject({
  name,
  description,
  url,
  github,
  type,
  isInProgress,
}: TopProjectProps) {
  const t = useTranslations('topProjects');
  return (
    <a
      target='_blank'
      href={url ?? github ?? '#'}
      className='block transition-transform hover:scale-[1.02] duration-100 group'
    >
      <div className='border border-muted shadow-sm rounded-md bg-muted p-4 flex flex-col gap-4 lg:items-center lg:flex-row lg:justify-between'>
        <div className='space-y-2'>
          <span className='font-semibold items-center group-hover:text-primary flex gap-2'>
            {name}
            {isInProgress && <span className='text-xs'>🚧</span>}
          </span>
          <p className='text-sm'>{description}</p>
          <div className='flex gap-2 mt-1'>
            <Badge className='text-xs'>{type === 'personal' ? t('personal') : t('job')}</Badge>
            {isInProgress && (
              <Badge
                variant='outline'
                className='text-xs'
              >
                {t('inProgress')}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
