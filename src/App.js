import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./css/todo.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };
  const deleteSubmit = (index) => {
    const newList = [...jobs].filter((item, id) => id !== index);
    setJobs(newList);
  };

  return (
    <div className="App app-background">
      <h3 className="heading-text">Todo List</h3>
      <div className="task-container">
        <input
          className="text-input"
          value={job}
          onChange={(event) => setJob(event.target.value)}
        />
        <button className="add-button" onClick={handleSubmit}>
          Add
        </button>
        {jobs?.length ? (
          jobs.map((todoObj, index) => (
            <TodoList
              index={index}
              itemData={todoObj}
              deleteSubmit={deleteSubmit}
            />
          ))
        ) : (
          <p className="no-item-text">No Task Added</p>
        )}
      </div>
    </div>
  );
}

export default App;
