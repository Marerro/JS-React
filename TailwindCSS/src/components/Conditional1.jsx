import {useState} from "react";

function Conditional1() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
 
   const logIn = () => setIsLoggedIn((prev) => !prev);
   const loaded = () => setIsLoading((prev) => !prev);
 
   let jsx;
   if (isLoggedIn  && !isLoading) {
  jsx = <p>Welcome, User!</p>;
   }
   else if (!isLoggedIn && !isLoading) {
     jsx = <p>Please log in</p>;
   } else {
     jsx = <p>Loading....</p>;
     
   }
   return (
     <>
       <div>{jsx}</div>
       <button className="border-2 border-black px-3" onClick={logIn}>
         Login
       </button>
       <button className="border-2 border-black px-3" onClick={loaded}>
         Loaded
       </button>
     </>
   );
 }

export default Conditional1;