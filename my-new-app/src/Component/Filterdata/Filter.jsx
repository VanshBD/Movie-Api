import React, { useState } from 'react'

export default function Filter({data}) {
    const [Querry, setQuerry] = useState("")
    const [filterData, setfilterData] = useState([])

    function handleInputChange(e) {
        const  value = e.target.value;
        setQuerry(value);

        const  filteredData = data.filter((item)=> item.toLowerCase().includes(value.toLowerCase()))
        setfilterData(filteredData)
    }

  return (
    <div>
        <form>
            <input type="text" value={Querry } onChange={handleInputChange}/>
            <ul>
                 {filterData.map((item) => ( 
                <li key={item}>{item}</li>
                 ))}
            </ul>

        </form>
    </div>
    )
}
