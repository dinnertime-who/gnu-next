'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useSimpleContext } from '@dinnertime/react-state';
import { SidebarOpenContext } from './sidebar.context';
import type { ElementRef } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { IS_OVER_DESKTOP_WIDTH } from '@/config/constants';
import { LogoImage } from '@/components/app/logo-image';
import { MenuLinks } from './menu-links';

type Props = React.HTMLAttributes<HTMLElement>;

export const MobileSidebarSheet = ({}: Readonly<Props>) => {
  const { set, effect } = useSimpleContext(SidebarOpenContext);
  const sheetTrigger = useRef<ElementRef<'button'>>(null);
  const sheetClose = useRef<ElementRef<'button'>>(null);

  effect((value) => {
    if (IS_OVER_DESKTOP_WIDTH) return;
    value ? sheetTrigger.current?.click() : sheetClose.current?.click();
  });

  return (
    <Sheet onOpenChange={(open) => set(() => open)}>
      <SheetTrigger ref={sheetTrigger} className="hidden" />
      <SheetClose ref={sheetClose} className="hidden" />
      <SheetContent className="" aria-roledescription="mob_side_bar">
        <SheetHeader>
          <SheetTitle>
            <Link className="inline-block mb-2" href={'/admin'}>
              <LogoImage />
            </Link>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <MenuLinks />
      </SheetContent>
    </Sheet>
  );
};
