import React from 'react'
import { useSelector } from 'react-redux'

export default function Display() {
    const data=useSelector((store)=>{return store})
  return (
    <div>
        {
            data.map((el,i)=>{
                return <li id={i}>{el}</li>
            })
        }
    </div>
  )
}
