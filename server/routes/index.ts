import { publicProcedure, router } from '../trpc';
import userRouter from './users';

const indexRouter = router({
  healthCheck: publicProcedure.query(async () => true),
  users: userRouter, // nested router
});

export default indexRouter;
