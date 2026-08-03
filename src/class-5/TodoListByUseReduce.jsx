import React, { useReducer } from 'react'

const TodoListByUseReduce = () => {
    let data = {
        input:"",
        list:[],
        newInput:"",
    }
    function reduser(state,action){
        if (action.type=="inp"){
            return{
                ...state,
                input:action.payload
            }
        }else if(action.type=="add"){
            return{
                ...state,
                list:[...state.list,state.input],
                input:""
            }
        }else if(action.type=="d"){
            return{
                ...state,
                list:state.list.filter((_,id)=>id!==action.payload),
            }
        }else if(action.type=="edit"){
            return{
                ...state,
               newInput:state.list.filter((_,id)=>{id==action.payload}),
               input:{newInput},
            }
        }
    }
    let[state,dispatch] = useReducer(reduser,data)
  return (
    <div>
        <input value={state.input} onChange={(e)=>{dispatch({type:"inp",payload:e.target.value})}}></input>
        <button onClick={()=>{dispatch({type:"add"})}}>add</button>
        {
            state.list.map((a,i)=>{
                return <>
                <li>{a}</li>
                <button onClick={()=>{dispatch({type:"d",payload:i})}}>del</button>
                <button onClick={()=>{dispatch({type:"edit",payload:i})}}>edit</button>
                </>
            })
        }
    </div>
  )
}

export default TodoListByUseReduce