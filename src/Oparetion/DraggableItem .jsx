import React, { useState } from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [imageSize, setImageSize] = useState({
    width: item.width,
    height: item.height,
  });
  const [, drag] = useDrag({
    type: "ITEM",
    item,
  });

  const handleResize = (e, corner) => {
    const newWidth =
      corner === "right" ? e.clientX - e.target.offsetLeft : imageSize.width;
    const newHeight =
      corner === "bottom" ? e.clientY - e.target.offsetTop : imageSize.height;

    setImageSize({ width: newWidth, height: newHeight });
  };

  return (
    <div ref={drag} style={{ marginBottom: "8px" }}>
      {item.type === "text" ? (
        <p contentEditable>{item.content}</p>
      ) : (
        <div
          style={{
            width: imageSize.width,
            height: imageSize.height,
            position: "relative",
            overflow: "hidden",
            border: "1px solid black",
          }}
        >
          <img
            src={item.content}
            alt="uploaded"
            style={{ width: "100%", height: "100%" }}
          />
          {/* Resizing handles */}
          <div
            onMouseDown={(e) => e.preventDefault()}
            onMouseMove={(e) => handleResize(e, "right")}
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              cursor: "se-resize",
              width: "10px",
              height: "10px",
              backgroundColor: "red",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default DraggableItem;
