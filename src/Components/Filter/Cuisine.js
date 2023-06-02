import React, { Component } from 'react'
import axios from 'axios';
const url = "https://resturantapi-okl1.onrender.com/filter"
export default class Cuisine extends Component {
  filterCuisine = (event) =>{
    let mealId = this.props.mealId;
    let cuisineId = event.target.value;
    
    let cuisineUrl;
    if(event.target.value===""){
      cuisineUrl = `${url}/${mealId}`;
    }
    else{
      cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`
    }
    axios.get(cuisineUrl)
    .then((res)=>this.props.resPerCuisine(res.data));
}
  render() {
    return (
      <div className="py-2 text-primary">
        <div className="h5">Cuisine Filter</div>
       
        <div className="form-check"  onChange={this.filterCuisine}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="" />
            <label className="form-check-label text-secondary" htmlFor="flexRadioDefault1">
                All
            </label>
          </div>
          <div className="form-check"  onChange={this.filterCuisine} >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1"  />
            <label className="form-check-label text-secondary" htmlFor="flexRadioDefault2">
               North Indian
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCuisine} >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2"  />
            <label className="form-check-label text-secondary"  htmlFor="flexRadioDefault2">
                South Indian
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCuisine}  >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="3"  />
            <label className="form-check-label text-secondary" htmlFor="flexRadioDefault2">
            Chinese
            </label>
        </div>
        <div className="form-check"   onChange={this.filterCuisine} >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  value="4"/>
            <label className="form-check-label text-secondary" htmlFor="flexRadioDefault2">
            Fast Food
            </label>
        </div>
        <div className="form-check" onChange={this.filterCuisine} >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="5"    />
            <label className="form-check-label text-secondary" htmlFor="flexRadioDefault2">
            Street Food
            </label>
        </div>
        
          
          
    
    </div>
    )
  }
}
