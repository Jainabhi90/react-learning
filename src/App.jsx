import React, { useState } from 'react'
import ForUseEffect from './class-2/ForUseEffect'
import CounterWithLimit from './practice/CounterWithLimit'
import StudentCard from "./practice/StudentCard";
import CountSplit1 from './practice/CountSplit1';
import TodoList from './practice/TodoList';

const App = () => {
  let[count,setCount] = useState(0);
  let [list,setlist] = useState(["Task1","Task2"]);
  return (
    <>
    
    <ForUseEffect/>
    <CounterWithLimit/>
      <>
       <StudentCard name="Abhi" rollNo={1} city="Indore"/>
       <StudentCard name="Krishiv" rollNo={2} city="Punjab"/>
       <StudentCard name="Chinche" rollNo={3} city="Ujjan"/>
       </>
    <CountSplit1 a={count} b={setCount} />
    <TodoList a={list}/>
    </>
  )
}

export default App
