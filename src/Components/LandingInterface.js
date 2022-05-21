import React from 'react';
import "../Styles/LandingInterface.css";
import { Link } from 'react-router-dom';
import ApplicationModeContext from '../Context/ApplicationMode/ApplicationModeContext';
import { useEffect } from 'react';
import { useContext } from 'react';

export default function LandingInterface() {
  const applicationMode = useContext(ApplicationModeContext);
  useEffect(() => {
  if (applicationMode.mode === "dark")
  {
    document.getElementById("features_title").style.color = "Lightblue";
    document.getElementById("Team_title").style.color = "Lightblue";
    document.getElementById("team").style.backgroundColor = "#282828";
  }
  else
  {
    document.getElementById("features_title").style.color = "#010483";
    document.getElementById("Team_title").style.color = "#010483";
    document.getElementById("team").style.backgroundColor = "white";
  }
})

  return (
    <>
      {/* Hero Section */}
      <section id="hero" style={{ background: 'url("../../assets/img/hero-bg.jpg")', zIndex: "1" }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 d-flex flex-column my-auto">
              <h1>An Educational Video Sharing Platform</h1>
              <h2>Makes Student Teacher Interaction Easier</h2>
              <div className="text-center text-lg-start">
                <Link to="/login" style={{cursor:"pointer"}}>
                  <div className="btn-get-started scrollto">
                    Login
                  </div>
                </Link>

              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos-delay="300">
              <img src="Images/learnoLaptop.png" className="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>

        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>
      {/* End Hero */}

{/* PROBLEM IN RESPONSIVENESS , HENCE COMMENTED FOR NOW 
YOU CAN SOLVE THE RESPONSIVENESS PROBLEM AND UNCOMMENT IT :)
*/}
      <main id="main">
        {/* Features Section */}
        
        <section id="features" className="features mx-5 d-flex">
          <div className="">

            <div className="section-title">
              <h2>Features</h2>
              <p id="features_title">Objectives</p>
            </div>

            <div className="w-100 d-flex justify-content-evenly">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="icon-box" data-aos-delay="50">
                    <i className="ri-video-line" style={{ color: "#ffbb2c" }}></i>
                    <h3><a href="/">Video Sharing</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box" data-aos-delay="100">
                    <i className="ri-group-line" style={{ color: "#5578ff" }}></i>
                    <h3><a href="/">Discussion Forum</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box" data-aos-delay="150">
                    <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                    <h3><a href="/">Notes Sharing</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                  <div className="icon-box" data-aos-delay="200">
                    <i className="ri-book-line" style={{ color: "#e361ff" }}></i>
                    <h3><a href="/">Quick Notes</a></h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* End Features Section */}

{/* <!-- ======= Team Section ======= --> */}
<section id="team" className="team">
  <div className="container">

    <div className="section-title">
      <h2>Team</h2>
      <p id="Team_title">Team LearnoScope</p>
    </div>

    <div className="row d-flex justify-content-center">

      <div className="col-lg-3 col-md-6  my-3">
        <div className="member" data-aos-delay="100">
          <div className="pic"><img src="Images/Madhukrishna.png"  height="306" width="306"  className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Madhukrishna Nipankar</h4>
            <span>Full Stack Developer</span>
            <div className="social">
              <a href="https://www.instagram.com/lets__growtogether/?hl=en" target="blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/madhukrishna-nipankar-666771213/" target="blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 my-3">
        <div className="member"data-aos-delay="100">
          <div className="pic"><img src="Images/Vedant.png" height="306" width="306" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Vedant Kulkarni</h4>
            <span>Front End Developer/Software Tester</span>
            <div className="social">
              <a href="https://instagram.com/_.vedantt.fy?igshid=YmMyMTA2M2Y/" target="blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/vedant-kulkarni-406798213/" target="blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-3 col-md-6 my-3">
        <div className="member" data-aos-delay="200">
          <div className="pic"><img src="Images/Amit.png"  height="306" width="306" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Amit Sali</h4>
            <span>Front End Developer</span>
            <div className="social">
              <a href="https://www.instagram.com/amit_sali/?hl=en" target="blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/amit-sali-52a307193" target="blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6  my-3">
        <div className="member" data-aos-delay="300">
          <div className="pic"><img src="Images/Yadhnesh.png" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Yadhnesh Gangurde</h4>
            <span>Front End Developer</span>
            <div className="social">
              <a href="https://www.linkedin.com/in/yadhnesh-gangurde-7842251b8" target="blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6  my-3">
        <div className="member" data-aos-delay="400">
          <div className="pic"><img src="Images/Kiran.png" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Kiran Dahake</h4>
            <span>Backend Developer</span>
            <div className="social">
              <a href="https://instagram.com/sam_pamru?igshid=YmMyMTA2M2Y=" target="blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/kiran-dahake-82548720a" target="blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
{/*<!-- End Team Section --> */}

      </main>

    </>
  )
}
