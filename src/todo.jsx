import { useState } from "react"

export const Todo = () => {
    const[list,setList]=useState([]);

    const[task,setTask]=useState("");

    const addTask=()=>{
        if(task.trim===""){
            return
        }
        setList([...list,task]);
        setTask("")
    }

    const remove=(index)=>{
        const newList=list.filter((_,i)=>i!=index);
        setList(newList);
    }

    const removeAll=()=>{
        setList([]);
    }
    
  return (
    <div>
    <input 
        type="text"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
    />
    <button onClick={addTask}>add</button>
    <button onClick={removeAll}>removeAll</button>
    <ul>
        {list.map((item,idx)=>(
            <li key={idx}>
                {item}
            <button onClick={()=>remove(idx)}>remove</button>
            </li>
        ))}
    </ul>
    </div>
  )
}
