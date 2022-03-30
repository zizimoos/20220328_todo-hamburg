import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TODO,
});

export const toDoState = atom<ITodo[]>({
  key: "toDoState",
  default: [],
});

export const toDoSeclector = selector({
  key: "toDoSeclector",
  get: ({ get }) => {
    const todos = get(toDoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
