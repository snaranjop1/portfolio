import { BriefcaseBusiness } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { Box } from '@/components/box';

import { Job } from './job';

export function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
  };

  const jobs = [
    {
      name: 'YipitData',
      current: true,
      dates: `${formatDate(new Date('05/01/2025'))} - ${t('current')}`,
    },
    {
      name: 'DataScope',
      dates: `${formatDate(new Date('03/31/2023'))} - ${formatDate(new Date('06/30/2025'))}`,
    },
    {
      name: 'HelloBUILD',
      dates: `${formatDate(new Date('08/01/2022'))} - ${formatDate(new Date('03/31/2023'))}`,
    },
    {
      name: 'Appspring Technologies',
      dates: `${formatDate(new Date('02/01/2021'))} - ${formatDate(new Date('05/31/2022'))}`,
    },
    {
      name: 'ACI Worldwide',
      dates: `${formatDate(new Date('01/01/2020'))} - ${formatDate(new Date('12/31/2020'))}`,
    },
  ];
  return (
    <Box
      className='md:col-span-2 lg:col-span-4'
      icon={BriefcaseBusiness}
      title={t('title')}
      description={t('description')}
    >
      <div className='flex-grow'>
        <div className='flex flex-col gap-4'>
          {jobs.map((job) => (
            <Job
              key={job.name}
              {...job}
            />
          ))}
        </div>
      </div>
    </Box>
  );
}
