import { env } from '@/infrastructure/environment';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/infrastructure/drizzle/schemas',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
