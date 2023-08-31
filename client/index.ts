import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type { AppRouter } from '../server';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlYWRiZWVmLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMSIsInJlbW90ZUFkZHJlc3MiOiI6OjEiLCJzZXJ2aWNlIjoicjNpZCIsInJlZnJlc2hUb2tlblRpbWVvdXQiOjMwLCJhY2Nlc3NUb2tlblRpbWVvdXQiOjEsInNsdWciOjAuMjg0MDU1Mzk4NjU3NTI0NSwiaWF0IjoxNjkyOTI1MjIzLCJleHAiOjE2OTI5MjcwMjN9.pZLZR8buelRGg01DEFq_pVZ4keKyB0XZC3Gk4C9rLKg',
        };
      },
    }),
  ],
});

const main = async () => {
  const isRunning = await trpc.healthCheck.query();
  console.info('running:', isRunning);

  const users = await trpc.users.list.query(); //=>
  console.info('Users:', users);

  const createdUser = await trpc.users.create.mutate({ firstName: 'Scott' });
  //    ^?
  console.info('Created user:', createdUser);

  const user = await trpc.users.getById.query(1);
  //    ^?
  console.info('User 1:', user);
};

main().catch(console.error);
