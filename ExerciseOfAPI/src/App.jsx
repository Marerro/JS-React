import Form from "./components/Form"
import {useState} from "react";
function App() {
  const [users, setUsers] = useState([])
  return (
    <>
    <Form />
    </>
  );
}
export default App;
