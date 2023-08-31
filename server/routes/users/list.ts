import db from '../../db';
import { protectedProcedure } from '../../middleware/authJWT';
import { router } from '../../trpc';
import { userListResponse } from './types';

const r = router({
  list: protectedProcedure.output(userListResponse).query(async ({ ctx }) => {
    console.log('protectedProcedure context user:', ctx.user);

    return await db.user.findMany();
  }),
});

export default r;
