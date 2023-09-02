import type { User } from './user';

export type Context = {
  accessToken?: string;
  user?: User;
};
