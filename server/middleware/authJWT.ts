import { TRPCError } from '@trpc/server';
import jwt_decode from 'jwt-decode';

import { middleware, publicProcedure } from '../trpc';
import { userSchema } from '../types/user';
import type { User } from '../types/user';

const m = middleware(({ ctx, next }) => {
  const { accessToken } = ctx;

  // TODO: check token validity
  if (!accessToken) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  const user: User = jwt_decode(accessToken);
  const isValid = userSchema.safeParse(user);

  if (!isValid.success) {
    throw new TRPCError({ code: 'PARSE_ERROR' });
  }

  return next({ ctx: { user } });
});

export const protectedProcedure = publicProcedure.use(m);
