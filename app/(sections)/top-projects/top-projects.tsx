import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
    {
      name: 'Gol Data',
      description: t('project3.description'),
      url: 'https://gol-data.vercel.app/',
      type: 'personal',
      isInProgress: true,
      imageSrc: '/gol-data-screenshot.png',
    },
  ];
  return (
    <Box
      className='md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-3 lg:col-span-2 lg:row-span-4 lg:col-start-3 lg:row-start-1'
      icon='Code'
      title={t('title')}
      description={t('description')}
    >
      <Carousel
        opts={{
          align: 'start',
        }}
        orientation='vertical'
        className='w-full my-14'
      >
        <CarouselContent className='-mt-1 h-[300px] md:h-[350px] lg:h-[300px]'>
          {topProyects.map((project) => (
            <CarouselItem
              key={project.name}
              className='pt-1 md:basis-1/2'
            >
              <TopProject
                key={project.name}
                {...project}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Box>
  );
}
