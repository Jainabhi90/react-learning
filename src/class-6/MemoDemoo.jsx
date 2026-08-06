import React, { useCallback, useMemo, useState } from 'react'
import Child from './child'

const MemoDemoo = () => {
   let [count,setCount] = useState(0)
  //  let data = useMemo(()=>{
  //   let res =0;
  //   for(let i=0;i<1000000;i++){
  //     res += i;
  //   }
  //   return res
  //  },[])
  let demo =()=>{
    console.log("hellooooo");
    
  }
  let fun = useCallback(demo,[])
  return (
    <div>
          {/* <h2> data :{data}</h2> */}
         <h1>{count}</h1>
        <button onClick={()=>(setCount(count+1))} >click</button>
        <Child fun={fun}/>
    </div>
  )
}

export default MemoDemoo