import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <div>
        <input
          style={{ textDecoration: todo.completed && "line-through" }}
          type="text"
          value={todo.title === "" ? newTitle : todo.title}
          className="list"
          onChange={handleChange}
        />
        <p>Date and Time: {todo.selectedDateTime || "Not specified"}</p>
        <p>Priority: {todo.priority || "Not specified"}</p>
        {/* Add the following lines for time tracking */}
        <p>Start Time: {todo.startTime || "Not specified"}</p>
        <p>End Time: {todo.endTime || "Not specified"}</p>
      </div>
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button
          className="button-delete"
          onClick={() => handleDelete(todo.id)}
        >
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
