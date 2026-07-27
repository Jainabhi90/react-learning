import React, { useState } from 'react'
import Home from './Home'

const App = () => {
   let [count,setcount] = useState(0)
  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>{setcount(count+1)}}>add</button>
      <button onClick={()=>{setcount(count-1)}}>sub</button>
      <button onClick={()=>{setcount(0)}}>reset</button>
      <Home/>
    </>
  )
}

export default App
