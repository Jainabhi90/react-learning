import React, { useState } from 'react'

const TodoList = (props) => {
  let [newTask, setNewTask] = useState("");

  const AddTask = () => {
    props.b([...props.a, newTask]);
    setNewTask("");
  };

  return (
    <>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={AddTask}>Add</button>

      <ul>
        {props.a.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default TodoList