export type User = {
  uid: string;
  email: string | null;
} | null;

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loadingUser: boolean;
};
