import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LogoImage } from '@/components/app/logo-image';

type Props = React.HTMLAttributes<HTMLElement>;

export const Header = ({ className }: Readonly<Props>) => {
  return (
    <header className={cn('sticky top-0 border-b', className)}>
      <div className="h-20 container flex justify-between items-center">
        <Link href={'/'}>
          <LogoImage />
        </Link>

        <nav className="flex items-center gap-x-6 uppercase text-lg font-medium">
          <Link href={'/business'}>business</Link>
          <span className="size-1.5 bg-muted-foreground rounded-full"></span>
          <Link href={'/partner'}>partner</Link>
          <span className="size-1.5 bg-muted-foreground rounded-full"></span>
          <Link href={'/contact'}>contact</Link>
        </nav>
      </div>
    </header>
  );
};
