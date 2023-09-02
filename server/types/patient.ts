import { z } from 'zod';

const patientSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  password: z.string(),
});

export type Patient = z.infer<typeof patientSchema>;

export const idSchema = patientSchema.pick({ id: true });

export const responseSchema = patientSchema.omit({ password: true });

export const listResponseSchema = z.array(responseSchema);
