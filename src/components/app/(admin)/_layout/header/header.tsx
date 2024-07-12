'use client';
import { cn } from '@/lib/utils';
import { SearchInput } from '@/components/app/search-input';
import { MenuOpener } from './menu-opener';
import { Profile } from './profile';

type Props = React.HTMLAttributes<HTMLElement>;

export const Header = ({ className }: Readonly<Props>) => {
  return (
    <header className={cn('bg-background border-b shadow flex items-center justify-between p-4', className)}>
      <div className="flex items-center gap-x-4">
        <MenuOpener />
        <SearchInput className="hidden sm:inline-block" placeholder="검색..." />
      </div>

      <Profile />
    </header>
  );
};
