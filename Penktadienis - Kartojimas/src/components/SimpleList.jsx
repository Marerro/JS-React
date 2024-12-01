import {useState} from "react";
import {useForm} from "react-hook-form";

function SimpleList () {
    const [tasks, setTasks] = useState([]);
    const {register, handleSubmit, reset} = useForm();

    const addTask = (data) => {
        setTasks((prevTasks) => [...prevTasks, data.tasks]);
        console.log("Pridedama užduotis:", data.tasks);
        console.log("Atnaujintas sąrašas", tasks);
        reset();
        return data.tasks
    }
        return (
            <div>
                <h1>Užduočių sąrašas</h1>
                <form onSubmit={handleSubmit(addTask)}>
                <input
                {...register("tasks", {required: "Įrašykite užduuotį!"})}
                />
                <button type="submit">Pridėti</button>

                <h2>Užduotys:</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>

                </form>
            </div>
        )
    }

export default SimpleList;