import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer bg-danger mt-4">
          <div className="h5 text-center">
            Copyright Developer 2023. All Rights Reserved
          </div>
          <div className="d-flex justify-content-evenly">
            <div>
              <div>About</div>
              <div>Orders</div>
            </div>
            <div>
              <div>About</div>
              <div>Orders</div>

            </div>
            <div>
              <div>About</div>
              <div>Orders</div>

            </div>

          </div>
          <div className="d-flex  justify-content-center">
            <div>
              <i className="bi bi-facebook fs-2 "></i>
            </div>
            <div>
              <i className="bi bi-instagram fs-2 ms-3 "></i>
            </div>
            <div>
              <i className="bi bi-youtube fs-2 ms-3"></i>

            </div>

          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}
