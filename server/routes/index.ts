import { publicProcedure, router } from '../trpc';
import patientsRouter from './patients';

const indexRouter = router({
  healthCheck: publicProcedure.query(async () => true),
  patients: patientsRouter, // nested router
});

export default indexRouter;
