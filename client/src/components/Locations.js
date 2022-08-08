import React, { useState, useEffect } from "react";

import { listProvince, listAmphoe, listTambon } from "../functions/locations";

const Locations = ({data,setData}) => {
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

  const onChangeProvince = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    setData({ ...data, [e.target.name]: label });

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
    setData({ ...data, [e.target.name]: label });

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
    setData({ ...data, [e.target.name]: label });
  };

  return (
  <>
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
  </>
  );
};

export default Locations;
