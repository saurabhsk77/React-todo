import React from "react";

const Main = ({ todos }) => {
  return (
    <div>
      {todos.map((ele) => {
        const { title, id } = ele;
        return (
          <div className="container" key={id}>
            <h1>{title}</h1>
            <h2>{id}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
