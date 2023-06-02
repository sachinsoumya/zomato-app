import React, { Component } from 'react'
import Swal from 'sweetalert2'

const lurl = "http://localhost:4000/api/auth/login"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "soumyasachin@gmail.com",
            password: "123456",
            message: ""
        }

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handleSubmit = () => {
        fetch(lurl, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state),

        }).then((res) => res.json()).then((data) => {
            if (data.auth === false) {
                this.setState({ message: data.token })
            } else {
                sessionStorage.setItem("Itk", data.token);
                this.props.history.push('/');
                window.location.reload();
                Swal.fire(
                    'Hurry!',
                    'You successfully loggedin!',
                    'success'
                  )
                
                
            }


        })

    }

    render() {
        return (
            <div className="container bg-light my-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="h3 text-danger">Login</div>
                    </div>
                    <div className="panel-body">
                        <div className="container my-5 bg-light">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPass1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPass1" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            {this.state.message ?<div className='h1 text-danger'>{this.state.message}</div>:null}

                        </div>


                    </div>
                </div>
            </div>








        )
    }
}
