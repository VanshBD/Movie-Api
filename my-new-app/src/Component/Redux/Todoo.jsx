import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from './Action'
import { myStore } from './Store'

export default function Todoo() {
  const [state, setState] = useState("")
  const dispatch = useDispatch()
  function AddText(e) {
    setState(e.target.value)
  }
  function AddTodo() {
    if (state == "") {
      alert("please fell the  input box")
      return 
    }
  
    
    dispatch(addAction(state))
  }
  return (
    <div>
      <input type="text" onChange={AddText} placeholder="Add a task..." />
      <button onClick={AddTodo}>Add</button>
    </div>
  )
}
