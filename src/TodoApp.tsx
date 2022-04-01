import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "./atoms";
import Board from "./components/TodoBoard";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 680px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  border-radius: 10px;
`;

function TodoApp() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const newTodos = [...todos[source.droppableId]];
      const target = newTodos.splice(source.index, 1);
      newTodos.splice(destination.index, 0, ...target);
      setTodos((prevTodos) => ({
        ...prevTodos,
        [source.droppableId]: newTodos,
      }));
      localStorage.setItem(
        "todo",
        JSON.stringify({ ...todos, [source.droppableId]: newTodos })
      );
    }
    if (source.droppableId !== destination.droppableId) {
      const sourceTodos = [...todos[source.droppableId]];
      const target = sourceTodos.splice(source.index, 1);
      const destiTodos = [...todos[destination.droppableId]];
      destiTodos.splice(destination.index, 0, ...target);
      setTodos((prevTodos) => ({
        ...prevTodos,
        [source.droppableId]: sourceTodos,
        [destination.droppableId]: destiTodos,
      }));
      localStorage.setItem(
        "todo",
        JSON.stringify({
          ...todos,
          [source.droppableId]: sourceTodos,
          [destination.droppableId]: destiTodos,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board key={boardId} todos={todos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default TodoApp;
