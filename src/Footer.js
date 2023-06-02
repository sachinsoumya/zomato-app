import React, { Component } from 'react'
import { Link} from 'react-router-dom/cjs/react-router-dom.min'

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
              <Link to='/'><div className='text-dark'>Home</div></Link>
              <Link to='/vieworder'><div className='text-dark'>My Orders<i className="bi bi-cart-check-fill"></i></div></Link>
            </div>
            <div>
              <div>About Us</div>
              <div>Contact Us</div>

            </div>
            <div>
              <div>Website</div>
              <div>Help</div>

            </div>

          </div>
          <div className="d-flex  justify-content-center">
            <div>
              <a href='https://www.facebook.com/your-page-url' target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook fs-2 text-dark"></i></a>
            </div>
            <div>
            <a href="https://www.instagram.com/sachinsoumya/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram fs-2 ms-3 text-dark"></i></a>
            </div>
            <div>
             <a href="https://www.youtube.com/@soumyasachinpanda2280/featured" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube fs-2 ms-3 text-dark"></i></a> 

            </div>

          </div>
          <div className='text-center'>
            <div>Dev by-@sachinsoumya</div>
            <div>Under guidence-@Sangeetha Shanmugam</div>
          </div>
        </div>
      </div>
    )
  }
}
