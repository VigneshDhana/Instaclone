import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="head">
        <div className="icon">
          <img src="./images/icon.svg" alt="icon" />
          <p>Instaclone</p>
        </div>
        <div className="none"></div>
        <div className="cam-icon">
          <Link to="/newPost">
            <img src="./images/camera.png" alt="New Post" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
