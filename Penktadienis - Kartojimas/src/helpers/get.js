import axios from "axios";
const url = "http://localhost:5000/items";

export const getAllItems = async () => {
    try {
    const response = await axios.get(url);
    console.log("Gauti elementai:", response.data);
    return response.data;
    } catch (error) {
        console.error("Klaida gaunant elementus", error);
        throw error;
    }
}

