import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export function ToggleLang() {
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'es' : 'en';

  return (
    <Button
      variant='ghost'
      size='icon'
      className='self-end'
      asChild
    >
      <Link
        href='/'
        locale={nextLocale}
      >
        <span className='font-semibold text-lg'>{nextLocale.toUpperCase()}</span>
      </Link>
    </Button>
  );
}
