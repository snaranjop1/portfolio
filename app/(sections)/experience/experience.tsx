import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';

import { Job } from './job';

export function Experience() {
  const t = useTranslations('experience');
  const jobs = [
    {
      name: 'YipitData',
      current: true,
      dates: `Jun 2025 - ${t('current')}`,
    },
    {
      name: 'DataScope',
      dates: `Mar 2023 - Jun 2025`,
    },
    {
      name: 'HelloBUILD',
      dates: 'Aug 2022 - Mar 2023',
    },
    {
      name: 'Appspring Technologies',
      dates: 'Feb 2021 - May 2022',
    },
    {
      name: 'ACI Worldwide',
      dates: 'Jan 2020 - Dec 2020',
    },
  ];
  return (
    <Box
      className='md:col-span-2 lg:col-span-4'
      icon='BriefcaseBusiness'
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
