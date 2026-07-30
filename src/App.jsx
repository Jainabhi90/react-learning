import React, { useState } from 'react'
import ForUseEffect from './class-2/ForUseEffect'
import CounterWithLimit from './practice/CounterWithLimit'
import StudentCard from "./practice/StudentCard";
import CountSplit1 from './practice/CountSplit1';
import TodoList from './practice/TodoList';
import NavBar from './class-3/NavBar';
import About from './class-3/About';
import Home from './class-3/Home';
import Contact from './class-3/Contact';
;
import { Route, Routes } from 'react-router-dom';

const App = () => {
  let[count,setCount] = useState(0);
  let [list,setlist] = useState(["Task1","Task2"]);
  return (
    <>
    
    {/* <ForUseEffect/>
    <CounterWithLimit/>
      <>
       <StudentCard name="Abhi" rollNo={1} city="Indore"/>
       <StudentCard name="Krishiv" rollNo={2} city="Punjab"/>
       <StudentCard name="Chinche" rollNo={3} city="Ujjan"/>
       </>
    <CountSplit1 a={count} b={setCount} /> */}
    {/* <TodoList a={list} b={setlist}/> */}
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
      </Routes>
    
    </>
  )
}

export default App
