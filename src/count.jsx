import { useState } from "react";

import React from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
        <button onClick={()=> setCount(count+5)}>+5</button>
        <p>
            {count>50?"its to high":""}
        </p>
    </div>
  )
}
