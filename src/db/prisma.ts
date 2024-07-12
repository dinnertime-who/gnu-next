import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import { IS_PRODUCTION } from '@/config/constants';

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (!IS_PRODUCTION) globalForPrisma.prisma = prisma;

export const prismaClient = prisma;
