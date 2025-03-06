import { Badge } from '@/components/ui/badge';

interface TechProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export function Tech({ icon, name, description }: TechProps) {
  return (
    <>
      <div className='flex items-center gap-2'>
        <div className='border-dashed border border-muted-foreground w-fit p-3 rounded-xl'>
          {icon}
        </div>
        <div>
          <h3 className='font-semibold'>{name}</h3>
          <Badge
            className='text-xs px-1 py-0.5'
            variant='secondary'
          >
            {description}
          </Badge>
        </div>
      </div>
    </>
  );
}
