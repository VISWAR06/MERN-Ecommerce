import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Allproducts = () => {
  const [allprdt, setAllprdt] = useState([])
  const fetchinfo = async()=>{
    await fetch('http://localhost:5000/api/allproduct')
    .then((res)=>res.json())
    .then((data)=>{setAllprdt(data)})
  }
  useEffect(()=>(
    fetchinfo()
  ),[])

  return (
    <div>
      <h1>allproduct</h1>
      <p>Name</p>
      <p>category</p>
      <p>price</p>
      {allprdt.map((prdocut,i)=>{
        return <div key={i}>
          <img src={prdocut.image} alt="" />
          </div>
      })}
    </div>
   
  )
}

export default Allproducts
