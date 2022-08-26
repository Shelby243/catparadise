import React from 'react'
import { Routes, Route, NavLink} from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Data from '../dummy data/Dummy data'



const Navbar=()=>{
   
        return (
            <div className='App'>
                <ul>
                  <li> <NavLink to='/'>Home</NavLink></li>  
                  <li> <NavLink to='/about'>About</NavLink></li> 
                  <li> <NavLink to='/data'> Data</NavLink></li>
                 
                  

                </ul>
                <br/><br/><br/>
            <Routes>
             
                  <Route path="/about"  element={< About/>}/>
                  <Route path="/data"  element={<Data/>}/>
                  <Route path='/' element={<Home/>}/>
                 
            </Routes>
            </div>
        )
    
}

export default Navbar