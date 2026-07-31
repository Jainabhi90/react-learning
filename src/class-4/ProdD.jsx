import React from 'react'
import { useParams } from 'react-router-dom'

const ProdD = () => {
    const id =useParams()
    console.log(id,"hehheheh")
     const list =[
        {
            id:1,
            name :"Iphone",
            price: 80000,
        },
        {
            id:2,
            name :"Samsung",
            price: 60000,
        },
        {
            id:3,
            name :"OnePlus",
            price: 40000,
        }
    ]
    let data = list.find((a)=>{
        return a.id == id
        console.log(a.name,"isisisiisisi")
    })
    console.log(data);
    
  return (
    <div>
        {data.name}
    </div>
  )
}

export default ProdD