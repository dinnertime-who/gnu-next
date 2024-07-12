'use client';

import { useSimpleContext } from '@dinnertime/react-state';
import { SidebarOpenContext } from './sidebar.context';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LogoImage } from '@/components/app/logo-image';
import { MenuLinks } from './menu-links';

type Props = React.HTMLAttributes<HTMLElement>;

export const DesktopSidebarWrapper = ({ className }: Readonly<Props>) => {
  const { value } = useSimpleContext(SidebarOpenContext);
  return (
    <aside
      className={cn(
        'w-0 p-0 transition-all duration-500 bg-background border sticky top-0 h-screen overflow-hidden',
        className,
        value ? 'lg:w-[225px] lg:p-4' : '',
      )}
      aria-roledescription="pc_side_bar"
    >
      <Link className="inline-block mb-5" href={'/admin'}>
        <LogoImage />
      </Link>

      <MenuLinks />
    </aside>
  );
};
