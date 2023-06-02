import React, { Component } from 'react'
import Swal from 'sweetalert2'

const rurl = "https://loginapp-sc2c.onrender.com/api/auth/register"

export default class Register extends Component {
  constructor(props){
    super(props)
    this.state={
        name:"Sachin",
        email:"soumyasachin@gmail.com",
        phone:"9778348860",
        password:"123456"
    }
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit=()=>{
    fetch(rurl , {
        method:"POST",
        headers:{
            accept:"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(this.state),
    }).then(
        this.props.history.push('/login'));
        Swal.fire(
          'Great!',
          'Thank you for register!',
          'success'
        )

  }


  render() {
    return (
        <div className="container bg-light my-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div className="h3 text-danger">Register</div>
          </div>
          <div className="panel-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleInputName1" name="name" value={this.state.name} onChange={this.handleChange}  />
          
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange}  />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div class="mb-3">
                <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                <input type="phone" className="form-control" id="exampleInputPhone1"  name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPass1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPass1"  name="password" value={this.state.password} onChange={this.handleChange} />
              </div>


              
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>

          </div>
        </div>

      </div>
    )
  }
}
