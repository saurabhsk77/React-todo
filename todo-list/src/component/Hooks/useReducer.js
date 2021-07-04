import React, { useReducer } from "react";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
const initialState = 0;
const reducer = (state, action) => {
  action.type === "INCREMENT" ? (state = state + 1) : (state = state - 1);

  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container maxWidth="sm" className="container">
      <h1>{state}</h1>
      <Button
        color="primary"
        variant="contained"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        INCREMENT
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        DECREMENT
      </Button>
    </Container>
  );
};

export default UseReducer;
