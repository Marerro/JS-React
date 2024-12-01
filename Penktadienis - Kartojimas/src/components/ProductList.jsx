import {useState} from "react";
import {useForm} from "react-hook-form";

function ProductList () {

    const {register, reset, handleSubmit} = useForm();
    const [product, setProduct] = useState([]);

    const addProduct = (item) => {
        setProduct((prev) => [...prev, item.product])
        console.log(item.product);
        reset()
        return item.product;
    }

    return (
        <>
        <form onSubmit={handleSubmit(addProduct)}>
        <input
        type="text"
        placeholder="Produkto pavadinimas"
        {...register("product", {required: "Įrašykite produktą!..."})}
         />
        <button type="submit">Add to List!</button>
        </form>

        <h2>Pridėti produktai:</h2>
        <ul>
            {product.map((product, index) => (
                <li key={index}>{product}</li>
            ))}
        </ul>
        </>
    )

}

export default ProductList;