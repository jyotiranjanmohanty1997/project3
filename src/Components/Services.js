import React from 'react'

const Services = () => {
  return (
    <>
        <section className='container mt-4 mb-4 text-center'>
            <h2 className='p-2 text-dark'>Our Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 p-2">
                <div className='col-md-3'>
                    <p><span className='service text-pink'>150+</span><br/>Projects</p>
                </div>
                <div className="col-md-3">
                    <p><span className='service text-pink'>80+</span><br/>Clients</p>
                </div>
                <div className="col-md-3">
                    <p><span className='service text-pink'>200+</span><br/>Projects</p>
                </div>
                <div className="col-md-3">
                    <p><span className='service text-pink'>97+</span><br/>Clients</p>
                </div>
                <div class="col">
                    <div class="card h-100 ">
                    <div class="card-body rounded bg-c1">
                        <i class="fa fa-code"></i>
                        <h3 class="card-title mb-3 mt-2">FRONTEND DEVELOPER</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body rounded bg-c1">
                        <i class="fa fa-code"></i>
                        <h3 class="card-title mb-3 mt-2">BACKEND DEVELOPER</h3>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body rounded bg-c1">
                        <i class="fa fa-code"></i>
                        <h3 class="card-title mb-3 mt-2">FULL-STACK DEVELOPER</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <h4 className='p-2'>Good Services Page Examples and Useful Tips for Creating Your own Page</h4>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services
