import React, { Component } from 'react'
const murl = "http://localhost:5000/menuItem";
const purl = "http://localhost:5000/placeorder";


export default class PlaceOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Math.floor(Math.random() * 1000),
      hotel_name: this.props.match.params.restName,
      name: "sachin",
      email: "sachin@gmail.com",
      phone: 97786554490,
      cost: 0,
      address: "plot 34 ,Delhi",
      menuItem: ""

    }
  }


  renderItem = (data) => {
    if (data) {
      data.map((item) => {
        return (
          <h2>{item.name}</h2>
        )
      })
    }
  }


  render() {
    if (sessionStorage.getItem('Itk') === null) {
      return (
        <div class="alert alert-warning h1 my-5 display-1 container" role="alert">
          Login first to place order
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
                    <input type="text" className="form-control" id="exampleInputName1" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress1" />

                  </div>

                  {this.renderItem(this.state.menuItem)}



                  <button type="submit" className="btn btn-primary">Submit</button>
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
      orderId.push(item);
      return "OK";
    })
    fetch(murl, {
      method: "POST",
      body: JSON.stringify(orderId),
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      }
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

      });

  }
}
