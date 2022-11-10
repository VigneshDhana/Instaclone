import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <body>
      <div className="land-img">
        <img src="./images/lens2.png" alt="lens" />
      </div>
      <div className="content">
        <div className="text">
          <h1>10x Team 04</h1>
          <Link to="instaclone">
            <button>Enter</button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Landing;
