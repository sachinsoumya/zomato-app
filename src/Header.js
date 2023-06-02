import React, { Component } from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Swal from 'sweetalert2'
const url = "https://loginapp-sc2c.onrender.com/api/auth/userInfo"

class Header extends Component {
    constructor() {
        super()
        this.state = {
            userData: ""

        }
    }

    handleLogout = () => {
        sessionStorage.setItem('status', 'logout');
        sessionStorage.setItem('userinfo', "");
        sessionStorage.removeItem('Itk');
        this.setState({ userData: "" });
        this.props.history.push("/");
        Swal.fire(
            'Oops!',
            'you have logged out!',
            'info'
          )
    }

    conditionalHeader = () => {
        if (this.state.userData.name) {
            let data = this.state.userData;
            sessionStorage.setItem('status', 'loggedin');
            sessionStorage.setItem('userinfo', JSON.stringify(data));
            return (
                <>

                    <Link to='/register'><button type="button" className="btn btn-light ownBtn  btn-sm   me-md-5 me-2">Hii {data.name}</button></Link>
                    <Link to='/login'><button type="button" className="btn btn-success ownBtn btn-sm mx-3" onClick={this.handleLogout}>Log out</button></Link>


                </>
            )
        } else {
            return (
                <>

                    <Link to='/register'><button type="button" className="btn btn-light ownBtn  btn-sm   me-md-5 me-2">Create an account</button></Link>
                    <Link to='/login'><button type="button" className="btn btn-success ownBtn btn-sm mx-3">Log in</button></Link>


                </>
            )

        }


    }
    render() {


        return (
            <div>
                <div className="d-flex flex-row-reverse p-3 bg-danger">
                    
                    {this.conditionalHeader()}
                </div>

            </div>
        )


    }

    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('Itk')
            }
        })
            .then((res) => res.json())
            .then((data) => this.setState({ userData: data }));
    }
}
export default withRouter(Header);
