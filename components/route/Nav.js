import React from 'react'
import "./Nav.css"

function Nav() {
  return (
<div className='navContainer'>
  <div className='lftContainer'>
    <h2>MY APP</h2>
  </div>
  <div className='rhtContainer'>
    <a href='\profile'>PROFILE</a>
    <a href='\user'>USER</a>
    <a href='\userinfo'>USERINFO</a>
    <a href='\props'>PROPS</a>
    <a href='\product'>PRODUCT</a>
  </div>
</div>
  )
}

export default Nav

