import { z } from 'zod';

import db from '../../db';
import { publicProcedure, router } from '../../trpc';
import { responseSchema } from '../../types/patient';

const r = router({
  deleteById: publicProcedure
    .input(z.number())
    .output(responseSchema.optional())
    .query(async ({ input }) => await db.patient.findById(input)),

  getById: publicProcedure
    .input(z.number())
    .output(responseSchema.optional())
    .query(async ({ input }) => await db.patient.findById(input)),

  updateById: publicProcedure
    .input(z.number())
    .output(responseSchema.optional())
    .query(async ({ input }) => await db.patient.findById(input)),
});

export default r;
