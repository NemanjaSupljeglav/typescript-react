import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos[0]?.todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {todos.map((t) => (
        <li key={t.id}>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
