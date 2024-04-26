import React from 'react'
import Child2 from './Child2'

function Child1() {
  return (
    <div>
      <h2>Child1 Component</h2>
      <input type='text'></input>
      <Child2/>
    </div>
  )
}

export default Child1
