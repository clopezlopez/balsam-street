import React from 'react'

function FindUs () {
  return (
    <section className="contact-section bg-black my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-location-arrow fa-2x text-primary mb-3" />
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="medium text-black-50">324 Balsam St, Kingsford, MI 49802</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope fa-2x text-primary mb-3" />
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="medium text-black-50">hello@yourdomain.com</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt fa-2x text-primary mb-3" />
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="medium text-black-50">+1 (555) 902-8832</div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center my-4">
          <a className="mx-3" href="https://facebook.com" target="_blank" rel="noreferrer" ><i className="fab fa-3x fa-facebook-square" /></a>
        </div>
      </div>
    </section>

  )
}

export default FindUs