import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';

import type { Context } from './types/context';

const createContext = ({ req }: CreateHTTPContextOptions) => {
  const accessToken = req.headers.authorization;

  return {
    accessToken,
    user: undefined,
  } satisfies Context;
};

export default createContext;
