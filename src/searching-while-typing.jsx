import { useState } from "react";
export const Filter = () => {
    const [type,setType]=useState("")
    const arr=["apple","mango","mapple","grapes"];
    const [list,setList]=useState([]);

    const newarr=(find)=>{
        const newlist=arr.filter((i)=>i.includes(find));
        setList(newlist);
    }
    
  return (
    <div>
        <input 
        type="text"
        value={type}
       onChange={(e)=>{
        const value=e.target.value;
        setType(value);
        newarr(value);
       }}
        />
        {list.length===0 ?<p>search</p>:
         <ul>
            {list.map((input,idx)=>(
                <li key={idx}>{input}</li>
            ))}
        </ul>
        }
       

    </div>
  )
}
