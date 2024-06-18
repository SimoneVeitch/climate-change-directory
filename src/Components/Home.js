import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../Images_climate_site/hero_image_background_removed.png"

function Home() {

  return (
    <div className="home-container">
   <div className="hero-copy">
      <h1>CLIMATE ACTION DIRECTORY</h1>
    <img src={heroImage} alt="Hero Image" className="hero-image" />
    <p>
    Are you ready to make a difference in the fight against climate change? Feeling overwhelmed about where to begin? Explore our Climate Action Directory! Discover a curated list of organisations actively combating the climate crisis, conveniently categorised for your ease.
    From supporting initiatives to getting directly involved, there's a place for everyone.<br /><br />
    Plus, don't miss out on our tips for simple, everyday actions you can take to become a true climate warrior!<br /><br />
    Discover our directory by clicking below
</p>
    </div>
     <Link to="/directorylist" className="link">
        <button id="hero-button" onClick={() => console.log("Clicked!")}>→</button>
        </Link>
    </div>
  );
}

export default Home;