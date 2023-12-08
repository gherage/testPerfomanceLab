import type { User } from './User';

export type AuthState = {
  user: User | undefined;
  error: string | null;
};
