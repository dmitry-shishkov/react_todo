export function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="itemTodo">
      <div
        className={todo.complete ? "itemText strike" : "itemText"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="itemDelete" onClick={() => removeTask(todo.id)}>
        <img src="/img/delete.svg" alt="Удалить" />
      </div>
    </div>
  );
}