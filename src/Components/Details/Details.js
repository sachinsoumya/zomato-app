import React, { Component } from 'react'
import axios from 'axios';
import "./Details.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuList from './MenuList';
import {Link} from 'react-router-dom';

const url = "http://localhost:5000"

export default class Details extends Component {
    constructor(){
        super()
        this.state = {
            details:"",
            menulist:"",
            userItem :"",
            mealId:sessionStorage.getItem("mealId")
            
            

        };
        
    }
   proceed = ()=>{
    sessionStorage.setItem("menu",this.state.userItem);
    this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
   }

   addtoCart=(data)=>{
    this.setState({userItem:data})
  }
  render() {
    let {details} = this.state;
    return (
        <div className="container-fluid">
        
        <div className="px-3 py-3 d-flex flex-wrap">
            <img src={details.restaurant_thumb} alt="meal" className="rounded-4 thumbWidth object-fit-cover"  />
            
            
            <div className='ps-md-3 '>
                <div className="text-dark h1">{details.restaurant_name}</div>
                <div className="text-secondary">250 customers say {details.rating_text}</div>
                <div className="text-dark h4 text-decoration-line-through">Old price:Rs 1000</div>
                <div className="text-dark h4">New price:Rs {details.cost}</div>
                <div className="text-dark h4">Best taste of Fresh and hot food at your Door Step and Dineln</div>
                <figure className="figure">
                    <i className="bi bi-record-circle fs-1 text-success"></i>
                    <figcaption className="figure-caption">Pure Veg</figcaption>
                  </figure>
                  <figure className="figure ms-3 ms-md-4">
                    <i className="bi bi-ev-station-fill fs-1 text-warning"></i>
                    <figcaption className="figure-caption">Fully Sanitised</figcaption>
                  </figure>
                  <Tabs>
                    <TabList>
                      <Tab>
                        About us
                      </Tab>
                      <Tab>
                        Contact
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className='h5 text-primary'>About this place</div>
                      <div className="h6 text-primary">Rating -<span className='text-danger ps-2'>{details.average_rating}</span></div>
                     
                    </TabPanel>
                    <TabPanel>
                      <div className='h6'>
                        <div className='text-primary'>Phone number</div>
                        <a href='tel:{details.contact_number}' className="text-danger">+91{details.contact_number}</a>
                      </div>
                      <div className="h6">
                        <div className="text-primary fw-bold">{details.restaurant_name}</div>
                        <div className="text-secondary">{details.address}</div>
                      </div>
                      
                     
                    </TabPanel>
                  </Tabs>

            </div>
            </div>
            <div className="d-flex justify-content-between container-fluid">
              <Link to={`/listing/${this.state.mealId}`} className='btn btn-danger'>Back</Link>
              <Link  className='btn btn-primary' onClick={this.proceed}>Proceed</Link>

            </div>
            <MenuList menuData={this.state.menulist} finalOrder={(data)=>{
              this.addtoCart(data);
            }}/>
            
        
    </div>
    )
  }
  async componentDidMount(){
    let restId = this.props.location.search.split("=")[1];
    console.log(this.props.location.search);
   
    let response = await axios.get(`${url}/details/${restId}` , {method:"GET"});
    let menuData = await axios.get(`${url}/menu/${restId}` , {method:"GET"});
    console.log(response);
    console.log(menuData);
    this.setState({details:response.data[0] , menulist:menuData.data});
   
  }
}
