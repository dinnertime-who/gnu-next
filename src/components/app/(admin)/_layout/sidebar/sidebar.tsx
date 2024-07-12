'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSimpleContext } from '@dinnertime/react-state';
import { IS_OVER_DESKTOP_WIDTH } from '@/config/constants';
import { SidebarOpenContext } from './sidebar.context';
import { DesktopSidebarWrapper } from './desktop-sidebar-wrapper';
import { MobileSidebarSheet } from './mobile-sidebar-sheet';

type Props = React.HTMLAttributes<HTMLElement>;

export const Sidebar = ({}: Readonly<Props>) => {
  const { set } = useSimpleContext(SidebarOpenContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (IS_OVER_DESKTOP_WIDTH) return;
    set(() => false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <>
      <DesktopSidebarWrapper />
      <MobileSidebarSheet />
    </>
  );
};
