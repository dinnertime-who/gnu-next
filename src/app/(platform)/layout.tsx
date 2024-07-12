import { Header } from '@/components/app/(platform)/_layout/header';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="h-screen">{children}</main>
    </>
  );
}
