import React, { Component } from 'react'
import axios from 'axios';

const url = "https://resturantapi-okl1.onrender.com/filter"
export default class Cost extends Component {
    filterCost = (event) =>{
        let mealId = this.props.mealId;
        let cost = event.target.value.split("-");
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value===""){
          costUrl = `${url}/${mealId}`;
        }
        else{
          costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res)=>this.props.resPerCost(res.data));
    }
  render() {
    return (
        <div className="py-2 text-primary">
        <div className="h5">Cost Filter</div>
       
        <div className="form-check" onChange={this.filterCost}>
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="" />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault1">
                All
            </label>
          </div>
          <div className="form-check" onChange={this.filterCost} >
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="100-300"  />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault2">
                 100 to  300
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCost} >
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="300-500"   />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault2">
                 301 to 500
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCost}  >
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="500-800"  />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault2">
                 501 to 800
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCost} >
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="800-1000" />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault2">
                 801 to 1000
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCost} >
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1000-1200"   />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault2">
                1001 to  1200
            </label>
        </div>
        <div className="form-check"  onChange={this.filterCost} >
            <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1200-2000"  />
            <label className="htmlForm-check-label text-secondary" htmlFor="flexRadioDefault2">
                 1201 to  2000
            </label>
        </div>
      
          
          
    
    </div>
    )
  }
}
