import { TRPCError } from '@trpc/server';
import jwt_decode from 'jwt-decode';

import { middleware, publicProcedure } from '../trpc';
import type { User } from '../context';

const m = middleware(({ ctx, next }) => {
  const { accessToken } = ctx;

  // TODO: check token validity
  if (!accessToken) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  const user: User = jwt_decode(accessToken);

  return next({ ctx: { user } });
});

export const protectedProcedure = publicProcedure.use(m);
