import React from "react";
import "../Style/Home.css";
import left from "../Gallery/left.png";
import mid from "../Gallery/mid.png";
import right from "../Gallery/right.png";
import apple from "../Gallery/apple.png";
import microsoft from "../Gallery/microsoft.png";
import google from "../Gallery/google.png";
import skype from "../Gallery/skype.png";
import hp from "../Gallery/hp.png";

const Home = () => {
  return (
    <div>
      <section id="aboutSection">
        <h1>Dance Website</h1>
        <p>This is a dance website made in react using pure css</p>
      </section>
      <section id="serviceSection">
        <h3>Our Services</h3>
        <div id="serviceCards">
          <div className="card">
            <h5>Hard Work</h5>
            <div className="card-content">
              <img src={left} alt="..." />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                fuga iure repudiandae quasi rerum quam eius culpa assumenda
                expedita magni!
              </p>
            </div>
          </div>
          <div className="card">
            <h5>Patience</h5>
            <div className="card-content">
              <img src={mid} alt="..." />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                fuga iure repudiandae quasi rerum quam eius culpa assumenda
                expedita magni!
              </p>
            </div>
          </div>
          <div className="card">
            <h5>Perseverence</h5>
            <div className="card-content">
              <img src={right} alt="..." />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                fuga iure repudiandae quasi rerum quam eius culpa assumenda
                expedita magni!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sponserSection">
        <h3>Our Sponsers</h3>
        <div id="sponsers">
          <div className="sponser">
            <img src={apple} alt="..." />
          </div>
          <div className="sponser">
            <img src={microsoft} alt="..." />
          </div>
          <div className="sponser">
            <img src={google} alt="..." />
          </div>
          <div className="sponser">
            <img src={skype} alt="..." />
          </div>
          <div className="sponser">
            <img src={hp} alt="..." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
