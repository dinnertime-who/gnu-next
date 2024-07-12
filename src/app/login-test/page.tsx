import { LoginForm } from './_component/LoginForm/LoginForm';

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

export default async function page({ searchParams }: PageProps) {
  const error = new URLSearchParams(searchParams).get('error');
  const code = new URLSearchParams(searchParams).get('code');

  return (
    <main>
      <section className="container flex flex-col justify-center min-h-screen">
        {error && code ? (
          <article className="p-4">
            <p className="text-destructive text-center">
              로그인에 실패했습니다. <br />
              이메일, 비밀번호를 확인해주세요
            </p>
          </article>
        ) : (
          <></>
        )}
        <LoginForm></LoginForm>
      </section>
    </main>
  );
}
