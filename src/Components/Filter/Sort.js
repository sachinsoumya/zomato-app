import React, { Component } from 'react';
import axios from 'axios';
const sortUrl = `http://localhost:5000/filter`;
export default class Sort extends Component {
    filterSort=(e)=>{
        let mealId = this.props.mealId
        let sortValue = e.target.value;
        let sortingUrl ;
        if(sortValue===""){
            sortingUrl = `${sortUrl}/${mealId}`
        }
        else{
            sortingUrl = `${sortUrl}/${mealId}?sort=${sortValue}`;
        }
        axios.get(sortingUrl)
        .then((res)=>this.props.resPerSort(res.data));




    }
  render() {
    return (
        <div className="py-2 text-primary">
        <div  className="h5">Sort</div>
        <div  className="form-check" onChange={this.filterSort}>
            <input  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1" />
            <label  className="form-check-label text-secondary" htmlFor="flexRadioDefault1">
                Price low to high
            </label>
          </div>
          <div className="form-check" onChange={this.filterSort}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="-1" />
            <label  className="form-check-label text-secondary" htmlFor="flexRadioDefault2">
                Price high to low
            </label>
          </div>

    </div>
    )
  }
}
