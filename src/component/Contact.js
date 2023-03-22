import React from 'react'

function Contact() {
  const stoploading=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <div className='container bg-success'>
        <form onSubmit={stoploading}>
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header">
                  <div className="screen-header-left">
                    <div className="screen-header-button close"></div>
                    <div className="screen-header-button maximize"></div>
                    <div className="screen-header-button minimize"></div>
                  </div>
                  <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>CONTACT</span>
                      <span>US</span>
                    </div>
                  </div>
                  <div className="screen-body-item">
                    <div className="app-form">
                      <div className="app-form-group">
                        <input className="app-form-control" placeholder="NAME" required />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control" type="email" placeholder="EMAIL" />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control" placeholder="CONTACT NO" />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" placeholder="Enter Your Message Here" />
                      </div>
                      <div className="app-form-group buttons">
                        <input className="app-form-button" type="Reset" /> &nbsp;
                        <input className="app-form-button" type="submit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
