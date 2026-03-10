import { Code } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';

import { TopProject } from './top-project';

export function TopProjects() {
  const t = useTranslations('topProjects');
  const topProyects = [
    {
      name: 'DataScope',
      description: t('project1.description'),
      url: 'https://datascope.io',
      type: 'work',
      imageSrc: '/datascope-screenshot.png',
    },
    {
      name: 'Cóbralo',
      description: t('project2.description'),
      url: 'https://cobralo.app/',
      type: 'personal',
      imageSrc: '/cobralo-screenshot.png',
    },
  ];
  return (
    <Box
      className='md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-3 lg:col-span-2 lg:row-span-4 lg:col-start-3 lg:row-start-1'
      icon={Code}
      title={t('title')}
      description={t('description')}
    >
      <div className='flex flex-col gap-3 w-full my-4'>
        {topProyects.map((project) => (
          <TopProject
            key={project.name}
            {...project}
          />
        ))}
      </div>
    </Box>
  );
}
