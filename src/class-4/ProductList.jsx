import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
    let nav = useNavigate()
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
    const fun1 =(id) =>{
        console.log(id,"inFuctionFun1");
        nav(`/prodD/${id}`)
    }

  return (
    <div>
       { list.map((a)=>{
           return  <li onClick={()=>fun1(a.id)}>{a.name}</li>
        })
    }
    </div>
  )
}

export default ProductList