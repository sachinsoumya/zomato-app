import React, { Component } from 'react'
import Swal from 'sweetalert2'
const murl = "http://localhost:5000/menuItem";
const purl = "http://localhost:5000/placeorder";


export default class PlaceOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Math.floor(Math.random() * 1000),
      hotel_name: this.props.match.params.restName,
      name: sessionStorage.getItem('userinfo')  ? JSON.parse(sessionStorage.getItem('userinfo')).name : 'please provide name',
      email: sessionStorage.getItem('userinfo') ? JSON.parse(sessionStorage.getItem('userinfo')).email : 'please provide email',
      phone: sessionStorage.getItem('userinfo') ? JSON.parse(sessionStorage.getItem('userinfo')).phone : 'please provide your number',
      cost: 0,
      address: "please provide your address",
      menuItem: "",
      data: "",
    
    }
  }

  doAddress=(e)=>{
    this.setState({address:e.target.value});

  }

  loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  displayRazorpay = () => {
    
    let obj = this.state;
    let strItem = sessionStorage.getItem('menu').split(',');
    let numItem = strItem.map((item)=>{
      return parseInt(item);
    });
    obj.menuItem = numItem;

if(this.state.data.id){
    fetch(purl,{
      method:'POST',
      body:JSON.stringify(obj),
      headers:{
        accept:"application/json",
        "Content-Type":"application/json",
      }
    }).then((res)=>console.log(res))
    



     const options = {
          key: "rzp_test_802ODDmhsfzkk1",
          currency: this.state.data.currency,
          amount:this.state.data.amount,
          order_id: this.state.data.id,
          name: this.state.hotel_name,
          description: 'Thank you for nothing. Please give us some money',
          image: 'https://cdn.iconscout.com/icon/free/png-256/free-razorpay-1649771-1399875.png',
          handler: function (response) {
            alert(response.razorpay_payment_id)
            alert(response.razorpay_order_id)
            alert(response.razorpay_signature)
          },
          prefill: {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone,
          } 
          
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You can not order less than Rs.1!'
        })
      }
      
    }

        // )
        // .catch((error)=>console.log(error))
  
      // )
addItem = (data) => {
    if (data.length) {
      return data.map((item) => {
        return (
          <div key={item.menu_id}>
            <div className="card  w-100 my-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.menu_image} className="rounded-start h-100 w-100 object-fit-cover" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.menu_name}</h5>
                    <p className="card-text my-lg-5">{item.description}</p>
                    <p className="card-text my-lg-5">Type:{item.menu_type}</p>
                    <p className="card-text mt-lg-5">Price:Rs.{item.menu_price}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )
      })
    } else {
      return (
        <div className='text-danger h3'>Please select any to placeorder</div>
      )
    }
  }


  render() {
    if (sessionStorage.getItem('Itk') === null) {
      return (
        <div className="alert alert-warning my-5 display-1 fw-bolder container rounded-2 shadow text-center" role="alert">
          <div><i className="bi bi-exclamation-triangle text-danger"></i></div>
        <div>
          Oops!
          </div>
          <div>
          Login first to place an order
          </div>
        </div>
      )
    } else {
      return (
        <div>

          <div className="container">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <div className="h3">Order for hotel {this.state.hotel_name}</div>
              </div>
              <div className="panel-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label"> Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" value={this.state.name} />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone1" value={this.state.phone} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress1" onChange={this.doAddress} required/>

                  </div>

                  {this.addItem(this.state.menuItem)}
                  <div className='h1'>Total : Rs.{this.state.cost}</div>





                  <button type="button" className="btn btn-primary" onClick={this.displayRazorpay}>Place Order</button>
                </form>


              </div>

            </div>

          </div>

        </div>
      )
    }


  }

  componentDidMount() {
    let menuId = sessionStorage.getItem("menu");
    let orderId = [];
    menuId.split(",").map((item) => {
      orderId.push(parseInt(item));
      console.log(orderId)
      return "OK";
    });
    console.log(JSON.stringify(orderId));
    fetch(murl, {
      method: "POST",
      body: JSON.stringify(orderId),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return "SUCCESS";
        });
        this.setState({ menuItem: data, cost: totalPrice })

        this.loadScript('https://checkout.razorpay.com/v1/checkout.js')
        .then((result) => {
          if (!result) {
            alert('Razorpay SDK failed to load. Are you online?')
          }
        
        fetch("http://localhost:4200/razorpay", {
          method:"POST",
          body: JSON.stringify({cost:totalPrice}),
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((datas) => {
            this.setState({data:datas})
          })//then for razorpay
        .catch((error)=>console.log(error))
    
         })//then for loadScript
         .catch((error)=>console.log(error));
      })//then for murl
      .catch((error)=>console.log(error));

    }//for componentdid mount 
  }//for class
