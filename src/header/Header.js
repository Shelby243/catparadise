/* eslint-disable no-useless-constructor */
import React from 'react'

import Navbar from '../components/navbar'
import { BrowserRouter } from 'react-router-dom'


class Header extends React.Component{
    constructor(props){
      super(props)
    }
    
    render(){
      const {
        welcome,
        title,
        day
      }=this.props.data1
      return(
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1><br/>
            <h3>{day}</h3><br/>
            <BrowserRouter>
              <Navbar/>
            </BrowserRouter>
            <h2>{title}</h2>
            <p>There are {this.props.number} cat breeds</p>
            
            
          </div>
        </header>
      )
    }
  }

  export default Header