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
          // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', // bad token
        };
      },
    }),
  ],
});

const main = async () => {
  const isRunning = await trpc.healthCheck.query();
  console.info('running:', isRunning);

  const users = await trpc.patients.list.query(); //=>
  console.info('Patients:', users);

  const createdUser = await trpc.patients.create.mutate({ firstName: 'Scott' });
  //    ^?
  console.info('Created patient:', createdUser);

  const user = await trpc.patients.getById.query(1);
  //    ^?
  console.info('Patient 1:', user);
};

main().catch(console.error);
