/* eslint-disable no-useless-constructor */
import React from 'react'
class Header extends React.Component{
    constructor(props){
      super(props)
    }
    
    render(){
      const {
        home
      }=this.props.data
      return(
        <header>
          <div className='header-wrapper'>
            <h1>{home}</h1><br/>
           
            
            
          </div>
        </header>
      )
    }
  }

  export default Header