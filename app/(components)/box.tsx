import { LucideIcon, icons } from 'lucide-react';

interface BoxProps {
  className?: string;
  children: React.ReactNode;
  icon?: keyof typeof icons;
}

export function Box({ className, children, icon }: BoxProps) {
  const IconComponent: LucideIcon | null = icon ? icons[icon] : null;
  return (
    <div className={`${className ?? ''} border border-neutral-300 shadow-sm rounded-xl p-8`}>
      {IconComponent && (
        <div className='p-2 border w-fit shadow-sm rounded-lg mb-4 text-neutral-400'>
          <IconComponent size={16} />
        </div>
      )}
      {children}
    </div>
  );
}
