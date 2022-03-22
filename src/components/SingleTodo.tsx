import React, { useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./styles.css";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    console.log(todo.isDone);
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleEdit = (id: number) => {
    if (!todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleEditt = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="single-todo-list"
      onSubmit={(e) => {
        handleEditt(e, todo.id);
      }}
    >
      <span className="todos_single">
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => {
              setEditTodo(e.target.value);
            }}
            className="todo__single--text"
          />
        ) : todo.isDone ? (
          <s className="todo__single--text">{todo.todo}</s>
        ) : (
          <span className="todo__single--text">{todo.todo}</span>
        )}

        <span className="icons">
          <EditIcon
            onClick={() => {
              handleEdit(todo.id);
            }}
          />
        </span>
        <span className="icons">
          <DoneIcon
            onClick={() => {
              handleDone(todo.id);
            }}
          />
        </span>
        <span className="icons">
          <DeleteOutlineIcon
            onClick={() => {
              handleDelete(todo.id);
            }}
          />
        </span>
      </span>
    </form>
  );
};
