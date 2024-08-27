import { Box } from '@components/box';

import { TopProject } from './top-project';

export function TopProjects() {
  const topProyects = [
    {
      name: 'Ordenao',
      description: 'Web app to handle inventory pretty easily',
      github: 'https://github.com/snaranjop1/ordenao',
      type: 'personal',
    },
    {
      name: 'DataScope',
      description: 'Full frontend migration from Ruby on Rails views to React + MUI + Firebase',
      url: 'https://datascope.io',
      type: 'work',
    },
    {
      name: 'Impostor Syndrome',
      description: 'Overview of impostor syndrome worldwide',
      type: 'personal',
    },
  ];
  return (
    <Box
      className='col-span-2 row-span-4 col-start-3 row-start-1'
      icon='Code'
    >
      <h2 className='text-lg font-bold'>Top Projects</h2>
      <p className='font-light text-sm'>The work I&apos;m proud of</p>
      <div className='flex flex-col gap-4 mt-4'>
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
