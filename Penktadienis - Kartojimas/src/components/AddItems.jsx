import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import ItemsList from "./ItemsList";

function AddItems () {

    const [itemsList, setItemsList] = useState([])
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const AddItem = async (data) => {

        try {
            setItemsList((prev) => [...prev, { items: data.items, description: data.description }])
        } catch (error) {
            console.error("Klaida", error.message);
        }
    }


    return (

        <>
                <form onSubmit={handleSubmit(AddItem)}>
                <input
                {...register("items")}
                type="text" 
                name="items" 
                id="items" 
                placeholder="Item Name"
                />
                <input
                {...register("description")}
                type="text"
                name="description" 
                id="description" 
                placeholder="Description"
                />
                <button>Add item</button>

                <h2>Pridėti elementai:</h2>
                <ul>
                    {itemsList.map((item, index) => (
                        <li key={index}>{item.items}{item.description}</li>
                    ))}
                </ul>
            </form>
        </>
    
    )

}

export default AddItems;