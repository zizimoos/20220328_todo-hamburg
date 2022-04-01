import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
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

// ? "#FCE4EC"
// : props.isDraggingFromThisWith
// ? "#E0E0E0"
// : "#E0F7FA"};

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function TodoBoard({ todos, boardId }: IBoardProps) {
  return (
    <BoardWrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, index) => (
              <DragableCard key={todo} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </BoardWrapper>
  );
}

export default TodoBoard;
