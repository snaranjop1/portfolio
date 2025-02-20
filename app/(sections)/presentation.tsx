import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';
import { Badge } from '@/components/ui/badge';
import { DatascopeIcon, ReactIcon } from '@/icons';

export function Presentation() {
  const t = useTranslations('presentation');
  return (
    <Box className='md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3'>
      <div className='text-normal mt-[-20px]'>
        {`${t('part1')} `}
        <Badge
          variant='outline'
          className='inline-flex items-center gap-2 text-sm'
        >
          <DatascopeIcon
            width={14}
            height={14}
          />
          DataScope
        </Badge>
        {', '}
        {`${t('part2')} `}
        <Badge
          variant='outline'
          className='inline-flex items-center gap-2 text-sm'
        >
          <ReactIcon
            width={14}
            height={14}
          />
          React
        </Badge>
        {` ${t('part4')}`}
      </div>
    </Box>
  );
}
