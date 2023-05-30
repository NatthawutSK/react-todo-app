import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
// import TodoItem from "../components/TodoItem";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { TodoSelector, addTodo } from "@/store/slices/TodoSlice";
import TodoItem from "@/components/TodoItem";

type Props = {};

export default function TodoPage({}: Props) {
  const dispatch = useAppDispatch();
  const TodoReducer = useSelector(TodoSelector);

  const [NewTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    dispatch(addTodo(NewTodo));
    setNewTodo("");
  };

  return (
    <div className="main mx-auto">
      <h1 className="text-white">Todo App</h1>
      <br />
      <div className="container1">
        <Input
          value={NewTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="bg-stone-50 h-10"
        />

        <Button className="btnAdd bg-red-400" onClick={() => addNewTodo()}>
          ADD
          <BookmarkIcon strokeWidth={3} className="h-5 w-5 text-white" />
        </Button>
      </div>

      <ul>
        {TodoReducer.todos.map((todoItem, index) => (
          <TodoItem
            key={index}
            todo={todoItem.todo}
            isCompleted={todoItem.isCompleted}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
