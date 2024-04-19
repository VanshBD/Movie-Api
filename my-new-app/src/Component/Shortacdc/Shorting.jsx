import React, { useState } from 'react'

export default function Shorting({items}) {
    const [sortOrder, setsortOrder] = useState("ascending")

    function handleSort(e){

        setsortOrder(e.target.value);
        
    }
    const sortedData=[...items].sort((a,b)=>{
        if(sortOrder === "ascending"){
            return a.price - b.price 
        } else {
            return b.price - a.price 
        }
    })

  return (
    <div>
        <div>
            <label htmlFor="sortOrder">Sort Order</label>
            <select id="sortOrder" value={sortOrder} onChange={handleSort} >
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
        <ul>
            {sortedData.map((data,i) =>  (
                <li key={i}>
                   {data.name} - ${data.price}
                </li>
            ))}
        </ul>
    </div>
  )
}
