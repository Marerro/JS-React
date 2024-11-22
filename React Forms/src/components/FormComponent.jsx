import {useState} from "react";
function FormComponent() {
    
const [inputValue, setInputValue] = useState("")

const handleChange = (event) => {
    setInputValue(event.target.value);
}

    return (
        <>
        <label htmlFor="fname">First name:</label><br />
        <input
         type="text" 
         name="fname" 
         id="fname"
         className="form-input"
         onChange={handleChange} 
         value={inputValue}/>
        <p>{inputValue}</p>
        </>
    )
}

export default FormComponent;