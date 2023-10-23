import React from "react";
import "./index.css";
import { Link, Router, useNavigate } from "react-router-dom";
import wp from "../../images/travel.mp4";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
const Home = (e) => {
  const navigate = useNavigate();

  navigate("/Homepage");

  return (
    //         <div className="App">
    //         {/* <video autoPlay loop muted>
    //             <source src={bgImage} type="video/mp4" />
    //         </video>  */}

    //         <div className='container maint-cnt'>

    //         {/* <div className="header-nav">
    //             <span className="mytext1"> Unique Travels </span>
    //         </div>

    //         <div className="">
    //         </div>

    //         <div className="container">
    //             <div className="slogan">

    //                 <h1>
    //                     <span>always Travel</span>

    //                     <div className="message">
    //                         <div className="word1">Uniquely</div>
    //                         <div className="word2">Safely</div>
    //                         <div className="word3">with a smile</div>
    //                     </div>
    //                 </h1>
    //             </div> */}

    //             <a href="/HomePage" onClick={e => Home(e)} className="mainBtn">
    //                 <svg width="277" height="62">
    //                     <defs>
    //                         <linearGradient id="grad1">
    //                             <stop offset="0%" stopColor="#FF8282" />
    //                             <stop offset="100%" stopColor="#E178ED" />
    //                         </linearGradient>
    //                     </defs>
    //                     <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50" ></rect>
    //                 </svg>
    //                 <span>Get Started!</span>
    //             </a>
    //         </div>

    // </div>

    // )

    // }
    <div className="container maint-cnt">
      <div className="header-nav">
        <span className="mytext1"> BusJet </span>
      </div>

      <div className=""></div>

      <div className="container">
        <div className="slogan">
          <h1>
            <span>Bus Travel Made Simple</span>

            <div className="message">
              <div className="word1">Go</div>
              <div className="word2">Explore</div>
              <div className="word3">Experience</div>
            </div>
          </h1>
        </div>

        <a href="/HomePage" onClick={(e) => Home(e)} className="mainBtn">
          <svg width="277" height="62">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stopColor="#FF8282" />
                <stop offset="100%" stopColor="#E178ED" />
              </linearGradient>
            </defs>
            <rect
              x="5"
              y="5"
              rx="25"
              fill="none"
              stroke="url(#grad1)"
              width="266"
              height="50"
            ></rect>
          </svg>
          <span>Get Started!</span>
        </a>
      </div>
    </div>
  );
};
export default Home;
