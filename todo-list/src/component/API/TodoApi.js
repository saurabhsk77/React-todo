import React from "react";
import { useState, useEffect } from "react";
import Main from "./main";

const TodoApi = () => {
  const [todo, setTodo] = useState([]);
  const getTodoList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    setTodo(await response.json());
  };
  useEffect(() => {
    getTodoList();
    console.log(todo);
  }, []);
  return (
    <div>
      <Main todos={todo} />
    </div>
  );
};
export default TodoApi;
