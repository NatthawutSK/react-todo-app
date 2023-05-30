import { checkTodo, deleteTodo, edit } from "@/store/slices/TodoSlice";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";

type Props = {
  todo: string;
  isCompleted: boolean;
  index: number;
};

export default function TodoItem({ todo, isCompleted, index }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const dispatch = useAppDispatch();

  const editTodo = () => {
    dispatch(edit({ index: index, edited: editedTodo }));
    setEditMode(!editMode);
  };
  // ai baaa kern na
  //ri na rak
  return (
    <>
      <div className="relative w-full  pt-6">
        <div className=" box h-14 p-4 rounded-md bg-white flex flex-row gap-3">
          <label>
            <input
              className="w-5 h-5 accent-pink-500"
              type="checkbox"
              checked={isCompleted}
              onChange={() =>
                dispatch(checkTodo({ index: index, checked: isCompleted }))
              }
            />
          </label>
          {editMode ? (
            <input
              className="w-4/5 bg-red-200"
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          ) : (
            <p className={isCompleted ? "completed" : ""}>{todo}</p>
          )}

          <button
            onClick={() => editTodo()}
            className="!absolute right-20 top-7 rounded bg-red-200 "
          >
            {editMode ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => dispatch(deleteTodo(index))}
            className="!absolute right-1 top-7 rounded bg-red-200"
          >
            Del
          </button>
        </div>
      </div>
    </>
  );
}
