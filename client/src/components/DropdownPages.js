import React, { useState, useEffect } from "react";

import { listProvince, listAmphoe, listTambon } from "../functions/locations";

const DropdownPages = () => {
  const [province, setProvince] = useState([]);
  const [amphoe, setAmphoe] = useState([]);
  const [tambon, setTambon] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listProvince()
      .then((res) => {
        setProvince(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeProvince = (id) => {
    listAmphoe(id)
      .then((res) => {
        setAmphoe(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeAmphoe = (id) => {
    listTambon(id)
      .then((res) => {
        setTambon(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeTambon = (id) => {
    console.log(id);
  };

  console.log(tambon);

  return (
    <>
      <h1>DropdownPages</h1>
      <form>
        <select onChange={(e) => onChangeProvince(e.target.value)}>
          {province.map((item, index) => (
            <option key={index} value={item.ch_id}>
              {item.changwat_t}
            </option>
          ))}
        </select>

        <select onChange={(e) => onChangeAmphoe(e.target.value)}>
          {amphoe.map((item, index) => (
            <option key={index} value={item.am_id}>
              {item.amphoe_t}
            </option>
          ))}
        </select>

        <select onChange={(e) => onChangeTambon(e.target.value)}>
          {tambon.map((item, index) => (
            <option key={index} value={item.ta_id}>
              {item.tambon_t}
            </option>
          ))}
        </select>

        
      </form>
    </>
  );
};

export default DropdownPages;
