'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { FaUserCircle } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa6';

type Props = React.HTMLAttributes<HTMLElement>;

export const Profile = ({}: Readonly<Props>) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <FaUserCircle className="text-3xl text-primary/80 leading-none" />
        </PopoverTrigger>
        <PopoverContent className="text-sm w-max min-w-44 p-0 py-2">
          <span className="inline-block font-semibold px-3 py-2">Username</span>

          <Separator className="my-2" />

          <span className="flex items-center px-3 gap-x-2 transition-all duration-200 hover:cursor-pointer hover:bg-primary/5 h-8">
            <FaPowerOff className="text-destructive" />
            로그아웃
          </span>
        </PopoverContent>
      </Popover>
    </div>
  );
};
