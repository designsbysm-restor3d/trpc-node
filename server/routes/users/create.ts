import { z } from 'zod';

import db from '../../db';
import { publicProcedure, router } from '../../trpc';
import { userID } from './types';

const r = router({
  create: publicProcedure
    .input(z.object({ firstName: z.string() }))
    .output(userID)
    .mutation(async ({ input, ctx }) => {
      console.log('publicProcedure context user:', ctx.user);

      return await db.user.create(input);
    }),
});

export default r;
