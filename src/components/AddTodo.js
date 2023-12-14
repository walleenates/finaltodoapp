import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [priority, setPriority] = useState("lessPriority");
  const [startTime, setStartTime] = useState(""); // Add this line
  const [endTime, setEndTime] = useState(""); // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        selectedDateTime,
        priority,
        startTime, // Add this line
        endTime, // Add this line
      });
      setTitle("");
      setSelectedDateTime("");
      setPriority("lessPriority");
      setStartTime(""); // Add this line
      setEndTime(""); // Add this line
      notifySuccess("Task added successfully!");
    }
  };

  const notifySuccess = (message) => {
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="datetime-picker-container">
        <input
          type="datetime-local"
          value={selectedDateTime}
          onChange={(e) => setSelectedDateTime(e.target.value)}
        />
      </div>
      <div className="time-tracking-container">
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <label htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div className="priority-container">
        <label htmlFor="c">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="lessPriority">Less Priority</option>
          <option value="important">Important</option>
        </select>
      </div>
      <div className="btn-container">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
