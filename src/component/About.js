import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class About extends Component {
  render(props) {
    return (
      <>
        <section className="about" id="about">
          <div className="row">
            <div className="image">
              <img className="tilt" src="tejas-2.jpeg" alt="profile" />
            </div>
            <div className="content">
              <h3>Hey..!<span> Phatangare Tejas </span> </h3>
              <p className="info">Hey Everyone i Am Tejas Phatangare & i Am A FrontEnd Web Developer & My Objectives Are To obtain a challenging position as a Front End Web Developer, utilizing my skills in HTML, CSS, JavaScript, and React Js to create visually appealing and user-friendly websites.</p>
              <div className="box-container">
                <div className="box">
                  <p> <span> age: </span> 21 </p>
                  <p> <span> gender: </span> Male </p>
                  <p> <span> phone : </span> +91-7038643242 </p>
                  <p> <span> Experience : </span> 2 Month </p>
                  <p> <span> language : </span> English,Hindi </p>
                  <p> <span> address : </span> Sangamner,Maharashtra</p>

                </div>
                <div className="box">
                  <p> <span> Education : </span> B.Tech-CSE </p>
                  <p> <span> Pro.language : </span>JavaScript</p>
                  <p> <span> Des.language : </span>HTML,CSS (TailWind,Bootstrap,Bulwa) </p>
                  <p> <span> Framework : </span>React</p>
                  <p> <span> email : </span> tejasphatangare2109@gmail.com </p>
                </div>
              </div>
              <Link to="https://drive.google.com/file/d/1wtec5wOhJMzaInzzWX7aQ3VkKz-oCYgx/view?usp=share_link" className="btn">Download Resume</Link>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default About
