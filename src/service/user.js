import axios from "axios";

export const login = async (data) => {
  return (await axios.post("/api/user", data)).data;
};
