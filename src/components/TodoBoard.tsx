import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoListState } from "../atoms";
import DragableCard from "./DragableCard";

const BoardWrapper = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.boardColor};
`;
const Title = styled.div`
  margin-bottom: 10px;
`;
interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThisWith: boolean;
}
const Area = styled.div<IAreaProps>`
  padding: 10px;
  flex: 1;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#E0F7FA"
      : props.isDraggingFromThisWith
      ? "#FCE4EC"
      : "#E0E0E0"};
  transition: background-color 0.2s ease-in-out;
`;
const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;
interface IBoardProps {
  todos: ITodo[];
  boardId: string;
}
interface IForm {
  todo: string;
}

function TodoBoard({ todos, boardId }: IBoardProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [todo, setTodo] = useRecoilState(todoListState);

  const onValid = (data: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: data.todo,
    };

    setTodo((prevTodo) => ({
      ...prevTodo,
      [boardId]: [newTodo, ...todo[boardId]],
    }));

    setValue("todo", "");
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  return (
    <BoardWrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", { required: true })}
          type="text"
          placeholder={`add Task on ${boardId}`}
        ></input>
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, index) => (
              <DragableCard
                key={todo.id}
                todoId={todo.id}
                todoText={todo.text}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </BoardWrapper>
  );
}

export default TodoBoard;
