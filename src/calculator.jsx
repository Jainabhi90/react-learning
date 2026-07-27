import { useState } from "react";

export const Calculator = () => {
    const [type1,setType1]=useState("")
    const [type2,setType2]=useState("")
    const [ans,setAns]=useState("")
    const sum=(a,b)=>{
        setAns(Number(a)+Number(b));
    }
    const sub=(a,b)=>{
        setAns(Number(a)-Number(b));
    }
  return (
    <div>
        <input 
        type="number" 
        value={type1}
        onChange={(e)=>setType1(e.target.value)}
        />
         <input 
        type="number" 
        value={type2}
        onChange={(e)=>setType2(e.target.value)}
        />
        <button onClick={()=>(sum(type1,type2))}>add</button>
        <button onClick={()=>(sub(type1,type2))}>sub</button>
        <h2>{ans}</h2>

    </div>
  )
}
