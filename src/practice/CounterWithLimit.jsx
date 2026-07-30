import React, { useState } from 'react'

const CounterWithLimit = () => {
    let [count,setCount] = useState(0);
    let [status,setstatus] = useState("");
    const Add = ()=>{
        if(count < 10){
            setCount(count+1)
            setstatus("")
        }else{
            setstatus("limit exceed")
        }
    }
    const Sub = ()=>{
        if(count >0){
            setCount(count-1)
            setstatus("")
        }else{
            setstatus("limit exceed")
        }
    }
  return (
    <div>
        <h2>CounterWithLimit</h2>
        <h3>count:{count}</h3>
        <h4>{status}</h4>
        <button onClick={(Add)}>add</button>
        <button onClick={Sub}>sub</button>
    </div>
  )
}

export default CounterWithLimit