import React from "react";

type Props = {
  content: any;
};

export default function TodoItem({ content }: Props) {
  return <div> - {content}</div>;
}
