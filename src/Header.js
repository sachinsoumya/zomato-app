import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="d-flex flex-row-reverse p-3 bg-danger ">
                    <button type="button" className="btn btn-light ownBtn  btn-sm   me-md-5 me-2">Create an account</button>
                    <button type="button" className="btn btn-success ownBtn btn-sm mx-3">Log in</button>
                </div>

            </div>
        )
    }
}
