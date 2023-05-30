/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-empty-pattern */
import {
  counter1Selector,
  increase,
  setValueAsync,
} from "@/store/slices/counter1Slice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
  
};

export default function Page1({ }: Props) {
  const dispatch = useAppDispatch();
  const counter1Reducer = useSelector(counter1Selector);

  useEffect(() => {
    dispatch(setValueAsync());
  }, []);

  return (
    <div>
      <h4>Page1</h4>
      <button onClick={() => dispatch(increase())}>
        counter1 - {counter1Reducer.counter}
      </button>
      <h2>List of Users</h2>
      <button onClick={() => dispatch(setValueAsync())}>fetch</button>
      <span>
        {!counter1Reducer.loading && counter1Reducer.users.length ? (
          <ul>
            {counter1Reducer.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : null}
      </span>
    </div>
  );
}
