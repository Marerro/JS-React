import Form from "./components/Form";
import { useState, useEffect } from "react";
import { getAllData } from "./helpers/get";
import UsersList from "./components/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      <Form setUpdate={setUpdate} />

      {!error && <UsersList usersList={users} />}
      {error && <p>{error}</p>}
      
    </>
  );
};
export default App;
