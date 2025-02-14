import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';

export function Bio() {
  const t = useTranslations('bio');
  return (
    <Box
      className='col-span-2 row-span-2'
      icon='Laugh'
      title='Sergio'
      description={t('description')}
    >
      <ul className='list-disc list-inside'>
        <li className='font-light'>{t('role')}</li>
        <li className='font-light'>
          {t('experience', {
            years: new Date().getFullYear() - new Date('01-01-2020').getFullYear(),
          })}
        </li>
        <li className='font-light'>{t('location')}</li>
        <li className='font-light'>
          {t('age', { age: new Date().getFullYear() - new Date('04-14-1999').getFullYear() })}
        </li>
      </ul>
    </Box>
  );
}
