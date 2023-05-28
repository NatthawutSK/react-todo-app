/* eslint-disable @typescript-eslint/ban-types */

import { useState } from "react";

import styles from "./TodoPage.module.css";
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
      <h1>Todo App</h1>
      {/* <h2>{inputVal}</h2> */}
      {/* <h2>{todo}</h2> */}

      <div className={styles.container}>
        <input
          value={inputVal}
          onChange={handleInputChange}
          type="email"
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          required
        />
        <button
          onClick={changeName}
          className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Invite
        </button>
        <label className="text">Todo</label>
      </div>

      <ul>
        {todo.map((item, index) => (
          <TodoItem key={index} content={item} />
        ))}
      </ul>
    </>
  );
}
