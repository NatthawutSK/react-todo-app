import React, { useEffect, useState } from "react";

type Props = {};

export default function page3({}: Props) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=5"
      );
      const data = await response.json();
      setData1(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setData2(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Example Component</h2>

      {data1.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data1.map((item: any) => (
            <li key={item.id}> {item.title}</li>
          ))}
        </ul>
      )}
      <h1>-----------------------------------------</h1>
      <button onClick={fetchData2}>fetch</button>
      {data2.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data2.map((item: any) => (
            <li key={item.id}> {item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
