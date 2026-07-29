import React, { useEffect, useState } from 'react'

const ForUseEffect = () => {
    let [count, setCount] = useState(0)
    let [saver, setSever] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
            return res.json()
        }).then((data) => {
            setSever(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            {
                saver.map((a)=>{
                    return(
                        <div>
                            <h2>{a.id}</h2>
                            <h2>{a.title}</h2>
                        </div>
                    )
                })
            }
            <h3>{count}</h3>
            <button onClick={() => { setCount(count + 1) }}>click</button>
        </div>
    )
}

export default ForUseEffect