import React from "react";

// Imported components
import Item from "../Item/Item.component";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Item todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
