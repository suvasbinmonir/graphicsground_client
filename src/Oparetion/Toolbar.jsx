import React from "react";

const Toolbar = ({ addText, addImage }) => {
  return (
    <div className="toolbar">
      <button onClick={addText}>Add Text</button>
      <input type="file" onChange={(e) => addImage(e.target.files[0])} />
    </div>
  );
};

export default Toolbar;
