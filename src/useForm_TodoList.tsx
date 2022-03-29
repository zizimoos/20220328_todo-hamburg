import { useForm } from "react-hook-form";

interface IFormData {
  todo: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  password1: string;
  extraError?: string;
}

function TodoList() {
  const { register, handleSubmit, formState, setError } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IFormData) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        {
          message: "password is not same",
        },
        {
          shouldFocus: true,
        }
      );
    }
    // setError("extraError", {
    //   message: "server offline",
    // });
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
          placeholder="write to do"
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
          placeholder="your name?"
          {...register("name", { required: "Your name? " })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.name?.message}
        </span>
        <input
          type="text"
          placeholder="your nickname?"
          {...register("nickname", { required: "Your nick name?" })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.nickname?.message}
        </span>
        <input
          type="email"
          placeholder="your email?"
          {...register("email", {
            required: "Your email?",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "email must be naver.com",
            },
            validate: {
              noHack: (value) => (value.includes("hack") ? "no hack" : true),
              noSexy: (value) => (value.includes("sexy") ? "no sexy" : true),
            },
          })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.email && formState.errors.email.message}
        </span>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: "password is required" })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.password?.message}
        </span>
        <input
          type="password"
          placeholder="password1 confirm"
          {...register("password1", { required: "password1 is required" })}
        />
        <span style={{ backgroundColor: "black", color: "red" }}>
          {formState.errors.password1?.message}
        </span>
        <button type="submit">Submit</button>
        {formState.errors.extraError?.message}
      </form>
    </div>
  );
}

export default TodoList;
