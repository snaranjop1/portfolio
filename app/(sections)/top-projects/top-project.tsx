import { ArrowUpRight, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TopProjectProps {
  name: string;
  description: string;
  url?: string;
  github?: string;
  imageSrc: string;
  type: string;
  isInProgress?: boolean;
}

export function TopProject({
  name,
  description,
  url,
  github,
  imageSrc,
  type,
  isInProgress,
}: TopProjectProps) {
  const t = useTranslations('topProjects');
  return (
    <a
      target='_blank'
      href={url ?? github ?? '#'}
      className='flex justify-center group hover:scale-[1.02] transition-all duration-200'
    >
      <div className='border rounded-lg p-1 w-full'>
        <div className='flex items-center p-1.5 gap-2'>
          <div className='flex gap-1.5'>
            <span className='rounded-full bg-red-500 w-2 h-2'></span>
            <span className='rounded-full bg-yellow-500 w-2 h-2'></span>
            <span className='rounded-full bg-green-500 w-2 h-2'></span>
          </div>
          <span className='text-xs rounded-lg bg-muted px-2 py-0.5 flex-1 flex items-center gap-2 truncate'>
            <Globe className='w-3 h-3 hidden md:block' />
            {url}
          </span>
          <Button
            variant='outline'
            size='icon'
            className='group-hover:bg-primary group-hover:text-primary-foreground p-1 w-5 h-5'
            aria-label='Open in new tab'
          >
            <ArrowUpRight className='w-3 h-3' />
          </Button>
        </div>
        <div
          className='w-full h-24 bg-muted rounded-lg relative'
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className='absolute bottom-0 left-0 right-0 p-1.5 backdrop-blur-sm rounded-b-lg bg-background/50'>
            <div className='text-sm font-semibold flex items-center gap-2'>
              {`${name} (${type})`}
              {isInProgress && (
                <Badge
                  className='text-[10px] px-1.5 py-0'
                  variant='secondary'
                >
                  🚧 {t('inProgress')}
                </Badge>
              )}
            </div>
            <p className='text-[11px] font-light line-clamp-1'>{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
