/* eslint-disable @typescript-eslint/ban-types */

import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

import "../pages/TodoPage.css";
import TodoItem from "@/components/TodoItem";
/* eslint-disable no-empty-pattern */
type Props = {};

export default function page1({}: Props) {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (index: number, newTodo: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodo;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <>
      {/* <h2>{inputVal}</h2> */}
      {/* <h2>{todo}</h2> */}
      <h1>Todo App</h1>
      <br />
      <div className="container">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="bg-stone-50"
        />

        <Button className="btnAdd bg-red-400" onClick={handleAddTodo}>
          Add
          <BookmarkIcon strokeWidth={2} className="h-5 w-5 text-white" />
        </Button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onEdit={(newTodo) => handleEditTodo(index, newTodo)}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </ul>
    </>
  );
}
