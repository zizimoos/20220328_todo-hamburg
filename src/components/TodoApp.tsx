import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atoms";
import DragableCard from "./DragableCard";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-column: repeat(3, 1fr);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;
const Board = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.boardColor};
`;

function TodoApp() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const newTodos = [...todos];
      const target = newTodos.splice(source.index, 1);
      newTodos.splice(destination.index, 0, ...target);
      setTodos(newTodos);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((todo, index) => (
                  <DragableCard key={todo} todo={todo} index={index} />
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default TodoApp;
