/* eslint-disable @typescript-eslint/ban-types */

import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

import "../pages/TodoPage.css";
import TodoItem from "@/components/TodoItem";
/* eslint-disable no-empty-pattern */
type Props = {};

export default function page1({}: Props) {
  const [todos, setTodos] = useState<{ todo: string; isCompleted: boolean }[]>(
    []
  );
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { todo: newTodo, isCompleted: false }]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (index: number, newTodo: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index].todo = newTodo;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="main mx-auto">
        <h1 className="text-white">Todo App</h1>
        <br />
        <div className="container1">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="bg-stone-50 h-10"
          />

          <Button className="btnAdd bg-red-400" onClick={handleAddTodo}>
            ADD
            <BookmarkIcon strokeWidth={3} className="h-5 w-5 text-white" />
          </Button>
        </div>

        <ul>
          {todos.map((todoItem, index) => (
            <TodoItem
              key={index}
              todo={todoItem.todo}
              isCompleted={todoItem.isCompleted}
              onEdit={(newTodo) => handleEditTodo(index, newTodo)}
              onDelete={() => handleDeleteTodo(index)}
              onToggle={() => handleToggleTodo(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
