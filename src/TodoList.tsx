import { useForm } from "react-hook-form";

interface IFormData {
  todo: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
}

function TodoList() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IFormData) => {
    console.log(data);
  };

  console.log(formState.errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          {...register("todo", {
            required: "todo is required",
            minLength: {
              value: 10,
              message: "todo must be at least 10 characters",
            },
          })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.todo?.message}
        </span>
        <input
          type="text"
          placeholder="What needs to be done?"
          {...register("name", { required: "Your name? " })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.name?.message}
        </span>
        <input
          type="text"
          placeholder="What needs to be done?"
          {...register("nickname", { required: "Your nick name?" })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.nickname?.message}
        </span>
        <input
          type="email"
          placeholder="What needs to be done?"
          {...register("email", {
            required: "Your email?",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "email must be naver.com",
            },
          })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.email && formState.errors.email.message}
        </span>
        <input
          type="password"
          placeholder="What needs to be done?"
          {...register("password", { required: "password is required" })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.password && formState.errors.password.message}
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoList;
