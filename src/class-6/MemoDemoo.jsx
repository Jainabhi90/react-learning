import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Child from './child'

const MemoDemoo = () => {
  let [count, setCount] = useState(0)
  let [inp, setinp] = useState("")
  let [show, setshow] = useState("noting for now ")
  //  let data = useMemo(()=>{
  //   let res =0;
  //   for(let i=0;i<1000000;i++){
  //     res += i;
  //   }
  //   return res
  //  },[])
  useEffect(() => {

    let store = localStorage.getItem("Key")

    if (store) {

      setinp(JSON.parse(store))

      setshow(JSON.parse(store))

    }

  }, [])
  let demo = () => {
    console.log("hellooooo");

  }
  let fun = useCallback(demo, [])
  return (
    <div>
      {/* <h2> data :{data}</h2> */}
      <input

        value={inp}

        onChange={(e) => setinp(e.target.value)}

      />
      <h1>{show}</h1>
      <button

        onClick={() => {
          setshow(inp)
          localStorage.setItem("Key", JSON.stringify(inp))
        }}

      >click</button>
      <Child fun={fun} />
    </div>
  )
}

export default MemoDemoo