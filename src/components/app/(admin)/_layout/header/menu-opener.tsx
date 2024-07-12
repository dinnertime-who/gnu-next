'use client';

import { useSimpleContext } from '@dinnertime/react-state';
import { SidebarOpenContext } from '../sidebar/sidebar.context';
import { RiMenuFold3Line, RiMenuLine, RiMenuUnfold3Line } from 'react-icons/ri';

export const MenuOpener = () => {
  const { value, set } = useSimpleContext(SidebarOpenContext);

  return (
    <div className="text-3xl text-muted-foreground leading-none cursor-pointer" onClick={() => set((prev) => !prev)}>
      <div className="hidden lg:inline-block" aria-roledescription="pc_menu_button">
        {value ? <RiMenuFold3Line /> : <RiMenuUnfold3Line />}
      </div>
      <div className="inline-block lg:hidden" aria-roledescription="mob_menu_button">
        <RiMenuLine />
      </div>
    </div>
  );
};
