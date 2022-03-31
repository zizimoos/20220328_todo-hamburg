import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
});
