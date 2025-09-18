import { env } from '@/infrastructure/environment';
import { drizzle } from 'drizzle-orm/bun-sql';

export const database = drizzle({
  connection: {
    url: env.DATABASE_URL,
  },
});
