import React from 'react'

const StudentCard = (props) => {
  return (
    <div style={{background:"gray" , height :"180px" , width:"180px" , border:"1px solid black" , padding:"10px" , margin:"10px"}}>
        <h3>*{props.name}</h3>
        <h3>*{props.rollNo}</h3>
        <h3>*{props.city}</h3>
    </div>
  )
}

export default StudentCard