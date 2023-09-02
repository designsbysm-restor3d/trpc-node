import { z } from 'zod';

import db from '../../db';
import { publicProcedure, router } from '../../trpc';
import { idSchema } from '../../types/patient';

const r = router({
  create: publicProcedure
    .input(z.object({ firstName: z.string() }))
    .output(idSchema)
    .mutation(async ({ input, ctx }) => {
      console.log('publicProcedure context user:', ctx.user);

      return await db.patient.create(input);
    }),
});

export default r;
