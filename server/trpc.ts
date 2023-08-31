import { inferAsyncReturnType, initTRPC } from '@trpc/server';

import createContext from './context';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<inferAsyncReturnType<typeof createContext>>().create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
