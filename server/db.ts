export type User = {
  id: number;
  firstName: string;
  password: string;
};

const users: User[] = [];

const db = {
  user: {
    create: async (data: { firstName: string }) => {
      const user = {
        ...data,
        id: users.length + 1,
        password: String(Math.floor(Math.random() * 1000000)),
      };
      users.push(user);

      return user;
    },

    findById: async (id: number) => users.find((user) => user.id === id),

    findMany: async () => users,
  },
};

export default db;
