import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  margin-bottom: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${({ isDragging }) => (isDragging ? "white" : "white")};
  border: ${({ isDragging }) => (isDragging ? "1px dashed #ccc" : "none")};
  box-shadow: ${({ isDragging }) =>
    isDragging ? " 0px 4px 8px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDragableCardProps {
  todoId: number;
  todoText: string;
  index: number;
}

function DragableCard({ todoId, todoText, index }: IDragableCardProps) {
  return (
    <Draggable key={todoId} draggableId={todoId + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragableCard);
