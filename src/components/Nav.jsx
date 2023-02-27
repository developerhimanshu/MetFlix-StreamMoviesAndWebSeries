import React, { useEffect, useState } from 'react'

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return ()=>{
        window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])
  return (
    <div className = {`nav ${show?"nav_black":""} `}>
        <div className="nav_content">
            <img 
            className = 'nav_logo'
            src="/images/misc/logo.svg"
            alt="" 
            />

            <img 
            className='nav_avatar'
            src="/images/users/1.png" 
            alt="" />
        </div>
    </div>
  )
}

export default Nav