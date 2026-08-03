import React, { useReducer } from 'react'

const UseReduce = () => {
    let[state,dispatch] = useReducer(reducer,0)

    function reducer(state,action){
        console.log({state})
        if(action.type=="inc"){
           return  state+1
        }else if(action.type=="sub"){
            return state-1
        }else if(action.type=="reset"){
            return 0
        }else{
           return  state
        }
    }
  return (
    <div>
        <h2>{state}</h2>
        <button onClick={()=>{dispatch({type:"inc"})}}>add</button>
        <button onClick={()=>{dispatch({type:"sub"})}}>sub</button>
        <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
    </div>
  )
}

export default UseReduce