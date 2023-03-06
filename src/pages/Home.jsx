import React, { createContext, useContext, useState } from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import Accordian from '../components/Accordian'
import Navbar from '../components/NavbarLandingPage'
import SignIn from '../components/SignIn';

const signInContext = createContext();

const Home = ({user, setUser}) => {
  const [signin, setSignIn] = useState(false)
  return (
    <signInContext.Provider value={{signin, setSignIn}}>
      {
        signin?(
          <SignIn user={user} setUser={setUser} />
        ):(
        <>
          <Navbar />
          <JumbotronContainer />
          <Accordian />
        </>
      )}
        
    </signInContext.Provider>
  )
}

export { signInContext}
export default Home