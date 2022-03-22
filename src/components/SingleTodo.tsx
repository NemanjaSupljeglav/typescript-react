import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./styles.css";
import { Todo } from "../model";
import { TodoList } from "./TodoList";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    console.log(todo.isDone);
  };
  return (
    <form className="single-todo-list">
      <span className="todos_single">
        {todo.isDone ? (
          <s className="todo__single--text">{todo.todo}</s>
        ) : (
          <span className="todo__single--text">{todo.todo}</span>
        )}

        <span className="icons">
          <EditIcon />
        </span>
        <span className="icons">
          <DoneIcon
            onClick={() => {
              handleDone(todo.id);
            }}
          />
        </span>
        <span className="icons">
          <DeleteOutlineIcon />
        </span>
      </span>
    </form>
  );
};
