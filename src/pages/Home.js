import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/droidbanner.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Droidverse Labs </h1>
        <p> We Teach, Innovate, Research and do Social Media Marketing </p>
        <Link to="/menu">
          <button> Explore Our Services Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
