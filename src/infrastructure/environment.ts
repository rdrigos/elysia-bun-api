import { z } from 'zod';

const schema = z.object({
  // General
  NODE_ENV: z.enum(['development', 'staging', 'production']),

  // Application
  NAME: z.string(),
  DESCRIPTION: z.string(),
  VERSION: z.string().default('1.0.0'),
  PORT: z.coerce.number().min(80).max(65535),
});

export const env = schema.parse(process.env);
