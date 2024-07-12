'use server';

import { signIn } from '@/auth';
import { AuthProviderName } from './providers';

export const credentialSignIn = async ({ username, password }: { username: string; password: string }) => {
  return await signIn(AuthProviderName.credentials, { username, password });
};
