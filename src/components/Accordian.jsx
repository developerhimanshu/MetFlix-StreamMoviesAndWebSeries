import React, { useContext } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'
import { useState } from 'react'
import faqsarr from '../fixtures/faqs.json'
import { signInContext } from '../pages/Home'

const Accordian = () => {
    const {signIn, setSignIn} = useContext(signInContext);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (activeIndex === index) setActiveIndex(null);
        else
            setActiveIndex(index)
    }
    const accordianHtml = faqsarr.map((i, index) => (
        <div className='accord' key = {i.id}>        
            <button className='accordian-button' onClick={() => toggleQuestion(index)}>
                <p>{i.header}</p>
                {activeIndex === index ? <BsX className='plus' /> : <AiOutlinePlus className='plus' />}
            </button>
            {activeIndex==index && <p className="accordian-body animate">{i.body}</p>}
        </div>
    ))

    return (
        <div className="accordian">
            <h1>Frequnetly Asked Questions</h1>
            {accordianHtml}
            <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
            <div className='input-submit'>
                <input type='email' placeholder='Email address' required />
                <button onClick={()=>{setSignIn(!signIn)}}> <p> Get Started </p>{<AiOutlineRight className='icon' />}</button>
            </div>
        </div>
    )
}

export default Accordian