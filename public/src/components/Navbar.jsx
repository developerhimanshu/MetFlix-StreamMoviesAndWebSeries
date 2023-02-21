import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className = 'navi'>
            <img src="/images/misc/logo.svg" alt="" />
            <button>Sign In</button>
        </div>

        <div className='navi-body'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className='input-submit'>
                <input type='email' placeholder='Email address' required />
                <button> <p> Get Started </p>{<AiOutlineRight className='icon' />}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar