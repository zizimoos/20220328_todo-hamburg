import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragableCard";

const BoardWrapper = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.boardColor};
`;
const Title = styled.div`
  margin-bottom: 10px;
`;
interface IBoardProps {
  todos: string[];
  boardId: string;
}

function TodoBoard({ todos, boardId }: IBoardProps) {
  return (
    <BoardWrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <DragableCard key={todo} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </BoardWrapper>
  );
}

export default TodoBoard;
