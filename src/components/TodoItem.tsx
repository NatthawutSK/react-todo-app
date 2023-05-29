import React, { useState } from "react";
import "./TodoItem.css";

type Props = {
  todo: string;
  isCompleted: boolean;
  onEdit: (newTodo: string) => void;
  onDelete: () => void;
  onToggle: () => void;
};

export default function TodoItem({
  todo,
  isCompleted,
  onEdit,
  onDelete,
  onToggle,
}: Props) {
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
      <div className="relative w-full  pt-6 ">
        <div className=" box h-15 p-4 rounded-md bg-white">
          <label>
            <input
              className="flex w-5 h-5 accent-pink-500"
              type="checkbox"
              checked={isCompleted}
              onChange={onToggle}
            />
          </label>
          {editMode ? (
            <input
              className="w-5/6 bg-red-200"
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          ) : (
            <p className={isCompleted ? "completed" : ""}>{todo}</p>
          )}

          <button
            onClick={handleEdit}
            className="!absolute right-20 top-7 rounded bg-red-200 "
          >
            {editMode ? "Save" : "Edit"}
          </button>
          <button
            onClick={onDelete}
            className="!absolute right-1 top-7 rounded bg-red-200"
          >
            Del
          </button>
        </div>
      </div>
    </>
  );
}
