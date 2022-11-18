import { User } from "types/types";

export const firstDate: 19 = 19;

export const dayXVisited =
  new Date().getDate() === firstDate ? "dayOneVisited" : "dayTwoVisited";
export const dayXSelected =
  new Date().getDate() === firstDate ? "dayOneSelected" : "dayTwoSelected";

export const hasEnteredToday = (user: User): boolean => {
  return user[dayXVisited];
};

export const reservedToday = (user: User): boolean => {
  return user[dayXSelected];
};
