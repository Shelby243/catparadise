/* eslint-disable no-useless-constructor */
import React from 'react'
import Cat from '../components/Cat'

class Main extends React.Component{
    constructor(props){
        super(props)
      }
      render(){
        return (
            <main>
                <div className='main-wrapper1'>
                  {this.props.cat1.map((cat)=>(<Cat key={cat.id} cat={cat}/>))}
                </div>
            </main>
        )
      }
}
export default Main