import React from "react";

type Props = {
  content: any;
};

export default function TodoItem({ content }: Props) {
  return (
    <>
        <div className="relative w-full max-w-[24rem]">
          <div className=" box h-15 w-50 p-4 rounded-md bg-white">
            {content}
            <button className="!absolute right-20 top-1 rounded bg-red-200">
              Edit
            </button>
            <button className="!absolute right-1 top-1 rounded bg-red-200">
              Del
            </button>
          </div>
        </div>
    </>

  );
}
