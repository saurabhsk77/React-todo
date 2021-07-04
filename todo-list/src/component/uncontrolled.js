import React, { useRef, useState } from "react";

const UnControlled = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("enter the name") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">enter your name</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p>{show ? `${luckyName.current.value}` : ""}</p>
    </div>
  );
};

export default UnControlled;
