'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { AuthProviderName } from '@/config/auth/providers';
import { cn } from '@/lib/utils';
import { useLoginActionStateStore } from './client.store';
import { clientEnv } from '@/config/env';

type Props = React.HTMLAttributes<HTMLElement>;

export const SocialLogin = ({ className }: Props) => {
  const loginActionPending = useLoginActionStateStore((state) => state.pending);
  const setLoginPending = useLoginActionStateStore((state) => state.setPending);

  const onClickLoginButton = async (provider: AuthProviderName) => {
    setLoginPending(true);
    await signIn(provider, { redirect: true, callbackUrl: '/' });
  };

  return (
    <article className={cn('flex flex-col gap-y-2 empty:hidden', className)}>
      {clientEnv.NEXT_PUBLIC_USE_AUTH_KAKAO ? (
        <Button type="button" disabled={loginActionPending} onClick={() => onClickLoginButton(AuthProviderName.kakao)}>
          카카오 로그인
        </Button>
      ) : (
        <></>
      )}
    </article>
  );
};
