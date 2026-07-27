import { useState } from "react"

export const Length = () => {
    const[text,setText]=useState("");
  return (
    <div>
        <input 
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <p>{text.length()}</p>
        {/* {text.length>10 && <p>Too long</p>}
        {text.length==0 && <p> Start Typing...</p>} */}
    </div>
  )
}
