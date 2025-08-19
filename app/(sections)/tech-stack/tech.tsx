import { Badge } from '@/components/ui/badge';

interface TechProps {
  icon: React.ReactNode;
  name: string;
}

export function Tech({ icon, name }: TechProps) {
  return (
    <>
      <Badge
        variant='secondary'
        className='flex items-center gap-2 text-md'
      >
        {icon}
        <span>{name}</span>
      </Badge>
    </>
  );
}
