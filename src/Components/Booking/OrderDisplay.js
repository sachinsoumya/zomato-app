import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
let durl = "http://localhost:5000/deleteOrders/"
// import OrderMenu from './OrderMenu';
// const murl2 = "http://localhost:5000/menuItem";

export default class OrderDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: ""
    }
  }
  deleteOrder=(id)=>{
    // console.log('hello'+id)
    axios.delete(`${durl}${id}`).then((res)=>console.log(res.data));
    window.location.reload();
    Swal.fire(
      'warning!',
      'you have deleted one!',
      'info'
    )
  }

  addMenu = (orders) => {
    console.log(orders)
    // console.log(this.props.orderData)
    if (orders) {

     if(orders.length){
      return orders.map((item) => {
        return (
          <div key={item._id}>

            <div className="card" style={{width: "18"}}>
              
                <div className="card-body">
                  <h5 className="card-title text-primary">{item.hotel_name}</h5>
                  <div className="card-text">
                    <div className='fs-4 mt-2'>{item.name}</div>
                    <div className='fs-4 mt-2'>{item.email}</div>
                    <div className='fs-4 mt-2'>RS.{item.cost}</div>
                    <div className='fs-4 mt-2'>{item.address}</div>
                    <div className='fs-4 mt-2'>{item.phone}</div>
                    <div className='fw-bold mt-2'>You have ordered menu-ids</div>
                    <div className='fs-4 text-success mt-2'>{item.menuItem+""}</div>
                    <button type="button" className="btn btn-danger btn-sm float-end" onClick={() => this.deleteOrder(item._id)}>Cancel</button>
                    
                  </div>
                
                </div>
            </div>
            

          </div>
        )
      })
    }else{
        return(
          <div className='text-center my-3'>
            <i className="bi bi-emoji-frown text-danger display-3 fw-bolder"></i>
            <div className='text-danger display-1 fw-bolder'>No Orders yet</div>

          </div>
          
        )
      }
    }else{
      return(
        <div className="alert alert-warning my-5 display-1 fw-bolder container rounded-2 shadow text-center" role="alert">
          <div><i className="bi bi-exclamation-triangle text-danger"></i></div>
        <div>
          Oops!
          </div>
          <div>
          Login first to view orders.
          </div>
        </div>

      )
    }
  }
  render() {
    return (
      <div>
        <div>{this.addMenu(this.props.orderData)}</div>

      </div>
    )
  }
}


