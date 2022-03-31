import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.cardColor};
`;

interface IDragableCardProps {
  todo: string;
  index: number;
}

function DragableCard({ todo, index }: IDragableCardProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragableCard);
