import {useState} from "react";
import "./numberColors.css"

const NumberGenerator = () => {
  
   let numberArray = []

   const [number] = useState(numberArray);

   for (let i = 0; i<= 31; i++) {
    numberArray.push(i);
   }

   function getColorForNumber(number) {
    if (checkifPrime(number)) {
        return "red"
    } else if (number % 2 === 0) {
        return "green"
    } else {
        return "Yellow"
    }

    function checkifPrime(number) {
        console.log(`Tikriname skaičių: ${number}`)
        if(number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return "Red";
    }
}
    return (
        <>
        <div className="text-center">
        <h1>30 Days Of React</h1>
        <h3>Number Generator</h3>
        </div>
        <div className="container_main">
            <div className="h-10 grid grid-cols-7 w-30 number_boxes">
                {number.map((number, index) => (
                <span
                key={index}
                className={`flex h-32 justify-center text-6xl items-center border border-lime-500	  ${getColorForNumber(number)}`}>{number}</span>
                ))}
            </div>
        </div>
        </>
    )
    
}

export default NumberGenerator;