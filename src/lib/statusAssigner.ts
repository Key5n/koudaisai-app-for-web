import { User } from "@/types/types";
import { hasEnteredToday, reservedToday } from "./dataManager";

// 0 => able to enter
// 1 => already entered
// 2 => no reserved
export const statusAssigner = (user: User): 0 | 1 | 2 => {
  if (hasEnteredToday(user)) {
    return 1;
  }
  if (!reservedToday(user)) {
    return 2;
  }
  return 0;
};
