import React from "react";

function Post({ obj }) {
  return (
    <div className="post">
      <div className="post-head">
        <div className="post-head-txt">
          <h5>{obj.name}</h5>
          <p>{obj.location}</p>
        </div>
        <div className="dot">
          <img src="./images/more_icon.svg" alt="..." />
        </div>
      </div>
      <div className="post-image">
        <img src={obj.image} alt="post" />
      </div>
      <div className="post-details">
        <div className="detail-icons">
          <div className="like-share">
            <img src="./images/heart.png" alt="like" />
            <img src="./images/share.png" alt="share" />
          </div>
          <div className="date">
            <p>{obj.date}</p>
          </div>
        </div>
        <div className="likes">
          <p>{obj.like + " likes"}</p>
        </div>
        <div className="description">
          <h3>{obj.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
