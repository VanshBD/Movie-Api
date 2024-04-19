import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { app } from '../Firebase';
export default function Fb_dataBase() {
  const [data, setData] = useState({})
  const database = getDatabase(app);
  const dataref = ref(database, "users");

  useEffect(() => {
    onValue(dataref, (snap) => {
      const data = snap.val();
      setData(data);
    })
  }, [])


  function writeData() {
    console.log("object");
    set(dataref, {
      message: "Hello World!"
    });

  }
  return (
    <>
      <div>Fb-dataBase</div>
      <button onClick={writeData}>Write data</button>
      <p>{data.message}</p>
    </>
  )
}
