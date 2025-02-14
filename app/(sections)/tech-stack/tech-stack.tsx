import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';
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
import { ReactQueryIcon } from '@/icons/react-query';
import { ZustandIcon } from '@/icons/zustand';

import { Tech } from './tech';

export function TechStack() {
  const t = useTranslations('techStack');

  const techStack = [
    {
      name: 'JavaScript',
      description: t('language'),
      icon: (
        <JavascriptIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'React',
      description: t('library'),
      icon: (
        <ReactIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Next.js',
      description: t('framework'),
      icon: (
        <NextIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'TailwindCSS',
      description: t('framework'),
      icon: (
        <TailwindIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Zustand',
      description: t('library'),
      icon: (
        <ZustandIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'React Query',
      description: t('library'),
      icon: (
        <ReactQueryIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Redux',
      description: t('library'),
      icon: (
        <ReduxIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Firebase',
      description: t('baas'),
      icon: (
        <FirebaseIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Supabase',
      description: t('baas'),
      icon: (
        <SupabaseIcon
          width={35}
          height={35}
        />
      ),
    },
    {
      name: 'Figma',
      description: t('design'),
      icon: (
        <FigmaIcon
          width={35}
          height={35}
        />
      ),
    },
  ];
  return (
    <Box
      className='col-span-6 row-span-2 row-start-8'
      title={t('title')}
      description={t('description')}
    >
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
