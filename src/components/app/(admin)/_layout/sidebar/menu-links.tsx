'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { IoSettingsSharp } from 'react-icons/io5';

type Props = React.HTMLAttributes<HTMLElement>;

export const MenuLinks = ({}: Readonly<Props>) => {
  return (
    <section className="px-3 whitespace-nowrap">
      <Accordion type="multiple" defaultValue={['item-1']}>
        <AccordionItem className="border-0" value="item-1">
          <AccordionTrigger className="text-foreground/80 hover:text-primary hover:no-underline">
            <span className="flex gap-x-1 items-center">
              <IoSettingsSharp className="text-xl" /> 사이트 관리
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-2" asChild>
            <nav className="flex flex-col gap-y-3 text-muted-foreground">
              <MenuItemLink href={'/admin/settings'}>기초정보관리</MenuItemLink>
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const MenuItemLink = ({ children, href }: Readonly<{ children: React.ReactNode; href: string }>) => {
  return (
    <Link
      className="flex items-center gap-x-2 font-medium transition-all duration-100 hover:text-primary hover:before:bg-primary before:transition-all before:duration-100 before:size-1 before:inline-block before:rounded-full before:bg-muted-foreground"
      href={href}
    >
      {children}
    </Link>
  );
};
