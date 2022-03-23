import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  setCompletedTodos,
  completedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((t, index) => (
              <SingleTodo
                index={index}
                todo={t}
                key={t.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={`todos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((t, index) => (
              <SingleTodo
                index={index}
                todo={t}
                key={t.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
