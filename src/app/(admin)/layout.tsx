import { Header } from '@/components/app/(admin)/_layout/header/header';
import { Sidebar } from '@/components/app/(admin)/_layout/sidebar/sidebar';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loading className="h-screen " size={60} />}>
      <section className="bg-muted min-h-screen flex">
        <Sidebar className="" />

        <section className="flex flex-col flex-1">
          <Header className="h-20 sticky top-0" />
          <main className="bg-muted">{children}</main>
        </section>
      </section>
    </Suspense>
  );
}
