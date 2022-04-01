import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

export interface ITodoState {
  [key: string]: ITodo[];
}

const localData = JSON.parse(localStorage.getItem("todo") || "{}");

export const todoListState = atom<ITodoState>({
  key: "todoListState",
  default: {
    TODO: localData.TODO || [],
    DOIN: localData.DOIN || [],
    DONE: localData.DONE || [],
  },
});
