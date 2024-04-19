import React, { useContext } from 'react'
import { myContext } from './Context'

export default function C() {
    const data = useContext(myContext)
    return (
        <div>
            {data.name}
            {data.email}
        </div>
    )
}
