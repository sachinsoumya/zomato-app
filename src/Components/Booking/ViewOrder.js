import React, { Component } from 'react'
import axios from "axios";
import OrderDisplay from './OrderDisplay';
let vurl = "https://resturantapi-okl1.onrender.com/orders?email="



export default class ViewOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: "",

        }
    }
    render() {
        // console.log(this.state.orders)
        return (
            <div>
                <div className='h5 text-danger'>My Orders</div>
                <OrderDisplay orderData={this.state.orders} />
            </div>
        )
    }


    componentDidMount() {
        if(sessionStorage.getItem('userinfo')){
            let userEmail = JSON.parse(sessionStorage.getItem('userinfo')).email
            axios.get(`${vurl}${userEmail}`).then((res) => {
            this.setState({ orders: res.data })
        })
       
       }else{
            this.setState({ orders:""})

        }
        

    }



}
