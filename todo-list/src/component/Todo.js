import Container from "@material-ui/core/Container";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    right: theme.spacing(-25),
    top: theme.spacing(-8),
  },
  absolute: {
    position: "absolute",

    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  //   margin: {
  //     left: theme.spacing(40),
  //   },
}));
const getItemFromLS = () => {
  const items = localStorage.getItem("lists");
  console.log(items);
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [list, setList] = useState(getItemFromLS());
  const classes = useStyles();

  useEffect(() => {
    document.title = list.length > 0 ? `Task (${list.length})` : "Tasks";
  });
  const todoAddHandler = () => {
    if (!todoItem) {
    } else {
      setList([...list, todoItem]);
      setTodoItem("");
    }
  };
  const deleteHandler = (id) => {
    const updatedList = list.filter((elem, ind) => {
      return ind !== id;
    });
    setList(updatedList);
  };
  const deleteAllHandler = () => {
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <Container maxWidth="sm" className="container">
        <h1>TODO LIST </h1>
        {list.length > 0 ? (
          <h2>Total Tasks:{list.length}</h2>
        ) : (
          <h2>
            <strong>ADD TASK</strong>
          </h2>
        )}
        <ListAltRoundedIcon></ListAltRoundedIcon>
        <div className="todo-add">
          <input
            type="text"
            placeholder="event name"
            className="todo-add"
            name="todo"
            value={todoItem}
            onChange={(e) => {
              setTodoItem(e.target.value);
            }}
          ></input>
          <Tooltip
            title="Add"
            aria-label="add"
            onClick={() => todoAddHandler()}
          >
            <Fab color="secondary" className={classes.fab}>
              <AddIcon />
            </Fab>
          </Tooltip>
          {list.map((li, ind) => {
            return (
              <div className="todo-add todo-items" key={ind}>
                <p>
                  {li}
                  <Tooltip title="Delete" aria-label="delete">
                    <IconButton
                      aria-label="delete"
                      className="delete-btn"
                      onClick={() => deleteHandler(ind)}
                    >
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </p>
              </div>
            );
          })}
          {list.length > 1 ? (
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={deleteAllHandler}
            >
              Delete All
            </Button>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
};

export default Todo;
