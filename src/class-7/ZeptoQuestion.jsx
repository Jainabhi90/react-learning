import React, { useEffect, useState } from 'react'

const ZeptoQuestion = () => {
     let[inp,setInp] = useState("");
     let [list,setList] = useState([]);

     async function ApiCalling() {
        if(inp==""){
            alert("emptyyyy")
            return ;
        }
        let res = await fetch(`https://dummyjson.com/products/search?q=${inp}`)
        let data = await res.json()
        setList(data);   
     }

     useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            setList(data.products);
        });

    }, []);

    function ascc(){
        let lst = [...list].sort((a,b)=> a.price-b.price)
        setList(lst)
    }
    function dis(){
        let lst = [...list].sort((a,b)=> b.price-a.price)
        setList(lst)
    }
    function pricefilter(a,b) {
        let low = Number(a);
        let highPrice = Number(b);

        let lst = list.filter((item) => {
            return item.price >= low && item.price <= highPrice;
        });

        setList(lst);
        
    }

  return (
    <div> 
        <input onChange={(e)=>{setInp(e.target.value)}}/>
        <button onClick={ApiCalling}>search</button>
        <button onClick={ascc}>a</button>
        <button onClick={dis}>d</button>
        <select onChange={(e) => {
            if(e.target.value=="0-10") pricefilter(0,10);
            if(e.target.value=="10-100") pricefilter(10,100);
            if(e.target.value=="100-500") pricefilter(100,500);
            if(e.target.value=="500-1000") pricefilter(500,1000);
            if(e.target.value=="1000-10000") pricefilter(1000,10000);
        }}>
            <option>select price range</option>
            <option value="0-10">0-10</option>
            <option value="10-100">10-100</option>
            <option value="100-500">100-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000-10000">1000-10000</option>
        </select>
        {
            list.map((a)=>{
                return <div>
                    <img src={a.thumbnail}></img>
                    <h1>{a.price}</h1>
                    <h2>{a.title}</h2>
                </div>
            })
        }
    </div>
  )
}

export default ZeptoQuestion