// import React from "react";

import { useSelector } from "react-redux";
import { TodoSelector } from "@/store/slices/TodoSlice";
import TodoPage from "./pages/TodoPage";
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function App({}: Props) {
  const TodoReducer = useSelector(TodoSelector);

  return (
    <>
      <TodoPage></TodoPage>

      {/* <h1>{TodoReducer.newTodo}</h1> */}
      {/* <span>
        {TodoReducer.loading && "Loading.."} {TodoReducer.counter}
      </span> */}
    </>
  );
}
