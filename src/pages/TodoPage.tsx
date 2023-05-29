/* eslint-disable @typescript-eslint/ban-types */

import { useState } from "react";
import { Button,Input } from "@material-tailwind/react";
import {BookmarkIcon} from "@heroicons/react/24/outline";

import '../pages/TodoPage.css'
import TodoItem from "@/components/TodoItem";
/* eslint-disable no-empty-pattern */
type Props = {};

export default function page1({}: Props) {
  const [newTodo, setnewTodo] = useState("");
  const [inputVal, setinputVal] = useState("");
  const [todo, settodo] = useState([]);

  const changeName = () => {
    const newArray: any = [...todo, inputVal];

    // Update the array state using setMyArray
    settodo(newArray);
    setnewTodo(inputVal);
    setinputVal("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setinputVal(event.target.value);
  };
  return (
    <>
      
      {/* <h2>{inputVal}</h2> */}
      {/* <h2>{todo}</h2> */}
      <h1>Todo App</h1><br />
      <div className="container">
        <Input className="bg-stone-50"
        onChange={handleInputChange}/>

        <Button className="btnAdd bg-red-400"  onClick={changeName}>
        Add<BookmarkIcon strokeWidth={2} className="h-5 w-5 text-white" /> 
      </Button>
     
      </div>

      <ul>
        {todo.map((item, index) => (
          <div className="pt-6">
          <TodoItem key={index} content={item} />
          </div>
        ))}
      </ul>
     
     
    </>
  );
}