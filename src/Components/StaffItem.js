import React, { Component } from 'react'


class StaffItem extends Component {

  render () {
    const { photo, name, job_title, description} = this.props.staff;

    return (

    
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <img src={photo} alt="Staff Member" className="img-fluid rounded-circle w-50 mb-3" />
                  <h3>{name}</h3>
                  <h5 className="text-muted">{job_title}</h5>
                  <p>{description}</p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
    )

  }
}


export default StaffItem