import {useState} from "react";


function Exercise() {
    const [inputValue, setInputValue] = useState("");
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value); // Atnaujina įvesties laukelio reikšmę
    };
  
    const handleRadioChange = () => {
      setIsCustomSelected(true); // Nustato, kad pasirinktas "Custom"
    };
  
    return (
      <>
        {/* Tik vienas radijo mygtukas */}
        <div>
          <input
            type="radio"
            id="custom"
            name="fav_language"
            value="custom"
            onChange={handleRadioChange}
          />
          <label htmlFor="custom">Custom value</label>
        </div>
  
        {/* Įvesties laukelis pasirodo tik pasirinkus "Custom value" */}
          <input
            type="text"
            placeholder="Įveskite savo reikšmę"
            value={inputValue}
            onChange={handleInputChange}
          />
  
        {/* Rodo, kas įvesta */}
        <p>Įvesta reikšmė: {inputValue}</p>
      </>
    );
  }
  



export default Exercise;