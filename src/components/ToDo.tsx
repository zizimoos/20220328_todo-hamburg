import { useRecoilState } from "recoil";
import { Categories, ITodo } from "../atoms";
import { toDoState } from "../atoms";

function ToDo({ text, category, id }: ITodo) {
  const [toDos, setToDos] = useRecoilState<ITodo[]>(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    const newToDos = [...toDos];
    const index = newToDos.findIndex((todo) => todo.id === id);
    const todo = newToDos[index];
    const newTodo = { ...todo, category: name as any };
    newToDos.splice(index, 1, newTodo);
    setToDos(newToDos);
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TODO && (
        <button name={Categories.TODO} onClick={onClick}>
          TODO
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
