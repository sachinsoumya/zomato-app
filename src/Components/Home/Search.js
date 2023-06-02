import React, { Component } from 'react'
import './Search.css'; 

const lurl = "https://resturantapi-okl1.onrender.com/locations";
const rurl = "https://resturantapi-okl1.onrender.com/resturant?stateId="

export default class Search extends Component {
 constructor(){
  super();
  this.state = {
    location : "",
    resturants : "",
  }
 }

  renderCity = (data) =>{
  if(data){
   return data.map((item)=>{
    return  <option key={item._id} value={item.state_id}>{item.location_name}</option>
   });
  };
 };

 renderRest = (data) =>{
  if(data){
    return data.map((item)=>{
      return  <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option>
    });
  };
 };

 handleCity = (event)=>{
  const stateId = event.target.value;
  fetch(`${rurl}${stateId}` , {method:'GET'})
  .then((res)=>res.json())
    .then((data)=>{
      this.setState({resturants:data});
        console.log(data);
    });
};
   
  render() {
    return (
     <div className="header"> 
      <div className='inner'>
         <div className="d-flex justify-content-center ">
                    <div className="mt-5">
                        <div className="border border-primary rounded-circle logo text-center p-3 mx-auto ">
                            <div className="text-danger logo1  ">
                                e!
                            </div>
                        </div>
                        <div className="text-white h1 mt-4 text-center text-md-none">
                            Find the best restaurants, cafés, and bars

                        </div>
                        <div className="row gx-3 mt-5 justify-content-center px-4 px-md-0">
                             <div className="col-md-4 col-12 mx-auto ">
                              {/* <!-- <input class="form-control form-control-lg fc2" type="text" placeholder="Please type locations" aria-label=".form-control-lg example"> --> */}


                              <select className="form-select fc2" aria-label="Default select example" onChange={this.handleCity}>
                                <option value="1">-----SELECT CITY----</option>
                                {this.renderCity(this.state.location)}
                              </select>

                             </div>
                             <div className="col-12 col-md-8 mt-4 mt-md-0 ">
                              {/* <!-- <input class="form-control form-control-lg fc2" type="text" placeholder="Search for restaurants" aria-label=".form-control-lg example"> --> */}
                              
                              <select className="form-select fc2" aria-label="Default select example">
                                <option value="1">-----SELECT RESTURANT----</option>
                                {this.renderRest(this.state.resturants)}
                              </select>
                             </div>

                        </div>
                    </div>

                </div>

      </div>
    </div>
    )
  }

  componentDidMount(){
    fetch(lurl , {method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({location:data});
        console.log(data);
  })
}


}
