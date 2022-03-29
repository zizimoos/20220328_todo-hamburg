import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { ITodo, toDoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const [toDos, setToDos] = useRecoilState<ITodo[]>(toDoState);
  // eslint-disable-next-line
  const { register, handleSubmit, formState, setError, setValue } =
    useForm<IForm>({});
  const onValid = (data: IForm) => {
    setToDos((prev) => [
      { id: Date.now(), text: data.todo, category: "TODO" },
      ...prev,
    ]);
    setValue("todo", "");
  };

  console.log(toDos);
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        type="text"
        placeholder="write to do"
        {...register("todo", { required: "todo is required" })}
      />
      <span style={{ backgroundColor: "gray", color: "red" }}>
        {formState.errors.todo?.message}
      </span>
    </form>
  );
}

export default CreateTodo;
