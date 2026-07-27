import { useState } from "react";

export const Toggle = () => {
    const [a , settoggle]=useState(true);
  return (
    <div>
    <button onClick={()=> settoggle(!a)}>Toggle
    </button>
      <p>{a?"text by ternery":""}</p>
      {a && <p>text by conditional</p>}
    </div>
  )
}
