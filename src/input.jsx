import { useState } from "react";

export const Input = () => {
    const [a,b]=useState("");
  return (
    <div>
         <input 
         type="text" 
         value={a} 
         onChange={(e)=> b(e.target.value)}
         />
         <button onClick={()=> b("")}>Clear</button>
         <p>{a.toUpperCase()}</p>
    </div>
   
  )
}
