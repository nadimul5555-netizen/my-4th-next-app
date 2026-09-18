'use client'
import React, { useState } from 'react'

const Counter = () => {
  console.log("Client Component Renderd")
  const [counter,setCounter] = useState(0)

  const handleCounter =()=>{
     setCounter(counter+1)
  }
  return (
    <div>
      <h2 className='text-4xl font-bold my-4'>Counter = {counter}</h2>
      <button className='px-4 py-2 m-3 rounded-2xl bg-amber-500 hover:bg-gray-400 ' onClick={handleCounter}>Plus Counter</button>
    </div>
  )
}

export default Counter
