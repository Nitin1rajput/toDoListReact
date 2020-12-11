import React, { useState, useEffect } from "react";
import "./App.style.css";

// importing Component
import Form from "./components/Form/form.component";
import ToDoList from "./components/ToDoList/toDoList.component";

function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalsToDo();
  }, []);
  // function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // use Effect
  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [todos, status]);

  // save to local Storage
  const saveToLocalStorage = () =>
    localStorage.setItem("todos", JSON.stringify(todos));

  const getLocalsToDo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Nitin To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
