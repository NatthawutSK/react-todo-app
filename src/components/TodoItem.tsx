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
    <>
      <div className="relative w-full max-w-[24rem]">
        <div className=" box h-15 w-50 p-4 rounded-md bg-white">
          {editMode ? (
            <input
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          ) : (
            <p>{editedTodo}</p>
          )}
          <button
            onClick={handleEdit}
            className="!absolute right-20 top-1 rounded bg-red-200"
          >
            {editMode ? "Save" : "Edit"}
          </button>
          <button
            onClick={onDelete}
            className="!absolute right-1 top-1 rounded bg-red-200"
          >
            Del
          </button>
        </div>
      </div>
    </>
  );
}
