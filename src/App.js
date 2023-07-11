import React from 'react'
import './App.css'
import { Footer, Blog, Possibility, Features, whatgpt3,Header } from './containers'
import { Cta,Brand, Navbar  } from './components'
import Whatgpt3 from './containers/whatGPT3/Whatgpt3'
const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <Whatgpt3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/> 
    </div>
  )
}

export default App
