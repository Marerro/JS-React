import axios from "axios";
const url = "http://localhost:3781/users";

export const postdata = async (data) => {
  let response = await axios.post(url, data);
  return response.data;
};
