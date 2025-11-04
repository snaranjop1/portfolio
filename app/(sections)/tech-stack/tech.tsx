import { ReactNode } from 'react';

import { ChartSpline } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
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
  ZustandIcon,
} from '@/icons';
import { ReactQueryIcon } from '@/icons/react-query';
import { cn } from '@/lib/utils';

interface TechProps {
  name: string | ReactNode;
  small?: boolean;
}

const techIcons = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JavascriptIcon,
  TypeScript: TypescriptIcon,
  React: ReactIcon,
  'Next.js': NextIcon,
  TailwindCSS: TailwindIcon,
  Tailwind: TailwindIcon,
  Zustand: ZustandIcon,
  'React Query': ReactQueryIcon,
  'TanStack Query': ReactQueryIcon,
  Redux: ReduxIcon,
  Shadcn: ShadcnIcon,
  'Material UI': MaterialUiIcon,
  Firebase: FirebaseIcon,
  Supabase: SupabaseIcon,
  'Node.js': NodejsIcon,
  Figma: FigmaIcon,
  Recharts: ChartSpline,
};

export function Tech({ name, small = false }: TechProps) {
  const techName = typeof name === 'string' ? name : String(name);
  const Icon = techIcons[techName as keyof typeof techIcons];
  return (
    <>
      <Badge
        variant='secondary'
        className={cn('inline-flex items-center gap-2 text-md', small && 'text-xs px-1')}
      >
        {Icon && (
          <Icon
            width={small ? 10 : 12}
            height={small ? 10 : 12}
          />
        )}
        <span>{name}</span>
      </Badge>
    </>
  );
}
