import React, {useContext} from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { signInContext } from '../pages/Home'



const Navbar = () => {
  const {signIn, setSignIn} = useContext(signInContext)
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className = 'navi'>
            <img onClick = {()=>(navigate('/'))} src="/images/misc/logo.svg" alt="" />
            <button onClick={()=>setSignIn(!signIn)}>Sign In</button>
        </div>

        <div className='navi-body'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className='input-submit'>
                <input type='email' placeholder='Email address' required />
                <button onClick={()=>setSignIn(!signIn)}> <p> Get Started </p>{<AiOutlineRight className='icon' />}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar