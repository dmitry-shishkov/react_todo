import React from "react";

export function ToDoForm({ addTask }) {

  const [userInput, setUserInput] = React.useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Добавить задачи..."
      />
      <button>
        <img src="/img/plus.svg" alt="Добавить" />
      </button>
    </form>
  );
}