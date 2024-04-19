import React, { useState } from 'react'
import { myContext } from "./Context";
import B from './B';
export default function A() {
    const [state, setState] = useState(
        {
            name:"abc",
            email:"xyz@gmail.com"
        }
    )

  return (
    <div><p>{state.name}</p>
    <myContext.Provider value={state}>
    <B />
    </myContext.Provider>
    </div>
  )
}
