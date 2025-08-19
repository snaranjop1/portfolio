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
      className='flex justify-center group hover:scale-[0.98] transition-all duration-200'
    >
      <div className='border rounded-lg p-1 aspect-video max-w-lg w-full'>
        <div className='flex items-center p-2 gap-3'>
          <div className='flex gap-2'>
            <span className='rounded-full bg-red-500 w-2 h-2'></span>
            <span className='rounded-full bg-yellow-500 w-2 h-2'></span>
            <span className='rounded-full bg-green-500 w-2 h-2'></span>
          </div>
          <span className='text-xs rounded-lg bg-muted px-2 py-1 flex-1 flex items-center gap-2'>
            <Globe className='w-3 h-3' />
            {url}
          </span>
          <Button
            variant='outline'
            size='icon'
            className='group-hover:bg-primary group-hover:text-primary-foreground p-1 w-6 h-6'
          >
            <ArrowUpRight />
          </Button>
        </div>
        <div
          className='w-full h-full bg-muted rounded-lg relative'
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute bottom-0 left-0 right-0 p-2 backdrop-blur-sm rounded-b-lg bg-background/50'>
            <div className='font-semibold flex items-center gap-2'>
              {`${name} (${type})`}
              {isInProgress && (
                <Badge
                  className='text-xs'
                  variant='secondary'
                >
                  🚧 {t('inProgress')}
                </Badge>
              )}
            </div>
            <p className='text-xs font-light mt-1'>{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
