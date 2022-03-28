import React from "react";

import { ToDo } from "./ToDo";
import { ToDoForm } from "./ToDoForm";

import "./App.scss";

function App() {

  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem]);
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

  return (
    <div className="App">
      <div className="title">
        <span>Список задач: {todos.length}</span>
      </div>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
