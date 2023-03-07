import React, {useRef, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

const SignIn = () => {
    const [isSign, setSign] = useState(true)
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null)

    const register = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(
           auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })
    }
    const signInFunc = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(
            auth, 
            emailRef.current.value,
            passwordRef.current.value
        ).then((authuser)=>{
            console.log(authuser)
        }).catch(err=>{
            alert(err.message)
        })
    }

  return (    
        <div className='signInScreen'>
            <div className = 'logo'>
                <img src="/images/misc/logo.svg" alt="" />
            </div>
            {
                isSign?(
                <SignInComp 
                isSign={isSign} 
                setSign={setSign}
                signInFunc = {signInFunc}
                emailRef={emailRef}
                passwordRef={passwordRef}

                />):(<SignupComp
                isSign={isSign}
                setSign={setSign}   
                register={register}
                emailRef={emailRef}
                passwordRef={passwordRef}
                nameRef = {nameRef}
                />)
            }    
        </div>
  )
}




const SignInComp = ({isSign, setSign, signInFunc, emailRef, passwordRef}) =>{
    return (
        <form className="signInForm">
        <h1>Sign In</h1>
        <input placeholder ="Email" type="email" ref={emailRef}  />
        <input placeholder='password' type='password' ref={passwordRef} />

        <button type="submit" onClick={signInFunc}>Sign In</button>
        <p style={{color:"grey"}}>Don't have an account? <button onClick={()=>setSign(false)} className="sign">sign up!</button></p>
    </form>
    )
}

const SignupComp = ({isSign, setSign, register, emailRef, passwordRef, nameRef})=>{
    return (
        <div className='signInScreen'>
            <form className="signInForm signUpForm">
                <h1>Sign Up</h1>
                <input placeholder='Name' type="text" ref = {nameRef} />
                <input placeholder ="Email" type="email" ref={emailRef} />
                <input placeholder='password' type='password'  ref={passwordRef}/>
    
                <button type="submit" onClick={register} >Sign Up</button>
                <p style={{color:"grey"}}>Already have an account? <button onClick={()=>setSign(true)} className="sign">sign In!</button></p>
            </form>
        </div>
      )
}

export default SignIn