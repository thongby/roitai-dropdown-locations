import React, { useState, useEffect } from "react";

import { listProvince, listAmphoe, listTambon } from "../functions/locations";

const DropdownPages = () => {
  const [province, setProvince] = useState([]);
  const [amphoe, setAmphoe] = useState([]);
  const [tambon, setTambon] = useState([]);

  const [data, setData] = useState({
    title: "",
    address: "",
    province: "",
    amphoe: "",
    tambon: "",
  });

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

  const onChangeData = (e) => {
    setData({ ...data,[e.target.name]:e.target.value})
  }

  const onChangeProvince = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setData({...data,[e.target.name]:label});

    listAmphoe(e.target.value)
      .then((res) => {
        setAmphoe(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeAmphoe = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setData({...data,[e.target.name]:label});

    listTambon(e.target.value)
      .then((res) => {
        setTambon(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeTambon = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setData({...data,[e.target.name]:label});
  };

  console.log(data);

  return (
    <>
      <h1>DropdownPages</h1>
      <form>
        <input type="text" name="title" onChange={(e)=>onChangeData(e)} />
        <input type="text" name="address" onChange={(e)=>onChangeData(e)}/>
        <select name="province" onChange={(e) => onChangeProvince(e)}>
          {province.map((item, index) => (
            <option key={index} value={item.ch_id}>
              {item.changwat_t}
            </option>
          ))}
        </select>

        <select name="amphoe" onChange={(e) => onChangeAmphoe(e)}>
          {amphoe.map((item, index) => (
            <option key={index} value={item.am_id}>
              {item.amphoe_t}
            </option>
          ))}
        </select>

        <select name="tambon" onChange={(e) => onChangeTambon(e)}>
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
