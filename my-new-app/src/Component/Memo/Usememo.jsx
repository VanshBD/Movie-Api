import React, { useCallback, useMemo, useState } from 'react'

export default function Usememo() {
    const[inputValue,setInputValue]=useState('')
    const[count,setCount]=useState(0)
    const expensiveComputation=(value)=>{
        console.log('Executing expensive  computation...');
        return value.toUpperCase();
    }
    const memorizedValue=useMemo(()=>expensiveComputation(inputValue),[inputValue]);

    const incrementCount=useCallback(()=>{
        setCount((prevCount)=> prevCount+1)
    },[])
  return (
   <div>
    <input type='text' value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
    <p>You entered: {inputValue}</p>
    <button onClick={incrementCount}>Increment</button>
    <p>Count: {count}</p>
   </div>
  )
}
