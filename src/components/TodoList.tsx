import { useRecoilState } from "recoil";
import { ITodo, toDoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";

function TodoList() {
  // eslint-disable-next-line
  const [toDos, _] = useRecoilState<ITodo[]>(toDoState);
  return (
    <>
      <div>ToDo</div>
      <CreateTodo></CreateTodo>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo}></ToDo>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
