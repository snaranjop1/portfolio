import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Box } from '@/components/box';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DatascopeIcon, ReactIcon } from '@/icons';

export function Presentation() {
  const t = useTranslations('presentation');
  return (
    <Box className='md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3'>
      <div className='mt-[-20px] leading-relaxed'>
        {t.rich('text', {
          company: 'DataScope',
          companylink: (chunks) => (
            <a
              href='https://datascope.io'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 hover:scale-[1.01] duration-100 hover:text-primary'
            >
              <DatascopeIcon
                width={14}
                height={14}
              />
              {chunks}
            </a>
          ),
          tech: 'React',
          techlink: (chunks) => (
            <span className='inline-flex items-center gap-2'>
              <ReactIcon
                width={14}
                height={14}
              />
              {chunks}
            </span>
          ),
          dogs: (chunks) => (
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger>
                  <span className='inline-flex cursor-pointer font-bold underline hover:text-primary'>
                    {chunks}
                  </span>
                </TooltipTrigger>
                <TooltipContent side='right'>
                  <Image
                    src='/dogs.webp'
                    alt='Dogs'
                    width={200}
                    height={150}
                    className='rounded-md border-2 border-muted-foreground object-center object-cover'
                  />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        })}
      </div>
    </Box>
  );
}
