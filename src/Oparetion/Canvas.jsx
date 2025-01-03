import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem ";

const Canvas = ({ items, setItems }) => {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (draggedItem, monitor) => {
      const dragIndex = items.findIndex((item) => item.id === draggedItem.id);
      const hoverIndex = items.findIndex(
        (item) => item.id === monitor.getItem().id
      );

      const updatedItems = [...items];
      updatedItems.splice(dragIndex, 1);
      updatedItems.splice(hoverIndex, 0, draggedItem);

      setItems(updatedItems);
    },
  });

  return (
    <div ref={drop} className="canvas">
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Canvas;
