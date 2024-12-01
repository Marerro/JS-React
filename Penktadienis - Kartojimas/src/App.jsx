import ItemsList from "./components/ItemsList";
import AddItems from "./components/AddItems";
import SimpleList from "./components/SimpleList";
import ToDoList from "./components/ToDoList";
import ProductList from "./components/ProductList";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";

function App() {
  return (
    <>
    <UserList />
    <UserProfile />
    <ProductList />
    <ToDoList />
    <SimpleList />
    <AddItems />
    <ItemsList />
    </>
  );
}
export default App;
