import React, { useState } from 'react'
import Home from './Home'

const App = () => {
   let [count,setcount] = useState(0)
   let [colour,setcolour] = useState("red")
   let [a,seta] = useState(false)
   let [text,setText] = useState("I'm Spider Man")

   function forToggel(){
    if(a==false){
      setcolour("gold")
      setText("I'm Iron man")
    }else{
      setcolour("red")
      setText("I'm Spider Man")
    }
    seta(!a)
   }
  return (
    <div style={{background:colour,height:"100vh",width:"100vh"}}>
      <h2>{count}</h2>
      <button onClick={()=>{setcount(count+1)}}>add</button>
      <button onClick={()=>{setcount(count-1)}}>sub</button>
      <button onClick={()=>{setcount(0)}}>reset</button>
      <button onClick={forToggel}>bgc</button>
      <h2>{text}</h2>
    </div>
  )
}

export default App
