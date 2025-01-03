// components/DraggableText.jsx
import  { useState } from "react";
import { useDrag } from "react-dnd";

function DraggableText({ content }) {
  const [text, setText] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDoubleClick = () => setIsEditing(!isEditing);

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <span onDoubleClick={handleDoubleClick}>{text}</span>
      )}
    </div>
  );
}

export default DraggableText;
