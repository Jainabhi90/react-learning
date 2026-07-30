import React from 'react'
import CountSplit2 from './CountSplit2'

const CountSplit1 = (props) => {
  return (
    <>
    <h2>{props.a}</h2>
    <CountSplit2 count={props.a} setCount={props.b}/>
    </>
  )
}

export default CountSplit1