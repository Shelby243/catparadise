import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import axios from 'axios'




class App extends React.Component{
  state={
    data:[],
  }
  componentDidMount(){
    const url='https://api.thecatapi.com/v1/breeds'
    axios
      .get(url)
      .then((response)=>{
        this.setState({
          data:response.data,
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  render(){
   

    const data1={
      welcome:'30 DAYS OF REACT',
      title:'Cats Paradise',
      day:'Day 20 >>'
    }
    return(
      <div className='app'>
        <Header 
        data1={data1}
        number={this.state.data.length}
        />
        <Main
        cat1={this.state.data}
        />
        
      </div>
    )
  }
}

export default App