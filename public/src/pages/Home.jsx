import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import Accordian from '../components/Accordian'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <JumbotronContainer />
      <Accordian />
    </>
  )
}

export default Home