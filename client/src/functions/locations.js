import axios from "axios";

export const listProvince = async () =>
  await axios.get(process.env.REACT_APP_API + "/changwat");

export const listAmphoe = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/changwat/${id}/amphoe`);

export const listTambon = async (id) =>
  await axios.get(process.env.REACT_APP_API+"/amphoe/"+id);
