export type User = {
  uid: string;
  email: string;
  phoneNumber: string;
  name: string;
  dayOneSelected: boolean;
  dayTwoSelected: boolean;
  dayOneVisited: boolean;
  dayTwoVisited: boolean;
  parentId: string | null;
  subUserIdList: [string] | [string, string] | null;
} | null;

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loadingUser: boolean;
};
