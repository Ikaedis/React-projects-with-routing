import { useState } from "react";

export default function PostComponent({ onDelete, ownPost, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(ownPost.text);

  function handleEdit() {
    if (isEditing === true) {
      onEdit(newText, ownPost.id);
    }
    setIsEditing(!isEditing);
  }

  return (
    <div className="single-post">
      {isEditing ? (
        <textarea
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        ></textarea>
      ) : (
        <p>{ownPost.text}</p>
      )}
      <span className="options">
        <i className="fas fa-edit" onClick={handleEdit}></i>
        <i
          className="fas fa-trash-alt"
          onClick={() => {
            onDelete(ownPost.id);
          }}
        ></i>
      </span>
    </div>
  );
}
