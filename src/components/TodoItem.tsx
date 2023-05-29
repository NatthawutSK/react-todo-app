import React, { useState } from "react";

type Props = {
  todo: string;
  onEdit: (tdo: any) => void;
  onDelete: () => void;
};

export default function TodoItem({ todo, onEdit, onDelete }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    if (editMode) {
      onEdit(editedTodo);
    }
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      ) : (
        <p>{editedTodo}</p>
      )}
      <button onClick={handleEdit}>{editMode ? "Save" : "Edit"}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
