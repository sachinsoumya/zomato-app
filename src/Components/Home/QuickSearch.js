import React, { Component } from 'react'
import { QuickDisplay } from './QuickDisplay'

const qrl = "http://localhost:5000/quickSearch"
export default class QuickSearch extends Component {
 constructor(){
  super()
  this.state = {
    mealType:""
  }
 }

  render() {
    return (
      
      <div className="bodyy p-3 p-md-4 p-lg-5">
         
          <div className="h1 text-primary">Quick Searches</div>
          <div className="text-secondary h5">Discover restaurants by type of meal</div>
          <QuickDisplay mealData={this.state.mealType} />

        

        
      </div>
     
    )
  }

  componentDidMount(){
    fetch(qrl , {method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({mealType:data});
        console.log(data);
  })
}
}
