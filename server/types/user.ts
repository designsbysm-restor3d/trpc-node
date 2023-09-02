import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  remoteAddress: z.string(),
  service: z.string(),
  refreshTokenTimeout: z.number(),
  accessTokenTimeout: z.number(),
  slug: z.number(),
  iat: z.number(),
  exp: z.number(),
});

export type User = z.infer<typeof userSchema>;
