import { useState } from "react";

function Conditional4() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (newTask !== "") {
      setTasks([ ...tasks, newTask]);
      setNewTask("");
    } 
  };

  return (
    <>
      <div className="container">
        <h1>Tasks to do:</h1>
        {tasks.length === 0 ? ( <h4>No tasks</h4> ) : (
        <ul>
          {tasks.map((task, id) => (
            <li key={id}>
              {id + 1} {task}
            </li>
          ))}
        </ul>
        )
        }
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        ></input>
        <button onClick={addTask}>Add task</button>
      </div>
    </>
  );
}

export default Conditional4;
