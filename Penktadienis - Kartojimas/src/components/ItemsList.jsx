import {getAllItems} from "../helpers/get";
import {useState, useEffect} from "react";

function ItemsList() {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    const fetchItems = async () => {
            
            try {
                console.log("Pradedame duomenų užkrovima...");
                const data = await getAllItems();
                setItems(data);
            } catch (err) {
                console.error("klaida gaunant elementus:", err.message);
                setError(err.message);
            }
        }
        useEffect(() => {
            fetchItems();
        }, []);
        
        if(error) {
            return <div>Klaida: {error}</div>
        }

    return (
        <>
        <div>
            <h1>Items Management</h1>

            <ul className="pl-3">
                {items.map((item) => (
                     <li className="bg-cyan-700 "
                      key={item.id}><h1 className="text-rose-600">Kategorija:{item.category}</h1>
                      <br></br><p>{item.name}</p></li> 
                     ))}
            </ul>
        </div>
        </>
    )
}

export default ItemsList;