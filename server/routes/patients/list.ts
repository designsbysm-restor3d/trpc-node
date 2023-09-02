import db from '../../db';
import { protectedProcedure } from '../../middleware/authJWT';
import { router } from '../../trpc';
import { listResponseSchema } from '../../types/patient';

const r = router({
  list: protectedProcedure.output(listResponseSchema).query(async ({ ctx }) => {
    console.log('protectedProcedure context user:', ctx.user);

    return await db.patient.findMany();
  }),
});

export default r;
