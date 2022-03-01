import React from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Menu from './component/Menu'
import About from './component/About'
import Explore from './component/Explore'
import Pnf from './component/Pnf'
import Home from './component/Home'
import CustomValid from './component/CustomValid'
import Register from './component/Register'
import Footer from './component/Footer'
import Protected from './component/Protected'




function App() {
  
  return(
    <BrowserRouter>

      <Menu />

      <Routes>
          <Route path={`/`} element={<Home/>}/>
          
          <Route path={`/home`} element={<Home/>}/>
          
          <Route path={`/about`} element={ <Protected Cmp={About}/> }/>
          
          <Route path={`/explore`} element={ <Protected Cmp={Explore}/> }/>

          <Route path={`/contact`} element={ <Protected Cmp={CustomValid}/> }/>
          
          <Route path={`/register`} element={<Register/>} />
          
          <Route path={`/*`} element={<Pnf/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App