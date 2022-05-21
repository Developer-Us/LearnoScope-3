import React from 'react'
import "../Styles/HVideoCard.css"

export default function HVideoCard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9 mt-3">
                        <div className="card" id="card">
                            <div className="card-horizontal d-flex flex-row mx-3 shadow bg-body rounded">
                                <div className="img-square-wrapper" style={{ width: "22rem", height: "15rem" }}>
                                    <img className="" src="Images/hill.jpg" style={{ width: "22rem", height: "15rem" }} alt="Card image cap" />
                                </div>
                                <div className="card-body d-flex">
                                    <ul style={{ listStyleType: "none" }}>
                                        <li>
                                            <h4 className="card-title" id='Video_Title'>Card title</h4>
                                        </li>
                                        <li>
                                            <p className="card-text" id='Video_desc'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </li>
                                        <li>
                                            <p className="card-text my-1" id="views">2 views</p>
                                        </li>
                                        <li>
                                            <span className='d-flex align-items-center my-2'>
                                                <img className='rounded-circle me-4' id="Channel_pic" height="40" width="40" src='Images/demo.jpg' alt='channel pic' />
                                                <p className='card-text' id='Channel_Name' style={{ fontWeight: "bold" }}>Madhukrishna</p>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className='mx-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
