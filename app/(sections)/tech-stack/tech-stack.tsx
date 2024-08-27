import { Box } from '@components/box';

import {
  FigmaIcon,
  FirebaseIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  ReduxIcon,
  SupabaseIcon,
  TailwindIcon,
} from '@/icons';

import { Tech } from './tech';

export function TechStack() {
  const techStack = [
    {
      name: 'JavaScript',
      description: 'Language',
      icon: (
        <JavascriptIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'React',
      description: 'Library',
      icon: (
        <ReactIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Next.js',
      description: 'Framework',
      icon: (
        <NextIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'TailwindCSS',
      description: 'Framework',
      icon: (
        <TailwindIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Redux',
      description: 'Tool',
      icon: (
        <ReduxIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Firebase',
      description: 'BaaS',
      icon: (
        <FirebaseIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Supabase',
      description: 'BaaS',
      icon: (
        <SupabaseIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Figma',
      description: 'Design',
      icon: (
        <FigmaIcon
          width={35}
          height={35}
        />
      ),
    },
  ];
  return (
    <Box className='col-span-6 row-span-2 row-start-8'>
      <h2 className='text-lg font-bold'>Tech Stack</h2>
      <p className='font-light text-sm mb-6'>All the tools I use to build amazing things</p>
      <div className='flex gap-8 flex-wrap'>
        {techStack.map((tech) => (
          <Tech
            key={tech.name}
            {...tech}
          />
        ))}
      </div>
    </Box>
  );
}
