// import React from "react";

import { useSelector } from "react-redux";
import Page1 from "@/components/pages/Page1";
import { counter1Selector } from "@/store/slices/counter1Slice";
import Page2 from "./components/pages/page2";
import Page3 from "./components/pages/page3";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function App({}: Props) {
  const counter1Reducer = useSelector(counter1Selector);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Home</h1>
      <span>
        {counter1Reducer.loading && "Loading.."} {counter1Reducer.counter}
      </span>
      {/* <Page1 /> */}
      {/* <Page2 opal="opal narak mak mak" /> */}
      <Page3></Page3>
    </>
  );
}
