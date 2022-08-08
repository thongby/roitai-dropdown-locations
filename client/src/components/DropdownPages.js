import React, { useState } from "react";

import {
  createLocation,
} from "../functions/locations";
import Locations from "./Locations";

const DropdownPages = () => {
  
  const [data, setData] = useState({
    title: "",
    address: "",
    province: "",
    amphoe: "",
    tambon: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createLocation(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>DropdownPages</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" onChange={(e) => onChangeData(e)} />
        <input type="text" name="address" onChange={(e) => onChangeData(e)} />
        <Locations data={data} setData={setData} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default DropdownPages;
