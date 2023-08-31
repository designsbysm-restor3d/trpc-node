import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';

export type User = {
  id: string;
  remoteAddress: string;
  service: string;
  refreshTokenTimeout: number;
  accessTokenTimeout: number;
  slug: number;
  iat: number;
  exp: number;
};

type Context = {
  accessToken?: string;
  user?: User;
};

const createContext = ({ req }: CreateHTTPContextOptions) => {
  const accessToken = req.headers.authorization;

  return {
    accessToken,
    user: undefined,
  } satisfies Context;
};

export default createContext;
