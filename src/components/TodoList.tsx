import { useRecoilState, useRecoilValue } from "recoil";
import {
  ITodo,
  toDoSeclector,
  toDoState,
  categoryState,
  Categories,
} from "../atoms";
import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";

function TodoList() {
  const todos = useRecoilValue(toDoSeclector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <>
      <div>ToDo</div>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateTodo></CreateTodo>
      {todos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </>
  );
}

export default TodoList;
