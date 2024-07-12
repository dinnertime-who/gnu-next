'use client';

import { Separator } from '@/components/ui/separator';
import { SocialLogin } from './SocialLogin';
import { CredentialLogin } from './CredentialLogin';

export const LoginForm = () => {
  return (
    <article className="flex flex-col gap-y-2">
      <CredentialLogin></CredentialLogin>

      <Separator className="my-4 bg-slate-50"></Separator>

      <SocialLogin></SocialLogin>
    </article>
  );
};
