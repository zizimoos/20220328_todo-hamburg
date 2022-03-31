import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const todoListState = atom<ITodoState>({
  key: "todoListState",
  default: {
    TODO: ["a", "b", "c", "d"],
    DOIN: ["e", "f", "g", "h"],
    DONE: ["i", "j", "k"],
  },
});
