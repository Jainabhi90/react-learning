import { useState } from "react";

export const Searching = () => {
    const [a,b]=useState("");
    const arr=["apple","banana","mapple"];
    const [list,useList]=useState([]);
    const[bool,setBool]=useState(false);

    const newarr=(find)=>{
        const newlist=arr.filter((i)=>i.includes(find));
        useList(newlist);
        setBool(true);
        b("");
    }
  return (
    <div>
         <input 
         type="text" 
         value={a}
         onChange={(e)=> b(e.target.value)}
         onKeyDown={(e) => {
          if (e.key === "Enter") newarr(a);
        }
         }
         />
         <button onClick={()=>newarr(a)}>Search</button>
         {list.length===0 && bool?<p>not found</p>:
         <ul>
            {list.map((input,idx)=>(
                <li key={idx}>{input}</li>
            ))}
         </ul>}
    </div>
   
  )
}
