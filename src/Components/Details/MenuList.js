import React, { Component } from 'react'
import './MenuList.css'

export default class MenuList extends Component {
  orderId = [];
  orderName=[]
  placeOrder = (id ,name) =>{
    this.orderName.push(name);
    this.orderId.push(id);
    this.props.finalOrder(this.orderId)
    console.log(this.orderId);
}

removeOrder = (id,name)=>{
    if(this.orderId.indexOf(id)> -1){
        this.orderId.splice(this.orderId.indexOf(id) ,1);
        this.orderName.splice(this.orderName.indexOf(name),1);
        console.log(this.orderId)
    }

   this.props.finalOrder(this.orderId);
}

renderCart = (orders)=>{
        if(orders){
            
            return orders.map((item , index)=>{
              return <span className="badge rounded-pill text-bg-danger" key={index}>{item}</span>;
        });
    }

    };

     renderMenu = ({menuData})=>{
        if(menuData){
            return menuData.map((item)=>{
                return (
                <>
                <tr>
                <th scope="row">{item.menu_id}</th>
                <td>
                  <img src={item.menu_image} alt={item.menu_name}  className='menuWidth rounded-1'/>
                    <div className='h6'>{item.menu_name}</div>
                </td>
                <td className='h6 fs-5'>Rs.{item.menu_price}</td>
               
                <td><button type='button' className='btn btn-success btn-sm' onClick={()=>{this.placeOrder(item.menu_id ,item.menu_name)}}><i className="bi bi-plus-square-fill text-dark" ></i></button><button type='button' className='btn btn-danger btn-sm ms-lg-1 mt-1 mt-lg-0' onClick={()=>{this.removeOrder(item.menu_id,item.menu_name)}}><i className="bi bi-dash-square-fill text-dark "></i></button></td>
              </tr>
              </>
              )
            })
        }
     }
    render() {
        return (
            <div>
                <div className="container-fluid border border-danger bg-light my-3">
                    <div className="h5">Item Added</div>
                    <div className="panel panel-default">
                        <div className="panel-body">{this.renderCart(this.orderName)}</div>
                    </div>
                </div>
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col fs-5">Mneu Name</th>
                            <th scope="col fs-5">Price</th>
                            <th scope="col fs-5">Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu(this.props)}
                    </tbody>
                </table>
            </div>
        )
    }
}
