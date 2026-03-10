import { LucideIcon } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface BoxProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  icon?: LucideIcon;
}

export function Box({ className, children, icon: IconComponent, title, description }: BoxProps) {
  return (
    <Card className={`${className ?? ''} p-4 shadow-lg`}>
      <CardHeader className='mb-1 space-y-0 pb-4'>
        {IconComponent && (
          <div className='p-2 mb-4 border w-fit shadow-sm rounded-lg text-muted-foreground'>
            <IconComponent size={16} />
          </div>
        )}
        {title && <CardTitle className='text-lg font-bold'>{title}</CardTitle>}
        {description && (
          <CardDescription className='font-normal text-sm'>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className='font-medium'>{children}</CardContent>
    </Card>
  );
}
