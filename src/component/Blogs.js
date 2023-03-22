import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

export class Blogs extends Component {
    render() {
        return (
            <>
                <section className="portfolio" id="portfolio">
                    <h1 className="heading"> <span> my </span> Blogs </h1>
                    <div className="box-container">

                        <div className="box tilt">
                            <img src="Blog1.jpg" alt="" />
                            <div className="content">
                                <Link to="https://tejasphatangare-webdevelopment.blogspot.com/2023/03/web-development.html" className="btn">learn more</Link>
                            </div>
                        </div>

                        <div className="box tilt">
                            <img src="Blog2.jpg" alt="" />
                            <div className="content">
                                <Link to="https://tejasphatangare-webdevelopment.blogspot.com/2023/03/the-future-of-react-in-web-development.html" className="btn">learn more</Link>
                            </div>
                        </div>

                        <div className="box tilt">
                            <img src="Blog3.jpg" alt="" />
                            <div className="content">
                                <Link to="https://tejasphatangare-webdevelopment.blogspot.com/2023/03/the-front-end-developer.html" className="btn">learn more</Link>
                            </div>
                        </div>

                        <div className="box tilt">
                            <img src="Blog4.jpg" alt="" />
                            <div className="content">
                                <Link to="/" className="btn">learn more</Link>
                            </div>
                        </div>

                        <div className="box tilt">
                            <img src="Blog5.png" alt="" />
                            <div className="content">
                                <Link to="https://tejasphatangare-webdevelopment.blogspot.com/2023/03/tailwind-or-bootstrap.html" className="btn">learn more</Link>
                            </div>
                        </div>

                        <div className="box tilt">
                            <img src="Blog6.jpg" alt="" />
                            <div className="content">
                                <Link to="/" className="btn">learn more</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Blogs
