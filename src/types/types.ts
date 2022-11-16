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
  subUserIdList: [] | [string] | [string, string];
};

export type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loadingUser: boolean;
};
