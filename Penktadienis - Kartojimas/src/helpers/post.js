import axios from "axios";

const url = "http://localhost:5000/items";

export const sentAllItems = async () => {
    try {
        const response = await axios.post(url);
        console.log("Išsiusti elementai:", response.data);
        return response.data;
    } catch (error) {
        console.error("Klaida siunčiant elementus", error);
        throw error;
    }
}