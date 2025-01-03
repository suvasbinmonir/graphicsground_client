// components/DraggableImage.jsx
import React from "react";
import { useDrag } from "react-dnd";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

function DraggableImage({ src }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { src },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <ResizableBox width={150} height={150} resizeHandles={["se"]}>
      <img
        ref={drag}
        src={src}
        alt="draggable"
        style={{ width: "100%", cursor: "move", opacity: isDragging ? 0.5 : 1 }}
      />
    </ResizableBox>
  );
}

export default DraggableImage;
