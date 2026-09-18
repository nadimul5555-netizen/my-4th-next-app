import React from 'react'
import Counter from '../Components/Counter'

const page = () => {
  console.log("This is dashboard from dashboard page")
  return (
    <div>
      <Counter></Counter>
      <ul>
        <li>This is Dashboard list 1</li>
        <li>This is Dashboard list 2</li>
        <li>This is Dashboard list 3</li>
      </ul>
    </div>
  )
}

export default page
