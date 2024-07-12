import Kakao from 'next-auth/providers/kakao';
import { type Provider } from '@auth/core/providers';
import Credentials from '@auth/core/providers/credentials';
import { prismaClient } from '@/db/prisma';
import { serverEnv } from '@/config/env';
import { hasher } from '@/lib/utils';

export const AuthProviderName = {
  kakao: 'kakao',
  credentials: 'email-password',
} as const;
export type AuthProviderName = (typeof AuthProviderName)[keyof typeof AuthProviderName];

export const AuthProviders = [
  Kakao({
    id: AuthProviderName.kakao,
    name: AuthProviderName.kakao,
    clientId: serverEnv.AUTH_KAKAO_ID,
    clientSecret: serverEnv.AUTH_KAKAO_SECRET,
  }), //
  Credentials({
    id: AuthProviderName.credentials,
    name: AuthProviderName.credentials,
    async authorize({ email, password }) {
      // email로 사용자 정보 조회
      const user = await prismaClient.user.findUnique({
        select: { id: true, password: true },
        where: { email: email as string },
      });

      if (!user) {
        return null;
      }

      if (!hasher.compare(user.password || '', password as string)) {
        return null;
      }

      // 조회한 정보 return
      return { id: user.id, email: email as string };
    },
  }),
] satisfies Provider[];
