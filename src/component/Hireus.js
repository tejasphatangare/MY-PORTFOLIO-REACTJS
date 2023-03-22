import React from 'react'

function Hireus() {
  const stoploading = (e) => {
    e.preventDefault();
    alert("Confirmation Send Successfully Wait For Replay..!")
  }
  return (
    <>
      <section className="contact" id="contact">
        <h4 className="heading">{" "}Hire <span> Us </span>{" "}</h4>
        <div className="row">
          <form action="" onSubmit={stoploading}>
            <div className="inputBox">
              <input type="text" placeholder="Enter Your Name Here" />
              <input type="email" placeholder="Enter Your Email Here" />
            </div>
            <input type="text" placeholder="Enter Your Subject Here" className="box" />
            <div className='heysam'>
              <label htmlFor="cars">Choose A Service :</label>
              <select id="cars">
                <option value="select">Select From Here</option>
                <option value="webdev">Web Development</option>
                <option value="Email">Email-Marketing</option>
                <option value="video">Video-Editing</option>
                <option value="react">Web-Dev With React</option>
              </select>
            </div>
            <textarea placeholder="Describe Your Service Here..!" name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" className="btn" value="Send Confirmation" />
          </form>
        </div>
      </section>
    </>
  )
}

export default Hireus
