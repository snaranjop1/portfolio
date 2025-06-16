import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Box } from '@/components/box';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function Presentation() {
  const t = useTranslations('presentation');
  return (
    <Box className='md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3'>
      <div className='mt-[-20px] leading-relaxed'>
        {t.rich('text', {
          company: 'YipitData',
          companylink: (chunks) => (
            <a
              href='https://yipitdata.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 hover:scale-[1.01] duration-100 hover:text-primary'
            >
              {chunks}
            </a>
          ),
          tech: 'React + MUI + Plotly Dash',
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
                    className='rounded-md border border-muted shadow-sm object-center object-cover'
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
