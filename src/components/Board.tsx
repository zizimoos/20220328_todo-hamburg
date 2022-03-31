import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragableCard";

const BoardWrapper = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.boardColor};
`;

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function Board({ todos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <BoardWrapper ref={provided.innerRef} {...provided.droppableProps}>
          {todos.map((todo, index) => (
            <DragableCard key={todo} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </BoardWrapper>
      )}
    </Droppable>
  );
}

export default Board;
