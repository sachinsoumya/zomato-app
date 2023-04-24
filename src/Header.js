import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="d-flex flex-row-reverse p-3 bg-danger ">
                    <Link to='/register'><button type="button" className="btn btn-light ownBtn  btn-sm   me-md-5 me-2">Create an account</button></Link>
                    <Link to='/login'><button type="button" className="btn btn-success ownBtn btn-sm mx-3">Log in</button></Link>
                </div>

            </div>
        )
    }
}
