import React, { useState } from "react";

type Props = {
  opal: string;
};

export default function page2({ opal }: Props) {
  const [name, setname] = useState("tadphron");
  const [val, setval] = useState("");

  const changeName = () => {
    setname(val);
    setval("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setval(event.target.value);
  };
  return (
    <>
      <div>oapl: {opal}</div>
      <span>name: {name}</span>
      <br />
      <input
        value={val}
        className="bg-blue-200 text-blue-800"
        type="text"
        onChange={handleInputChange}
      />
      <br />
      <button onClick={changeName}>Change name</button>
    </>
  );
}
