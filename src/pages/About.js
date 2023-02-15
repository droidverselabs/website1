import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We at droidverse labs work on multiple client requirements and offer our services in the field of teaching , research and innovation in tech and non tech fields and also serve as a digital marketing expert. 
        </p>
        <p>
        <h2>Digital Marketing</h2> We focus on building strategies that help our clients to gain maximum social media reach and engagements on their posts, reels and videoes. 
        Currently we offer services for all social media platforms including Youtube. We have achieved freat results as our clients speak of it themselves. Check testimony of our clients.
        </p>
      </div>
    </div>
  );
}

export default About;
