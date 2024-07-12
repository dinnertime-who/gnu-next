import { z } from 'zod';

export const serverEnv = z
  .object({
    WEB_URL: z.coerce.string().readonly(),
    AUTH_SECRET: z.coerce.string().readonly(),
    DATABASE_URL: z.coerce.string().readonly(),
    AUTH_KAKAO_ID: z.coerce.string().readonly(),
    AUTH_KAKAO_SECRET: z.coerce.string().readonly(),
  })
  .parse({
    ...process.env,
    WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
  });

export const clientEnv = z
  .object({
    NEXT_PUBLIC_WEB_URL: z.coerce.string().readonly(),
    NEXT_PUBLIC_USE_AUTH_KAKAO: z.coerce
      .string()
      .transform((value) => value === 'true')
      .readonly(),
  })
  .parse({
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
    NEXT_PUBLIC_USE_AUTH_KAKAO: process.env.NEXT_PUBLIC_USE_AUTH_KAKAO,
  });
