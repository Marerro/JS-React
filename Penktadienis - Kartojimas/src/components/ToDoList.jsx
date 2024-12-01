import { useForm } from "react-hook-form"
import { useState } from "react";

function ToDoList () {

    const [tasks, setTasks] = useState([]);
    const {register, handleSubmit, reset} = useForm();

    const ToDoTask = (data) => {
        setTasks((prev) => [...prev, data.tasks]);
        console.log(data.tasks);
        reset();
        return data.tasks;
    }

    return (
        <>
        <form onSubmit={handleSubmit(ToDoTask)}>
        <input type="text"
        placeholder="Enter Task to Do"
        {...register("tasks", {required: "Enter To Do!"})} />
        <button type="submit">Add</button>

        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
        </form>
        </>
    )
}

export default ToDoList;