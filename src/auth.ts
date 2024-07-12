import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthProviders } from '@/config/auth/providers';
import { prismaClient } from './db/prisma';

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  providers: AuthProviders,
  trustHost: true,
  session: { strategy: 'database' },
  pages: { error: '/login-test', signIn: '/login-test' },
  callbacks: {
    authorized(_) {
      return true;
    },
    signIn(_) {
      return true;
    },
    session({ session }) {
      return { ...session };
    },
    jwt({ token }) {
      return token;
    },
  },
  logger: {
    // error(code, ...message) {
    //   console.error(code, message);
    // },
    // warn(code, ...message) {
    //   console.warn(code, message);
    // },
    // debug(code, ...message) {
    //   console.debug(code, message);
    // },
  },
});
