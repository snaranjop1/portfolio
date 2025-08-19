import { useTranslations } from 'next-intl';

import { Box } from '@/components/box';
import {
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  HtmlIcon,
  JavascriptIcon,
  MaterialUiIcon,
  NextIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  ShadcnIcon,
  SupabaseIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/icons';
import { ReactQueryIcon } from '@/icons/react-query';
import { ZustandIcon } from '@/icons/zustand';

import { Tech } from './tech';

export function TechStack() {
  const t = useTranslations('techStack');

  const techStack = [
    {
      name: 'HTML',
      icon: (
        <HtmlIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'CSS',
      icon: (
        <CssIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <JavascriptIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <TypescriptIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'React',
      icon: (
        <ReactIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <NextIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'TailwindCSS',
      icon: (
        <TailwindIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Zustand',
      icon: (
        <ZustandIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'React Query',
      icon: (
        <ReactQueryIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Redux',
      icon: (
        <ReduxIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Shadcn',
      icon: (
        <ShadcnIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Material UI',
      icon: (
        <MaterialUiIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <FirebaseIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Supabase',
      icon: (
        <SupabaseIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <NodejsIcon
          width={12}
          height={12}
        />
      ),
    },
    {
      name: 'Figma',
      icon: (
        <FigmaIcon
          width={12}
          height={12}
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
      <div className='flex gap-3 flex-wrap'>
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
