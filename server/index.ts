import { createHTTPServer } from '@trpc/server/adapters/standalone';

import createContext from './context';
import router from './routes';
const port = 3000;

createHTTPServer({
  createContext,
  router,
}).listen(port);

console.info(`listening on: ${port}`);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof router;
