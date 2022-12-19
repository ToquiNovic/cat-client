import axios from "axios";

export const onOffEstate = async (state) =>
  (await axios.post("/api/state?user=toqui&state=" + state)).data;
