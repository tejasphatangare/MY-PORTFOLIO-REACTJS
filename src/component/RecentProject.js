import React from 'react'
import {
    Link
} from "react-router-dom";

function RecentProject() {
    return (
        <>
            <div className='container bg-dark'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-24 h-full bg-green-500"></div>
                            </div>
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 text-light">Here Is Tejas Recent Projects : </h1>
                                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-justify">Here Is The Some FrontEnd Development Projects That Are Recently Done By Tejas Phatangare For varuious Clients</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="Pro-1.png" />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-light">Tech-Orbit-Front End Website</h2>
                                <p className="text-base leading-relaxed mt-2 text-light text-justify">Tech Orbit Coaching Academy is an online platform that provides coaching and training to individuals who are interested in pursuing a career in the technology industry</p>
                                <Link className="text-green-500 inline-flex items-center mt-3" to="https://tejasphatangare.github.io/Tech-Orbit/" target="_blank" >Show Project
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="Pro-2.png" />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-light ">PG-Life-A Small Help To Students</h2>
                                <p className="text-base leading-relaxed mt-2 text-light text-justify">PG Life Room Searcher is a website designed to help individuals find suitable accommodation options for their needs. </p>
                                <Link className="text-green-500 inline-flex items-center mt-3" to="https://tejasphatangare.github.io/PG-LIFE/" target="_blank">Show Project
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="Pro-3.png" />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-light text-violet-600">Portfolio-Tejas Portfolio</h2>
                                <p className="text-base leading-relaxed mt-2 text-light text-justify">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                                <Link className="text-green-500 inline-flex items-center mt-3" to="/" target="_blank" >Show Project
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RecentProject
