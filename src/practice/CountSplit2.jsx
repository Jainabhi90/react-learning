import React from 'react'

const CountSplit2 = (props) => {
  return (
    <div>
        <button onClick={()=>{props.setCount(props.count+1)}}>add in the childs child </button>
    </div>
  )
}

export default CountSplit2