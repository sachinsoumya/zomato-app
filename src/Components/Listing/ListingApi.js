import React, { Component } from 'react'
import axios from "axios";
import ListingDisplay from "./ListingDisplay";
import Cuisine from '../Filter/Cuisine';
import Cost from '../Filter/Cost';
import Sort from '../Filter/Sort';


const url = "http://localhost:5000/resturant?mealId=";

export default class ListingApi extends Component {
    constructor(){
        super()
        this.state = {
            resturantList:"",
        };
        
    }
    setCostData = (data)=>{
      this.setState({resturantList:data});
    }
    setCuisineData = (data)=>{
      this.setState({resturantList:data});
    }
    setSortData = (data)=>{
      this.setState({resturantList:data});
    }
  render() {
    return (
      <div>
        <div className="px-5 py-3 overflow-hidden">
        <div className=" w-100 h-100 px-3 ">
          <div className="text-primary h1">Breakfast Places in Mumbai</div>
          <div className="row">
            <div className="col-12 col-lg-4 px-3">
              <div className="py-3 text-primary">
              <div class="h4">Filters</div>
              </div>
              <Cuisine mealId={this.props.match.params.mealId} resPerCuisine={((data)=>{
                  this.setCuisineData(data)
              })} />
              <Cost mealId={this.props.match.params.mealId} resPerCost={((data)=>{
                  this.setCostData(data)
              })} />
              <Sort mealId={this.props.match.params.mealId} resPerSort={((data)=>{
                  this.setSortData(data)
              })} />

            </div>
            <ListingDisplay listData={this.state.resturantList}/>
            
          </div>
          
        </div>
        </div>
      </div>
    )
  }

  componentDidMount (){
    let mealId = this.props.match.params.mealId;
    sessionStorage.setItem("mealId" ,mealId);
    axios.get(`${url}${mealId}` , {method:"GET"})
    .then((res)=>this.setState({resturantList:res.data}));
  

  }
}
