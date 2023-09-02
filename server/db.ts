import type { Patient } from './types/patient';

const patients: Patient[] = [];

const db = {
  patient: {
    create: async (data: { firstName: string }) => {
      const patient = {
        ...data,
        id: patients.length + 1,
        password: String(Math.floor(Math.random() * 1000000)),
      };
      patients.push(patient);

      return patient;
    },

    findById: async (id: number) => patients.find((patient) => patient.id === id),

    findMany: async () => patients,
  },
};

export default db;
