import { z } from 'zod';

import db from '../../db';
import { publicProcedure, router } from '../../trpc';
import { userResponse } from './types';

const r = router({
  deleteById: publicProcedure
    .input(z.number())
    .output(userResponse.optional())
    .query(async ({ input }) => await db.user.findById(input)),

  getById: publicProcedure
    .input(z.number())
    .output(userResponse.optional())
    .query(async ({ input }) => await db.user.findById(input)),

  updateById: publicProcedure
    .input(z.number())
    .output(userResponse.optional())
    .query(async ({ input }) => await db.user.findById(input)),
});

export default r;
