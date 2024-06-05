import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../Asset 1.png"

function Home() {

  return (
    <div className="home-container">
   <div className="hero-copy">
      <h1>CLIMATE ACTION DIRECTORY</h1>
    <img src={heroImage} alt="Hero Image" className="hero-image" />
    <p>Ready to make a difference in the fight against climate change? Feeling overwhelmed about where to begin? Explore our Climate Action Directory! Discover a curated list of organizations actively combating the climate crisis, conveniently categorized for your ease. From supporting initiatives to getting directly involved, there's a place for everyone. Plus, don't miss out on our tips for simple, everyday actions you can take to become a true climate warrior!</p>
    </div>
     <Link to="/directorylist" className="link">
        <button id="hero-button" onClick={() => console.log("Clicked!")}>→</button>
        </Link>
    </div>
  );
}

export default Home;