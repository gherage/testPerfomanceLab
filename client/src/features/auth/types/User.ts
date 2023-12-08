export type User = {
  id: number;
  name: string;
};

export type UserWithoutId = Omit<User, 'id'>;
