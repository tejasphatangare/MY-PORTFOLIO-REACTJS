import React from 'react'
import {
  Link
} from "react-router-dom";

function Membership() {
  const getmembership = () => {
    // alert("clicked");
    <form class="plan-chooser">
      <div class="header">
        <span class="title">Choose your plan</span>
        <p class="desc">Amet minim mollit non deserunt ullamco est sit .</p>
      </div>
      <div class="plan-option">
        <input value="free" id="free" name="plan" type="radio" />
        <label for="free">
          <div class="plan-info">
            <span class="plan-cost">$0</span>
            <span class="plan-name">Try Free</span>
          </div>
        </label>
      </div>
      <div class="plan-option">
        <input value="monthly" id="monthly" name="plan" type="radio" />
        <label for="monthly">
          <div class="plan-info">
            <span class="plan-cost">$29/month</span>
            <span class="plan-name">Monthly plan</span>
          </div>
        </label>
      </div>
      <div class="plan-option">
        <input value="annual" id="annual" name="plan" type="radio" />
        <label htmlFor="annual">
          <div class="plan-info">
            <span class="plan-cost">$19/month</span>
            <span class="plan-name">$228 billed in a year</span>
          </div>
          <span class="reduction"> Save 20% </span>
        </label>
      </div>
      <Link to="/" title="" class="choose-btn"> Start </Link>
    </form>

  }
  return (
    <>
      <div className="container bg-dark  border border-primary rounded">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="Pro-1.png" className="d-block w-70" alt="Project1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-dark'>Educational Organization Project</h5>
                <p className='text-dark'>Tech Orbit</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="Pro-2.png" className="d-block w-70" alt="Project2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-dark'>A Rooms Searcher Site For Students</h5>
                <p className='text-dark'>PG-Life</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="Pro-3.png" className="d-block w-70" alt="Project3" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-dark'>My Personal Portfolio</h5>
                <p className='text-dark'>Tejas Phatangare Portfolio</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="Pro-4.png" className="d-block w-70" alt="Project3" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-dark'>Pizza Shop Landing Page</h5>
                <p className='text-dark'>Pizza-HUT</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container d-flex justify-content-center'>
        <button onClick={getmembership()} type="button" className="btn btn-outline-danger">Liked It..! Get Membership</button>
      </div>
    </>
  )
}

export default Membership
