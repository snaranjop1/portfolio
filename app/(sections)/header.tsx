import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

export function Header() {
  const t = useTranslations('header');
  return (
    <header className='flex flex-col items-center justify-center gap-2 p-4 lg:flex-row lg:gap-6 lg: mb-6'>
      <Image
        width={100}
        height={100}
        src='/avatar.png'
        alt='avatar of Sergio Naranjo'
        className='rounded-full w-24 h-24 border-2 object-cover bg-primary border-primary'
      />
      <div className='flex flex-col items-center lg:items-start'>
        <h1 className='text-3xl font-extrabold text-center lg:text-left'>{t('title')}</h1>
        <Badge className='text-2xl font-medium text-center lg:text-left mt-1 w-fit'>
          {t('subtitle')}
        </Badge>
      </div>
    </header>
  );
}
