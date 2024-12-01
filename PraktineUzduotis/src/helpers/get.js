import axios from "axios";
const url = "http://localhost:5000/donors";

export const postdb = async (data) => {
    let response = await axios.get(url, data);
    return response.data;
}