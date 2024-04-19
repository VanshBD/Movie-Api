import React, { useState } from 'react'

export default function CounterProject() {
  const [counter, setcounter] = useState(0)

  return (<>
    <div className="my-5 ">
      <div>Counter-project</div>
      <div className="container ">
        <h1>{counter}</h1>
        <div className='d-flex justify-content-center gap-5'>
          {
            <>
              <button className='btn btn-danger' onClick={() => setcounter(0)}>Reset</button>
              <button className='btn btn-info' onClick={() => setcounter(c => c - 1)}>Decrement</button>
              <button className='btn btn-info' onClick={() => setcounter(c => c + 1)}>Increment</button>
            </>
          }
        </div>
      </div>
    </div>
  </>
  )
}
