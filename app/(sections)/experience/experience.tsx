import { BriefcaseBusiness } from 'lucide-react';

import { Box } from '@components/box';

import { Job } from './job';

export function Experience() {
  const jobs = [
    {
      name: 'DataScope',
      current: true,
      dates: 'Aug 2023 - Present',
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
      className='col-span-4 flex flex-col'
      icon={
        <BriefcaseBusiness
          size={16}
          color='gray'
        />
      }
    >
      <div className='flex-grow flex flex-col gap-8 lg:justify-between'>
        <div>
          <h2 className='text-lg font-bold'>Experience</h2>
          <p className='font-light text-sm'>My profesional journey through the years</p>
        </div>
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
