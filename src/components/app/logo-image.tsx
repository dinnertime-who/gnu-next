import Image from 'next/image';
import LogoUrl from '/public/logo.svg';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const LogoImage = ({ className }: Readonly<Props>) => {
  return <Image className={cn('', className)} priority={true} src={LogoUrl} alt="Logo" />;
};
