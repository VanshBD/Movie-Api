
import { collection, addDoc, getFirestore, doc, getDoc } from "firebase/firestore"; 
import React from 'react'
import { app } from "../Firebase";

const db= getFirestore(app)

export default function FBStore() {
    async function writeData(){
    const result= await addDoc(collection(db,"Posts"),{
        title:"mehul ki shaadi",
        spouse_collection:1,
        spouse_name : "Mehul Sharma",
        about:"I love to code and play games.",
        contact:{
            email:"mehuls@gmail.com",
            phone:"9876543210"
        },
        weddingPlace:{
            country:"India"
        }
    })
    console.log(result);
}

    async function subCollection() {
        const result= await addDoc(collection(db,"Posts/PcxmLIbwUkcDo3GcJ5tz/weddingPlace/country/place"),{
            state:"Gujarat",
            city:"Ahmedabad"
        })
        console.log(result);
        
    }

    async function getData() {
        const ref = doc(db,"Posts","KzOoOqm6cSUEn5s5SPE4");
        const result = await  getDoc(ref);
        console.log(result.data());
    }


  return (
<div>
<h2>FbStore</h2>
<button onClick={writeData}>Add Data to FbStore </button><br/>
<button onClick={subCollection}>Update data in FbStore</button><br/>
<button onClick={getData}>Get Data from FbStore</button><br/>
</div>    
  )
}
