import { z } from 'zod';

export const userResponse = z.object({
  id: z.number(),
  firstName: z.string(),
});

export const userID = userResponse.pick({ id: true });

export const userListResponse = z.array(userResponse);
