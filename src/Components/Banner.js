import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <>
     <section className="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull mb-2" id="b1">
      <div className="container">
        <div className="row justify-content-md-left">
          <div className="col-12 col-md-11 col-lg-9 col-lg-7 col-xl-6 text-white mt-5">
            <h5 className="display-3 mt-5"><strong>Start Your Story With Olavera</strong></h5>
            <div className="d-grid gap-2 d-sm-flex mt-3">
              <Link
                to="/Contact"
                type="button"
                className="btn btn-sm btn-danger rounded-pill p-2"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Banner
