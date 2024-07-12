'use client';
import { cn } from '@/lib/utils';
import { RiSearchLine } from 'react-icons/ri';
import type { InputProps } from '../ui/input';
import { Input } from '../ui/input';

type Props = InputProps;

export const SearchInput = ({ className, ...props }: Readonly<Props>) => {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute top-0 bottom-0 left-0 w-10 grid place-items-center">
        <RiSearchLine className=" text-xl text-muted-foreground/60" />
      </div>
      <Input className="pl-10" {...props} />
    </div>
  );
};
