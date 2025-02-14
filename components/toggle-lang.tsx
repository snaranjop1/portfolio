import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export function ToggleLang() {
  const locale = useLocale();

  return (
    <Button
      variant='ghost'
      size='icon'
      className='self-end'
      asChild
    >
      <Link
        href='/'
        locale={locale}
      >
        <span className='font-semibold text-lg'>{locale.toUpperCase()}</span>
      </Link>
    </Button>
  );
}
