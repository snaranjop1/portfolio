import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';

import { Tech } from './tech';

export function TechStack() {
  const t = useTranslations('techStack');

  const techStack = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'TailwindCSS',
    'Zustand',
    'React Query',
    'Redux',
    'Shadcn',
    'Material UI',
    'Recharts',
    'Firebase',
    'Supabase',
    'Node.js',
    'Figma',
  ];

  return (
    <Box
      className='col-span-6 row-span-2 row-start-8'
      title={t('title')}
      description={t('description')}
    >
      <div className='flex gap-3 flex-wrap'>
        {techStack.map((tech) => (
          <Tech
            key={tech}
            name={tech}
          />
        ))}
      </div>
    </Box>
  );
}
